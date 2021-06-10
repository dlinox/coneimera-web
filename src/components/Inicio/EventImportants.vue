<template>
  <div>
    <v-card flat v-for="(item, index) in items" :key="index">
      <v-row class="my-4">
        <v-col cols="12" sm="3" md="2" class="d-flex align-items-center justify-center pb-0">
          <div class="fecha-container">
            <div class="fecha">
              <h1>{{ item.dia }}</h1>
              <p class="mb-0">{{ item.mes }}</p>
            </div>
          </div>
        </v-col>
        <v-col cols="12" sm="9" md="6" class="d-flex pt-0">
          <div class="text-container">
            <div class="text">
              <v-card-title class="titulo"> {{ item.titulo }} </v-card-title>
              <v-card-subtitle class="subtitulo">
                {{ item.sub_titulo }}
              </v-card-subtitle>
              <v-card-text class="texto">
                {{ item.texto }}
              </v-card-text>
            </div>
          </div>
        </v-col>
        <v-col v-if="item.video !== null" sm="4" md="4" >
          <video controls :poster="item.poster" width="100%" class="align-items-center d-none d-md-flex">
            <source :src="item.video" type="video/mp4"/>
           </video>
        </v-col>
        <v-col v-else sm="4" md="4" class="align-items-center d-none d-md-flex">
          <img :src="item.imagen" alt="" width="100%" />
        </v-col>

      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        dia: 20,
        mes: "Septiembre",
        titulo: "Apertura de Congreso",
        sub_titulo: "Bienvenido al congreso",
        texto:
          "En una reunión donde todos estaremos unidos por un solo propósito de aprender y demostrar lo aprendido durante todo el congreso!!",
        imagen: "/images/banner-1.jpg",
        video: null,
      },
      {
        dia: 25,
        mes: "Septiembre",
        titulo: "Inicio de Concursos",
        sub_titulo: "Apertura de inscripciones en la pagina de usuario",
        texto:
          "Donde cada uno demostrará su potencial académico, para impulsar la investigación",
        imagen: "/images/banner-3.jpeg",
        video: "https://participante.coneimera.org/video/proyectos-papers.mp4",
      },
      {
        dia: 30,
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
.fecha-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.fecha-container .fecha {
  text-align: center;
  border: 2px solid #035159;
  color: #035159;
  font-size: 20px;
  width: 100%;
  padding: 20px 20px;
}
.text-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.text-container .text {
  width: 100%;
}
@media (max-width: 600px) {
  .fecha-container .fecha {
    color: #035159;
    font-size: 16px;
    width: 100%;
    padding: 10px 10px;
    margin-bottom: 0px;
    
  }
  .text-container .text {
    width: 100%;
  }
}
</style>
























<!-- <template>
  <div class="container-eventos">
    <v-card flat v-for="(itemm, index) in items2" :key="index">
      <v-row style="margin-bottom:16px" >
        <h2 class="evento-titulo"> {{ itemm.titulo }}</h2>
      </v-row>
      <v-row style="margin-bottom:30px;">    
        <v-col sx="12" sm="12" md="6" class="eventos-content" >
          <ItemImportante 
              v-for="(ItemImportante, index) of itemm.data" :key="index"
              :ItemImportante="ItemImportante"
              />
        </v-col>

        <v-col v-if="itemm.imagen !== null" sm="4" md="6" class="eventos-video" >
          <img :src="itemm.imagen" alt="" width="100%"/>
        </v-col>
        <v-col v-else sx="12" sm="4" md="6" class="eventos-video">
          <video controls :poster="itemm.poster" width="100%">
            <source :src="itemm.video" type="video/mp4"/>
           </video>
        </v-col>
      </v-row>  
    </v-card>

  </div>
</template>

<script>
import ItemImportante from "@/components/Inicio/ItemImportante.vue";


export default {
  data: () => ({
    items: [
      {
        dia: 20,
        mes: "Septiembre",
        titulo: "Apertura de Congreso",
        sub_titulo: "Actividad será conllevada via VirtWay",
        texto:
          "En una reunión donde todos estaremos unidos por un solo propósito de aprender y demostrar lo aprendido durante todo el congreso!!",
        imagen: "/images/banner-1.jpg",
      },
    ],  
  }),
  components: {
    ItemImportante
  }
};

</script>



<style>
.eventos-video {
  padding: 0px;
}

.evento-titulo {
  margin-left:0px;
}



@media (max-width: 600px) {
  .container-eventos {
    margin: left;
    width: 100%;
    justify-content: left;
    text-align:left;
  }
  .eventos-content {
    width: 100%;

  }
  .eventos-video {
    display: none;
  }

  .evento-titulo {
    margin:left;
    margin-left: 27px;
  }

}

</style> -->