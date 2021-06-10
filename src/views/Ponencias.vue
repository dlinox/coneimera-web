<template>
<div>
  <header-page
    imagen="/images/header-pages/concursos-banner.jpg"
    titulo="PONENCIAS"
  />
  <section>
    <v-container>
      <div class="titulo-container" id="destreza" name="destreza">
        <div class="separador"></div>
        <div class="titulo">Ponencias</div>
      </div>

      <v-row justify="space-around">
          <v-col md="6" v-for="(item,index) in items" :key="index">

              <v-card class="ponencias-card">
                <v-img :src="item.imagen" width="100%" ></v-img>

                <h1 class="ponencias-titulo">
                    {{item.titulo}}
                </h1>

                <v-card-subtitle class="ponencias-text2">
                  {{item.texto2}}
                </v-card-subtitle>
                <h4 v-if="item.texto3 !== null" class="areas">{{item.areas}}</h4>
                <h4 v-else class="areas"><br></h4>
        

                <v-card-subtitle v-if="item.texto3 !== null" class="ponencias-text2">
                  {{item.texto3}}
                </v-card-subtitle>
                 <v-card-subtitle v-else class="ponencias-text2">
                  <br>
                </v-card-subtitle>

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
  name: "PONENCIAS",
  metaInfo: {
    title: "PONENCIAS",
  },
  data: () => ({
    items: [
      {
        imagen: "/images/banner-1.jpg",
        titulo:"CONFERENCIAS MAGISTRALES",
        texto2: "Formarán parte esencial del evento y estarán a cargo de destacadas personalidades. En total serán 4 conferencias magistrales de ponentes que cuentan con una renombrada trayectoria en el ámbito del desarrollo tecnológico e investigativo de las diferentes áreas que abarca el CONEIMERA",
        areas:"ÁREAS:",
        texto3:"MECÁNICA - MECATRÓNICA - ELÉCTRICA - ELECTRÓNICA - RAMAS AFINES",
      },
      {
        imagen: "/images/banner-1.jpg",
        titulo:"CONFERENCIAS INTERNACIONALES",
        texto2: "Se realizarán las ponencias internacionales de la mano de profesionales internacionales contactados a partir de los convenios obtenidos a partir del ANEIMERA (ASME, IEEE). Se darán 15 conferencias internacionales distribuidas en las diferentes áreas que abarca el CONEIMERA",
        areas:null,
        texto3:null,
      },
      {
        imagen: "/images/banner-1.jpg",
        titulo:"CONFERENCIAS NACIONALES",
        texto2: "Formarán parte esencial del evento y estarán a cargo de destacadas personalidades. En total serán 4 conferencias magistrales de ponentes que cuentan con una renombrada trayectoria en el ámbito del desarrollo tecnológico e investigativo de las diferentes áreas que abarca el CONEIMERA",
        areas:"ÁREAS:",
        texto3:"MECÁNICA - MECATRÓNICA - ELÉCTRICA - ELECTRÓNICA - RAMAS AFINES",
      },
      {
        imagen: "/images/banner-1.jpg",
        titulo:"MESAS REDONDAS",
        texto2: "Con el objetivo de poder dar una orientación adecuada a los asistentes sobre temas fundamentales relacionados a la realidad nacional, desarrollo tecnológico, científico, industrial, etc., se reunirá a profesionales de distintas instituciones, empresas, universidades y otros, para que puedan dar su punto de vista y debatir sobre áreas específicas y proponer soluciones, dando así un mejor panorama de la realidad a los asistentes",
        areas:"",
        texto3:"",
      },

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
.ponencias-card {
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 20px;
  box-shadow: none !important;
  border: solid 0.5px #b6b6b652 !important;
  text-align: center !important;
}

.ponencias-titulo {
  margin-top: 20px;
  font-size: 16px;
}

.ponencias-text2 {
  font-size: 14px;
}
</style>