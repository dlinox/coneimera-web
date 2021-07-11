<template>
  <div class="container-flyer">

    <v-row>
        <v-col class="flyerImagen">
            <img src="/images/flyer2.png" alt="">
        </v-col>
    </v-row>
    <section>
    <v-row style="display:block;">    
        <v-col class="flyerText" >
            <p>
                XXVII Congreso Nacional y Exposición Internacional
                de Ingenierpía Mecanica, Mecatrónica, Eléctriica, Electrónica y Ramas
                Afines tiene como objetivo, promover e incentivar la investigación en 
                las áreas competentes a la asociación nacional de ingeniería mecánica, 
                mecatrónica, electrónica y ramas afines (ANEIMERA). Brindando la oportunidad
                a los concursantes de promocionar y difundir los logros alcanzados en su
                formación profesional.
            </p>
            <p>
                Se llevará acabo de forma virtual en la UNIVERSIDAD NACIONAL DEL ALTIPLANO, esta
                universidad es una de las principales instituciones educativas del Perú y está ubicada
                en el departamento de Puno-Perú. El evento a sido rediseñado en un entorno virtual,
                para proteger la seguridad de nuestro participantes, organizadores y par ofrecer una 
                experiencia virtual innovadora.
            </p>
        </v-col>
    </v-row>
    </section>

    <section>
    <v-row style="display:block; ">    
        <v-col class="flyerTemas"  md="12" sx="12" style="height:100%;">
            <v-col style="" md="6" sx="12">
                <div style="margin-bottom:30px;">
                    <h2 style="margin-left:10px; text-align:left; margin-bottom:15px; color:#030f7c;">TEMAS DE INTERES</h2>
                    <div style="display:flex; jusify-content:center;">
                        <div style="margin-left:10px; display:flex;">
                        <table style="text-align: right; margin-right:15px;">
                            <tr>
                                <td><span style="font-size:18px; font-weight:600; color:red">M1</span> </td>
                            </tr>
                            <tr>
                                <td><span style="font-size:18px; font-weight:600; color:orange">M2</span> </td>
                            </tr>
                            <tr>
                                <td><span style="font-size:18px; font-weight:600; color:#030f7c;">E1</span> </td>
                            </tr>
                            <tr>
                                <td><span style="font-size:18px; font-weight:600; color:orange">E2</span> </td>
                            </tr>
                            <tr>
                                <td><span style="font-size:18px; font-weight:600; color:red">AAAA</span> </td>
                            </tr>
                        </table>
                        <table style=" border-left: solid 9px #dbbf1e;">
                            <tr>
                                <td><span style="margin-left:15px;">INGERIERÍA MECÁNICA</span></td>
                            </tr>
                            <tr>
                                <td> <span style="margin-left:15px;">INGENIERÍA MECATRÓNICA</span></td>
                            </tr>
                            <tr>
                                <td> <span style="margin-left:15px;">INGENIERÍA ELÉCTRICA</span></td>
                            </tr>
                            <tr>
                                <td> <span style="margin-left:15px;">RAMAS AFINES</span></td>
                            </tr>
                            <tr>
                                <td> <span style="margin-left:15px;"> Resultados y Premiación </span></td>
                            </tr>
                        </table>
                        </div>
                    
                    </div>
                </div>
            </v-col>
            
            <v-col md="6" sx="12" >
                <div class="flyerDT" style="margin-bottom:30px;">
                    <h2 style="margin-left:15px; color:#030f7c;">CALENDARIO</h2>
                    <div style="display:flex;">
                        <div style="margin-left:15px;">
                        <table style="">
                            <tr>
                                <td><span style="font-size:15px;">31 May - 16 Jul</span></td>
                                <td><span style="margin-left:15px; font-size:15px;"> Primera Etapa</span></td>
                            </tr>
                            <tr>
                                <td><span style="font-size:15px;">2-13 Ago</span></td>
                                <td> <span style="margin-left:15px; font-size:15px;"> Segunda Etapa</span></td>
                            </tr>
                            <tr>
                                <td><span style="font-size:15px;">30 Ago - 10 Sep</span></td>
                                <td> <span style="margin-left:15px; font-size:15px;"> Tercera Etapa</span></td>
                            </tr>
                            <tr>
                                <td><span style="font-size:15px;">30 Sep</span></td>
                                <td> <span style="margin-left:15px; font-size:15px;"> Resultados y Premiación </span></td>
                            </tr>
                        </table>
                        </div>
                    
                    </div>
                </div>

                <div class="flyerDT" style="margin-bottom:30px;">
                    <h2 style="margin-left:15px; color:#030f7c;">CONTACTO</h2>
                    <div style="display:flex;">
                        <div style="margin-left:20px;">
                        <table>
                            <tr>
                                <td><span style="font-size:15px;">Facebook</span></td>
                                <td><span style="margin-left:15px; font-size:15px;">XXVII Coneimera PUNO-2021 </span></td>
                            </tr>
                            <tr>
                                <td><span style="font-size:15px;">Linken-In</span></td>
                                <td> <span style="margin-left:15px; font-size:15px;"> CONEIMERA </span></td>
                            </tr>
                            <tr>
                                <td><span style="font-size:15px;">Whatsapp</span></td>
                                <td> <span style="margin-left:15px; font-size:15px;"> +51 914 466 410</span></td>
                            </tr>
                            <tr>
                                <td><span style="font-size:15px;">Gmail</span></td>
                                <td> <span style="margin-left:15px; font-size:15px;"> cinvpro@coneimera.org</span></td>
                            </tr>
                        </table>
                        </div>
                    
                    </div>
                </div>

            </v-col>
        
        </v-col>
    </v-row>
    </section>

    <section>
    <v-row>
        <div>
            
        </div>
        <div style="margin-top:0px;"> 
            <Flyerfoot/>
        </div>
        
    </v-row>
    </section>

  </div>
</template>

<script>
import Flyerfoot from './Flyerfoot.vue'
export default {
    components:{ Flyerfoot }

}
</script>

<style>
.container-flyer {
    width:80%; 
    margin:auto;
    padding: 0;
}
.flyerImagen {
    padding: 0;
    background: black;
}
.flyerImagen img {
    height: 100%;
    width: 100%;
    object-fit: cover;
}

.flyerText {
    width: 100%;
    background: #fffbd2;
}

.flyerText p{
    text-align:justify; 
    padding:20px 20px 0px 20px;
}

 
.flyerTemas {
    display: flex;
    width: 100%;
    padding-left: 100px;
    align-items: center;
    background: #fffBd2;
}
.flyerOrganizacion {
    width: 100%;
    height: 200px;
}
.flyerDT {
    margin:auto;
    margin-left: -10px;
    justify-content: center;
    border-left: solid 10px #dbbf1e;    
}


@media (max-width: 600px) {
  .flyerTemas {
    display:block;
    padding-left: 10px;
  }
  .container-flyer{
    width: 100%;
  }
  .flyerText p{
    padding-left: 5px;
    padding-right: 5px;
  }

}

</style>