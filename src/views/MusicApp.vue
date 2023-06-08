<template>
          <LoadingScreen/>

            <section class="work-section" id="work">
                <div class="work-container">
                    <div class="work-item reverse">
                        <div class="right">
                            <h3>PWA</h3>
                            <h1>Music Application</h1>
                            <p>Text 1</p>

                        </div>
                        <div class="left">
                            <img src="/img/gojo.png">
                        </div>
                    </div>
                    <div class="work-item">
                        <div class="left">
                            <img src="/img/gojo.png">
                        </div>
                        <div class="right">
                            <p class="reveal">Text 2</p>
                        </div>
                    </div>
                </div>

        
            </section>
</template>

<script>
import LoadingScreen from '@/components/loadingscreen.vue';

export default {
    components: {
        LoadingScreen
    }

};
</script>
