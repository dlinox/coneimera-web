<template>
  <div class="d-flex">
    <div class="contenedor-universidades-carousel">
      <div class="content-all">
        <div class="content-carrousel">
          <figure><img src="images/universidades/logousat.jpg" /></figure>
          <figure><img src="images/universidades/logounaj.jpg" /></figure>
          <figure><img src="images/universidades/logoungbg.png" /></figure>
          <figure><img src="images/universidades/logountels.png" /></figure>
          <figure><img src="images/universidades/Logo UNAS.png" /></figure>
          <figure><img src="images/universidades/logoucv.png" /></figure>
          <figure><img src="images/universidades/escudo-UNPRG.png" /></figure>
          <figure><img src="images/universidades/logounc.png" /></figure>
          <figure><img src="images/universidades/logouni.png" /></figure>
          <figure><img src="images/universidades/logounsa.png" /></figure>
          <figure><img src="images/universidades/logounsac.jpg" /></figure>
          <figure><img src="images/universidades/logountels.png" /></figure>
          <figure><img src="images/universidades/logounap.jpg" /></figure>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    val: 0,
  }),
  created() {
    setInterval(this.GirarCarousel, 3800);
  },
  methods: {
    GirarCarousel() {
      if (this.val >= 352) {
        this.val = 32;
      }
      this.val += 32;
    },
  },
};
</script>
<style>
.contenedor-universidades-carousel {
  padding-top: 40px;
  margin: 0 auto;
  width: 160px;
  height: 240px;
  position: relative;
  perspective: 1000px;
  display: flex;
}

figure {
  text-align: center;
  height: 250px;
}

.content-all {
  width: 100px;
  margin: auto;
  height: 160px;
  perspective: 800px;
  position: relative;
  margin-top: 50px;
}

.content-carrousel {
  width: 100%;
  position: absolute;
  animation: rotar 30s infinite linear;
  transform-style: preserve-3d;
}

.content-carrousel:hover {
  animation-play-state: paused;
  cursor: pointer;
}

.content-carrousel figure {
  width: 100%;
  height: 120px;
  overflow: hidden;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 20px 0px rgb(66, 66, 66);
  transition: all 300ms;
}

.content-carrousel figure:hover {
  box-shadow: 0px 0px 0px 0px black;
  transition: all 300ms;
}

.content-carrousel figure:nth-child(1) {
  transform: rotateY(0deg) translateZ(300px);
}
.content-carrousel figure:nth-child(2) {
  transform: rotateY(30deg) translateZ(300px);
}
.content-carrousel figure:nth-child(3) {
  transform: rotateY(60deg) translateZ(300px);
}
.content-carrousel figure:nth-child(4) {
  transform: rotateY(90deg) translateZ(300px);
}
.content-carrousel figure:nth-child(5) {
  transform: rotateY(120deg) translateZ(300px);
}
.content-carrousel figure:nth-child(6) {
  transform: rotateY(150deg) translateZ(300px);
}
.content-carrousel figure:nth-child(7) {
  transform: rotateY(180deg) translateZ(300px);
}
.content-carrousel figure:nth-child(8) {
  transform: rotateY(210deg) translateZ(300px);
}
.content-carrousel figure:nth-child(9) {
  transform: rotateY(240deg) translateZ(300px);
}
.content-carrousel figure:nth-child(10) {
  transform: rotateY(270deg) translateZ(300px);
}
.content-carrousel figure:nth-child(11) {
  transform: rotateY(300deg) translateZ(300px);
}
.content-carrousel figure:nth-child(12) {
  transform: rotateY(330deg) translateZ(300px);
}

.content-carrousel img {
  width: 95%;
  transition: all 300ms;
}

.content-carrousel img:hover {
  transform: scale(0.9);
  transition: all 300ms;
}

@keyframes rotar {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
}

@media (max-width: 700px) {
}
</style>