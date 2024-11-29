<script setup lang="ts">
const props = defineProps<{
    name?: string
    href: string
}>()
</script>

<template>
    <a :href="props.href" class="section-heading">
        <h1>
            <slot>{{ props.name }}</slot>
        </h1>
    </a>
</template>

<style lang="scss">
.section-heading {
    @apply relative;
    @apply text-2xl md:text-3xl;
    @apply font-bold;

    h1 {
        @apply transition-[color] duration-75;
    }

    &::before {
        @apply content-['#'];
        @apply absolute;
        @apply top-0 -left-1;
        @apply -translate-x-full;
        @apply text-transparent;
        @apply transition-[color] duration-75;
    }

    &:hover,
    &:focus {
        &::before {
            @apply text-primary;
        }
    }
}
</style>
