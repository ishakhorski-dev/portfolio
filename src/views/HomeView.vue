<script setup lang="ts">
import AppHeader from '@/components/app/AppHeader.vue'
import AppMain from '@/components/app/AppMain.vue'
import AppFooter from '@/components/app/AppFooter.vue'

import SectionIntroduction from '@/components/sections/SectionIntroduction.vue'
import SectionKnowledge from '@/components/sections/SectionKnowledge.vue'
import SectionExperience from '@/components/sections/SectionExperience.vue'
import SectionContact from '@/components/sections/SectionContact.vue'
</script>

<template>
    <AppHeader />

    <AppMain>
        <SectionIntroduction class="mb-8" />

        <SectionKnowledge class="my-8" />

        <SectionExperience class="my-8" />

        <SectionContact class="my-8" />
    </AppMain>

    <AppFooter />
</template>
