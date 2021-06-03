<template>
  <div>
    <carousel-principal />
    <section id="eventos-importantes">
      <v-container>
        <div class="titulo-container">
          <div class="separador"></div>
          <div class="titulo">Eventos Importantes</div>
        </div>
        <event-importants />
      </v-container>
    </section>
    <section id="plataforma-virtway">
      <v-container>
        <div class="titulo-container">
          <div class="separador"></div>
          <div class="titulo">Plataforma VirtWay</div>
        </div>
        <video width="100%" controls >
          <source src="https://participante.coneimera.org/video/video_1.mp4" type="video/mp4" />
        </video>
      </v-container>
    </section>
    <section id="universidads-asociadas-aneimera">
      <v-container>
        <div class="titulo-container">
          <div class="separador"></div>
          <div class="titulo">Universidades Asociadas a Aneimera</div>
        </div>
        <carousel-universidades />
      </v-container>
    </section>

    <section id="universidads-asociadas-aneimera">
      <v-container id="colaboradores" name="colaboradores">
        <div class="titulo-container">
          <div class="separador"></div>
          <div class="titulo">Colaboradores</div>
        </div>
        <community-partners />
      </v-container>
    </section>
  </div>
</template>

<script>
import EventImportants from "../components/Inicio/EventImportants.vue";
import axios from "axios";
import CarouselPrincipal from "../components/Inicio/CarouselPrincipal.vue";
import CarouselUniversidades from "../components/Inicio/CarouselUniversidades.vue";
import CommunityPartners from "../components/Inicio/CommunityPartners.vue";

export default {
  components: {
    EventImportants,
    CarouselPrincipal,
    CarouselUniversidades,
    CommunityPartners,
  },
  name: "Home",
  metaInfo: {
    title: "INICIO",
  },

  data: () => ({}),

  created() {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  },

  methods: {
    async prueba() {
      let res = await axios.get("http://127.0.0.1:8000/api/prueba");
      console.log(res);
    },
  },
};
</script>
<style>
#plataforma-virtway {
  background: #eee;
}
#footer {
  background: #222;
}
.item-menu:hover .v-list-item__icon {
  color: #035159;
}
.item-menu:hover .v-list-item__content {
  color: #035159;
}
@media (max-width: 700px) {
}
</style>