<script setup lang="ts">
import { ref, type Ref } from 'vue';
const targetDivRef: Ref<HTMLElement | null> = ref(null);

const emit = defineEmits(['dropdown']);

const toggleDropDown = () => {
  emit('dropdown');
}
const handleScrollToTarget = (id: any) => {
  targetDivRef.value = document.getElementById(id);
  if (targetDivRef.value) {
    toggleDropDown();

    targetDivRef.value.scrollIntoView({ behavior: 'smooth' });

  } else {
    console.warn(`Div with ID "${id}" not found.`);
  }
};

</script>

<template>
  <div class="dropdown">
    <ul>
      <li>
        <RouterLink active-class="navbar-link" @click="toggleDropDown()" to="/#Services">
          {{ $translate('services') }}
        </RouterLink>
      </li>
      <li>
        <RouterLink active-class="navbar-link" @click="toggleDropDown()" to="/#Insurance">
          {{ $translate('insurance') }}
        </RouterLink>
      </li>
      <li>
        <RouterLink active-class="navbar-link" @click="toggleDropDown()" to="/#WhoWeAre">
          {{ $translate('whoWeAre') }}
        </RouterLink>
      </li>
      <li>
        <RouterLink active-class="navbar-link" @click="toggleDropDown()" to="/Blog">
          {{ $translate('blog') }}
        </RouterLink>
      </li>
      <li>
        <RouterLink active-class="navbar-link" @click="toggleDropDown()" to="/#Careers">
          {{ $translate('careers') }}
        </RouterLink>
      </li>
      <li>
        <RouterLink active-class="navbar-link" @click="toggleDropDown()" to="/#TrustedBy">
          {{ $translate('trustedBy') }}
        </RouterLink>
      </li>
      <li>
        <RouterLink active-class="navbar-link" @click="toggleDropDown()" to="/#FAQs">
          {{ $translate('faqs') }}
        </RouterLink>
      </li>
      <li>
        <RouterLink active-class="navbar-link" @click="toggleDropDown()" to="/#ContactUs">
          {{ $translate('contactUs') }}
        </RouterLink>
      </li>

    </ul>
  </div>
</template>

<style scoped lang="scss">
.dropdown {
  cursor: pointer;
}

ul {
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 0;
  gap: 3rem;

  a {
    @extend h4;
    font-size: 2rem;
    font-weight: bolder;

  }
}
</style>