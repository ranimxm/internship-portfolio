<template>

          <LoadingScreen/>

            <section class="work-section" id="work">
                <div class="work-container">
                    <div class="work-item reverse">
                        <div class="right">
                            <h3>PWA</h3>
                            <h1>Music Application</h1>
                            <div class="text">
                                <p>
                                    The <a href="https://scara.netlify.app/" target="_blank">music app</a> is currently hosted on Netlify.
                                </p>
                                <p>
                                    As a devoted fan of a particular fandom, a friend approached me with an interesting request:
                                    to create a music app for our fandom's community. Coincidentally, while exploring the challenges set by my school,
                                    I discovered a concept called Progressive Web Application (PWA). This provided me with an opportunity to fulfill my friend's request and also contribute to my school assignment.
                                </p>
                                <p>
                                    With enthusiasm, I delved into research to bring this music app idea to life. Through my efforts, I successfully developed playlist, real-time updates and a sleek, easy to use interface, providing an enjoyable music experience.
                                </p>
                                <p >
                                        It is important to note that the app primarily is made to Android devices due to limitations. Unfortunately, creating a version 
                                        for iOS devices was not feasible at that time.
                                </p>

                            </div>

                        </div>
                        <div class="left">
                            <img class="img" src="@/assets/img/mobile.gif">
                        </div>
                    </div>
                    <!-- <div class="work-item">
                        <div class="left">
                            <img src="/img/gojo.png">
                        </div>
                        <div class="right reveal text">
                            <p >
                                    It is important to note that the app primarily is made to Android devices due to limitations. Unfortunately, creating a version 
                                    for iOS devices was not feasible at that time.
                                </p>
                            <p>
                                Undertaking this project allowed me to gain experience in PWA development and enhance my skills in mobile app creation. 
                                It demonstrated my ability to meet specific requirements and showcases my passion.
                            </p>
                        </div>
                    </div> -->
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
