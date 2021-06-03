<template>
  <div>
    <header-page
      imagen="/images/header-pages/minicursos-banner.jpg"
      titulo="MINICURSOS"
    />

    <sin-contenido />
  </div>
</template>

<script>
import HeaderPage from "../components/HeaderPage.vue";
import SinContenido from "../components/SinContenido.vue";
export default {
  components: { HeaderPage, SinContenido },
  name: "MINICURSOS",
  metaInfo: {
    title: "MINICURSOS",
  },
  created() {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  },
};
</script>

<style>
</style>