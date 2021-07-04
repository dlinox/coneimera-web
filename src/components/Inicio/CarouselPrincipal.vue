<template>
  <div class="carousel">
    <v-carousel show-arrows-on-hover hide-delimiters cycle height="100%">
      <v-carousel-item v-for="(slide, i) in slides" :key="i" :src="slide.foto">
        <div class="cover-carousel">
          <div class="texto-carousel">
            <v-container>
              <div class="text-h5 text-sm-h3 text-center px-6">
                <b>{{ slide.texto }}</b>
              </div>
              <div class="pimario--text text-h6 text-sm-h4 text-center">
                <strong style="color:#ff4500">{{ slide.subtitulo }}</strong>
              </div>
            </v-container>
          </div>
        </div>
      </v-carousel-item>
    </v-carousel>

    <div class="cuenta-regresiva">
      <div class="item-container">
        <div class="item-number">
          {{ days }}
        </div>
        <div class="item-label">Dia(s)</div>
      </div>

      <div class="item-container">
        <div class="item-number">
          {{ hours }}
        </div>
        <div class="item-label">Hora(s)</div>
      </div>
      <div class="item-container">
        <div class="item-number">
          {{ minutes }}
        </div>
        <div class="item-label">Minuto(s)</div>
      </div>
      <div class="item-container">
        <div class="item-number">
          {{ seconds }}
        </div>
        <div class="item-label">Segundo(s)</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    slides: [
      {
        foto: "/images/imgconcurso1.jpg",
        texto:
          "XXVII CONGRESO NACIONAL Y EXPOSICIÓN INTERNACIONAL DE INGENIERÍA MECÁNICA, MECATRÓNICA, ELÉCTRICA, ELECTRÓNICA Y RAMAS AFINES    UNA PUNO 2021",
        subtitulo: null,
      },
      {
        foto: "/images/baner1.png",
        texto: null,
        subtitulo: null,
      },
      {
        foto: "/images/baner2.png",
        texto: null,
        subtitulo: null,
      },
      {
        foto: "/images/baner3.png",
        texto: null,
        subtitulo: null,
      },
    
    ],
    hours: 0,
    days: 0,
    minutes: 0,
    seconds: 0,
    datend: "2021-09-20T00:01",
    noactive: true,
  }),
  mounted() {
    setInterval(this.updateCounter, 100);
  },
  methods: {
    updateCounter() {
      let now = new Date();
      let end = new Date(this.datend);
      let distance = end - now;
      if (distance > 0) {
        this.hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
        this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
        this.noactive = false;
      } else {
        this.hours = 0;
        this.minutes = 0;
        this.days = 0;
        this.seconds = 0;
        this.noactive = true;
      }
    },
  },
};
</script>
<style>
.carousel {
  height: 100vh;
  position: relative;
}
.cuenta-regresiva {
  position: absolute;
  bottom: 0px;
  color: gainsboro;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 10px;
}
.cuenta-regresiva .item-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
  /*background: rgba(242, 58, 41, 0.3);*/
  background: rgba(3, 81, 89, 0.1);
  padding: 10px;
}
.cuenta-regresiva .item-container .item-number {
  font-size: 50px;
  width: 100%;
  text-align: center;
  font-weight: 800;
}
.cuenta-regresiva .item-container .item-label {
  font-size: 20px;
  width: 100%;
  text-align: center;
}

.cover-carousel {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: #0350595d;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}

.cover-carousel .texto-carousel {
  text-align: center;
}

.fade-enter-active .texto-carousel {
  animation: bounce-in 1.5s;
}

.fade-leave-active .texto-carousel {
  animation: bounce-in 1.5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

@media (max-width: 700px) {
  .carousel {
    height: 60vh;
  }
  .cuenta-regresiva .item-container .item-number {
    font-size: 30px;
  }
  .cuenta-regresiva .item-container .item-label {
    font-size: 15px;
  }
}
</style>