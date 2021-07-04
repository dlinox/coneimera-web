<template>
  <div>
    <header-page
      imagen="/images/header-pages/concursos-banner.jpg"
      titulo="CONCURSOS"
    />
    <section>
      <v-container>
        <div class="titulo-container">
          <div class="separador"></div>
          <div class="titulo">Concursos de Drones</div>
        </div>

 
        <section>
            <v-row class="v-row">
              <v-col class="col DContainerFechasImportantes" md="12" sm="12" sx="12">
                  
                  <v-col  md="6" sm="12" xs="12">
                    <h2 style="margin-top:-20px; margin-bottom:16px;">Descripcion</h2>
                    <p style="text-align: justify;">
                        El Concurso, CARRERA DE DRONES se llevará con el simulador VELOCIDRONE; 
                        VelociDrone es un simulador de carreras de drones FPV multijugador o para 
                        un solo jugador de ritmo rápido. Usaras drones de carreras que hay en el 
                        mundo real, que pueden volar a través de una variedad ilimitada de pistas 
                        y obstáculos;
                        El un simulador es muy intuitivo y carga muy bien en ordenadores no 
                        excesivamente potentes; para participar necesitas un Radio Control 
                        (Mando de Drones) o un Joystick con conexión USB y tener instalado en 
                        tu laptop o computadora el simulador VelociDrone.
                        IMPORTANTE: Como el concurso será desarrollado de manera virtual; 
                        Cada participante debe contar con una PC o laptop con el programa 
                        previamente instalado y conexión a internet durante el concurso.

                    </p>
                  <!-- <div class="text-h6 my-3">Bases del concurso <v-btn color="info" text target="_black" href="https://drive.google.com/file/d/1aDjPkGUZilIytRdJAEHlWmQruXBDiAIw/view?usp=sharing"> BASES (GOOGLE DRIVE) <v-icon right>mdi-google-drive</v-icon> </v-btn></div>  -->
                  <div class="DbotonesInscripcion">
                    <v-row>
                      <v-col md="12" sm="12" sx="12" class="DbotonInscripcion">
                        <v-col md="6" sm="6" xs="12" >
                            <v-btn block color="primary"> Registrarse </v-btn>
                         </v-col>
                        <v-col md="6" sm="6" xs="12">
                            <v-btn block color="primary" outlined> ver Reglas </v-btn>
                          
                        </v-col>
                      </v-col>
                    </v-row>
                  </div>
                  </v-col>

                  <v-col  md="6" sm="12" xs="12" class="pt-6">
                      <div class="DContainerVideoPaper">
                        <video width="100%" controls >
                            <source src="https://participante.coneimera.org/video/DRON.mp4" type="video/mp4" />
                        </video>
                      </div>
                  </v-col>
              </v-col>       

            </v-row>
            
        </section>
      </v-container>
    </section>
  </div>
</template>

<script>
import Papers from "@/components/Concursos/Papers.vue";
import HeaderPage from "@/components/HeaderPage.vue";
export default {
  components: { HeaderPage, Papers },
  name: "Paper",
  metaInfo: {
    title: "CONSUROS DE PAPERS",
  },

  mounted() {
    if (this.showForm) window.scrollTo(0, 0) // only demo value - use 40
  },
  data(){
    return {
        
        showForm: true
    }
  },
};
</script>

<style>
.DContainerFechasImportantes{
  display: flex;
}
.DbotonInscripcion {
  display: flex;
}
.DContainerVideoPaper{
  margin-top: 26px;
  display: flex;
  justify-content: center !important;
  align-items: center !important;
  align-content: center !important;
}
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.9;
  position: absolute;
  width: 100%;

}

@media (max-width: 960px) {
  .DContainerFechasImportantes{
      display: block;
  }
}

@media (max-width: 480px) {
  .DbotonInscripcion {
    display: block;
  }
  .DContainerVideoPaper{
    margin-top: 0px;
  }
}
</style>