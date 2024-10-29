<script setup lang="ts">
import AppSection from '@/components/app/AppSection.vue'

const vTypewrite = {
    beforeMount(el: HTMLElement, binding: { value: string, arg: number }) {
        const text: string = binding.value || el.textContent || '';
        const speed: number = Number(binding.arg) || 100;
        let index: number = 0;

        el.textContent = '';

        function type() {
            if (index < text.length) {
                el.textContent += text.charAt(index);
                index++;
                setTimeout(type, speed);
            }
        }

        type();
    }
};
</script>

<template>
    <AppSection id="preview">
        <h1 v-typewrite:80="'Hello, my name is Ivan Shakhorski and I do code!'" class="mb-6"></h1>

        <p class="mb-2">
            I am a software engineer with extensive experience in web development, specializing in frontend technologies.
            <br/>
            My focus is on building robust and scalable architectures within the Vue.js framework, consistently delivering high-performance solutions aligned with business objectives.
            <br />
        </p>

        <p class="mb-8">Let's build something amazing together!</p>

        <a class="btn btn--primary" href="#contact">Get In Touch</a>
    </AppSection>
</template>

<style lang="scss">
#preview {
    h1, p {
        @apply text-center;
    }

    h1 {
        @apply max-w-[600px];
        @apply text-3xl md:text-4xl;
    }

    p {
        @apply max-w-[800px];
    }
}
</style>
