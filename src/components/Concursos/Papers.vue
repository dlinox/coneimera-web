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
              <v-card-subtitle class="Psubtitulo" style="color: white !important;">
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
        titulo: "Primera Fase",
        sub_titulo: "Recepción de resúmenes del Paper",
      },
      {
        dia: "16 - 25",
        mes: "Agosto",
        titulo: "Segunda Fase",
        sub_titulo: "Notificaciones de lasrecepciones y observación de avances de los Papers",
  
      },
      {
        dia: "1-10",
        mes: "Septiembre",
        titulo: "Tercera Fase",
        sub_titulo: "Recepción informe final de los Papers",
       },
    ],
  }),
};
</script>

<style>
.PcardEvents {
  background: #0000ff00 !important;
  margin-left: 50px;
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
  border: 2px solid #ffffff;
  color: #ffffff;
  font-size: 20px;
  padding: 10px 10px;

}
.Ptext-container {
  margin-left: 45px;
  color: #ffffff !important;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.Ptext-container .text {
  color: #ffffff !important;
  width: 100%;
}
@media (max-width: 600px) {
  .Pfecha-container .fecha {
    color: #ffffff;
    font-size: 16px;
    width: 100%;
    padding: 10px 10px;
    margin-bottom: 0px;
    
  }
  .Ptext-container{
    margin-left: 0px !important;
  }
  .text-container .text {
    width: 100%;
  }
  .PcardEvents {
    margin-left: 0px !important;
  }
}
</style>

