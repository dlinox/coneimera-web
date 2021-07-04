<template>
  <div>
    <header-page
      imagen="/images/header-pages/embajadores-banner.jpg"
      titulo="EMBAJADORES"
    />

    <section style="background:#286972;"> 
      <v-container>
        <div class="titulo-container" id="destreza" name="destreza">
          <div class="separador"></div>
          <div class="titulo">NUESTROS EMBAJADORES</div>
        </div>
        <v-row justify="space-between">
          <v-col class="pa-4" cols="6" sm="4" md="4" v-for="(item, index) in items_embajadores" :key="index">
            <v-hover v-slot="{ hover }">
            <v-card>
              <v-img :src="item.imagen" class="align-end" >
                <v-expand-transition>
                      <div v-if="hover" class="d-flex transition-fast-in-fast-out primary darken-2 v-card--reveal text white--text" style="height: 100%;">
                        {{null}}
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
  name: "EMBAJADORES",
  metaInfo: {
    title: "EMBAJADORES",
  },
  data: () => ({
    items_embajadores: [
      {imagen:'/images/embajadores/Adriana-Moscoso.png'},
      {imagen:'/images/embajadores/Alain-Angeles.png'},
      {imagen:'/images/embajadores/Arturo-Chavesta.png'},
      {imagen:'/images/embajadores/Augusto-Vaca.png'},
      {imagen:'/images/embajadores/Carolina-Ramos.png'},
      {imagen:'/images/embajadores/D-angelo-Fernandez.png'},
      {imagen:'/images/embajadores/Dalia-De-La-Cruz.png'},
      {imagen:'/images/embajadores/Dany-Anaya.png'},
      {imagen:'/images/embajadores/Erick-Melo.png'},
      {imagen:'/images/embajadores/Francis-Vargas.png'},
      {imagen:'/images/embajadores/Helen-Neyra.png'},
      {imagen:'/images/embajadores/Julio-Murgueytio.png'},
      {imagen:'/images/embajadores/Julio-Vasquez.png'},
      {imagen:'/images/embajadores/Lucia-Cieza.png'},
      {imagen:'/images/embajadores/Luis-Dipaz.png'},
      {imagen:'/images/embajadores/Manuel-Alfaro.png'},
      {imagen:'/images/embajadores/Manuel-Santillana.png'},
      {imagen:'/images/embajadores/Marcelo-Fernandez.png'},
      {imagen:'/images/embajadores/Matheus-Vicente.png'},
      {imagen:'/images/embajadores/Mayra-Puedmag.png'},
      {imagen:'/images/embajadores/Monica-Jacome.png'},
      {imagen:'/images/embajadores/Ronnie-Padilla.png'},
      {imagen:'/images/embajadores/Yeidy-Llana.png'},
      {imagen:'/images/embajadores/Zedrix-Quispe.png'},
    ],
  }),
  created() {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  },
};
</script>
