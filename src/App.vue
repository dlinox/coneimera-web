<template>
  <v-app class="app">
    <div class="navbar" style="z-index:99;">
      <v-container>
        <div class="py-0 barrar_menu">
          <div class="d-flex align-center">
            <router-link to="/">
              <v-img
                alt="Vuetify Logo"
                class="shrink ml-5 py-5"
                contain
                src="/images/logo.png"
                transition="scale-transition"
                width="120px"
              />
            </router-link>
          </div>

          <v-list dense flat class="py-0 d-none d-md-block">
            <v-list-item-group class="d-flex">
              <v-list-item to="/">
                <v-list-item-content> Cronograma </v-list-item-content>
              </v-list-item>

              <v-menu
                open-on-hover
                bottom
                offset-y
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-list-item v-bind="attrs" v-on="on" >
                    <v-list-item-content>Actividades</v-list-item-content>
                  </v-list-item>
                </template>

                <v-list >
                  <v-list-item
                    link
                    to="/ponencias"
                  >
                    <v-list-item-title>Ponencias</v-list-item-title>
                  </v-list-item>
                  <v-list-item
                    link
                    to="/minicursos"
                  >
                    <v-list-item-title>Minicursos</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>


              <v-menu
                open-on-hover
                bottom
                offset-y
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-list-item v-bind="attrs" v-on="on" >
                    <v-list-item-content>Concursos</v-list-item-content>
                  </v-list-item>
                </template>

                <v-list >
                  <v-list-item
                    link
                    href="/concursos/#destreza"
                  >
                    <v-list-item-title>Concurso de Destreza</v-list-item-title>
                  </v-list-item>
                  <v-list-item
                    link
                    href="/concursos/#investigacion"
                  >
                    <v-list-item-title>Concurso de Investigación</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>

              <v-list-item href="/#colaboradores">
                <v-list-item-content> Colaboradores </v-list-item-content>
              </v-list-item>
              <v-list-item href="/embajadores">
                <v-list-item-content> Embajadores </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
          <div class="menu_especial d-none d-md-block">
            <v-btn
              href="https://participante.coneimera.org/registro"
              target="_blanck"
              height="100%"
              dark
              large
              text
              link
            >
              INSCRIPCIONES
            </v-btn>
          </div>
          <v-btn
            icon
            class="d-block d-md-none mr-3"
            @click="menu_drawer = !menu_drawer"
          >
            <v-icon large>mdi-menu</v-icon>
          </v-btn>
        </div>
      </v-container>
    </div>

    <v-navigation-drawer v-model="menu_drawer" fixed right class="d-md-none" style="z-index:999">
      <v-row justify="end">
        <v-col cols="12" class="d-flex justify-end pr-3">
          <v-btn icon @click="menu_drawer = !menu_drawer">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-list>
        <v-list-item color="white" link to="/">
          <v-list-item-title class="black--text">Cronograma</v-list-item-title>
        </v-list-item>

        <v-list-group no-action color="grey">
          <template v-slot:activator>
            <v-list-item-title class="black--text"
              >Actividades</v-list-item-title
            >
          </template>

          <v-list-item link to="/minicursos">
            <v-list-item-title class="black--text"
              >Minicursos</v-list-item-title
            >
          </v-list-item>
          <v-list-item link to="/ponencias">
            <v-list-item-title class="black--text">Ponencias</v-list-item-title>
          </v-list-item>
        </v-list-group>

        <v-list-group no-action color="grey">
          <template v-slot:activator>
            <v-list-item-title class="black--text">Concursos</v-list-item-title>
          </template>

          <v-list-item link to="/concursos">
            <v-list-item-title class="black--text">
              Concurso de Destreza</v-list-item-title
            >
          </v-list-item>
          <v-list-item link to="/concursos">
            <v-list-item-title class="black--text"
              >Concursos de Investigación</v-list-item-title
            >
          </v-list-item>
        </v-list-group>

        <v-list-item color="white" href="/#colaboradores">
          <v-list-item-title class="black--text">Colaboradores</v-list-item-title>
        </v-list-item>
        <v-list-item color="white" to="/embajadores">
          <v-list-item-title class="black--text">Embajadores</v-list-item-title>
        </v-list-item>
        <!-- <v-list-item color="white" to="/">
          <v-list-item-title class="black--text"
            >Meza Redonda</v-list-item-title
          >
        </v-list-item>
        <v-list-item color="white" to="/">
          <v-list-item-title class="black--text">Paneles</v-list-item-title>
        </v-list-item>-->
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn
            href="https://participante.coneimera.org/registro"
            target="_blanck"
            large
            link
            block
            color="primary"
          >
            INSCRIPCIONES
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    <v-main class="main-content">
       <transition name="fade" mode="out-in">
      <router-view />
       </transition>
    </v-main>
    <v-footer id="footer" dark>
      <v-container>
        <div class="titulo-container">
          <div class="separador"></div>
          <div class="titulo white--text">Participar</div>
        </div>
        <v-row class="mx-auto w-75" justify="center">
          <v-col cols="6" sm="4" class="mx-auto">
            <v-btn
              link
              href="https://participante.coneimera.org/registro"
              block
              color="pimario"
              large
              >REGISTRATE AQUÍ</v-btn
            >
          </v-col>
        </v-row>

        <v-divider class="grey darken-2 mb-12 mt-6"></v-divider>

        <v-row justify="space-between">
          <v-col cols="12" sm="6" md="4">
            <v-row>
              <v-col cols="12" md="12">
                <v-img class="mx-auto" src="@/assets/logo.png" width="75%" />
              </v-col>
              <v-col cols="12" md="12">
                <p class="text-sm-body-2">
                  XXVII Congreso Nacional y Exposición Internacional de
                  Ingeniería Mecánica, Mecatrónica, Eléctrica, Electrónica y
                  Ramas Afines.
                </p>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" sm="6" md="4" class="d-flex justify-center">
            <div class="footer-menu">
              <h4 class="mb-2">Menu</h4>
              <v-list flat dense color="transparent">
                <v-list-item-group no-action sub-group class="">
                  <v-list-item
                    dense
                    v-for="(item, i) in menu_items"
                    :key="i"
                    link
                    :to="item.ruta"
                    class="item-menu"
                  >
                    <v-list-item-content class="py-0">
                      <v-list-item-title
                        v-text="item.nombre"
                      ></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </div>
          </v-col>
          <v-col
            cols="12"
            sm="6"
            md="4"
            class="d-flex justify-center justify-md-end"
          >
            <div class="footer-contactos">
              <h4 class="mb-2">Contactos</h4>
              <v-list flat dense color="transparent">
                <v-list-item-group no-action sub-group>
                  <v-list-item
                    dense
                    v-for="(item, i) in contacto_items"
                    :key="i"
                    link
                    :href="item.ruta"
                    target="_black"
                    class="item-menu"
                  >
                    <v-list-item-icon class="mr-2">
                      <v-icon dense v-text="item.icono"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-content class="py-0">
                      <v-list-item-title
                        v-text="item.nombre"
                      ></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </div>
          </v-col>
        </v-row>

        <v-divider class="grey darken-2 mb-4 mt-4"></v-divider>

        <v-row class="d-flex justify-end">
          <v-col cols="6" class="text-end grey--text">
            <small> © CONEIMERA 2021 </small>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  metaInfo: {
    title: "CONEIMERA",
    titleTemplate: "%s | CONEIMERA",
  },
  data: () => ({
    menu_drawer: false,
    menu_items: [
      { nombre: "Cronograma", ruta: "/", sub_menu: null }, //falta
        { nombre: "Minicursos", ruta: "/minicursos" },
        { nombre: "Ponencias", ruta: "/ponencias" },
      {
        nombre: "Concursos",
        ruta: "/concursos",
      },
      { nombre: "Embajadores", ruta: "/embajadores", sub_menu: null },

      //{ nombre: "Meza Redonda", ruta: "/", sub_menu: null },
      //{ nombre: "Paneles", ruta: "/", sub_menu: null },
    ],
    contacto_items: [
      { nombre: "Puno- echenique 1958", ruta: "", icono: "mdi-map-marker" },
      { nombre: "info@coneimera.org", ruta: "", icono: "mdi-mail" },
      { nombre: "+51 914466410", ruta: "", icono: "mdi-whatsapp" },
      {
        nombre: "Facebook",
        ruta: "https://www.facebook.com/Coneimera2021",
        icono: "mdi-facebook",
      },
      {
        nombre: "LinkedIn",
        ruta: "https://www.linkedin.com/company/coneimera/",
        icono: "mdi-linkedin",
      },
      {
        nombre: "Instagram",
        ruta: "https://www.instagram.com/p/CLC06PWJ4dh/?igshid=arkzybbe578b",
        icono: "mdi-instagram",
      },
    ],
  }),
};
</script>
<style>
.main-content {
  overflow: hidden;
}
.navbar {
  position: fixed;
  top: 10px;
  max-width: 100vw;
  width: 100%;
  z-index: 1;
}
.navbar .v-list-item:hover,
.navbar a:hover {
  color: #f23a29;
  font-weight: 600;
}
.menu_desplegable {
  z-index: 2;
}
.barrar_menu {
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  -webkit-box-shadow: 0px 2px 13px -1px rgba(46, 46, 46, 0.56);
  -moz-box-shadow: 0px 2px 13px -1px rgba(46, 46, 46, 0.56);
  box-shadow: 0px 2px 13px -1px rgba(46, 46, 46, 0.56);
}
.barrar_menu .menu_especial {
  background: #035159;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  height: 91.5px;
  -webkit-box-shadow: 0px 2px 13px -1px rgba(46, 46, 46, 0.56);
  -moz-box-shadow: 0px 2px 13px -1px rgba(46, 46, 46, 0.56);
  box-shadow: 0px 2px 13px -1px rgba(46, 46, 46, 0.56);
}
.barrar_menu .menu_especial:hover {
  color: white !important;
}

.titulo-container {
  width: 100%;
  padding-top: 70px;
  z-index: 1;
  color: initial;
}
.titulo-container .separador {
  width: 70px;
  height: 4px;
  background: #035159;
  margin: auto;
}
.titulo-container .titulo {
  font-size: 32px;
  font-weight: 700;
  width: 100%;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 20px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

@media (max-width: 480px) {
}
</style>
