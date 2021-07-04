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
          <div class="titulo">Concursos de Programacion en PLC</div>
        </div>

 
        <section>
            <v-row class="v-row">
              <v-col class="col DContainerFechasImportantes" md="12" sm="12" sx="12">
                  
                  <v-col  md="6" sm="12" xs="12">
                    <h2 style="margin-top:-20px; margin-bottom:16px;">Descripcion</h2>
                    <p style="text-align: justify;">
                    El OBJETIVO DEL CONCURSO PROGRAMACIÓN DE PLC es Difundir el uso de herramientas tecnologías para desarrollar soluciones de automatización en el sector industrial del País.
                    El concurso busca resolver el desafío de automatización, propuesto por los miembros del jurado, durante un tiempo determinado establecido también por los miembros del jurado; los participantes diseñarán la solución al problema y se comprobará su funcionamiento en equipos de planta reales pero el desarrollo del concurso será en un entorno virtual (más información en desarrollo de las bases).
                    El concurso Programación de PLC se llevará a cabo, con la herramienta ECOSTRUXURE MACHINE EXPERT (SoMachine) de Schneider Electric, que te permite programar y poner en funcionamiento una amplia gama de elementos de Control, que te ayudarán a obtener la solución de control más optimizada, para casi cualquier requisito del sistema a controlar.
                    IMPORTANTE: Como el concurso será desarrollado de manera virtual; Cada participante debe contar con una PC o laptop con el programa previamente instalado y conexión a internet durante el concurso.

                    <br><br>Link de la Herramienta:  <a href="https://www.se.com/ww/en/product-range/2226-ecostruxure-machine-expert-(somachine)/#overview " target="_blank">https://www.se.com/ww/en/product-range/2226-ecostruxure-machine-expert-(somachine)/#overview </a> 

                    </p>
                  <!-- <div class="text-h6 my-3">Bases del concurso <v-btn color="info" text target="_black" href="https://drive.google.com/file/d/1aDjPkGUZilIytRdJAEHlWmQruXBDiAIw/view?usp=sharing"> BASES (GOOGLE DRIVE) <v-icon right>mdi-google-drive</v-icon> </v-btn></div>  -->
                  <div class="DbotonesInscripcion">
                    <v-row>
                    
          <!--            <v-col md="12" sm="12" sx="12" class="DbotonInscripcion">
                         <v-col md="6" sm="6" xs="12" >
                            <v-btn block color="primary"> Registrarse </v-btn>
                         </v-col> -->
                        <v-col md="12" sm="12" xs="12">
                            <v-btn block color="primary" > ver Reglas </v-btn>
                          
                        </v-col>
                    <!--  </v-col>-->
                    </v-row>
                  </div>
                  </v-col>

                  <v-col  md="6" sm="12" xs="12" class="pt-6">
                      <div class="DContainerVideoPaper">
                        <!-- <video width="100%" controls >
                            <source src="https://participante.coneimera.org/video/DRON.mp4" type="video/mp4" />
                        </video>
                         */-->
                         <img src="/images/Concursos/PLC.jpeg" class="imagenConcursoProgramacion" alt="" srcset="">
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

.imagenConcursoProgramacion {
  width: 85%;  
}


@media (max-width: 960px) {
  .DContainerFechasImportantes{
      display: block;
  }
  .imagenConcursoProgramacion {
    width: 85%;  
  }
}

@media (max-width: 480px) {
  .DbotonInscripcion {
    display: block;
  }
  .DContainerVideoPaper{
    margin-top: 0px;
  }
  .imagenConcursoProgramacion {
  width: 100%;  
}
}
</style>