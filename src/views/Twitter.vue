<template>

          <LoadingScreen/>

        <section class="work-section" id="work">
            <div class="work-container">
                <div class="work-item reverse">
                    <div class="right">
                        <h3>MongoDB, NodeJs</h3>
                        <h1>Twitter Recreation</h1>
                        <div class="text">
                            <p>
                                <a href="https://twittah.onrender.com" target="_blank">The website</a> is being hosted on Render.
                            </p>
                            <p>As part of a school challenge, I was tasked with recreating a website, and I decided to take on the challenge of recreating Twitter.
                                Initialy, my plan was to make use of a JSON file as a data source for the website. However, my teacher recommended using MongoDB as a database solution, and I followed his suggestion.
                            </p>
                            <p>
                                With MongoDB being connected into the project, the website became capable of posting tweets and displaying the data on the page.
                                It provided users to create their thoughts in a familiar Twitter-like environment.
                            </p>
                            <p>
                                When it came to hosting the website, my first plan was to attempt to use Netlify. However, I discovered that connecting a database directly to Netlify was not capable for my project.
                            </p>
                            <p>
                                After a few months I discovered a new free hosting platform, outside Heroku and combining Postman, called Render. Now the website is live on render while connected to MongoDB. 
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


export default {
    components: {
        LoadingScreen
    }

};
</script>
