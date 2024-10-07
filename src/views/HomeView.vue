<script setup lang="ts">
import AppHeader from '@/components/app/AppHeader.vue'
import AppMain from '@/components/app/AppMain.vue'
import AppFooter from '@/components/app/AppFooter.vue'

import SectionPreview from '@/components/sections/SectionPreview.vue'
</script>

<template>
  <AppHeader />

  <AppMain>
    <SectionPreview />
  </AppMain>

  <AppFooter />
</template>
