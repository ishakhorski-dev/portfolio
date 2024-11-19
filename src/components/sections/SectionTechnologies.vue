<script setup lang="ts">
import {  ref } from 'vue'

import AppSection from '@/components/app/AppSection.vue'

import SectionHeading from '@/components/base/SectionHeading.vue'

import IconVue from '@/assets/images/vue.svg'
import IconNuxt from '@/assets/images/nuxt.svg'
import IconJS from '@/assets/images/js.svg'
import IconTS from '@/assets/images/ts.svg'
import IconHTML from '@/assets/images/html.svg'
import IconCSS from '@/assets/images/css.svg'

const images = ref<{ alt: string; src: string }[]>([
    { alt: 'Vue.js', src: IconVue },
    { alt: 'Nuxt.js', src: IconNuxt },
    { alt: 'JavaScript', src: IconJS },
    { alt: 'TypeScript', src: IconTS },
    { alt: 'HTML', src: IconHTML },
    { alt: 'CSS', src: IconCSS }
])
</script>

<template>
    <AppSection id="technologies">
        <SectionHeading name="Technologies" href="#technologies" class="mb-6" />

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
