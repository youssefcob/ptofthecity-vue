<script setup lang="ts">
import { ref, type Ref } from 'vue';
import { RouterLink } from 'vue-router';
const targetDivRef: Ref<HTMLElement | null> = ref(null);


</script>

<template>
      <ul  >
<li><RouterLink  active-class="navbar-link" to="/#Services">
        {{ $translate('services') }}
    </RouterLink></li>
<li><RouterLink active-class="navbar-link" to="/#Insurance">
        {{ $translate('insurance') }}
    </RouterLink></li>
<li><RouterLink active-class="navbar-link" to="/#WhoWeAre">
        {{ $translate('whoWeAre') }}
    </RouterLink></li>
<!-- <li><RouterLink active-class="navbar-link" to="/Blog">
        {{ $translate('blog') }}
    </RouterLink></li> -->
<li><RouterLink active-class="navbar-link" to="/#Careers">
        {{ $translate('careers') }}
    </RouterLink></li>
<li><RouterLink active-class="navbar-link" to="/#TrustedBy">
        {{ $translate('trustedBy') }}
    </RouterLink></li>
<li><RouterLink active-class="navbar-link" to="/#FAQs">
        {{ $translate('faqs') }}
    </RouterLink></li>
<li><RouterLink active-class="navbar-link" to="/#ContactUs">
        {{ $translate('contactUs') }}
    </RouterLink></li>


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
  font-weight: bold;

  }

  }

// .navbar-link:focus{
//   color:red;
// }

</style>