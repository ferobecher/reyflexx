<script>
import { eventBus } from '../eventBus.js';
import Lightbox from '@/components/lightbox.vue';

export default {
  components: {
    Lightbox,
  },
  setup() {
    const openLightBox = (sluzbaIndex) => {
      eventBus.emit('openLightBox', sluzbaIndex);
    };

    return {
      openLightBox,
    };
  },
};
</script>

<template>
    <div>
        <img class="front" src="@\assets\icons\projektovanie.png">
        <img class="behind-right" src="@\assets\icons\projektovanie.png">
        <img class="behind-left" src="@\assets\icons\projektovanie.png">
        <h2>Kvalitné <mark>PROJEKTOVANIE</mark> <br>je základ úspešnej stavby</h2>
        <p> Ponúkame kompletnú 2D projekciu, <br>3D vizualizáciu a administratívu.</p>
        <button @click="openLightBox(0)">GALÉRIA</button>
    </div>
</template>

<style scoped>
.front {
  position: relative;
  z-index: 1;
  margin-bottom: -3rem;
}
.behind-right {
  position: absolute;
  left: 0;
  right: 0;
  z-index: 0;
  margin-left: 83rem;
  height: 35vh;
  margin-top: -1rem;
}
.behind-left {
  height: 35vh;
  position: absolute;
  left: 0;
  right: 0;
  z-index: 0;
  margin-left: 30rem;
  margin-top: -1rem;
}
mark {
  color: #f6ad00;
  background: transparent;
  font-size: 50px;
  font-weight: bold;
}
h2 {
  font-weight: normal;
  margin-bottom: 3rem;
  line-height: 3.5rem;
}
img {
  height: 40vh;
}

button {
  font-size: 18px;
  background: transparent;
  margin: 30px 10px 30px 10px;
  font-weight: bold;
  transition: all 0.2s;
  border-radius: 7px;
  padding: 15px 38px 15px 38px;
  color: #f6ad00;
  border: 5px solid #f6ad00;
}
button:hover {
  background: #f6ad00;
  color: #dbdbdb;
  cursor: pointer;
}
</style>