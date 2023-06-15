<template>
    <header id="top" class="header">
        <div class="logo"></div>
        <nav class="nav">
            <div>
                <ul id="nav">
                    <li>
                        <router-link to="/">Work</router-link>
                    </li>
                    <li>
    <a @click="openPDF" href="#">CV</a>
                    </li>

                </ul>
            </div>
            <div class="menu" id="menu">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'AppHeader',
    methods: {
        openPDF() {
            const pdfUrl = '/files/CV.pdf';
            window.open(pdfUrl, '_blank');
        },

    },
    mounted() {
        const navigation = document.getElementById("nav");
        const menu = document.getElementById("menu");

        menu.addEventListener("click", () => {
            navigation.style.setProperty("--childenNumber", navigation.children.length);
            navigation.classList.toggle("active");
            menu.classList.toggle("active");
        });
    }
}
</script>