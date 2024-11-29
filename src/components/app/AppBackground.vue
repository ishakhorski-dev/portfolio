<template>
    <div class="app-background">
        <slot></slot>
    </div>
</template>

<style lang="scss">
@keyframes bg-scrolling-reverse {
    100% {
        background-position: 50px 50px;
    }
}

.app-background {
    background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAIAAACRXR/mAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAABnSURBVHja7M5RDYAwDEXRDgmvEocnlrQS2SwUFST9uEfBGWs9c97nbGtDcquqiKhOImLs/UpuzVzWEi1atGjRokWLFi1atGjRokWLFi1atGjRokWLFi1af7Ukz8xWp8z8AAAA//8DAJ4LoEAAlL1nAAAAAElFTkSuQmCC')
        repeat 0 0;
    animation: bg-scrolling-reverse 2s infinite linear;
}
</style>
