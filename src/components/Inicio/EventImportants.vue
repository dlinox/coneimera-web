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
        <v-col sm="4" md="4" class="align-items-center d-none d-md-flex">
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