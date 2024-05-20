<template>
    <div class="eligibility-container">
        <h1>Check eligibility</h1>
        <div class="form-image-container">
            <div class="image-container">
                <div class="image">
                    <img src="@/assets/images/eligibilityFormImage.jpg" alt="insurance form">
                </div>
            </div>
            <div class="form-container">
                <div class="form">
                    <span>Check your benefits and eligibility and our team will get back to you within 30 mintues
                    </span>
                    <form action="">
                        <div class="input-fields-container">
                            <input class="input-field w-55" type="text" placeholder="Insurance Company">
                            <input class="input-field w-45" type="text" placeholder="Insurance Card front">
                            <input class="input-field w-55" type="text" placeholder="Member ID">
                            <input class="input-field w-45" type="text" placeholder="Insurance Card Back">
                            <input class="input-field w-55" type="text" placeholder="Medicare ID">
                            <input class="input-field w-45" type="text" placeholder="Medicaid ID">
                        </div>

                        <button class="btn">Submit</button>

                    </form>
                </div>

            </div>
        </div>

    </div>
</template>

<style scoped lang="scss">
.eligibility-container {
    margin-top: 9rem;
    padding: 0 6.25rem;

    width: 100%;
    height: 7rem;

    >h1 {
        color: $navy;
    }

    >.form-image-container {
        height: 36.4375rem;
        margin-top: 3.13rem;
        display: flex;
        align-items: center;

        >.image-container {
            width: 25%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            >.image {
                width: 100%;
                height: 100%;

                >img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-radius: 1.125rem;
                }
            }
        }

        >.form-container {
            height: 100%;
            width: 75%;
            @include flex(center, center);

            >.form {
                width: 70%;
                height: 70%;

                >form {
                    margin-top: 1.33rem;
                }

                >span {
                    @extend h4;
                    display: block;
                    width: 33.375rem;

                }
            }
        }
    }

    .input-fields-container {
        padding:1.87rem 0;
    display: grid;
    grid-template-columns: 1fr 0.8fr;
    gap: 0.63rem;
}
.btn{
    width:42%;
}
}
</style>