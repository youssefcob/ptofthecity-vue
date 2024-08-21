<script setup lang="ts">
import DropDownInputField from '@/components/sharedComponents/DropDownInputField.vue';
import InputField from '@/components/sharedComponents/InputField.vue';
import Http from '@/mixins/Http';
import { recaptcha } from '@/mixins/Recaptcha';
import validation from '@/mixins/Validation';
import { reactive, ref } from 'vue';
import { useSnackbar } from "vue3-snackbar";
const snackbar = useSnackbar();

// const subjectsList = [
//     "subject",
//     'test',
//     'smth'
// ]

const form = reactive({
    subject: '',
    name: '',
    email: '',
    phone: '',
    message: ''
})

const formValidation = {
    subject: {
        rules: ['required'],
        message: {
            required: 'Please select a subject',
        }
    },
    name: {
        rules: ['required', 'letters'],
        message: {
            required: 'Name Is Required',
            letters: 'Name Cannot Contain Numbers Or Special Characters'
        }
    },
    email: {
        rules: ['required', 'email'],
        message: {
            required: 'Email Is Required',
            email: 'Please Enter A Valid Email'
        }
    },
    phone: {
        rules: ['required'],
        message: {
            required: 'Phone Number Is Required',
            phone: 'Please Enter A Valid Phone Number'
        }
    },
    message: {
        rules: ['required'],
        message: {
            required: 'Message Is Required'
        }
    }
}

const formErrors = reactive({
    subject: false,
    name: false,
    email: false,
    phone: false,
    message: false
})

const validate = () => {
    let v = new validation(formValidation, form)
    v.validate()
    let errors = v.errors;
    // console.log(errors);
    if(errors.length){
    handleErrors(v);
    } else {
    submitForm();
    }
}

const handleErrors = (v: validation) => {
    let errors = v.errors;
    let errorsArr = Object.values(errors[0])
    // console.log(errorsArr)
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

const submitForm = async () => {
    try{
        let ModdedForm = form;
        ModdedForm.phone = ModdedForm.phone.replace(/\D/g, '');
        let recapatchaToken = await recaptcha('career');
        if(recapatchaToken) Object.assign(ModdedForm, {
            recaptcha: recapatchaToken
        });
        let response = await Http.post('message', ModdedForm);
        snackbar.add({
            background: '#8EF5E8',
            text: 'Form Submitted Successfully',
     
        })
        // console.log(response)
    } catch (e) {
        snackbar.add({
            background: '#F58E8E',
            text: e,
     
        })
    }
}

defineExpose({
    validate,
})
</script>

<template>
    <div class="form">
    <InputField
      @input="form.subject = $event"
      required
      :placeHolder="$translate('subject')"
      :error="formErrors.subject"/>
    <InputField
      @input="form.name = $event"
      required
      :placeHolder="$translate('name')"
      :error="formErrors.name"
    />
    <InputField
      @input="form.email = $event"
      :placeHolder="$translate('email')"
      required
      :error="formErrors.email"
    />
    <InputField
      @input="form.phone = $event"
      :placeHolder="$translate('phone')"
      required
      :error="formErrors.phone"
      mask="(###) ###-####"
    />
    <InputField
      @input="form.message = $event"
      :placeHolder="$translate('message')"
      height="12.5rem"
      required
      :error="formErrors.message"
    />
</div>
</template>

<style scoped lang="scss">

.form {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;

}

</style>