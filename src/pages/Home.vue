<template>
  <q-page class="flex flex-center">
    <q-card
      class="my-card text-white"
      style="background: radial-gradient(circle, #8f7474 0%, #292525 100%)"
    >
      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-card-section>
        {{ lorem }}
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  }

}
</script>

<style scoped>
  .img-background {
    background-image: url('../statics/fundo.jpg');
    background-repeat: no-repeat;
    background-size:100%;
    bottom: 0;
    color: black;
    left: 0;
    overflow: auto;
    padding: 3em;
    position: absolute;
    right: 0;
    top: -1px;
    background-size: cover;
  }
</style>
