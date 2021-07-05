<template>
  <div>
    <v-card flat v-for="(item, index) in item1" :key="index" class="cardEvents">
      <v-row class="my-5">
        <v-col cols="12" sm="3" md="2" class="d-flex align-items-center justify-center pb-2" style="display:flex; justify:center; align-items:center; ">
          <div class="fecha-container">
            <div class="fecha">
              <h2 >{{ item.dia }}</h2>
              <h4 class="mb-0">{{ item.mes }}</h4>
            </div>
          </div>
        </v-col>
        <v-col cols="12" sm="9" md="6" class="d-flex pt-2">
          <div class="text-container">
            <div class="text">
              <v-card-title class="titulo"> {{ item.titulo }} </v-card-title>
              <v-card-subtitle class="subtitulo" style="color: white !important;">
                {{ item.sub_titulo }}
              </v-card-subtitle>
              <v-card-text class="texto">
                {{ item.texto }}
              </v-card-text>
            </div>
          </div>
        </v-col>
        <v-col v-if="item.video !== null" sm="4" md="4" >
          <video controls :poster="item.poster" width="100%" class="align-items-center d-none d-md-flex my-2">
            <source :src="item.video" type="video/mp4"/>
           </video>
        </v-col>
        <v-col v-else sm="4" md="4" class="align-items-center d-none d-md-flex my-2">
          <img :src="item.imagen" alt="" width="100%" />
        </v-col>

      </v-row>
    </v-card>
    

    <v-row class="v-row">
        <v-col class="col hContainerFechasImportantes">
            <v-col  md="6" sm="12" xs="12">
              <Papers/>
            </v-col>
            <v-col  md="6" sm="12" xs="12" class="pt-6">
                <div class="hContainerVideoPaper">
                  <video width="100%" controls >
                      <source src="https://participante.coneimera.org/video/proyectos-papers.mp4" type="video/mp4" />
                  </video>
                </div>
            </v-col>
        </v-col>       
    </v-row>


    <v-card flat v-for="(item, index) in item3" :key="index" class="cardEvents">
      <v-row class="my-5">
        <v-col cols="12" sm="3" md="2" class="d-flex align-items-center justify-center pb-2" style="display:flex; justify:center; align-items:center; ">
          <div class="fecha-container">
            <div class="fecha">
              <h2 >{{ item.dia }}</h2>
              <h4 class="mb-0">{{ item.mes }}</h4>
            </div>
          </div>
        </v-col>
        <v-col cols="12" sm="9" md="6" class="d-flex pt-2">
          <div class="text-container">
            <div class="text">
              <v-card-title class="titulo"> {{ item.titulo }} </v-card-title>
              <v-card-subtitle class="subtitulo" style="color: white !important;">
                {{ item.sub_titulo }}
              </v-card-subtitle>
              <v-card-text class="texto">
                {{ item.texto }}
              </v-card-text>
            </div>
          </div>
        </v-col>
        <v-col v-if="item.video !== null" sm="4" md="4" >
          <video controls :poster="item.poster" width="100%" class="align-items-center d-none d-md-flex my-2">
            <source :src="item.video" type="video/mp4"/>
           </video>
        </v-col>
        <v-col v-else sm="4" md="4" class="align-items-center d-none d-md-flex my-2">
          <img :src="item.imagen" alt="" width="100%" />
        </v-col>

      </v-row>
    </v-card>
  </div>
  
</template>

<script>
import Papers from "@/components/Concursos/Papers.vue";

export default {
  components: { Papers },
  data: () => ({
    item1: [
      {
        dia: "20",
        mes: "Setiembre",
        titulo: "Apertura de Congreso",
        sub_titulo: "Bienvenido al congreso",
        imagen: "/images/banner-1.jpg",
        video: null,
      },
    ],
    item2: [
      {
        dia: "30",
        mes: "Septiembre",
        titulo: "Ceremonia de Clausura",
        sub_titulo: "Cierre del congreso!!",
        texto:null,
        imagen: "/images/clausura.jpg",
        video: null,
      },
    ],
    item3: [
      {
        dia: "30",
        mes: "Septiembre",
        titulo: "Ceremonia de Clausura",
        sub_titulo: "Cierre del congreso!!",
        texto:null,
        imagen: "/images/clausura.jpg",
        video: null,
      },
    ],
  }),
};
</script>

<style>
.cardEvents{
  background: #286971 !important;
  color: white !important;
  padding-right: 16px;
  padding-left: 30px;
}

.fecha-container .fecha {
  text-align: center;
  border: 2px solid white;
  color: #035159;
  width: 140px !important;
  height: 120px !important;
  color: white !important;
  font-size: 22px;
  padding: 10px 10px;


}
.text-container {
  color: rgb(255, 255, 255) !important;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.text-container .text {
  color: rgb(255, 255, 255) !important;
  width: 100%;
}

@media (max-width: 900px) {
  .fecha-container{
    padding-top:20px;
    padding-bottom:20px;
  }  
}

@media (max-width: 600px) {
  .fecha-container .fecha {
    color: #035159;
    font-size: 16px;
    width: 140px !important;
    padding-top: 20px;
    height: 120px !important;
    display: block;
  }
  .text-container .text {
    width: 100%;;
  }
}



.hContainerFechasImportantes{
  display: flex;
  align-items: center;
  margin: 12px;
  background:  #286971;
  border-radius: 5px;
}
.hContainerVideoPaper{
  margin-top: 10px;
  display: flex;
  margin-right:-8px;
}

@media (max-width: 600px) {
  .hContainerFechasImportantes{
      display: block;
  }
  .hContainerVideoPaper{
    margin-top: 0px;
    width: 100% !important;
  
  }
}



</style>


















