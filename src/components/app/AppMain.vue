<template>
    <main class="main">
        <div class="main__container">
            <slot></slot>
        </div>
    </main>
</template>

<style lang="scss">
.main {
    &__container {
        @apply container mx-auto;
        @apply px-6 md:px-8;
    }
}
</style>
