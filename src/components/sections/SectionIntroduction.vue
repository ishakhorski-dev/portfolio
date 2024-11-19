<script setup lang="ts">
import AppSection from '@/components/app/AppSection.vue'

import SectionHeading from '@/components/base/SectionHeading.vue'

import useTypewrite from '@/composables/useTypewrite'

const { vTypewrite } = useTypewrite()
</script>

<template>
    <AppSection id="preview">
        
        <SectionHeading name="Technologies" href="#preview" class="mb-6">
            <span v-typewrite:80="'Hello, my name is Ivan Shakhorski and I do code!'"></span>
        </SectionHeading>

        <p class="mb-2">
            I am a software engineer with extensive experience in web development, specializing in
            frontend technologies.
            <br />
            My focus is on building robust and scalable architectures within the Vue.js framework,
            consistently delivering high-performance solutions aligned with business objectives.
            <br />
        </p>

        <p class="mb-8">Let's build something amazing together!</p>

        <a class="btn btn--primary" href="#contact">Get In Touch</a>
    </AppSection>
</template>

<style lang="scss">
#preview {
    h1,
    p {
        @apply text-center;
    }

    h1 {
        @apply max-w-[600px] min-h-[8rem];
        @apply text-3xl md:text-4xl;
    }

    p {
        @apply max-w-[800px];
    }
}
</style>
