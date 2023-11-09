<template>
    <LoadingScreen />
       <section class="work-section" id="work">
                    <div class="work-container">
                        <div class="work-item reverse">
                            <div class="right">
                                <h3>EJS, NodeJs</h3>
                                <h1>Note Application</h1>
                                
                                <div class="text">
                                        <p>
                                            The <a href="https://duocase.onrender.com/" target="_blank">note app</a> is currently hosted on Render.
                                        </p>
                                    <p>
                                        For school I had to create a solution which helps students to ather evidence for their portfolio, and the solution was to create a note-app which
                                        generates texts based on the image you uploaded, and summarizes it. It's also able to record and transcribe as well as summarize the recording it uploaded. 
                                        This way the time to write down a summary for a portfolio is less. It also helps to create a startpoint for documentation.  
                                        I was responsible for the 'database' and adding images with text generator using tesseract.js
                                    </p>
                                    <p>
                                        For this project I had to store notes as well as projects, which means a 'database' was needed. Using NodeJS I was able to store files to their corresponded folders 
                                        as well as storing objects inside a json file. To display the data which is stored properly as well as less as possible files, I used EJS. 
                                        To my knowledge, it almost works the same as jinja, however ejs uses javascript as jinja works for python.
                                    </p>

                                </div>
                            </div>
                            <div class="left">
                                <img class="img" src="@/assets/img/note.gif">
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