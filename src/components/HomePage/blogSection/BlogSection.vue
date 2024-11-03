<template>

    <div class="blog-container">
        <div class="header">
            <h1>Where is your pain?</h1>
            <h2>Hover on the figure to learn more about your pain</h2>
            <div class="btn">Our Blog</div>
        </div>
        <div class="figure"></div>
    </div>
</template>

<style scoped lang="scss">

    .blog-container {
        height:40vh;
        display:flex;
        flex-wrap: wrap;
        @include pagePadding;

        .header {

            width:50%;
            // flex: 1;
            display:flex;
            flex-direction: column;
            gap:1rem;
            justify-content: center;
            h2{
                color:$navy;
                line-height: 120%;
            }
            .btn{
                width:60%;
                margin-top:2rem;
            }
        }

    }

</style>