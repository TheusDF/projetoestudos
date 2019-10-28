<template>
  <!-- -------------------------- Navbar ----------------------------- !-->
  <q-layout view="hhh lpR fff">
    <q-header elevated class="bg-primary glossy text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title id="main-title" align="center">
          ControlMoney
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="center">
        <q-route-tab to="inicio" label="Inicio"/>
        <q-route-tab to="quem-somos" label="Quem Somos" />
        <q-route-tab to="conversor-de-moedas" label="Conversor de Moedas" />
      </q-tabs>
    </q-header>
    <!-- --------------------------------------------------------------------- !-->

    <!-- App.vue !-->
    <q-page-container class="img-all">
      <router-view class="img-background"/>
    </q-page-container>
    <!-- -------- !-->

    <!-- -------------------------- Footer ------------------------------------ !-->
    <q-layout view="hhh lpR fff">
      <q-footer elevated class="bg-black-8 glossy text-white">
        <q-toolbar>
          <q-toolbar-title id="main-footer-title" align="center">
            Desenvolvido por: Matheus da Fonseca
          </q-toolbar-title>
        </q-toolbar>
      </q-footer>
    </q-layout>
  </q-layout>
</template>
<!-- --------------------------------------------------------------------------- !-->

<script>
export default {
  name: 'MyLayout',

  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Big+Shoulders+Text&display=swap');
  #main-title{
    font-family: 'Big Shoulders Text', cursive;
    font-size: 50px;
    font-variant: small-caps;
    color: white;
  }
</style>
