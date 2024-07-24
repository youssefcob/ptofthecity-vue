<script setup lang="ts">
import { ref } from 'vue';
import { vMaska } from "maska/vue"

const props = defineProps({
    required: Boolean,
    optional: Boolean,
    placeHolder: String,
    asteriskPosition: String,
    height: String,
    mask: String,
    disabled: Boolean,
    error: Boolean
});
let input = ref(``);
const emit = defineEmits([`input`]);

const emitInput = (e: Event) => {
    // emit(`input`, (e.target as HTMLInputElement).value);
    emit(`input`, (input.value));

}
const CalcHeight = () => {
    if (props.height) {
        return `height:${props.height}`;
    }
    return '';
}

const CalcTop = () => {
    if (props.height) {
        return `top:16px`;
    }
    return '';
}
</script>

<template>
    <div class="required">
        <input :disabled="$props.disabled" class="input-field" v-if="!$props.height" :style="`width:100%; ${CalcHeight()};${($props.error)?'border-color:red':''}`" 
        v-maska="mask"
            type="text" v-model="input" @input="emitInput">
        <textarea :disabled="$props.disabled" class="input-field" v-if="$props.height" :style="`width:100%;resize:none; ${CalcHeight()};${($props.error)?'border-color:red':''}`"
            floatlabeltype type="text" v-model="input" @input="emitInput" />
        <label class="asterisk" v-if="!input" :style="CalcTop()">{{ $props.placeHolder }}<span style="color:red" v-if="props.required">
                *</span> <span class='ps' v-if="$props.optional">(Optional)</span></label>
    </div>
</template>
<style scoped lang="scss">
.required {
    position: relative;

    >.input-field {
    height: 3.75rem;
    transition: all 0.3s ease-in-out;
    &[disabled]{
        background-color: $grey;
    }

        @media screen and (max-width: 800px) {
            height: 6rem;
            padding: 18px;
        }

    }

    .arrowdown,
    .asterisk {
        position: absolute;
    }

    .asterisk {
        left: 1.25rem;
        @media screen and (max-width: 800px) {
            left: 18px;
        }
        top: 35%;
        color: rgba(0, 0, 0, 0.793);
        font-family: $montserrat;
        font-size: 1.125rem;
        pointer-events: none;


      

        @media screen and (max-width: 800px) {
            font-size: 13px;
        }
    }

    .arrowdown {
        left: 90%;
        top: 34%;
    }
}
</style>