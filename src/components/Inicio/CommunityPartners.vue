<template>
  <div>
    <v-row justify="center" align="center">
      <v-col
        cols="6"
        sm="3"
        v-for="(item, index) in items_parners"
        :key="index"
      >
        <v-card class="pa-3" flat>
          <v-img :src="item.imagen"></v-img>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    items_parners: [
      { imagen: "images/Parners/ASME UTM LOGO AZUL.png" },
      //{ imagen: "images/Parners/ASME_StudentSec_ITBA_DkBlue.png" },
      { imagen: "images/Parners/Imagen2.png" },
      { imagen: "images/Parners/INSTITUTO TECNOLÓGICO DE BUENOS AIRES ASME ARGENTINA.png" },
      { imagen: "images/Parners/LOGO ASME NEGRO.jpeg" },
      //{ imagen: "images/Parners/Logo fondo blanco ASME.png" },//UNA PUNO
      { imagen: "images/Parners/ieee-uni.jpg" },
      { imagen: "images/Parners/logo pes uva.png" },
      { imagen: "images/Parners/LOGO.png" },
      { imagen: "images/Parners/Logo_ASME_EPN_sin_engrane_negro_Mesa de trabajo 1.png" },
      //{ imagen: "images/Parners/LOGOS CIRCULO wiip.png" },
      //{ imagen: "images/Parners/SECCIÓN PERÚ ASME PERU.png" },
      //{ imagen: "images/Parners/UNIVERSIDAD DE LAS FUERZAS ARMADAS ESPE ASME ECUADOR.png" },
      //{ imagen: "images/Parners/UNIVERSIDAD ESCUELA POLITÉCNICA NACIONAL DEL ECUADOR - ASME ECUADOR.png" },
      //{ imagen: "images/Parners/UNIVERSIDAD NACIONAL DEL ALTIPLANO ASME PERU.png" },
      //{ imagen: "images/Parners/UNIVERSIDAD NACIONAL DEL ALTIPLANO ASME PERU.png" },
      { imagen: "images/Parners/UNIVERSIDAD NACIONAL DEL CALLAO-ASME WIE PERU.png" },
      //{ imagen: "images/Parners/UNIVERSIDAD POLITÉCNICA SALESIANA  ASME ECUADOR.png" },
      //{ imagen: "images/Parners/UNIVERSIDAD TÉCNICA DE MANABÍ ASME ECUADOR.png" },
      //{ imagen: "images/Parners/uva pess .png" },
      { imagen: "images/Parners/student_energy.png" },
      { imagen: "images/Parners/WIP- Logo 2017.png" },
      //{ imagen: "images/Parners/.png" },
      //{ imagen: "images/Parners/.png" },

      
    
    ],
  }),
};
</script>

<style>
</style>