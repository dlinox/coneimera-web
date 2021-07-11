<template>
  <div>
    <header-page
      imagen="/images/header-pages/embajadores-banner.jpg"
      titulo="EMBAJADORES"
    />

    <section style="background:#286972;"> 
      <v-container>
        <div class="titulo-container" id="destreza" name="destreza">
          <div class="separador" style="background:#b93414;"></div>
          <div class="titulo" style="color: #b93414;">NUESTROS EMBAJADORES</div>
        </div>
        <v-row justify="space-between">
          <v-col class="pa-3" cols="6" sm="4" md="4" v-for="(item, index) in items_embajadores" :key="index">
            <v-hover v-slot="{ hover }">
            <v-card>
              <v-img :src="item.imagen" class="align-end" >
                <v-expand-transition>
                      <div v-if="hover" class="d-flex transition-fast-in-fast-out primary darken-2 v-card--reveal text white--text corroEmb" >
                        {{item.correo}}
                      </div>
                    </v-expand-transition>
              </v-img>
            </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script>
import HeaderPage from "../components/HeaderPage.vue";
export default {
  components: { HeaderPage },
  name: "EMBAJADORES",
  metaInfo: {
    title: "EMBAJADORES",
  },
  data: () => ({
    items_embajadores: [
      {
        imagen:'/images/embajadores/Adriana-Moscoso.png', 
        correo:'aimoscoso1@espe.edu.ec'
      },
      {
        imagen:'/images/embajadores/Alain-Angeles.png',
        correo:'alain.angeles.n@uni.pe'},
      {
        imagen:'/images/embajadores/Arturo-Chavesta.png',
        correo:'chavestarivera223@gmail.com '},
      {
        imagen:'/images/embajadores/Augusto-Vaca.png',
        correo:'avaca@unitru.edu.pe '},
      {
        imagen:'/images/embajadores/Carolina-Ramos.png',
        correo:'ycramosarias@gmail.com'},
      {
        imagen:'/images/embajadores/D-angelo-Fernandez.png',
        correo:'dfernandezd@unitru.edu.pe'
      },
      {
        imagen:'/images/embajadores/Dalia-De-La-Cruz.png',
        correo:'daliadelacruzgrados@gmail.com'
      },
      {
        imagen:'/images/embajadores/Dany-Anaya.png',
        correo:'danyjoelemc2@gmail.com'
      },
      {
        imagen:'/images/embajadores/Erick-Melo.png',
        correo:'meloerick8@gmail.com'
      },
      {
        imagen:'/images/embajadores/Francis-Vargas.png',
        correo:'starlyn.vargas.flores@gmail.com'
        },
      {
        imagen:'/images/embajadores/Helen-Neyra.png',
        correo:'helenesmeraldaneyraguerrero@gmail.com'
      },
      {
        imagen:'/images/embajadores/Julio-Murgueytio.png',
        correo:'jcesar9000@gmail.com'
      },
      {
        imagen:'/images/embajadores/Julio-Vasquez.png',
        correo:'robertomoralesyt77@gmail.com'
      },
      {
        imagen:'/images/embajadores/Lucia-Cieza.png',
        correo:'daleskacs.2906@gmail.com'
      },
      {
        imagen:'/images/embajadores/Luis-Dipaz.png',
        correo:'ldipazz@uni.pe'
      },
      {
        imagen:'/images/embajadores/Manuel-Alfaro.png',
        correo:'14alejandroalfaroyco@gmail.com'
      },
      {
        imagen:'/images/embajadores/Manuel-Santillana.png',
        correo:'manuel.2001.17@gmail.com'
      },  
      {
        imagen:'/images/embajadores/Marcelo-Fernandez.png',
        correo:'marcelo_fs2000@outlook.com'
      },
      {
        imagen:'/images/embajadores/Matheus-Vicente.png',
        correo:'matheus.fvzeferino@ieee.org'
      },
      {
        imagen:'/images/embajadores/Mayra-Puedmag.png',
        correo:'mpuedmag@est.ups.edu.ec'
      },
      {
        imagen:'/images/embajadores/Monica-Jacome.png',
        correo:'monica.jacome@epn.edu.ec'
      },
      {
        imagen:'/images/embajadores/Ronnie-Padilla.png',
        correo:'ronipad1997@hotmail.com'
        },
      {
        imagen:'/images/embajadores/Yeidy-Llana.png',
        correo:'yeidymaylin@gmail.com'
      },
      {
        imagen:'/images/embajadores/Zedrix-Quispe.png',
        correo:'zaquispec@uni.pe'
      },
    ],
  }),
  created() {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  },
};
</script>

<style scoped>
.corroEmb{
  height: 100%;
}
@media (max-width: 960px) {
  .corroEmb{
    height: 100%;
    font-size: 9px;
    font-weight: 300;
  }
}
</style>