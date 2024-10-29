<script setup lang='ts'>

const props = defineProps({
    location: {
        type: String
    }
}

)

</script>

<template>
    Location:{{ location }}
</template>