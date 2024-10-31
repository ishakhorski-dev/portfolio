<script setup lang="ts">
import SOCIAL_LINK from '@/constants/social-link'

import IconMail from '@/components/icons/IconMail.vue'
import IconLinkedIn from '@/components/icons/IconLinkedIn.vue'
import IconGitHub from '@/components/icons/IconGitHub.vue'
</script>

<template>
    <footer class="footer">
        <div class="footer__container">
            <div class="footer__content mb-4">
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

            <p class="footer__sign">Ivan Shakhorski &copy; 2024</p>
        </div>
    </footer>
</template>

<style lang="scss">
.footer {
    &__container {
        @apply container mx-auto;
        @apply px-6 md:px-8 py-10 md:py-14;
    }

    &__text {
        @apply text-xl font-medium;
    }

    &__content {
        @apply flex items-center justify-between gap-2;
    }

    &__sign {
        @apply text-sm;
    }
}
</style>
