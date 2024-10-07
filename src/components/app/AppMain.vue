<template>
    <main class="main">
        <div class="main__container">
            <slot></slot>
        </div>
    </main>
</template>

<style>
.main {
    &__container {
        @apply container mx-auto;
    }
}
</style>
