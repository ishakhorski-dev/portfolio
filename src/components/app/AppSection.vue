<template>
    <section class="section">
        <slot></slot>
    </section>
</template>

<style lang="scss">
.section {
    @apply flex flex-col items-center justify-center;
    @apply py-8 md:py-14;

    h2 {
        @apply text-lg md:text-xl font-bold;
    }

    p {
        @apply text-base md:text-lg;
    }
}
</style>
