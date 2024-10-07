<script setup lang="ts">
import IconLogo from '@/components/icons/IconLogo.vue'
</script>

<template>
    <header class="header">
        <div class="header__container">
            <IconLogo />
        </div>
    </header>
</template>

<style lang="scss">
.header {
    &__container {
        @apply container mx-auto;
    }
}
</style>
