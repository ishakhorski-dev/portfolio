<script setup lang="ts">
import SOCIAL_LINK from '@/constants/social-link'

import AppSection from '@/components/app/AppSection.vue'

import SectionHeading from '@/components/base/SectionHeading.vue';

import IconMail from '@/components/icons/IconMail.vue'
import IconLinkedIn from '@/components/icons/IconLinkedIn.vue'
</script>

<template>
    <AppSection id="contact">
        <SectionHeading name="Contact" href="#contact" class="mb-6" />

        <div class="contact__card">
            <p class="mb-6">
                Feel free to reach out to me via Email or LinkedIn.
                <br />
                I look forward to hearing from you!
            </p>

            <ul>
                <li>
                    <a :href="`mailto:${SOCIAL_LINK.EMAIL}`" aria-label="Email" class="link mb-2">
                        <IconMail :size="24" />
                        {{ SOCIAL_LINK.EMAIL }}
                    </a>
                </li>

                <li>
                    <a
                        :href="SOCIAL_LINK.LINKED_IN"
                        target="_blank"
                        aria-label="LinkedIn"
                        class="link"
                    >
                        <IconLinkedIn :size="24" />
                        LinkedIn
                    </a>
                </li>
            </ul>
        </div>
    </AppSection>
</template>

<style lang="scss">
#contact {
    .contact__card {
        @apply w-full max-w-[600px];
        @apply rounded-lg;
        @apply bg-white/5 dark:bg-black/5;
        @apply border border-black/10 dark:border-white/10;
        @apply text-base md:text-lg;
        @apply p-6 md:p-8;
        @apply backdrop-blur-sm;
        @apply shadow-md shadow-black/5 dark:shadow-white/5;
    }
}
</style>
