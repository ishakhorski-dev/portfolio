<script setup lang="ts">
import { RouterView } from 'vue-router'

import AppHeader from '@/components/app/AppHeader.vue'
import AppMain from '@/components/app/AppMain.vue'
import AppFooter from '@/components/app/AppFooter.vue'
import AppBackground from '@/components/app/AppBackground.vue'
</script>

<template>
    <AppBackground>
        <AppHeader />

        <AppMain>
            <RouterView />
        </AppMain>

        <AppFooter />
    </AppBackground>
</template>
