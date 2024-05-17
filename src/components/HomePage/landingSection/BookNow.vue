<template>

    <div class="main-image-content">
        <h1>PT Of The City</h1>
        <h2>Where Healing Happens</h2>
        <div class="btn-container">
            <div class="btn">Book Now</div>
            <div class="number">
                <h3><img src="@/assets/icons/Phone.svg" alt="">(718) 648-0888</h3>
            </div>
        </div>

    </div>

</template>
<style scoped lang="scss">
.main-image-content {

    color: $white;

    h1 {
        color: white;
    }

    h2 {
        color: white;
        margin: 1.25rem 0;
    }

    .btn-container{
        width:75%;
    }
    .btn {
        background-color: $blue;
        color: $black;
        padding: 1.25rem 0rem;
        border-radius: 0.625rem;
        text-align: center;
        cursor: pointer;
        @extend .btnfont;
    }

    .number {
        text-align: center;
        margin-top: calc(3rem - 1.25rem);

        h3 {
            color: white;

        }

        img {
            height: $h3;
            margin-right: 0.3rem
        }
    }


}
</style>