<script setup lang="ts">
import IconLogo from '@/components/icons/IconLogo.vue'
</script>

<template>
    <header class="header">
        <div class="header__container">
            <IconLogo />

            <nav class="nav">
                <RouterLink to="/" active-class="link--active" class="link">About me</RouterLink>
            </nav>
        </div>
    </header>
</template>

<style lang="scss">
.header {
    &__container {
        @apply container mx-auto;
        @apply flex justify-between items-center;
        @apply px-6 md:px-8 py-6 md:py-8;
    }

    .nav {
        @apply flex gap-4;
        @apply text-lg font-medium;
    }
}
</style>
