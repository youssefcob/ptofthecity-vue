<script setup lang="ts">
import { onMounted, reactive, ref, type Ref } from 'vue';
import Calender from '../sharedComponents/Calender.vue';
import DropDownInputField from '../sharedComponents/DropDownInputField.vue';
import InputField from '../sharedComponents/InputField.vue';
import RadioInputField from '../sharedComponents/RadioInputField.vue';
import validation from '@/mixins/Validation';
import { useSnackbar } from "vue3-snackbar";
import Http from '@/mixins/Http';
import type { Schedule } from '@/interfaces/content';
import { recaptcha } from '@/components/Recaptcha';
import Loading from '../sharedComponents/Loading.vue';
import type { Service } from '../HomePage/servicesSection/Services';
import moment from 'moment-timezone';
import { getServices, servicesInitial as services } from '../HomePage/servicesSection/Services';
import { getClinics, clinics } from '../HomePage/clinicsSection/Clinics';
import { insurances, getInsurances, insurancesArr } from '../HomePage/insuranceSection/Insurances';
import Modal from '../sharedComponents/modal.vue';

const isLoading: Ref<boolean> = ref(false);

const props = defineProps({
    clinicName: String,
    serviceName: String
})

const schedule: Ref<Schedule | undefined> = ref(undefined);
// const services: Ref<Service[]> = ref([]);
const servicesList: Ref<string[]> = ref([]);
const insurancesList: Ref<string[]> = ref([]);



const snackbar = useSnackbar();

const form = reactive({
    location: '',
    firstName: '',
    lastName: '',
    returning: 'No',
    dob: '',
    gender: '',
    phone: '',
    email: '',
    payment: 'Insurance',
    insurance: '',
    memberId: '',
    service: '',
    pain: '',
    date: '',
    time: '',
    date_of_accident: '',
    case_number: '',
    lawyer_name: '',
    lawyer_phone_number: '',

})
let Httplocations: { name: string, id: number, schedule: Schedule, services: Service[] }[] = [];
const locations: Ref<string[]> = ref([]);
const location = '';
let cords = ref({
    lat: 0,
    long: 0
})

const locationComp: Ref<InstanceType<typeof DropDownInputField> | null> = ref(null);
const serviceComp: Ref<InstanceType<typeof DropDownInputField> | null> = ref(null);

const getServicesNames = () => {
    let s = services.value.map((service) => service.title);
    servicesList.value = s;
    formValidation.service.rules[1] = { dropdown: s };
}

const getclinicNames = () => {
    let reducedClinics = [];
    for (const key in clinics) {
        if (clinics.hasOwnProperty(key)) {
            const value = clinics[key];
            reducedClinics.push(...value);
        }
    }
    Httplocations = reducedClinics;
}

const getInsurancesNames = () => {
    let s = insurances.value.map((insurance) => insurance.title);
    insurancesList.value = s;
    formValidation.insurance.rules[1] = { dropdown: insurancesList.value };
}

const updateService = (e: string) => {
    form.service = e;
    locationComp.value?.clear();


    let c = services.value.find((service) => service.title === e)?.clinics;
    if (c) {
        locations.value = c.map((clinic) => clinic.name);
        formValidation.location.rules[1] = { dropdown: locations.value };
    }
}


const updateLocation = (e: string) => {
    form.location = e;
    schedule.value = getSchedule();

}

// const getLocations = async () => {
//     let data = await Http.get('clinic/names');
//     console.log(data);
//     data = sortLocations(data)
//     Httplocations = data;
//     services.value = data.services;
//     locations.value = data.map((location: { name: string }) => location.name);
//     formValidation.location.rules[1] = { dropdown: locations.value };

// }
const getSchedule = () => {

    let clinic = Httplocations.find((location) => location.name === form.location);
    if (!clinic) return;
    return clinic.schedule;
}






const sortLocations = (data: any) => {
    if (!cords.value.lat || !cords.value.long) return data;
    data.forEach((location: { name: string, lat: string, long: string, distance?: number }) => {
        location.distance = getDistance(cords.value.lat, cords.value.long, parseFloat(location.lat), parseFloat(location.long));
    });
    data.sort((a: { distance: number }, b: { distance: number }) => a.distance - b.distance);
    return data;
}

const getDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const toRad = (value: number) => value * Math.PI / 180;
    const R = 6371; // Radius of the Earth in km
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in km
}



const getLocationAndServiceFromProp = () => {

    if (props.serviceName) {
        serviceComp.value?.defaultValue(props.serviceName);
        if (props.clinicName) {
            locationComp.value?.defaultValue(props.clinicName);
        }
    } else {
        serviceComp.value?.defaultValue('Initial Check-up');
    }

}

onMounted(async () => {
    if (!props.serviceName) {
        serviceComp.value?.defaultValue('Initial Check-up');
    }
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            cords.value.lat = position.coords.latitude
            cords.value.long = position.coords.longitude
        })
    }
    await getServices()
    getServicesNames()
    await getClinics()
    getclinicNames()
    await getInsurances()
    getInsurancesNames()
    getLocationAndServiceFromProp()

})






let Availablehours: Ref<string[]> = ref([])

const formValidation = {
    location: {
        rules: ['required', { dropdown: locations.value }],
        message: {
            required: 'Please select a location',
            dropdown: 'Please select a valid location'
        }
    },
    returning: {
        rules: [],
        message: {
            required: 'Please select if you are a returning patient'
        }
    },
    firstName: {
        rules: ['required', 'letters:only'],
        message: {
            required: 'First Name Is Required',
            letters: 'Name Cannot Contain Numbers Or Special Characters'
        }
    },
    lastName: {
        rules: ['required', 'letters:only'],
        message: {
            required: 'Last Name Is Required',
            letters: 'Name Cannot Contain Numbers Or Special Characters'
        }
    },
    dob: {
        rules: ['required', 'date:past', 'min:10'],
        message: {
            required: 'Date Of Birth Is Required',
            date: 'Date Of Birth Must be Valid And In The Past',
            min: 'Date Of Birth Must Be In The Format MM-DD-YYYY'
        }

    },
    service: {
        rules: ['required', { dropdown: servicesList.value }],
        message: {
            required: 'Please select a service',
            dropdown: 'Please select a valid service'
        }
    },
    gender: {
        rules: ['required', { dropdown: ['Male', 'Female', 'Other'] }],

    },
    phone: {
        rules: ['required', 'min:14'],

    },
    email: {
        rules: ['required', 'email']
    },
    payment: {
        rules: ['required', { dropdown: ['Insurance', 'Self Pay', 'Workers Compensation'] }],

    },
    insurance: {
        rules: ['required:if:payment==Insurance&returning==No', { dropdown: insurancesList.value }],

    },
    memberId: {
        rules: ['required:if:payment==Insurance&returning==No'],
    },
    pain: {
    },
    date: {
        rules: ['required'],

    },
    time: {
        rules: ['required', { dropdown: Availablehours.value }],
    },

    date_of_accident: {
        rules: ['required:if:payment==Workers Compensation'],
        message: {
            required: 'Date of accident is required',
        }

    },
    case_number: {
        rules: ['required:if:payment==Workers Compensation'],
        message: {
            required: 'Case number is required',
        }

    },
    lawyer_name: {
        rules: ['required:if:payment==Workers Compensation'],
        message: {
            required: 'Lawyer name is required',
        }

    },
    lawyer_phone_number: {
        rules: ['required:if:payment==Workers Compensation'],
        message: {
            required: 'Lawyer phone number is required',
        }

    },

}

const formErrors = reactive({
    location: false,
    firstName: false,
    lastName: false,
    dob: false,
    gender: false,
    phone: false,
    service: false,
    email: false,
    payment: false,
    insurance: false,
    memberId: false,
    pain: false,
    date: false,
    time: false,
    returning: false,
    date_of_accident: false,
    case_number: false,
    lawyer_name: false,
    lawyer_phone_number: false,
});

const validate = () => {
    let v = new validation(formValidation, form)
    v.validate()
    let errors = v.errors;
    if (errors.length) {
        let errorsArr = Object.values(errors[0])
        let keys = v.keys

        errorsArr.forEach((error) => {
            snackbar.add({
                background: '#F58E8E',
                text: error,

            })
        })



        keys.forEach((key) => {
            setTimeout(() => {
                formErrors[key as keyof typeof formErrors] = false

            }, 500)
            formErrors[key as keyof typeof formErrors] = true

        })
    }

    return v.isValid;


}

const successModal: Ref<InstanceType<typeof Modal> | null> = ref(null);

const confirmSuccess = () => {
    successModal.value?.openModal();

    setTimeout(() => {
        successModal.value?.closeModal();
        window.location.href = '/';

    }, 3000)

}


const submit = async () => {
    // console.log(form);
    let isValid = validate();
    if (isValid) {
        let moddedForm = modifyForm();
        // console.log(moddedForm);
        // return;
        let recaptchaToken = await recaptcha('reservation');
        if (recaptchaToken) {
            Object.assign(moddedForm, {
                recaptcha: recaptchaToken
            });
        } else {
            snackbar.add({
                background: '#F58E8E',
                text: 'Something went wrong, Please try again later',

            })
            return;
        }
        // console.log(moddedForm);
        try {
            isLoading.value = true;

            // console.log(moddedForm);
            let response = await Http.post('reservation', moddedForm);
            console.log(response);
            snackbar.add({
                background: '#8EF5E8',
                text: 'Form Submitted Successfully, We will contact you',

            })
            isLoading.value = false;
            confirmSuccess();
        } catch (e) {
            console.error(e);
            snackbar.add({
                background: '#F58E8E',
                text: 'Something went wrong, Please try again later',

            })
            isLoading.value = false;
        }
    }
    isLoading.value = false;

}

const modifyForm = () => {
    let moddedform = {};
    let clinic_id = () => {
        let clinic = Httplocations.find((location) => location.name === form.location);
        if (!clinic) return;
        return clinic.id;
    }
    let formPayment = () => {
        switch (form.payment) {
            case 'Insurance':
                return 'insurance';
            case 'Self Pay':
                return 'self_pay';
            case 'Workers Compensation':
                return 'workers_compensation';
            default:
                return 'self_pay';
        }
    }

    let serviceId = () => {
        let service = services.value.find((service) => service.title === form.service);
        if (!service) return;
        return service.id;
    }
    let date_in_unix = convertTotimeStamp(form.date, form.time);
    Object.assign(moddedform, {
        clinic_id: clinic_id(),
        first_name: form.firstName,
        last_name: form.lastName,
        dob: form.dob,
        gender: form.gender,
        phone: form.phone.replace(/\D/g, ''),
        email: form.email,
        payment: formPayment(),
        service_id: serviceId(),
        date: date_in_unix,
        pain: form.pain,
        returning: form.returning

    });
    // console.log(date_in_unix);
    if (form.payment === 'Insurance') {
        Object.assign(moddedform, {
            insurance_company: form.insurance,
            member_id: form.memberId
        });
    }

    if (form.payment === 'Workers Compensation') {
        Object.assign(moddedform, {
            date_of_accident: form.date_of_accident,
            case_number: form.case_number,
            lawyer_name: form.lawyer_name,
            lawyer_phone_number: form.lawyer_phone_number,
        });
    }
    return moddedform;
}

const convertTotimeStamp = (date: string, time: string) => {
    const [month, day, year] = date.split('-').map((e) => parseInt(e));
    const [hour, minute] = time.split(':').map((e) => parseInt(e));
    const nyDate = moment.tz({ year, month, day, hour, minute }, 'America/New_York');
    return nyDate.valueOf();

}

const hoursComp: Ref<InstanceType<typeof DropDownInputField> | null> = ref(null);

const updateHours = (date: { start: string, end: string }) => {
    hoursComp.value?.clear();
    const getHours = (time: string) => {
        const [hours, minutes, seconds] = time.split(':');
        return parseInt(hours);
    }
    let hours = [];
    const startHour = getHours(date.start);
    const endHour = getHours(date.end);

    for (let i = startHour; i < endHour; i++) {
        hours.push(`${i}:00`)
        if (i < endHour - 1) {
            hours.push(`${i}:30`);
        }

    }
    Availablehours.value = hours
    formValidation.time.rules[1] = { dropdown: Availablehours.value }

    // console.log(date);
}
const updateDate = (date: { day: number, month: number, year: number }) => {
    form.date = `${date.month}-${date.day}-${date.year}`;
    // updateHours(date);
}

const assignPayment = (e: string) => {
    form.payment = e;

}

const assignReturning = (e: string) => {
    form.returning = e;
    // form.returning = isReturning;
}
const isSelfPay = () => {
    return form.payment !== 'Insurance'

}
</script>
<template>
  <div class="booking-container">
    <!-- <div @click="recaptcha('smth')" class="btn responsive">Book Appointment</div> -->
    <Loading v-if="isLoading" />
    <Modal ref="successModal">
      <div class="success">
        <p>We recieved your reservation, check your email for confirmation</p>
        <p>Thank you for trusting Pt Of The City</p>
      </div>
    </Modal>
    <h1 class="sectionHeader">Booking</h1>

    <div class="form-container">
      <div class="left">
        <div>
          <DropDownInputField
            id="service"
            ref="serviceComp"
            :list="servicesList"
            placeHolder="Service"
            @input="updateService($event)"
            required
            :error="formErrors.service"
          />
          <div class="ps">What would you like to do at PT of of The City?</div>
        </div>
        <div>
          <DropDownInputField
            id="location"
            ref="locationComp"
            :list="locations"
            placeHolder="Find Your nearest clinic"
            @input="updateLocation($event)"
            required
            :error="formErrors.location"
          />
          <div class="ps">
            Make sure to allow location access, Clinics are listed in order of proximity.
          </div>
        </div>

        <div class="field coverage">
          <RadioInputField
            @change="assignReturning($event)"
            style="width: 100%"
            title="Returning Patient"
            :options="['Yes', 'No']"
            :checked="'No'"
            id="returning"
            :error="formErrors.returning"
          />
        </div>

        <div>
          <div class="split name">
            <InputField
              required
              class="field"
              placeHolder="First Name"
              id="firstName"
              @input="form.firstName = $event"
              :error="formErrors.firstName"
              lettersOnly
            />
            <InputField
              required
              class="field"
              placeHolder="Last Name"
              id="lastName"
              @input="form.lastName = $event"
              :error="formErrors.lastName"
              lettersOnly
            />
          </div>
          <div class="ps">Your legal name as shown in the photo ID</div>
        </div>
        <div class="split">
          <div class="field">
            <InputField
              placeHolder="Date of Birth"
              mask="##-##-####"
              id="dob"
              required
              @input="form.dob = $event"
              :error="formErrors.dob"
              date
              minYear="-100"
              maxYear="+10"
            />
            <div class="ps">MM-DD-YYYY</div>
          </div>
          <DropDownInputField
            class="field"
            :list="['Male', 'Female', 'Other', 'Prefer not to say']"
            required
            id="gender"
            placeHolder="Gender"
            @input="form.gender = $event"
            :error="formErrors.gender"
          />
        </div>
        <div class="split reverse">
          <div class="field">
            <InputField
              placeHolder="Phone Number"
              mask="(###) ###-####"
              id="phone"
              required
              @input="form.phone = $event"
              :error="formErrors.phone"
            />
          </div>
          <div class="field">
            <InputField
              placeHolder="Email"
              id="email"
              required
              @input="form.email = $event"
              :error="formErrors.email"
            />
          </div>
        </div>
        <div class="field coverage">
          <RadioInputField
            @change="assignPayment($event)"
            style="width: 100%"
            title="Coverage"
            :options="['Insurance', 'Self Pay', 'Workers Compensation']"
            :checked="'Insurance'"
            id="payment"
            :error="formErrors.payment"
          />
        </div>
        <DropDownInputField
          v-if="!(form.returning == 'Yes' || form.payment == 'Workers Compensation')"
          id="insurance"
          :list="insurancesList"
          placeHolder="Insurance company name"
          @input="form.insurance = $event"
          :disabled="isSelfPay()"
          :error="formErrors.insurance"
        />
        <InputField
          v-if="!(form.returning == 'Yes' || form.payment == 'Workers Compensation')"
          @input="form.memberId = $event"
          placeHolder="Member ID"
          id="MemberId"
          :disabled="isSelfPay()"
          :error="formErrors.memberId"
        />

        <!-- WorkersCompensation -->
        <div class="split">
          <div class="field">
            <InputField
              v-if="form.payment === 'Workers Compensation'"
              @input="form.date_of_accident = $event"
              placeHolder="Date of Accident"
              mask="##-##-####"
              id="date_of_accident"
              :error="formErrors.date_of_accident"
              date
              required
              min-year="-50"
              max-year="+0"
            />
          </div>
          <div class="field">
            <InputField
              v-if="form.payment === 'Workers Compensation'"
              @input="form.case_number = $event"
              placeHolder="Case Number"
              id="case_number"
              :error="formErrors.case_number"
              required
            />
          </div>
        </div>
        <div class="split">
          <div class="field">
            <InputField
              v-if="form.payment === 'Workers Compensation'"
              @input="form.lawyer_name = $event"
              placeHolder="Lawyer Name"
              id="lawyer_name"
              :error="formErrors.lawyer_name"
              letterOnly
              required
            />
          </div>
          <div class="field">
            <InputField
              v-if="form.payment === 'Workers Compensation'"
              @input="form.lawyer_phone_number = $event"
              placeHolder="Lawyer Phone Number"
              id="lawyer_phone_number"
              :error="formErrors.lawyer_phone_number"
              mask="(###) ###-####"
              required
            />
          </div>
        </div>

        <InputField
          @input="form.pain = $event"
          height="15rem"
          placeHolder="Tell us more about your pain"
          id="pain"
          optional
          :error="formErrors.pain"
        />
      </div>
      <div class="right">
        <Calender
          @input="updateDate($event)"
          @hours="updateHours($event)"
          :schedule="schedule"
        />
        <DropDownInputField
          ref="hoursComp"
          @input="form.time = $event"
          id="time"
          :list="Availablehours"
          placeHolder="When"
          :error="formErrors.time"
        />
        <div @click="submit()" class="btn responsive">Book Appointment</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
$gap: 2rem;

.success {
  background-color: rgba(45, 139, 156, 0.4);
  height: 80vh;
  width: 80vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  border: 1px solid white;

  p {
    color: white;
    line-height: 150%;
  }

  :nth-child(1) {
    color: white;
    font-size: 3rem;
    text-align: center;
  }

  :nth-child(2) {
    // color: red;
    font-size: 2rem;
  }
}

.booking-container {
  @include pagePadding;
  padding-top: calc(8vh + 7.5vh) !important;

  .form-container {
    display: flex;
    gap: 5rem;
    margin-top: 3rem;

    @media screen and (max-width: 870px) {
      flex-direction: column;
      gap: 2.5rem;
    }

    .left {
      width: 100%;

      display: flex;
      flex-direction: column;
      gap: $gap;

      .split {
        display: flex;
        gap: $gap;

        .field {
          width: 50%;
        }

        > .coverage {
          display: flex;
          align-items: center;
        }

        @media screen and (max-width: 800px) {
          flex-direction: column;

          > .field {
            width: 100%;
          }

          &.reverse {
            flex-direction: column-reverse;
          }
        }
      }
    }

    .right {
      display: flex;
      flex-direction: column;
      gap: $gap;

      .btn {
        margin-top: auto;

        @media screen and (max-width: 800px) {
          padding: 2.5rem 0rem;
          font-size: 1.5rem;
        }
      }
    }
  }
}
</style>
