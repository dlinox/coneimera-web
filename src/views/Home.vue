<template>
  <div>
    <carousel-principal />
    <section id="eventos-importantes">
      <v-container>
        <div class="titulo-container">
          <div class="separador"></div>
          <div class="titulo">Eventos Importantes</div>
          
          <v-row>
          <v-col class="Iflyer">
            <div class="col-md-6 sm-12 sx-12" >
              <a href="">
                <img src="/images/ConcursoPapers.png" alt="" width="100%">
              </a>
            </div>
            <div class="col-md-6">
              <a href="">
                <img src="/images/ConcursoProyectos.png" alt="" width="100%">
              </a>
            </div>
          </v-col>
          </v-row>
          
        </div>
        <event-importants/>
      </v-container>
    </section>
    <section id="plataforma-virtway">
      <v-container >
        <div class="titulo-container">
          <div class="separador"></div>
          <div class="titulo">PLATAFORMA VIRTUAL XXVII CONEIMERA UNA PUNO</div>
        </div>
        <div class="videoContainer">
          <video  controls poster="/images/poster-home.png" class="videoHome">
            <source src="https://participante.coneimera.org/video/video_1.mp4" type="video/mp4" />
          </video>
        </div>
      </v-container>
    </section>
    <section id="universidads-asociadas-aneimera">
      <v-container>
        <div class="titulo-container">
          <div class="separador"></div>
          <div class="titulo">Universidades Asociadas a Aneimera</div>
        </div>
        <carousel-universidades/>
      </v-container>
      <!--  <carousel-universidades/> -->
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
  align-content: center;
  align-items: center;
  justify-content: center;
}

.videoContainer{
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}
.videoHome {
  width: 83%;

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
.Iflyer{
  display: flex;
  padding: 0px;
}
@media (max-width: 600px) {
  .videoHome {
    width: 100%;
  }
  .Iflyer{
    display: block;
    padding: 0px;
  }
}
</style>