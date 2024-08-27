<script setup lang="ts">
import { onMounted, reactive, ref, type Ref } from 'vue';
import Calender from '../sharedComponents/Calender.vue';
import DropDownInputField from '../sharedComponents/DropDownInputField.vue';
import InputField from '../sharedComponents/InputField.vue';
import RadioInputField from '../sharedComponents/RadioInputField.vue';
import validation from '@/mixins/Validation';
import { useSnackbar } from "vue3-snackbar";
import Http from '@/mixins/Http';
// import { recaptcha } from '@/components/Recaptcha';
import { useReCaptcha } from 'vue-recaptcha-v3'
import type { Schedule } from '@/interfaces/content';

const recaptcha = async (action: string) => {
    const useRecap = useReCaptcha();
  if(useRecap === undefined) {
    console.error('recaptcha not loaded');
    return false;
  }
    // Wait until recaptcha has been loaded.
    if (await useRecap?.recaptchaLoaded()) {
      console.log('recaptcha loaded');
  
      // Execute reCAPTCHA with action "login".
      try {
        const token = await useRecap?.executeRecaptcha(action);
        console.log('token', token);
        return token;
      } catch (error) {
        console.error(error);
        return false;
      }
    }
  
  };


const snackbar = useSnackbar();

const form = reactive({
    location: '',
    firstName: '',
    lastName: '',
    dob: '',
    gender: '',
    phone: '',
    payment: '',
    insurance: '',
    memberId: '',
    pain: '',
    date: '',
    time: ''

})

let Httplocations:{name:string,id:number,schedule:Schedule}[] = [];
const locations = ref([]);
const location = '';
let cords = ref({
    lat: 0,
    long: 0
})
const getLocations = async () => {
    let data = await Http.get('clinic/names');
    data = sortLocations(data)
    Httplocations = data;
    locations.value = data.map((location: { name: string }) => location.name);
    formValidation.location.rules[1] = { dropdown: locations.value };

}
const getSchedule = () => {
    let clinic = Httplocations.find((location) => location.name === form.location);
    if (!clinic) return;
    return clinic.schedule;
}
const schedule:Ref<Schedule | undefined> = ref(undefined);
const updateLocation = (e: string) => {
    form.location = e;
    schedule.value = getSchedule();

}
const sortLocations = (data:any) => {
    if(!cords.value.lat || !cords.value.long) return data;
    data.forEach((location: { name: string, lat: string, long: string, distance?:number }) => {
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

let HttpInsurances = [];
const insurances = ref([]);
const getInsurances = async () => {
    let data = await Http.get('images/insurance/names');
    HttpInsurances = data;
    insurances.value = data.map((insurance: { title: string }) => insurance.title);
}
onMounted(() => {
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
        cords.value.lat = position.coords.latitude
        cords.value.long = position.coords.longitude
    })
}
getLocations()
getInsurances()
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
        rules: ['required','date:past',  'min:10'],
        message: {
            required: 'Date Of Birth Is Required',
            date: 'Date Of Birth Must be Valid And In The Past',
            min: 'Date Of Birth Must Be In The Format MM-DD-YYYY'
        }

    },
    gender: {
        rules: ['required', { dropdown: ['Male', 'Female', 'Other'] }],

    },
    phone: {
        rules: ['required', 'min:14'],

    },
    payment: {
        rules: ['required', { dropdown: ['Insurance', 'Self Pay'] }],

    },
    insurance: {
        rules: ['required:if:payment:Insurance', { dropdown: insurances.value }],

    },
    memberId: {
        rules: ['required:if:payment:Insurance'],
    },
    pain: {
    },
    date: {
        rules: ['required'],

    },
    time: {
        rules: ['required', { dropdown: Availablehours.value }],
    }

}

const formErrors = reactive({
    location: false,
    firstName: false,
    lastName: false,
    dob: false,
    gender: false,
    phone: false,
    payment: false,
    insurance: false,
    memberId: false,
    pain: false,
    date: false,
    time: false
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
    //  else {
    //     snackbar.add({
    //         background: '#8EF5E8',
    //         text: 'Form Submitted Successfully',

    //     })

    // }
    // console.log(form);
    return v.isValid;


}



const submit= async ()=>{
    let isValid = validate();
    if(isValid) {
        let moddedForm = modifyForm();
        let recapatchaToken = await recaptcha('career');
        if(recapatchaToken){
        console.log(recapatchaToken);
        Object.assign(moddedForm, {
            recaptcha: recapatchaToken
        });}
        console.log(moddedForm);
        try{
            let response = await Http.post('reservation',moddedForm);
            console.log(response);
            snackbar.add({
                background: '#8EF5E8',
                text: 'Form Submitted Successfully',

            })
        }catch(e){
            console.error(e);
            snackbar.add({
                background: '#F58E8E',
                text: 'Something went wrong, Please try again later',

            })
        }

    }
}

const modifyForm = () => {
    let moddedform = {};
    let clinic_id = () => {
            let clinic = Httplocations.find((location) => location.name === form.location);
            if(!clinic) return;
            return clinic.id;
        }
    let formPayment = () => {
        if(form.payment === 'Insurance') return 'insurance';
        return 'self_pay';
    }
    Object.assign(moddedform, {
        clinic_id: clinic_id(),
        first_name: form.firstName,
        last_name: form.lastName,
        dob: form.dob,
        gender:form.gender,
        phone: form.phone.replace(/\D/g, ''),
        payment: formPayment(),
        date: convertTotimeStamp(form.date,form.time),

    });
    if(form.payment === 'Insurance') {
        Object.assign(moddedform, {
            insurance_company: form.insurance,
            member_id: form.memberId
        });
    }
    return moddedform;
}

const convertTotimeStamp = (date:string,time:string)=>{
    const [month,day,year] = date.split('-').map((e)=>parseInt(e));
    const [hour,minute] = time.split(':').map((e)=>parseInt(e));
    const dateObj = new Date(year,month,day,hour,minute);
    console.log(dateObj);
    let d = new Date(dateObj);
    let utc = Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate(), d.getUTCHours(), d.getUTCMinutes());
    return utc;

}


const updateHours = (date:{start:string,end:string}) =>{
    const getHours = (time:string) => {
        const [hours, minutes,seconds] = time.split(':');
        return parseInt(hours);
    }
    let hours = [];

    for (let i = getHours(date.start); i < getHours(date.end); i++) {
                hours.push(`${i}:00`)    
    }
    Availablehours.value = hours
    formValidation.time.rules[1] = { dropdown: Availablehours.value }

    console.log(date);
}
const updateDate = (date: { day: number, month: number, year: number }) => {
    form.date = `${date.month}-${date.day}-${date.year}`;
    // updateHours(date);
}

const assignPayment = (e: string) => {
    form.payment = e
}
const isSelfPay = () => {
    return form.payment !== 'Insurance'

}


</script>
<template>
    <div class="booking-container">
        <h1 class="sectionHeader">Booking</h1>

        <div class="form-container">
            <div class="left">
                <div>

                    <DropDownInputField id="location" :list="locations" placeHolder="Find Your nearest clinic"
                        @input="updateLocation($event)" required :error="formErrors.location" />
                    <div class="ps">Make sure to allow location access, Clinics are listed in order of proximity.</div>


                </div>
                <div>
                    <div class="split name">
                        <InputField required class="field" placeHolder="First Name" id="firstName"
                            @input="form.firstName = $event" :error="formErrors.firstName" lettersOnly />
                        <InputField required class="field" placeHolder="Last Name" id="lastName"
                            @input="form.lastName = $event" :error="formErrors.lastName" lettersOnly />
                    </div>
                    <div class="ps">Your legal name as shown in the photo ID</div>

                </div>
                <div class="split">
                    <div class="field">
                        <InputField placeHolder="Date of Birth" mask="##-##-####" id="dob" required
                            @input="form.dob = $event" :error="formErrors.dob" date minYear="-100" maxYear="+10"/>
                        <div class="ps">MM-DD-YYYY</div>
                    </div>
                    <DropDownInputField class='field' :list="['Male', 'Female', 'Other']" required id="gender"
                        placeHolder="Gender" @input="form.gender = $event" :error="formErrors.gender" />
                </div>
                <div class="split reverse">
                    <div class="field coverage">
                        <RadioInputField @change="assignPayment($event)" style="width:100%;" title="Coverage"
                            :options="['Insurance', 'Self Pay']" id="payment" :error="formErrors.payment" />
                    </div>
                    <div class="field">
                        <InputField placeHolder="Phone Number" mask="(###) ###-####" id="phone" required
                            @input="form.phone = $event" :error="formErrors.phone" />
                    </div>
                </div>
                <DropDownInputField id="insurance" :list="insurances" placeHolder="Insurance company name"
                    @input="form.insurance = $event" :disabled="isSelfPay()" :error="formErrors.insurance" />
                <InputField @input="form.memberId = $event" placeHolder="Member ID" id="MemberId"
                    :disabled="isSelfPay()" :error="formErrors.memberId" />
                <InputField @input="form.pain = $event" height="15rem" placeHolder="Tell us more about your pain"
                    id="pain" optional :error="formErrors.pain" />
            </div>
            <div class="right">
                <Calender @input="updateDate($event)" @hours="updateHours($event)" :schedule="schedule"/>
                <DropDownInputField @input="form.time = $event" id="time" :list="Availablehours" placeHolder="When"
                    :error="formErrors.time" />
                <div @click="submit()" class="btn responsive">Book Appointment</div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.booking-container {
    @include pagePadding;
    padding-top: calc(8vh + 7.5vh) !important;



    .form-container {
        display: flex;
        gap: 5rem;

        @media screen and (max-width: 870px) {
            flex-direction: column;
            gap: 2.5rem;

        }

        .left {
            width: 100%;

            display: flex;
            flex-direction: column;
            gap: 1.25rem;

            .split {
                display: flex;
                gap: 1.25rem;

                >.field {
                    width: 50%;

                }

                >.coverage {
                    display: flex;
                    align-items: center;
                }

                @media screen and (max-width: 800px) {
                    flex-direction: column;

                    >.field {
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
            gap: 1.25rem;

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
