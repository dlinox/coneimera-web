<template>
  <div>
    <v-card flat v-for="(item, index) in items" :key="index" class="PcardEvents">
      <v-row class="my-5">
        <v-col cols="12" sm="3" md="2" class="d-flex align-items-center justify-center pb-2">
          <div class="Pfecha-container">
            <div class=" pt-4 Pfecha">
              <h3>{{ item.dia }}</h3>
              <h5 class="mb-">{{ item.mes }}</h5>
            </div>
          </div>
        </v-col>
        <v-col cols="12" sm="9" md="10" class="d-flex pt-2">
          <div class="Ptext-container">
            <div class="Ptext">
              <v-card-title class="Ptitulo"> {{ item.titulo }} </v-card-title>
              <v-card-subtitle class="Psubtitulo" style="color: #035159 !important;">
                {{ item.sub_titulo }}
              </v-card-subtitle>
            </div>
          </div>
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
        dia: "1 - 11",
        mes: "Julio",
        titulo: "Apertura de Congreso",
        sub_titulo: "Bienvenido al congreso",
      },
      {
        dia: "16 - 25",
        mes: "Agosto",
        titulo: "Inicio de Concursos",
        sub_titulo: "Apertura de inscripciones en la pagina de usuario",
  
      },
      {
        dia: "1-10",
        mes: "Septiembre",
        titulo: "Ceremonia de Clausura",
        sub_titulo: "Cierre del congreso!!",
       },
    ],
  }),
};
</script>

<style>
.PcardEvents{
  margin-bottom: -20px;
  margin-left: 10px;
}
.Pfecha-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.Pfecha-container .Pfecha {
  text-align: center;
  width: 120px !important;
  height: 100px;
  border: 2px solid #035159;
  color: #035159;
  font-size: 20px;
  padding: 10px 10px;

}
.Ptext-container {
  color: #035159 !important;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.Ptext-container .text {
  color: #035159 !important;
  width: 100%;
}
@media (max-width: 600px) {
  .Pfecha-container .fecha {
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


















