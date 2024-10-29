<script setup lang="ts">
import { useIntersectionObserver } from '@vueuse/core'

import { onUnmounted, ref } from 'vue'

import shuffle from '@/utils/shuffle'

import AppSection from '@/components/app/AppSection.vue'

import IconVue from '@/assets/images/vue.svg'
import IconNuxt from '@/assets/images/nuxt.svg'
import IconJS from '@/assets/images/js.svg'
import IconTS from '@/assets/images/ts.svg'
import IconHTML from '@/assets/images/html.svg'
import IconCSS from '@/assets/images/css.svg'

const list = ref<HTMLElement | null>(null)
const images = ref<{ alt: string; src: string }[]>([
    { alt: 'Vue.js', src: IconVue },
    { alt: 'Nuxt.js', src: IconNuxt },
    { alt: 'JavaScript', src: IconJS },
    { alt: 'TypeScript', src: IconTS },
    { alt: 'HTML', src: IconHTML },
    { alt: 'CSS', src: IconCSS }
])
const TIMEOUT = 2000
const intervalId = ref<number | null>(null)

const onShuffle = () => {
    images.value = shuffle(images.value)
}

const { stop: stopIntersectionObserver } = useIntersectionObserver(list, ([{ isIntersecting }]) => {
    if (isIntersecting) {
        intervalId.value = window.setInterval(onShuffle, TIMEOUT)
    } else if (intervalId.value) {
        clearInterval(intervalId.value)
    }
})

onUnmounted(() => {
    stopIntersectionObserver()
})
</script>

<template>
    <AppSection id="knowledge">
        <h1 class="mb-6">Technologies</h1>

        <TransitionGroup tag="ul" name="fade" ref="list">
            <li v-for="image in images" :key="image.alt">
                <img :src="image.src" :alt="image.alt" width="80" height="80" loading="lazy" />
            </li>
        </TransitionGroup>
    </AppSection>
</template>

<style lang="scss">
#knowledge {
    ul {
        @apply w-full;
        @apply flex flex-wrap items-center justify-center gap-4;
    }
}

.fade-move,
.fade-enter-active,
.fade-leave-active {
    transition: all 1.5s cubic-bezier(0.55, 0, 0.1, 1);
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: scaleY(0.01) translate(30px, 0);
}

.fade-leave-active {
    position: absolute;
}
</style>
