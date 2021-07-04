<template>
<div>
  <header-page
    imagen="/images/header-pages/concursos-banner.jpg"
    titulo="PONENCIAS"
  />
  <section style="background:#286972;">
    <v-container>
      <div class="titulo-container" id="destreza" name="destreza">
        <div class="separador"></div>
        <div class="titulo">Ponencias</div>
      </div>

      <v-row justify="space-around">
          <v-col md="6" v-for="(item,index) in items" :key="index">
  
              <v-card class="ponencias-card" style="margin-top:20px;" > 

                <v-img :src="item.imagen" width="100%"></v-img>
                <div class="grow" style="background:white !important; color:white; text-align:left; ">
                  <div style="display:flex" class="tituloPonencias">
                  <div  style="width:100%;">
                    <h1 > {{item.titulo}} </h1> 
                  </div >
                  <div style="padding-top:10px; padding-right:25px"  >
                      <v-icon aria-hidden="false" style="color:white;">
                        mdi-chevron-down
                      </v-icon>
                  </div>
                  </div>
                  
                  
                  <div style="border-left: solid 10px #000000d2; margin-left:20px; margin-bottom:0px;">
                            <v-card-text class="ponencias-text2" style="font-size:14px">
                            {{item.texto2}}
                          </v-card-text>             
                  </div>
                   
                </div>
           
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
        texto2: "Profesionales con un alto grado de especialización brindaran una disertación sobre los diferentes temas de interés del XXVII CONEIMERA. Son exposiciones con alto contenido especializado y de investigación exhaustiva. El especialista es el que tendrá la palabra en toda la exposición y al finalizar los asistentes podrán hacer preguntas.",
      },
      {
        imagen: "/images/banner-1.jpg",
        titulo:"CONFERENCIAS INTERNACIONALES",
        texto2: "Profesionales representantes de instituciones y universidades internacionales expondrán temas y problemáticas de interés común, al finalizar se buscará soluciones por consenso. El especialista es el que tendrá la palabra en toda la exposición y al finalizar los asistentes podrán hacer preguntas.",
        areas:null,
        texto3:null,
      },

      {
        imagen: "/images/banner-1.jpg",
        titulo:"MESA REDONDA",
        texto2: "La mesa redonda es una dinámica en la que diferentes profesionales tendrán la misma oportunidad de argumentar sus puntos de vistas sobre un tema en específico referido a la temática del XXVII CONEIMERA. Aquí no existirá un grado de importancia o jerarquía entre los que la conforman, puesto que cada uno tendrán los mismos derechos de participación y se buscará soluciones para un consenso en el tema tratado",
        areas:null,
        texto3:null,
      },
      {
        imagen: "/images/banner-1.jpg",
        titulo:"FORO",
        texto2: "El foro se desarrollará con énfasis en un tema propuesto por el XXVII CONEIMERA, con representantes estudiantes y egresados de diferentes universidades a nivel nacional e internacional, donde conversarán en torno a un tema de interés común, con base en un contenido de interés general que origine una discusión.",
        areas:null,
        texto3:null,
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
  text-align: center !important;

}

.ponencias-titulo {
  margin-top: 20px;
  font-size: 15px;
}

.ponencias-text2 {
  font-size: 14px;
  text-align: justify;
  color: black;
}

.grow {
  height: 60px;
  width: 100%;
  float: left;
  position: relative;
  transition: height 0.5s;
  -webkit-transition: height 0.5s;
  overflow: hidden;
 
}
.grow:hover {
  height: 225px;
}
.tituloPonencias{
 height:60px; 
 background: #000000d2;
 padding-left:25px; 
 padding-top:10px; 
 
}


@media (max-width: 580px) {
  .grow:hover {
    height: 100%;
  }
  .tituloPonencias {
    margin-top: 0px;
    height: 100%;
    font-size:12px;
    margin-bottom: -4px;
  }
}
@media (max-width: 960px) {
  .tituloPonencias {
    margin-top: 0px;
    font-size:12px;
    margin-bottom: -4px;
  }
}

@media (max-width: 1260px) {
  .tituloPonencias {

    font-size:12px;

  }
}



</style>