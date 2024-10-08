<script setup lang="ts">
import AppSection from '@/components/app/AppSection.vue'
</script>

<template>
    <AppSection id="contacts">
        <h1>Contacts</h1>
    </AppSection>
</template>

<style lang="scss">
#contacts {
    @apply flex flex-col items-center justify-center;
    @apply py-2;

    h1 {
        @apply text-2xl md:text-3xl font-bold;
    }
}
</style>
