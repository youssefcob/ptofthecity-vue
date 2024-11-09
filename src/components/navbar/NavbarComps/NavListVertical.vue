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
        <RouterLink class="list-item dropbtn" active-class="navbar-link" to="/#Clinics">
          {{ $translate('Clinics') }}
        </RouterLink>
      </li>
      <li>
        <RouterLink class="list-item dropbtn" active-class="navbar-link" to="/#Services">
          {{ $translate('services') }}
        </RouterLink>

      </li>



      <li>
        <RouterLink class="list-item" active-class="navbar-link" to="/#Insurance">
          Insurance choices
        </RouterLink>
      </li>
      <li>
        <RouterLink class="list-item" active-class="navbar-link" to="/#WhoWeAre">
          {{ $translate('whoWeAre') }}
        </RouterLink>
      </li>
      <li>
        <RouterLink class="list-item" active-class="navbar-link" to="/#Blog">
          {{ $translate('blog') }}
        </RouterLink>
      </li>
      <li>
        <RouterLink class="list-item" active-class="navbar-link" to="/#Careers">
          {{ $translate('careers') }}
        </RouterLink>
      </li>
      <li>
        <RouterLink class="list-item" active-class="navbar-link" to="/#TrustedBy">
          {{ $translate('trustedBy') }}
        </RouterLink>
      </li>
      <li>
        <RouterLink class="list-item" active-class="navbar-link" to="/#FAQs">
          {{ $translate('faqs') }}
        </RouterLink>
      </li>
      <li>
        <RouterLink class="list-item" active-class="navbar-link" to="/booking">
          <!-- {{ $translate('contactUs') }} -->
          Book Now
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
// .dropdown {
//   cursor: pointer;
// }

ul {
  list-style-type: none;

  list-style-position: inside;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 0;
  margin: 0;
  gap: 2rem;

  li {
    margin-left: 5px;
  }

  a {
    color:$black;
    font-size: 1.7rem;

  }
}
</style>