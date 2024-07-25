<script setup>
import Onas from "@/components/onas.vue"
import Hero from "@/components/hero.vue"
import Kontakt from "@/components/kontakt.vue"
import Sluzby from "@/components/sluzby.vue"
import Footer from "@/components/footer.vue"
import Projektovanie from "@/components/projektovanie.vue"
import { ref } from "vue";

</script>

<template>
  <main class="background">
    <div class="hero" id="domov">
      <Hero />
      <svg width="3685" height="1302" viewBox="0 0 3685 1302" fill="none" xmlns="http://www.w3.org/2000/svg" class="hero-bg">
        <path d="M3277.77 1302L250.844 255.13L0 0L3685 820.658L3277.77 1302Z" fill="url(#paint0_linear_2174_8)" fill-opacity="0.37"/>
        <defs>
        <linearGradient id="paint0_linear_2174_8" x1="-156.384" y1="262.842" x2="3378.51" y2="1617.42" gradientUnits="userSpaceOnUse">
        <stop stop-color="#333333" stop-opacity="0.46"/>
        <stop offset="0.5" stop-color="#333333" stop-opacity="0.444856"/>
        <stop offset="0.545" stop-color="#333333" stop-opacity="0.444856"/>
        <stop offset="0.666667" stop-color="#333333" stop-opacity="0.300108"/>
        <stop offset="1" stop-color="#333333" stop-opacity="0"/>
        </linearGradient>
        </defs>
      </svg>
    </div>
    <div class="onas hidden" id="onas">
      <Onas />
      <svg width="3038" height="979" viewBox="0 0 3038 979" fill="none" xmlns="http://www.w3.org/2000/svg" class="onas-bg">
        <path d="M335.729 979L2831.2 191.838L3038 0L0 617.07L335.729 979Z" fill="url(#paint0_linear_2176_11)" fill-opacity="0.37"/>
        <defs>
        <linearGradient id="paint0_linear_2176_11" x1="3166.93" y1="197.636" x2="326.204" y2="1391.17" gradientUnits="userSpaceOnUse">
        <stop stop-color="#333333" stop-opacity="0.46"/>
        <stop offset="0.5" stop-color="#333333" stop-opacity="0.444856"/>
        <stop offset="0.545" stop-color="#333333" stop-opacity="0.444856"/>
        <stop offset="0.666667" stop-color="#333333" stop-opacity="0.300108"/>
        <stop offset="1" stop-color="#333333" stop-opacity="0"/>
        </linearGradient>
        </defs>
      </svg>
    </div>
    <div class="sluzby" id="sluzby">
      <Sluzby />
    </div>
    <div class="projektovanie">
      <Projektovanie />
      <svg width="1440" height="1354" viewBox="0 0 1440 1354" fill="none" xmlns="http://www.w3.org/2000/svg" class="proj-bg">
        <g filter="url(#filter0_f_2053_184)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M817.665 421.265C923.973 431.978 1030.21 451.08 1102.95 507.228C1173.09 561.371 1199.27 636.629 1191.76 710.04C1184.77 778.246 1135.14 839.12 1064.24 885.336C996.619 929.416 909.384 952.299 817.665 953.892C723.358 955.53 629.196 938.712 558.741 894.115C484.181 846.92 450.952 779.779 432.423 710.04C408.011 618.16 347.637 508.078 438.146 440.233C528.868 372.228 687.134 408.111 817.665 421.265Z" fill="#F6AD00" fill-opacity="0.4"/>
        </g>
        <defs>
        <filter id="filter0_f_2053_184" x="-10" y="0" width="1603" height="1354" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="200" result="effect1_foregroundBlur_2053_184"/>
        </filter>
        </defs>
      </svg>
    </div>
    <div class="kontakt" id="kontakt">
      <Kontakt />
      <svg width="2818" height="731" viewBox="0 0 2818 731" fill="none" xmlns="http://www.w3.org/2000/svg" class="kontakt-bg">
        <path d="M0 461.258V0L2753.84 471.374L2818 731L0 461.258Z" fill="#333333" fill-opacity="0.15"/>
      </svg>
    </div>
    <div class="footer">
      <Footer />
    </div>
    <div class="copyright">
      <p>Copyright © 2024 REYFLEXX stavebná a projektová činnosť s.r.o. Všetky práva vyhradené.</p>
    </div>
  </main>
</template>

<style scoped>
.proj-bg {
  position: absolute;
  pointer-events: none;
  z-index: 0;
  margin-top: -10rem;
}
.background {
  background: #10101E;
  overflow: hidden;
}
.sluzby {
  min-height: 100vh;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  padding-bottom: 10rem;
}
.projektovanie {
  height: 100vh;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  position: relative;
  z-index: 1;
}
.onas {
  min-height: 100vh;
  margin: 0px;
  padding: 0px;
  padding-bottom: 10rem;
  width: 100%;
  height: 50vh;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 80px;
  position: relative;
  z-index: 1;
}
.onas-bg {
  position: absolute;
  width: 115%;
  margin: 0rem 0 0 0;
  pointer-events: none;
  z-index: 0;
}
.hero {
  margin: 0px;
  padding: 0px;
  width: 100%;
  height: 100vh;
  min-height:100vh;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 80px;
  position: relative;
  z-index: 1;
}
.hero-bg {
  position: absolute;
  width: 115%;
  margin: 10rem 0 0 0;
  pointer-events: none;
  z-index: 0;
}
.kontakt-bg {
  position: absolute;
  width: 110%;
  margin: 40rem 0 0 0;
  pointer-events: none;
  z-index: 0;
}
.kontakt {
  min-height: 165vh;
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  margin-top: 15rem;
  margin-bottom: 5rem;
  position: relative;
  z-index: 1;
}
.footer {
  width: 100vw;
  height: 30vh;
  background: #3947c259;
  min-height: 20rem;
}
.copyright {
  background: #3c4ff531;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media all and (max-width: 768px) {

}
</style>