<script setup lang="ts">
const { gtag, grantConsent, revokeConsent } = useGtag()
</script>

<template>
  <button @click="grantConsent()">
    Accept Tracking
  </button>
</template>
