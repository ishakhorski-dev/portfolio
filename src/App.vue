<script setup lang="ts">
import { RouterView } from 'vue-router'

import AppHeader from '@/components/app/AppHeader.vue'
import AppMain from '@/components/app/AppMain.vue'
import AppFooter from '@/components/app/AppFooter.vue'
</script>

<template>
    <AppHeader />

    <AppMain>
        <RouterView />
    </AppMain>

    <AppFooter />
</template>
