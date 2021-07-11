<template>
  <div>
    <header-page
      imagen="/images/header-pages/concursos-banner.jpg"
      titulo="CONCURSOS"
    />
    <section>
      <v-container>
      <div >
        <FlyerPapers class="v-FlyerProyectos"/>
      </div>

      <div class="text-h6 my-3 basesP">Bases del concurso <v-btn color="info" text target="_black" href="https://drive.google.com/file/d/1Y3d4b7uG1EXeOA1NelY6lk6Sqx9sbmIE/view?usp=sharing"> BASES (GOOGLE DRIVE) <v-icon right>mdi-google-drive</v-icon> </v-btn></div> 
    <!--     <div class="text-h6">Fechas Importantes</div>
        <v-card flat>
          <v-timeline align-top dense>
            <v-timeline-item color="primary" small>
              <v-row class="pt-1">
                <v-col cols="3">
                  <strong>31 de mayo al 16 de julio</strong>
                </v-col>
                <v-col>
                  <strong>PRIMERA FASE</strong>
                  <div class="text-caption">
                    Recepción de resúmenes del Paper.
                  </div>
                </v-col>
              </v-row>
            </v-timeline-item>

            <v-timeline-item color="primary" small>
              <v-row class="pt-1">
                <v-col cols="3">
                  <strong>19 de julio al 30 de julio</strong>
                </v-col>
                <v-col>
                  <strong>PRIMERA FASE</strong>
                  <div class="text-caption">
                    Notificaciones de las recepciones y observación de
                    resúmenes.
                  </div>
                </v-col>
              </v-row>
            </v-timeline-item>
            <v-timeline-item color="primary" small>
              <v-row class="pt-1">
                <v-col cols="3">
                  <strong>30 de julio</strong>
                </v-col>
                <v-col>
                  <strong>PRIMERA FASE</strong>
                  <div class="text-caption">
                    Validación, notificación y publicación de Papers
                  </div>
                </v-col>
              </v-row>
            </v-timeline-item>

            <v-timeline-item color="primary" small>
              <v-row class="pt-1">
                <v-col cols="3">
                  <strong>2 de agosto hasta el 13 de agosto</strong>
                </v-col>
                <v-col>
                  <strong>SEGUNDA FASE</strong>
                  <div class="text-caption">
                    Recepción de avances de los Papers.
                  </div>
                </v-col>
              </v-row>
            </v-timeline-item>

            <v-timeline-item color="primary" small>
              <v-row class="pt-1">
                <v-col cols="3">
                  <strong>16 de agosto hasta el 25 agosto</strong>
                </v-col>
                <v-col>
                  <strong>SEGUNDA FASE</strong>
                  <div class="text-caption">
                    Notificaciones de lasrecepciones y observación de avances de
                    los Papers.
                  </div>
                </v-col>
              </v-row>
            </v-timeline-item>

            <v-timeline-item color="primary" small>
              <v-row class="pt-1">
                <v-col cols="3">
                  <strong>27 de agosto</strong>
                </v-col>
                <v-col>
                  <strong>SEGUNDA FASE</strong>
                  <div class="text-caption">
                    Validación, notificación y publicación de los Papers.
                  </div>
                </v-col>
              </v-row>
            </v-timeline-item>

            <v-timeline-item color="primary" small>
              <v-row class="pt-1">
                <v-col cols="3">
                  <strong>30 de agosto al 10 de septiembre</strong>
                </v-col>
                <v-col>
                  <strong>TERCERA FASE</strong>
                  <div class="text-caption">
                    Recepción informe final de los Papers
                  </div>
                </v-col>
              </v-row>
            </v-timeline-item>

            <v-timeline-item color="primary" small>
              <v-row class="pt-1">
                <v-col cols="3">
                  <strong>13 de septiembre</strong>
                </v-col>
                <v-col>
                  <strong>TERCERA FASE</strong>
                  <div class="text-caption">
                    Notificación de recepción y observación del informe final
                    presentado.
                  </div>
                </v-col>
              </v-row>
            </v-timeline-item>

            <v-timeline-item color="primary" small>
              <v-row class="pt-1">
                <v-col cols="3">
                  <strong>20 de septiembre</strong>
                </v-col>
                <v-col>
                  <strong>TERCERA FASE</strong>
                  <div class="text-caption">
                    Validación, notificación y publicación de los Papers.
                  </div>
                </v-col>
              </v-row>
            </v-timeline-item>

            <v-timeline-item color="primary" small>
              <v-row class="pt-1">
                <v-col cols="3">
                  <strong>27 - 29 de septiembre </strong>
                </v-col>
                <v-col>
                  <strong>PRESENTACIÓN Y EXPOSICIÓN.</strong>
                </v-col>
              </v-row>
            </v-timeline-item>

            <v-timeline-item color="primary" small>
              <v-row class="pt-1">
                <v-col cols="3">
                  <strong>30 de septiembre</strong>
                </v-col>
                <v-col>
                  <strong>RESULTADOS Y PREMIACIÓN</strong>
                </v-col>
              </v-row>
            </v-timeline-item>
          </v-timeline>
        </v-card> * -->
      </v-container>
    </section>
  </div>
</template>

<script>
import FlyerPapers from './FlyerPapers.vue'
import HeaderPage from "@/components/HeaderPage.vue";
export default {
  components: { HeaderPage, FlyerPapers },
  name: "Paper",
  metaInfo: {
    title: "CONSUROS DE PAPERS",
  },
};
</script>

<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.9;
  position: absolute;
  width: 100%;
}
.basesP{
    width:80%; 
    margin:auto;
    padding: 0;
}
@media (max-width: 600px) {
  .basesP{
    width: 100%;
  }

}
</style>