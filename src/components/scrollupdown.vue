<template>
    <div class="go-down-top-container">
        <div class="go-down-top"></div>
    </div>
</template>

<script>
export default {
    name: 'ScrollUpDown',
    mounted() {
        var goDownTop = document.querySelector('.go-down-top');

        function updateArrowDirection() {
            var currentPosition = window.pageYOffset;

            if (currentPosition > 0) {
                goDownTop.classList.add('changed');
            } else {
                goDownTop.classList.remove('changed');
            }
        }

        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

        function scrollToBottom() {
            window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: 'smooth'
            });
        }

        window.addEventListener('scroll', updateArrowDirection);

        goDownTop.addEventListener('click', function () {
            if (goDownTop.classList.contains('changed')) {
                scrollToTop();
            } else {
                scrollToBottom();
            }
        });
    }
}
</script>
