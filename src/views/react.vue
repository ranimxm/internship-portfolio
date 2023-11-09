<template>
    <LoadingScreen />

       <section class="work-section" id="work">
                    <div class="work-container">
                        <div class="work-item reverse">
                            <div class="right">
                                <h3>React Native</h3>
                                <h1>Music Application</h1>
                                <div class="text">


                                </div>

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