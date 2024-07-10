<script setup lang="ts">
import { ref } from 'vue';
const props = defineProps({
    required: Boolean,
    placeHolder: String,
    asteriskPosition: String,
    height: String,
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
<input class="input-field" v-if="!$props.height" :style="`width:100%; ${CalcHeight()}`"  floatlabeltype type="text" v-model="input" @input="emitInput">
<textarea class="input-field" v-if="$props.height" :style="`width:100%;resize:none; ${CalcHeight()}`"  floatlabeltype type="text" v-model="input" @input="emitInput"/>
<label  class="asterisk" v-if="!input" :style="CalcTop()">{{ $props.placeHolder }}<span v-if="props.required"> *</span></label>
</div>
</template>

<style scoped lang="scss">



.required {
        position: relative;
        >.input-field {
            @media screen and (max-width: 800px) {
                height: 45px;
                padding: 18px;
            }

        }
        .arrowdown,
        .asterisk {
            position: absolute;
        }

        .asterisk {
            left:2.2%;
            top:35%;
            color:black;
            font-family: $montserrat;
            > span {
                color: red;
            }
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