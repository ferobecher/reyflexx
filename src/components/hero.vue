<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function scrollToSection(sectionId) {
  router.push({ path: '/', hash: `#${sectionId}` });
}
</script>

<template>
    <div class="hero-text">
    <h3>STAVEBNÁ FIRMA</h3>
    <h1>REYFLEXX</h1>
    <h3 class="bb">BANSKÁ BYSTRICA</h3>
    <button class="btn-kontakt" @click="scrollToSection('kontakt')">KONTAKT</button>
    <button class="btn-sluzby" @click="scrollToSection('sluzby')">SLUŽBY</button>
    </div>
    <div class="hero-image">
      <img src="C:\Users\Ja\Desktop\Projects\reyflexx_v2\src\assets\icons\hero.png"> 
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="blob">
        <path fill="#061FFF" d="M57.1,-64.1C73.2,-54.6,84.8,-35.8,85.2,-17.4C85.5,0.9,74.5,18.8,61.5,29.9C48.4,40.9,33.2,45.1,17,54.4C0.8,63.6,-16.4,78,-31.2,76.6C-46,75.2,-58.4,58,-60.7,41.2C-63.1,24.4,-55.4,8,-47.9,-4C-40.5,-15.9,-33.2,-23.4,-25.3,-34.4C-17.3,-45.4,-8.7,-59.8,5.9,-66.8C20.5,-73.9,41,-73.6,57.1,-64.1Z" transform="translate(100 100)" />
      </svg>
    </div>
</template>

<style scoped>
.hero-text {
  text-shadow: rgba(0, 0, 0, 0.10) 1.95px 1.95px 2.6px;
  margin-top: 10vh;
}
button {
  font-size: 18px;
  background: transparent;
  margin: 30px 10px 30px 10px;
  font-weight: bold;
  transition: all 0.2s;
  border-radius: 7px;
}
.btn-kontakt {
  padding: 15px 26px 15px 26px;
  background: linear-gradient(90deg, #0019FF, #0688FF);
  border: 5px solid #0688FF;
  color: white;
}
.btn-kontakt:hover {
  background: #0688FF;
  color: #dbdbdb;
  cursor: pointer;
}
.btn-sluzby {
  padding: 15px 38px 15px 38px;
  color: #f6ad00;
  border: 5px solid #f6ad00;
}
.btn-sluzby:hover {
  background: #f6ad00;
  color: #dbdbdb;
  cursor: pointer;
}
h1 {
  font-size: 100px;
  line-height: 0.8;
  background: linear-gradient(90deg, #4154FF 20%, #f6ad00 80%);
  -webkit-text-stroke: 0.5px white;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
h3 {
  font-size: 26px;
}
.bb {
  margin-left: 250px;
}
img {
  display: block;
  height: 30rem;
  width: 33rem;
  object-fit: cover;
  border-radius: 12px;
  border: 7px solid rgba(128, 128, 128, 0.1);
  z-index: 1;
  position: relative;
  margin-top: -2rem;
}
.blob {
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  height: 40rem;
  margin: -5rem 0 0 -5rem;
  filter: blur(300px);
}
.hero-image {
  position: relative;
  height: 400px;
  width: 450px;
}
</style>