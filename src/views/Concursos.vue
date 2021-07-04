<template>
  <div>
    <header-page
      imagen="/images/header-pages/concursos-banner.jpg"
      titulo="CONCURSOS"
    />
    <section style="background:#286972;">
      <v-container>
        <div class="titulo-container" id="destreza" name="destreza">
          <div class="separador"></div>
          <div class="titulo">Concursos de Destreza</div>
        </div>

        
        <v-row justify="space-around" class="my-3">
          <v-col
            cols="12"

            sm="6"
            md="4"
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
                        <v-btn 
                          tile 
                          small 
                          color="pimario"
                          link
                          :to="item.mas_ruta"
                        > Ver Más </v-btn>
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

    
    <section style="background:#286972;">
      <v-container>
        <div class="titulo-container" id="investigacion" name="investigacion">
          <div class="separador"></div>
          <div class="titulo">Concursos de Investigación</div>
        </div>        

        <v-row justify="space-around" class="my-3">
          <v-col
            cols="12"
            sm="4"
            v-for="(item, index) in items_concursos_investigacion"
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
                        <v-btn
                          tile
                          small
                          color="pimario"
                          link
                          :to="item.mas_ruta"
                        >
                          Ver Más
                        </v-btn>
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
        mas_ruta: "/concurso-de-programacion",
      },
      {
        imagen: "/images/Concursos/drones.jpeg",
        titulo: "Drones",
        tipo: "destreza",
        mas_ruta: "/concurso-de-drones",
      },
      {
        imagen: "/images/Concursos/contractores.jpeg",
        titulo: "Contactores",
        tipo: "destreza",
        mas_ruta: "/concurso-de-contactadores",
      },
      {
        imagen: "/images/Concursos/disenioEstructural.jpeg",
        titulo: "Diseño Estructural",
        tipo: "destreza",
        
      },
      {
        imagen: "/images/Concursos/PLC.jpeg",
        titulo: "PLC",
        tipo: "destreza",
        mas_ruta:"/concurso-de-programacion-en-plc"
      },
      {
        imagen: "/images/Concursos/conocimientos.jpeg",
        titulo: "Conocimientos",
        tipo: "destreza",
        mas_ruta:"/concurso-de-conocimientos"
      },

    ],
    items_concursos_investigacion: [
      {
        imagen: "/images/Concursos/paper.jpeg",
        titulo: "Papers",
        tipo: "investigacion",
        mas_ruta: "/concurso-de-papers",
      },
      {
        imagen: "/images/Concursos/proyecto.jpeg",
        titulo: "Proyectos",
        tipo: "investigacion",
        mas_ruta: "/concurso-de-proyectos",
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

.Cvideo{
  width: 75%;
}

@media (max-width: 960px) {
  .Cvideo{
    width: 100%;
  }
}
</style>