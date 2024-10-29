<template>
    <section class="section">
        <slot></slot>
    </section>
</template>

<style lang="scss">
.section {
    @apply flex flex-col items-center justify-center;
    @apply py-8 md:py-14;

    h1 {
        @apply text-2xl md:text-3xl font-bold;
    }

    h2 {
        @apply text-lg md:text-xl font-bold;
    }

    p {
        @apply text-base md:text-lg;
    }
}

@keyframes fade {
    from {
        opacity: 0;
    }
}

@media (prefers-reduced-motion: no-preference) {
    .section {
        animation: fade linear both;
        animation-timeline: view();
        animation-range: 10vh 30vh;
    }
}
</style>
