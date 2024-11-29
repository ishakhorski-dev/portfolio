<script setup lang="ts">
const props = withDefaults(
    defineProps<{
        as?: keyof HTMLElementTagNameMap
    }>(),
    {
        as: 'div'
    }
)
</script>

<template>
    <component :is="props.as" class="base-card">
        <slot></slot>
    </component>
</template>

<style lang="scss">
.base-card {
    @apply rounded-lg;
    @apply bg-white/5 dark:bg-black/5;
    @apply border border-black/10 dark:border-white/10;
    @apply text-base md:text-lg;
    @apply p-6 md:p-8;
    @apply backdrop-blur-[2px];
    @apply shadow-md shadow-black/5 dark:shadow-white/5;
}
</style>
