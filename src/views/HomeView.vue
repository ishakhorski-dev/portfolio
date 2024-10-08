<script setup lang="ts">
import AppHeader from '@/components/app/AppHeader.vue'
import AppMain from '@/components/app/AppMain.vue'
import AppFooter from '@/components/app/AppFooter.vue'

import SectionIntroduction from '@/components/sections/SectionIntroduction.vue'
// import SectionContacts from '@/components/sections/SectionContacts.vue'
</script>

<template>
  <AppHeader />

  <AppMain>
    <SectionIntroduction class="mb-6" />

    <!-- <SectionContacts /> -->
  </AppMain>

  <AppFooter />
</template>
