<template>
    <div id="loader"></div>

</template>

<style>
#loader {
    background-color: #6853f1;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    animation: slideOut 1s forwards;
}


@keyframes slideOut {
    0% {
        transform: translateX(0%);
    }
    50%{
        transform: translate(0%);
    }
    100% {
        transform: translateX(100%);
    }
}
</style>
