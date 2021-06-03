<template>
  <section>
    <v-container>
      <div class="titulo-container" >
        <div class="separador"></div>
        <div class="titulo">Concursos de Destreza</div>
      </div>

      <v-row justify="space-between" class="my-3">
        <v-col
          cols="12"
          sm="4"
          v-for="(item, index) in items_concursos_destreza"
          :key="index"
        >
          <v-hover v-slot="{ hover }">
            <v-card
              class="mx-auto"
              color="grey lighten-4"
              max-width="450"
              dark
              :elevation="hover ? 5 : 1"
            >
              <v-img :src="item.imagen">
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out primary darken-2 v-card--reveal text-center"
                    style="height: 100%"
                  >
                    <div>
                      <div class="text-h5 mb-3">{{ item.titulo }}</div>
                      <v-btn tile small color="pimario"> Ver Más </v-btn>
                    </div>
                  </div>
                </v-expand-transition>
              </v-img>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </section>
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
  opacity: 0.9;
  position: absolute;
  width: 100%;
}
</style>