<script setup lang="ts">
import AppSection from '@/components/app/AppSection.vue'

import BaseHeading from '@/components/base/BaseHeading.vue'

import IconVue from '@/assets/images/vue.svg'
import IconNuxt from '@/assets/images/nuxt.svg'
import IconJS from '@/assets/images/js.svg'
import IconTS from '@/assets/images/ts.svg'
import IconHTML from '@/assets/images/html.svg'
import IconCSS from '@/assets/images/css.svg'

interface Image {
    alt: string
    src: string
}

const images: Image[] = [
    { alt: 'Vue.js', src: IconVue },
    { alt: 'Nuxt.js', src: IconNuxt },
    { alt: 'JavaScript', src: IconJS },
    { alt: 'TypeScript', src: IconTS },
    { alt: 'HTML', src: IconHTML },
    { alt: 'CSS', src: IconCSS }
]
</script>

<template>
    <AppSection id="technologies">
        <BaseHeading name="Technologies" href="#technologies" class="mb-6" />

        <ul>
            <li v-for="image in images" :key="image.alt">
                <img :src="image.src" :alt="image.alt" width="80" height="80" loading="lazy" />
            </li>
        </ul>
    </AppSection>
</template>

<style lang="scss">
#technologies {
    ul {
        @apply w-full;
        @apply flex flex-wrap items-center justify-center gap-4;
    }
}
</style>
