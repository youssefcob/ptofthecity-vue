<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps<{
  title: string,
  options: string[],
  error: boolean,
  checked: string
}>();

const emit = defineEmits(['change']);
const selectedOption = ref(props.checked);

// Watch for external changes to the checked prop
watch(() => props.checked, (newValue) => {
  selectedOption.value = newValue;
});

// Handle option selection
const selectOption = (option: string) => {
  selectedOption.value = option;
  emit('change', option);
};
</script>

<template>
  <div class="radio-input-field">
    <span class="text" :style="props.error ? `color:red;` : ``">{{ props.title }}:</span>
    <div class="options">
      <div class="option" v-for="option in props.options" :key="option">
        <input 
          type="radio" 
          :id="`${props.title}-${option}`"
          :name="props.title" 
          :value="option" 
          :checked="selectedOption === option"
          @change="selectOption(option)" 
        />
        <div 
          class="radio-input" 
          :class="{ active: selectedOption === option }"
          @click="selectOption(option)"
        ></div>
        <label 
          class="text" 
          :style="props.error ? `color:red;` : ``"
          @click="selectOption(option)"
        >{{ option }}</label>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.radio-input-field {
  display: flex;
  gap: 1.25rem;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: $border-radius;

  .text {
    color: $black;
    transition: all 0.3s ease-in-out;
    
  }

  .options {
    display: flex;
    gap: 3rem;
    // width: 100%;

    input {
      display: none;
    }

    .option {
      display: flex;
      gap: 1rem;
      align-items: center;
      cursor: pointer;

      .radio-input {
        background-color: $white;
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
        box-shadow: 0px 0px 6.7px 0px rgba(44, 50, 51, 0.50) inset;
        transition: all 0.3s ease-in-out;

        &.active {
          background-color: $blue;
          transition: all 0.3s ease-in-out;
        }
      }
    }
  }
}
</style>