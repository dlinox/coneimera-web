<template>
<div>
    <v-card style="box-shadow:none">
      <v-row>        
        <v-col cols="12" sm="3" md="3" class="d-flex" style="display:flex; justify-content:center;">
          <div class="fecha-container">
            <div class="fecha">
              <h1>{{ ItemImportante.dia }}</h1>
              <p class="mb-0">{{ ItemImportante.mes }}</p>
            </div>
          </div>
        </v-col>

        <v-col cols="12" sm="9" md="9" class="pt-0" >
          <div class="text-container">
            <div class="text">
              <h3 class="titulo"> {{ ItemImportante.titulo }} </h3>
              <v-card-subtitle class="subtitulo">
                {{ ItemImportante.sub_titulo }}
              </v-card-subtitle>
               <v-card-text class="texto">
                {{ ItemImportante.texto }}
              </v-card-text>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-card>
</div>

</template>

<script>
export default {
    props: ['ItemImportante']
}
</script>
<style>

.titulo {
 margin-top: 10px;
 margin-left:15px; 
}
.subtitulo {
  margin-top: -15px;
  margin-bottom: 0px;
}
.fecha-container {
  margin-top: -10px;
  width: 200px;
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
  padding: 10px 10px;
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


@media (max-width: 600px) {
  .fecha-container .fecha {
    color: #035159;
    font-size: 16px;
    width: 100%;
    padding: 10px 10px;
    margin-bottom: 0px;
    
  }
  .text-container{
    margin-left:0px;
  }
  .text-container .text {
    width: 100%;
    text-align: left;
    align-items: center;
    justify-content: center;
  }
  .titulo {
    text-align: left !important;    
    align-items: left;
    align-self: left;
    justify-self: left;
    font-size: 16px;
  }
}

</style>

