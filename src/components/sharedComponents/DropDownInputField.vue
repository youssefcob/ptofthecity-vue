<script setup lang="ts">

import { ref, onMounted, onUnmounted, type Ref } from 'vue';

const props = defineProps({
    id: String,
    required: Boolean,
    list: Array as () => string[],
    placeHolder: String,
    asteriskPosition: String,
});

const input: Ref<string> = ref('');
const show: Ref<boolean> = ref(false);

const showDropDown = () => {
    show.value = true;
    console.log(show.value);
}

const changeInput = (insurance: string) => {
    input.value = insurance;
    show.value = false;
    console.log(show.value);

}

let filteredList = ref(props.list);

const emit = defineEmits([`input`]);

const filterList = () => {
    if (props.list) {
        filteredList.value = props.list.filter(listItem => listItem.startsWith(input.value));
    }

    emit(`input`, input.value);


}


let handleClickOutside: (e: Event) => void;

onMounted(() => {
    handleClickOutside = (e: Event) => {
        const dropdownElement = document.querySelector(`.drpdown-btn.${props.id}`);
        if (dropdownElement && !dropdownElement.contains(e.target as Node)) {
            // if (e.target !== dropdownElement) {
            show.value = false;

            console.log(show.value);
            // }

        }
    };
    document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside);
});
</script>

<template>

    <div :class="`drpdown-btn ${props.id}`" @click="showDropDown">

        <div class="required">
            <input class="input-field " @input="filterList()" v-model="input" style="width:100%" type="text">
            <label class="asterisk" v-show="!input">{{ $props.placeHolder }}<span v-if="props.required"> *</span></label>
            <label class="arrowdown" ref="arrowdown">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 7" fill="none">
                    <path d="M1 1L6 6L11 1" stroke="black" stroke-width="0.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>
            </label>

        </div>
        <div class="dropdown-wrapper {{ props.id }}" v-if="show">
            <div class="dropdown-list {{ props.identifier }}">
                <div class="dropdown-item " v-for="insurance in filteredList" :key="insurance"
                    @click="changeInput(insurance)">{{ insurance }}</div>

            </div>
        </div>

    </div>
</template>

<style scoped lang="scss">
.drpdown-btn {
    >.required {
        >.input-field {
            @media screen and (max-width: 800px) {
                height: 45px;
                padding: 18px;
            }

        }
    }

    position: relative;

    .dropdown-wrapper {
        position: absolute;
        top: calc(100%);
        border-radius: 1.125rem;
        border: 1px solid $blue;
        width: 100%;
        background-color: $white;
        z-index: 1;
        @include flex();
        justify-content: flex-start;

        .dropdown-list {
            overflow-y: scroll;

            // height:fit-content;
            max-height: 95%;

            width: 98%;



            &::-webkit-scrollbar {
                width: 10px;

                background-color: white;
                // border-radius:rem;
            }

            /* Track */
            &::-webkit-scrollbar-track {
                border-radius: 1.125rem;
            }

            /* Handle */
            &::-webkit-scrollbar-thumb {
                background: $navy;
                border-radius: 1.125rem;
            }


            // /* Handle on hover */
            // &::-webkit-scrollbar-thumb:hover {
            //     background: #555;
            // }


            .dropdown-item {
                cursor: pointer;
                padding: 1rem 1rem;
                border-radius: 1.25rem;
                border: none;
                @extend h4;

                &:hover {
                    background-color: lighten($blue, 30%);
                    // color: $white;
                }

            }
        }
    }

}

.required {
    position: relative;

    .arrowdown,
    .asterisk {
        position: absolute;
    }

    .asterisk {
        left: 2.2%;
        top: 35%;
        color: black;
        font-family: $montserrat;
        @media screen and (max-width: 800px) {
               font-size: 13px;
            }

        >span {
            color: red;
        }
    }

    .arrowdown {
        right: 3%;
        top: 34%;
    }
}
</style>