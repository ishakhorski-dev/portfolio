<script setup lang="ts">
import AppSection from '@/components/app/AppSection.vue'

import SectionHeading from '@/components/base/SectionHeading.vue'
</script>

<template>
    <AppSection id="experience">
        <SectionHeading name="Experience" href="#experience" class="mb-6" />

        <ul>
            <li>
                <h2 class="mb-1">
                    Frontend Developer at
                    <a href="https://innowise.com/" target="_blank" class="link">Innowise.com</a>
                </h2>
                <p>
                    As a Frontend Engineer at
                    <a href="https://innowise.com/" target="_blank" class="link">Innowise.com</a>, I
                    was responsible for developing and maintaining web applications for various
                    clients. I had a chance to work on projects in different domains, such as
                    e-commerce, government, machine-learning and marketing. My primary focus was on
                    building robust and scalable architectures within the Vue.js framework,
                    consistently delivering high-performance solutions aligned with business
                    objectives. I was also responsible for mentoring interns and junior developers,
                    conducting code reviews and providing technical guidance to the team.
                </p>
            </li>
        </ul>
    </AppSection>
</template>

<style lang="scss">
#experience {
    ul {
        @apply w-full max-w-[800px];
    }
}
</style>
