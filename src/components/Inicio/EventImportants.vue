<template>
  <div class="container-eventos">
    <v-card flat v-for="(itemm, index) in items2" :key="index">
      <v-row style="margin-bottom:16px" >
        <h2 class="evento-titulo"> {{ itemm.titulo }}</h2>
      </v-row>
      <v-row style="margin-bottom:30px;">    
        <v-col sx="12" sm="12" md="8" class="eventos-content" >
          <ItemImportante 
              v-for="(ItemImportante, index) of itemm.data" :key="index"
              :ItemImportante="ItemImportante"
              />
        </v-col>

        <v-col v-if="itemm.imagen !== null" sm="4" md="4" class="eventos-video" >
          <img :src="itemm.imagen" alt="" width="100%"/>
        </v-col>
        <v-col v-else sx="12" sm="4" md="4" class="eventos-video">
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
      /*{
        dia: 25,
        mes: "Septiembre",
        titulo: "Inicio de Concursos",
        sub_titulo: "",
        texto:
          "Concursos de Destreza: Concurso de programación, Concurso de Drones y mucho más.",
        imagen: "/images/banner-3.jpeg",
      },*/
      {
        dia: 30,
        mes: "Septiembre",
        titulo: "Ceremonia de Clausura",
        sub_titulo: "Actividad será conllevada via VirtWay",
        texto:
          "La clausura, donde se entregara la premiación y un presente a todos los participantes.",
        imagen: "/images/clausura.jpg",
      },
    ],
    items2: [
            {
        imagen: "/images/clausura.jpg",
        video: "",
        titulo:"Inicio del congreso",
        data:[
          {
            dia: "20 Septiembre",
            mes: "Septiembre",
            titulo: "Apertura de Congreso",
            sub_titulo: "Actividad será conllevada via VirtWay",
            texto:
            "En una reunión donde todos estaremos unidos por un solo propósito de aprender y demostrar lo aprendido durante todo el congreso!!",
          },
        
        ]

      },

      {
        imagen: null,
        video: "https://participante.coneimera.org/video/video_1.mp4",
        titulo:"Concurso de proyectos",
        poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=740&q=80",
        data:[
          {
            dia: "30 de julio",
            mes: "Septiembre",
            titulo: "Validación, notificación y publicación de proyectos",
            sub_titulo: "Primera fase",
            texto: null,
          },

          {
            dia: "31 de mayo al 16 de julio",
            mes: "Septiembre",
            titulo: "Recepción de resúmenes del proyecto",
            sub_titulo: "Primera fase",
            texto: null,
          },
          {
            dia: "19 de julio al 30 de julio",
            mes: "Septiembre",
            titulo: "Notificaciones de las recepciones y observación de resúmenes.",
            sub_titulo: "Primera fase",
            texto: null,
          },
        
        ]

      },
      {
        imagen:null,
        titulo:"Finalización del congreso",
        video:"https://participante.coneimera.org/video/video_1.mp4",
        poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=740&q=80",
        data:[
          {
            dia: "30 de Septiembre",
            mes: "Septiembre",
            titulo: "Ceremonia de Clausura",
            sub_titulo: "Actividad será conllevada via VirtWay",
            texto:
              "La clausura, donde se entregara la premiación y un presente a todos los participantes.",
          }
        ]
        
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
  margin-left:20px;
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

</style>








<!-- <style>
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


</style> -->