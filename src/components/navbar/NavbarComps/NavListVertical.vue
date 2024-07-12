<script setup lang="ts">
import { ref, type Ref } from 'vue';
const targetDivRef: Ref<HTMLElement | null> = ref(null);

const emit = defineEmits(['dropdown']);

const toggleDropDown = () => {
    emit('dropdown'); 
}
const handleScrollToTarget = (id:any) => {
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
            <li><router-link active-class="navbar-link" to="/"  @click="handleScrollToTarget('servicesSection')">
                    Services
                </router-link></li>
            <li><router-link active-class="navbar-link" to="/"  @click="handleScrollToTarget('insuranceSection')">
                    Insurance
                </router-link></li>
            <li><router-link active-class="navbar-link" to="/"  @click="handleScrollToTarget('whoWeAreSection')">
                    Who We Are
                </router-link></li>
            <li><router-link active-class="navbar-link" to="/Blog">
                    Blog
                </router-link></li>
            <li><router-link active-class="navbar-link" to="/"  @click="handleScrollToTarget('careersSection')">
                    Careers
                </router-link></li>
            <li><router-link active-class="navbar-link" to="/"  @click="handleScrollToTarget('TrustedBySection')">
                    Trusted by
                </router-link></li>
            <li><router-link active-class="navbar-link" to="/"  @click="handleScrollToTarget('FAQsSection')">
                    FAQs
                </router-link></li>
            <li><router-link active-class="navbar-link" to="/"  @click="handleScrollToTarget('ContactUsSection')">
                    Contact us
                </router-link></li>

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
  gap:3rem;

  a {
   @extend h4;
   font-size:2rem;
   font-weight: bolder;

  }
}
</style>