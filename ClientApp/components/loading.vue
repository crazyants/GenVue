<template>
    <div class="loader"></div>
</template>

<script>
    export default {
        name: 'loading'
    }
</script>

<style scoped>
    .loader {
        border: 20px solid #f3f3f3;
        border-top: 20px solid #3498db;
        border-radius: 50%;
        width: 150px;
        height: 150px;
        animation: spin 2s linear infinite;
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }
</style>
