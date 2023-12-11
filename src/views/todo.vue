<template>
    <LoadingScreen />

    <section class="work-section" id="work">
        <div class="work-container">
            <div class="work-item reverse">
                <div class="right">
                    <h3>ReactJS</h3>
                    <h1>Todo List</h1>
                    <div class="text">
                        <p>
                            The <a href="https://todo-list-2k6n.onrender.com/" target="_blank">todo list</a> is currently hosted on Render.
                        </p>
                        <p>
                            
                        </p>
                        

                    </div>

                </div>
                <div class="left">
                                        <img class="img" src="@/assets/img/todo.gif">

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