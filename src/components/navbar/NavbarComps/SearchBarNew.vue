<script setup lang="ts">

</script>

<template>
    <div class="search-bar">
        <div class="search-icon-mobile">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 15 18" fill="none"
                style="margin-top:0.5rem;">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M2.80524 11.7137C1.9404 10.8306 1.35381 9.71307 1.11824 8.49969C0.880725 7.28291 1.00269 6.0233 1.46924 4.87469C1.93181 3.73253 2.72153 2.75251 3.73924 2.05769C5.80409 0.647436 8.52239 0.647436 10.5872 2.05769C11.605 2.75251 12.3947 3.73253 12.8572 4.87469C13.3238 6.0233 13.4458 7.28291 13.2082 8.49969C12.9727 9.71307 12.3861 10.8306 11.5212 11.7137C10.3759 12.889 8.80436 13.5519 7.16324 13.5519C5.52213 13.5519 3.95059 12.889 2.80524 11.7137V11.7137Z"
                    stroke="#2C3233" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path
                    d="M7.16999 3.20292C6.75809 3.24656 6.45955 3.61586 6.5032 4.02777C6.54685 4.43968 6.91614 4.73821 7.32805 4.69457L7.16999 3.20292ZM9.02136 5.69213C9.18285 6.07357 9.62297 6.25188 10.0044 6.0904C10.3859 5.92892 10.5642 5.4888 10.4027 5.10736L9.02136 5.69213ZM12.1419 11.0869C11.8487 10.7943 11.3739 10.7947 11.0812 11.0879C10.7886 11.381 10.789 11.8559 11.0822 12.1485L12.1419 11.0869ZM14.4702 15.5305C14.7633 15.8232 15.2382 15.8228 15.5308 15.5296C15.8235 15.2364 15.823 14.7616 15.5299 14.4689L14.4702 15.5305ZM7.32805 4.69457C8.05056 4.61801 8.73812 5.02306 9.02136 5.69213L10.4027 5.10736C9.86194 3.83005 8.54933 3.05676 7.16999 3.20292L7.32805 4.69457ZM11.0822 12.1485L14.4702 15.5305L15.5299 14.4689L12.1419 11.0869L11.0822 12.1485Z"
                    fill="#2C3233" />
            </svg>
        </div>
        <input lang="ar" :dir="$dir()" class='search-input' type="text" :placeholder="$translate('search')">
    </div>

</template>
<style scoped lang='scss'>
.search-bar {
    display: flex;
    align-items: center;
    height: 100%;
    background-color: rgba(238, 236, 237, 0.80);
    backdrop-filter: blur(200px);

    border-radius: $border-radius;
    padding-left: 0.62rem;

    input {
        border: none;
        background-color: transparent;
        height: 100%;
        width: 100%;
        border-radius: $border-radius;
        padding-left: 0.62rem;

        &:focus {
            outline: none;
        }
        &::placeholder {
            color: $black;
        }
    }

}
</style>
