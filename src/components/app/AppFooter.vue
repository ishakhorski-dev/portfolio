<script setup lang="ts">
import SOCIAL_LINK from '@/constants/social-link'

import IconMail from '@/components/icons/IconMail.vue'
import IconLinkedIn from '@/components/icons/IconLinkedIn.vue'
import IconGitHub from '@/components/icons/IconGitHub.vue'
</script>

<template>
    <footer class="footer">
        <div class="footer__container">
            <div class="flex items-center justify-between gap-2 mb-4">
                <a :href="`mailto:${SOCIAL_LINK.EMAIL}`" aria-label="Email" class="link mb-2">
                    <IconMail :size="24" />
                    {{ SOCIAL_LINK.EMAIL }}
                </a>

                <div class="flex items-center gap-2">
                    <a :href="SOCIAL_LINK.GIT_HUB" target="_blank" aria-label="GitHub" class="link">
                        <IconGitHub :size="22" />
                    </a>

                    <a
                        :href="SOCIAL_LINK.LINKED_IN"
                        target="_blank"
                        aria-label="LinkedIn"
                        class="link"
                    >
                        <IconLinkedIn :size="24" />
                    </a>
                </div>
            </div>

            <p>Ivan Shakhorski &copy; 2024</p>
        </div>
    </footer>
</template>

<style lang="scss">
.footer {
    &__container {
        @apply container mx-auto;
        @apply px-4 md:px-6 py-8 md:py-10;
    }

    p {
        @apply text-sm;
    }
}
</style>
