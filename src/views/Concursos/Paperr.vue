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
          <div class="titulo">Concursos de Papers</div>
        </div>
        <p>
          La Asociación Nacional de Estudiantes de Ingeniería Mecánica,
          Mecatrónica, Eléctrica, Electrónica y Ramas Afines (ANEIMERA), tiene
          el agrado de invitar a los estudiantes de universidades públicas y
          privadas, egresados y profesionales, a participar en el XXVII Congreso
          Nacional y Exposición Internacional de Ingeniería Mecánica, Eléctrica,
          Electrónica y Ramas Afines, identificado por sus siglas como XXVII
          CONEIMERA UNA PUNO 2021, que se realizará de modalidad virtual desde
          el 20 al 30 de Setiembre y el concurso de Papers por la plataforma de
          Cisco Webex meeting, del 27 al 29 de Setiembre de 2021.
        </p>

        <div class="text-h6 my-3">Bases del concurso <v-btn color="info" text target="_black" href="https://drive.google.com/file/d/1aDjPkGUZilIytRdJAEHlWmQruXBDiAIw/view?usp=sharing"> BASES (GOOGLE DRIVE) <v-icon right>mdi-google-drive</v-icon> </v-btn></div> 
 
        <div class="text-h6">Fechas Importantes</div>
        <section>
            <v-row class="v-row">
              <v-col class="col ContainerFechasImportantes">
                  <v-col  md="6" sm="12" xs="12">
                    <Papers/>
                  </v-col>
                  <v-col  md="6" sm="12" xs="12" class="pt-6">
                      <div class="ContainerVideoPaper">
                        <video width="100%" controls >
                            <source src="https://participante.coneimera.org/video/proyectos-papers.mp4" type="video/mp4" />
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
};
</script>

<style>
.ContainerFechasImportantes{
  display: flex;
}
.ContainerVideoPaper{
  margin-top: 30px;
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

@media (max-width: 600px) {
  .ContainerFechasImportantes{
      display: block;
  }
}
</style>