<template>
        <AppHeader/>

          <LoadingScreen/>

        <section class="work-section" id="work">
            <div class="work-container">
                <div class="work-item reverse">
                    <div class="right">
                        <h3>MongoDB, NodeJs</h3>
                        <h1>Twitter Recreation</h1>
                        <div class="text">
                            <p>
                                <a href="https://twitter-recreation.netlify.app/" target="_blank">The website</a> is being hosted on Netlify.
                            </p>
                            <p>As part of a school challenge, I was tasked with recreating a website, and I decided to take on the challenge of recreating Twitter/
                                Initialy, my plan was to make use of a JSON file as a data source for the website. However, my teaqcher recommended using MongoDB as a database solution, and I followed his suggestion.
                            </p>
                            <p>
                                With MongoDB being connected into the project, the website became capable of posting tweets and displaying the data on the page.
                                It provided users to create their thoughts in a familiat Twitter-like environment.
                            </p>
                            <p>
                                When it came to hosting the website, my first plan was to attempt to use Netlify. However, I discovered that connecting a database directly to Netlify was not capable for my project.
                                As an alternative solution, I made use of the powef of local storage, which allowed me to store and retrieve data efficiently.
                            </p>
                        </div>

                    </div>
                    <div class="left">
                        <img src="@/assets/img/twt.gif">
                    </div>
                </div>
                <!-- <div class="work-item">
                    <div class="left">
                        <img src="/img/gojo.png">
                    </div>
                    <div class="right">
                        <p class="reveal">Text 2</p>
                    </div>
                </div> -->
            </div>


        </section>
</template>

<script>
import LoadingScreen from '@/components/loadingscreen.vue';
import AppHeader from '@/components/header.vue';


export default {
    components: {
        LoadingScreen,
        AppHeader
    }

};
</script>
