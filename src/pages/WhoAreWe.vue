<template>
    <q-page class="full-width row inline wrap justify-center items-center content-center" style="top: -1px; background: radial-gradient(circle, #8f7474 0%, #292525 100%)">
      <div class="q-pa-md row items-start q-gutter-md" style="margin-right: 500px; margin-top: 60px; ">
        <q-card class="my-card">
        <q-card-section>
          <img alt="Card image cap" class="card-img-top img-fluid" src="../statics/mulher678_640.jpg" />
        </q-card-section>
        </q-card>
      </div>
    </q-page>
</template>

<script>
export default {
  name: 'WhoAreWe',
  data () {
    return {
      leftDrawerOpen: true,
      drawer: 'x',
      miniState: false,
      lorem: 'ipsum lorem dor abmunt admut alis oero pmnae',
      editPhoto: false
    }
  },
  methods: {
    alertar () {
      alert('Teste!')
    }
  }
}
</script>

<style scoped>
    .img-background{
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
