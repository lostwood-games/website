<script setup lang="ts">
const { grantConsent, revokeConsent } = useGtag()

const isAnswered: Ref<boolean> = ref(document.cookie.includes('_ga='));

function accept() {
  grantConsent();
  isAnswered.value = true;
}

function decline() {
  revokeConsent();
  isAnswered.value = true;
}
</script>

<template>
  <div id="cookie-bar" v-if="isAnswered === false">
    <h1>We care about your privacy</h1>
    <p>We use cookies and similar technologies to provide the best experience on our website. <NuxtLink
        to="privacy-policy">Privacy
        Policy</NuxtLink>
    </p>
    <button class="concent-button" @click="accept()">
      Ok
    </button>
    <button class="concent-button" style="margin-top: 10px" @click="decline()">
      No Thanks
    </button>
  </div>
</template>

<style lang="scss">
#cookie-bar {
  position: fixed;
  z-index: 999;
  bottom: 0;
  left: 0px;
  width: 100%;
  height: auto;
  background-color: white;
  color: black;
  border: 1px solid black;
  border-radius: 2px;
  display: flex;
  flex-direction: column;

  h1 {
    margin: 10px;
  }

  p {
    margin: 10px;
  }

  .concent-button {
    background-color: white;
    padding: 10px;
    font-size: 1.1em;
    margin: 10px;
  }
}
</style>
