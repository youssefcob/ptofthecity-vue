<template>

    <div class="main-image-content">
        <div class="info">
            <h1>PT Of The City</h1>
            <h2>Where Healing Happens</h2>
            <div class="btn-container">
                <div class="btn bigScreen">Book Now</div>
                <div class="number">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <g clip-path="url(#clip0_813_892)">
                                <path
                                    d="M24.2866 17.666L18.8179 15.3223C18.5843 15.2227 18.3246 15.2017 18.078 15.2625C17.8315 15.3232 17.6113 15.4625 17.4507 15.6592L15.0288 18.6182C11.2279 16.8261 8.16904 13.7672 6.37695 9.96631L9.33594 7.54443C9.53305 7.38412 9.67256 7.16395 9.73335 6.91726C9.79414 6.67057 9.7729 6.41079 9.67285 6.17725L7.3291 0.708496C7.21929 0.456742 7.02508 0.251194 6.77996 0.127294C6.53483 0.00339424 6.25416 -0.0310909 5.98633 0.0297849L0.908203 1.20166C0.649985 1.26129 0.419602 1.40668 0.254656 1.6141C0.0897096 1.82153 -5.94829e-05 2.07874 2.95713e-08 2.34375C2.95713e-08 14.8682 10.1514 25 22.6562 25C22.9213 25.0002 23.1787 24.9104 23.3862 24.7455C23.5937 24.5805 23.7392 24.3501 23.7988 24.0918L24.9707 19.0137C25.0312 18.7445 24.996 18.4627 24.8711 18.2168C24.7463 17.9708 24.5396 17.776 24.2866 17.666Z"
                                    fill="white" />
                            </g>

                        </svg><h3>(718) 648-0888</h3>
                </div>
            </div>
        </div>
        <div class="btn responsive">Book Now</div>


    </div>

</template>
<style scoped lang="scss">
.main-image-content {

    color: $white;

    .responsive {
        display: none;
    }

    h1 {
        color: white;

        @media screen and (max-width: 426px) {
            font-size: 50px;

        }
    }

    h2 {
        color: white;
        margin: 1.25rem 0;

        @media screen and (max-width: 426px) {
            font-size: 42px;

        }
    }

    .btn-container {
        width: 75%;
    }

    .number {
        text-align: center;
        margin-top: calc(3rem - 1.25rem);
        display: flex;
        align-items: center;

        h3 {
            color: white;

            @media screen and (max-width: 426px) {
                font-size: 20px;

            }

        }

        svg {
            margin-right: 0.3rem;
            height: $h3;
            @media screen and (max-width: 426px) {
                height: 17px;

            }


        }
    }
}

@media only screen and (max-width: 600px) {

    .main-image-content {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        // align-items: center;
        height: 67%;
        padding: 0 2rem;

        .info {
            // padding:0 2rem;
        }

        .number {
            display: flex;
            align-items: center;
        }

        // align-items: center;
        .btn {
            &.bigScreen {
                display: none;
            }

            &.responsive {
                display: block;
                width: 88%;
                max-width: 300px;
                height: 40px;
                align-self: center;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size:11px;
                letter-spacing: 0.2px;
                font-weight: 900;
                // font-family: $montserrat;

            }
        }

        .number {
            margin-top: 0rem;
        }
    }
}
</style>