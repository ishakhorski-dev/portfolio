<script setup lang="ts">
import AppSection from '@/components/app/AppSection.vue'

import BaseHeading from '@/components/base/BaseHeading.vue'
import BaseCard from '@/components/base/BaseCard.vue'

interface Project {
    name: string
    description: string
}

const projects: Project[] = [
    {
        name: 'Service for Predictive AI Marketing optimization',
        description:
            'I was responsible for the development of the frontend part for a service that allows users to upload their data, train a model, and get predictions. The main goal was to make the service user-friendly and easy to use for people without a technical background.'
    },
    {
        name: 'Social Network for Mentorship',
        description:
            'I was responsible for the development of the frontend part for a social network that connects mentors and mentees. The platform allows users to create profiles, connect with others, schedule meetings, comment and react to posts.'
    },
    {
        name: 'Platform fo Buisness Management',
        description:
            'I was responsible for the development of the frontend part for a platform that allows users to manage their business. The platform includes features like managing employees, contracts, sign documents, and more.'
    }
]
</script>

<template>
    <AppSection id="projects">
        <BaseHeading name="Projects" href="#projects" class="mb-6" />

        <ul>
            <BaseCard as="li" v-for="project in projects" :key="project.name">
                <h2 class="mb-2">{{ project.name }}</h2>
                <p>{{ project.description }}</p>
            </BaseCard>
        </ul>
    </AppSection>
</template>

<style lang="scss">
#projects {
    ul {
        @apply w-full max-w-[1080px];
        @apply grid lg:grid-flow-col gap-4;
    }
}
</style>
