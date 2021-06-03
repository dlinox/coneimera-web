<template>
  <div>
    <header-page
      imagen="/images/header-pages/concursos-banner.jpg"
      titulo="CONCURSOS"
    />
    <router-view />
  </div>
</template>

<script>
import HeaderPage from "../components/HeaderPage.vue";
export default {
  components: { HeaderPage },
  name: "CONCURSOS",
  metaInfo: {
    title: "CONCURSOS",
  },
  data: () => ({
    items_concursos_destreza: [
      {
        imagen: "/images/Concursos/programacion.jpeg",
        titulo: "Programacion",
        tipo: "destreza",
      },
      {
        imagen: "/images/Concursos/drones.jpeg",
        titulo: "Drones",
        tipo: "destreza",
      },
    ],
    items_concursos_investigacion: [
      {
        imagen: "/images/Concursos/concursopapers.jpeg",
        titulo: "Papers",
        tipo: "investigacion",
      },
      {
        imagen: "/images/Concursos/concursoproyectos.jpeg",
        titulo: "Proyectos",
        tipo: "investigacion",
      },
    ],
  }),
};
</script>

<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .9;
  position: absolute;
  width: 100%;
}
</style>