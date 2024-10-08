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
        @apply px-4 md:px-6;
    }
}
</style>
