<script setup lang="ts">
import AppSection from '@/components/app/AppSection.vue'

import SectionHeading from '@/components/base/SectionHeading.vue'

interface Project {
    name: string;
    description: string;
}

const projects: Project[] = [
    {
        name: 'Predictive AI service',
        description: 'Development of the frontend for a web application with complex business logic. The application enables content personalization and provides automated predictive analytics scores for integration with existing marketing platforms, aiming to improve customer experience, sales, and loyalty.',
    },
    {
        name: 'Mentorship social network',
        description: 'The PWA to maintain group mentorship spaces relevant to user needs with different levels of user access, a lot of dynamic content (comments, answers, likes, notifications), and a large admin section for managing users/content or creating reports about interactions with the content.',
    },
    {
        name: 'Business Managing platform',
        description: 'The main objectives of the web app are company compliance with government regulations, effective management of the company, and time savings for the business owner',
    }
]
</script>

<template>
    <AppSection id="projects">
        <SectionHeading name="Projects" href="#projects" class="mb-6" />

        <ul>
            <li v-for="project in projects" :key="project.name">
                <h2> {{ project.name }} </h2>
                <p> {{ project.description }} </p>
            </li>
        </ul>
    </AppSection>
</template>

<style lang="scss">
#projects {
    ul {
        @apply w-full max-w-[800px];

        li + li {
            @apply mt-8;
        }
    }
}
</style>
