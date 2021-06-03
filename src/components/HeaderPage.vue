<template>
  <v-card dark>
    <v-img :src="imagen" alt="Banner"  max-height="280px" class="imagen-banner-page align-end" gradient="to bottom, rgba(3,81,89,.6), rgba(3,81,89,.6)">
      <div class="text-h6 text-sm-h5 text-md-h4 text-center mb-4">
         CONEIMERA -  <b>{{titulo}} </b>
      </div>
    </v-img>
  </v-card>
</template>
<script>
export default {
  props: {
    imagen: String,
    titulo: String,
  },
};
</script>
