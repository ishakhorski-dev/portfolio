<script setup lang="ts">
import SOCIAL_LINK from '@/constants/social-link'

import AppSection from '@/components/app/AppSection.vue'

import BaseHeading from '@/components/base/BaseHeading.vue'
import BaseCard from '@/components/base/BaseCard.vue'

import IconMail from '@/components/icons/IconMail.vue'
import IconLinkedIn from '@/components/icons/IconLinkedIn.vue'
</script>

<template>
    <AppSection id="contact">
        <BaseHeading name="Contact" href="#contact" class="mb-6" />

        <BaseCard class="contact__card">
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
        </BaseCard>
    </AppSection>
</template>

<style lang="scss">
#contact {
    .contact__card {
        @apply w-full max-w-[600px];
    }
}
</style>
