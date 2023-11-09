<template>
    <LoadingScreen />
       <section class="work-section" id="work">
                    <div class="work-container">
                        <div class="work-item reverse">
                            <div class="right">
                                <h3>EJS</h3>
                                <h1>Note Application</h1>
                                <div class="text">
                                    <p>
                                        The <a href="https://duocase.onrender.com/" target="_blank">note app</a> is currently hosted on Render.
                                    </p>

                                </div>
                                <p>I was responsible for the 'database' and adding images with text generator using tesseract.js</p>
                            </div>
                            <div class="left">
                                <img class="img" src="@/assets/img/mobile.gif">
                            </div>
                        </div>
                       
                    </div>

        
                </section>
</template>

<script>
import LoadingScreen from '@/components/loadingscreen.vue';

export default {
    components: {
        LoadingScreen,
    }
};

</script>