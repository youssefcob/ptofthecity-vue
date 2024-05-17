<script setup lang="ts">

</script>

<template>
        <ul>
            <li><router-link active-class="navbar-link" to="/Services">
                    Services
                </router-link></li>
            <li><router-link active-class="navbar-link" to="/insurance">
                    Insurance
                </router-link></li>
            <li><router-link active-class="navbar-link" to="/WhoWeAre">
                    Who We Are
                </router-link></li>
            <li><router-link active-class="navbar-link" to="/Blog">
                    Blog
                </router-link></li>
            <li><router-link active-class="navbar-link" to="/Careers">
                    Careers
                </router-link></li>
            <li><router-link active-class="navbar-link" to="/TrustedBy">
                    Trusted by
                </router-link></li>
            <li><router-link active-class="navbar-link" to="/Faqs">
                    FAQs
                </router-link></li>
            <li><router-link active-class="navbar-link" to="/Contact us">
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
  @extend h4;

  }

  }

  .navbar-link {
    color:red !important;
  }


</style>