<script setup lang="ts">
import { ref, type Ref } from 'vue';
const targetDivRef: Ref<HTMLElement | null> = ref(null);

const handleScrollToTarget = (id:any) => {
  targetDivRef.value = document.getElementById(id);
  if (targetDivRef.value) {
    targetDivRef.value.scrollIntoView({ behavior: 'smooth', block: 'start'});
  } else {
    console.warn(`Div with ID "${id}" not found.`);
  }
};
</script>

<template>
      <ul>
            <li><router-link active-class="navbar-link" to="/#Services">
                    Services
                </router-link></li>
            <li><router-link active-class="navbar-link" to="/#Insurace">
                    Insurance
                </router-link></li>
            <li><router-link active-class="navbar-link" to="/#WhoWeAre">
                    Who We Are
                </router-link></li>
            <li><router-link active-class="navbar-link" to="/Blog">
                    Blog
                </router-link></li>
            <li><router-link active-class="navbar-link" to="/#Careers">
                    Careers
                </router-link></li>
            <li><router-link active-class="navbar-link" to="/#TrustedBy">
                    Trusted by
                </router-link></li>
            <li><router-link active-class="navbar-link" to="/#FAQs">
                    FAQs
                </router-link></li>
            <li><router-link active-class="navbar-link" to="/#ContactUs">
                    Contact us
                </router-link></li>

        </ul>
</template>

<style scoped lang="scss">

ul {
  list-style-type: none;
  display: flex;
  gap:1.25rem;
  align-items: center;
  a{
  @extend .nav-font;

  }

  }



</style>