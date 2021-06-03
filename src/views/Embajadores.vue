<template>
  <div>
    <header-page
      imagen="/images/header-pages/embajadores-banner.jpg"
      titulo="EMBAJADORES"
    />

    <section>
      <v-container>
        <div class="titulo-container" id="destreza" name="destreza">
          <div class="separador"></div>
          <div class="titulo">NUESTROS EMBAJADORES</div>
        </div>
        <v-row justify="space-between">
          <v-col cols="6" sm="4" md="3" v-for="(item, index) in items_embajadores" :key="index">
            <v-card>
              <v-img :src="item.imagen" ></v-img>
            </v-card>

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
      {imagen:'/images/embajadores/Adriana.png'},
      {imagen:'/images/embajadores/Alain.png'},
      {imagen:'/images/embajadores/Augusto.png'},
      {imagen:'/images/embajadores/Carolina.png'},
      {imagen:'/images/embajadores/D_angelo.png'},
      {imagen:'/images/embajadores/Dany.png'},
      {imagen:'/images/embajadores/Erick.png'},
      {imagen:'/images/embajadores/Francis.png'},
      {imagen:'/images/embajadores/Helen.png'},
      {imagen:'/images/embajadores/Julio.png'},
      {imagen:'/images/embajadores/Lucia.png'},
      {imagen:'/images/embajadores/Luis.png'},
      {imagen:'/images/embajadores/Manuel_1.png'},
      {imagen:'/images/embajadores/Manuel.png'},
      {imagen:'/images/embajadores/Matheus.png'},
      {imagen:'/images/embajadores/Mayra.png'},
      {imagen:'/images/embajadores/Mónica.png'},
      {imagen:'/images/embajadores/Ronnie.png'},
      {imagen:'/images/embajadores/Yeidi.png'},
      {imagen:'/images/embajadores/Zedrix.png'},
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

<style>
</style>