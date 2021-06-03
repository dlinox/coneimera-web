<template>
  <div>
    <header-page
      imagen="/images/header-pages/ponencia-banner.jpg"
      titulo="PONENCIAS"
    />
    <sin-contenido />
  </div>
</template>

<script>
import HeaderPage from "../components/HeaderPage.vue";
import SinContenido from "../components/SinContenido.vue";
export default {
  components: { HeaderPage, SinContenido },
  name: "PONENCIAS",
  metaInfo: {
    title: "PONENCIAS",
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