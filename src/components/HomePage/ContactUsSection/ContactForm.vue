<script setup lang="ts">
import DropDownInputField from '@/components/sharedComponents/DropDownInputField.vue';
import InputField from '@/components/sharedComponents/InputField.vue';
import validation from '@/mixins/Validation';
import { reactive, ref } from 'vue';
import { useSnackbar } from "vue3-snackbar";
const snackbar = useSnackbar();

const subjectsList = [
    "subject",
    'test',
    'smth'
]

const form = reactive({
    subject: '',
    name: '',
    email: '',
    phone: '',
    message: ''
})

const formValidation = {
    subject: {
        rules: ['required', { dropdown: subjectsList }],
        message: {
            required: 'Please select a subject',
            dropdown: 'Please select a valid subject'
        }
    },
    name: {
        rules: ['required', 'letters:only'],
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
    console.log(errors);
    if(errors.length){
        let errorsArr = Object.values(errors[0])
    console.log(errorsArr)
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
    } else {
        snackbar.add({
            background: '#8EF5E8',
            text: 'Form Submitted Successfully',
     
        })
    
    }


}

const childValidate = ref(validate)
defineExpose({
    validate,
})
</script>

<template>
    <div class="form">
        <DropDownInputField
      id="subject"
      required
      :list="subjectsList"
      :placeHolder="$translate('subject')"
      asteriskPosition="15%"
      @input="form.subject = $event"
      :error="formErrors.subject"
    />
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