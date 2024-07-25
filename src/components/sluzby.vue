<script>
import { eventBus } from '../eventBus.js';
import Lightbox from '@/components/Lightbox.vue';
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
}
</script>

<template>
  <div class="grid-container">
    <div class="grid-item" @click="openLightBox(0)"> 
      <h3>EXTERIER</h3>
      <div class="grid-item-text">
      <p>
        Zaoberáme komplexnými službami v oblasti nehnuteľností. Zabezpečujeme všetko od projektov, inštalácií až po posledný detail.
      </p>
      <div class="galeria">
        <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="click">
          <rect width="90" height="90" fill="url(#pattern0_2207_10)"/>
          <defs>
          <pattern id="pattern0_2207_10" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlink:href="#image0_2207_10" transform="scale(0.0111111)"/>
          </pattern>
          <image id="image0_2207_10" width="90" height="90" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAADX0lEQVR4nO2dPYxMYRSGXxGhIRobQiQSKoVCKxE9HQWJTkPs0qkkOlo0tlLo7n5nVmNDlBKswk8hIlGJKMTvzpx3sTZXvjUjU4yxd3bufj9znuR0dyff99x3zs7ce2YGMAzDMAzDyJbyJjaowzk6zKqg5YuCxyqYKGewPvT6skAFOyh4QUHZsxye+2NCrzP5JLOf5C7ZluwVoL5d/E9yu1QwPrxTPGLQYXa5ounwKPR6k0UFzQqJboZeb7JwuWluV+j1JgtNtInOClqiTXRW0BJtorOClmgTnRW0RJvorKAl2kRnBS3RJjoraIk20VlBS3TcokubA6lftNocSP2JLm0OZHVE64BzIH74xo+XtcfMukfOxkdiMIcVRQ8yB6IFtvtJpz7HPfPHIGdYNdFV5kAc5nxa+0rukp11slk10dVPzESFE3O2sy4vvSU4pQ4PKfiUfKthzaIHaTWtAlv7/l2KrYb1J7paqymwlg5Psms1rDvR1evpIK0mehhe7OCV0nQrQ8taQSU13coIhK2kkAqMQJaJlvAiLdESXrK1DjHR1qNDwQie/tY6JLxI69ESXrL9MxQTbT06FIzg6R9d6yhLrJl3OESHa/7KFQUfVPBTBT/o8FEd3qjgngouq+DoXIEtJroiLcE+fyunytlWhwU6zNDhZHkbG3s9LiNIZTSJZgMHq9yp6CldQAomvzvsMdE9+DKNzRS8G1YCVLBIh0Knsd8/fuhERpNoFZyva5EquB9aVDyiHR6E3gxHQTQd3ofeDEdEdLHUVyPYFHMW7ZkvsEsdrlDwNfTGmLPoDuUtbPLTnOrwNvQGmbPov8InsY4NHKs0bpVpYbVgAwfaffxX6E0zZ9Ed5gvspsNVddDQm2fOojs0BWNeeGgBzF10BwouhJbAURA9KrIRC7nLRkzkLBuxkaNsdfiGGMlNtgpeIVZUcCm0IA6v7iBmckm2OpxG7GjiyfY3npP5gQf1VwJTvdbtcAMpQYcTqV0f8a82WoJtSI3mFPaq4GUSkgWL6nAEqVL++R6Oi+35j3gl5/ITJSywk4LrsQlfahcNHEZuNAVjSzMly/lcdr2CF/yEVZI9uSot/20DUzjevs59Vx1e0+GzH7CsoT00/Ts+/2ZEBWeSeQlnGIZhGIaBf/EbFJrdfOgbvowAAAAASUVORK5CYII="/>
          </defs>
        </svg>
        <h4>GALÉRIA</h4>
      </div>
      </div>
    </div>
    <div class="grid-item" @click="openLightBox(0)">
      <h3>ZATEPLENIE</h3>
      <div class="grid-item-text">
      <p>
        Zaoberáme komplexnými službami v oblasti nehnuteľností. Zabezpečujeme všetko od projektov, inštalácií až po posledný detail.
      </p>
      <div class="galeria">
        <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="click">
          <rect width="90" height="90" fill="url(#pattern0_2207_10)"/>
          <defs>
          <pattern id="pattern0_2207_10" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlink:href="#image0_2207_10" transform="scale(0.0111111)"/>
          </pattern>
          <image id="image0_2207_10" width="90" height="90" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAADX0lEQVR4nO2dPYxMYRSGXxGhIRobQiQSKoVCKxE9HQWJTkPs0qkkOlo0tlLo7n5nVmNDlBKswk8hIlGJKMTvzpx3sTZXvjUjU4yxd3bufj9znuR0dyff99x3zs7ce2YGMAzDMAzDyJbyJjaowzk6zKqg5YuCxyqYKGewPvT6skAFOyh4QUHZsxye+2NCrzP5JLOf5C7ZluwVoL5d/E9yu1QwPrxTPGLQYXa5ounwKPR6k0UFzQqJboZeb7JwuWluV+j1JgtNtInOClqiTXRW0BJtorOClmgTnRW0RJvorKAl2kRnBS3RJjoraIk20VlBS3TcokubA6lftNocSP2JLm0OZHVE64BzIH74xo+XtcfMukfOxkdiMIcVRQ8yB6IFtvtJpz7HPfPHIGdYNdFV5kAc5nxa+0rukp11slk10dVPzESFE3O2sy4vvSU4pQ4PKfiUfKthzaIHaTWtAlv7/l2KrYb1J7paqymwlg5Psms1rDvR1evpIK0mehhe7OCV0nQrQ8taQSU13coIhK2kkAqMQJaJlvAiLdESXrK1DjHR1qNDwQie/tY6JLxI69ESXrL9MxQTbT06FIzg6R9d6yhLrJl3OESHa/7KFQUfVPBTBT/o8FEd3qjgngouq+DoXIEtJroiLcE+fyunytlWhwU6zNDhZHkbG3s9LiNIZTSJZgMHq9yp6CldQAomvzvsMdE9+DKNzRS8G1YCVLBIh0Knsd8/fuhERpNoFZyva5EquB9aVDyiHR6E3gxHQTQd3ofeDEdEdLHUVyPYFHMW7ZkvsEsdrlDwNfTGmLPoDuUtbPLTnOrwNvQGmbPov8InsY4NHKs0bpVpYbVgAwfaffxX6E0zZ9Ed5gvspsNVddDQm2fOojs0BWNeeGgBzF10BwouhJbAURA9KrIRC7nLRkzkLBuxkaNsdfiGGMlNtgpeIVZUcCm0IA6v7iBmckm2OpxG7GjiyfY3npP5gQf1VwJTvdbtcAMpQYcTqV0f8a82WoJtSI3mFPaq4GUSkgWL6nAEqVL++R6Oi+35j3gl5/ITJSywk4LrsQlfahcNHEZuNAVjSzMly/lcdr2CF/yEVZI9uSot/20DUzjevs59Vx1e0+GzH7CsoT00/Ts+/2ZEBWeSeQlnGIZhGIaBf/EbFJrdfOgbvowAAAAASUVORK5CYII="/>
          </defs>
        </svg>
        <h4>GALÉRIA</h4>
      </div>
      </div>
    </div>
    <div class="grid-item" @click="openLightBox(1)">
      <h3>INTERIÉR</h3>
      <div class="grid-item-text">
      <p>
        Zaoberáme komplexnými službami v oblasti nehnuteľností. Zabezpečujeme všetko od projektov, inštalácií až po posledný detail.
      </p>
      <div class="galeria">
        <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="click">
          <rect width="90" height="90" fill="url(#pattern0_2207_10)"/>
          <defs>
          <pattern id="pattern0_2207_10" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlink:href="#image0_2207_10" transform="scale(0.0111111)"/>
          </pattern>
          <image id="image0_2207_10" width="90" height="90" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAADX0lEQVR4nO2dPYxMYRSGXxGhIRobQiQSKoVCKxE9HQWJTkPs0qkkOlo0tlLo7n5nVmNDlBKswk8hIlGJKMTvzpx3sTZXvjUjU4yxd3bufj9znuR0dyff99x3zs7ce2YGMAzDMAzDyJbyJjaowzk6zKqg5YuCxyqYKGewPvT6skAFOyh4QUHZsxye+2NCrzP5JLOf5C7ZluwVoL5d/E9yu1QwPrxTPGLQYXa5ounwKPR6k0UFzQqJboZeb7JwuWluV+j1JgtNtInOClqiTXRW0BJtorOClmgTnRW0RJvorKAl2kRnBS3RJjoraIk20VlBS3TcokubA6lftNocSP2JLm0OZHVE64BzIH74xo+XtcfMukfOxkdiMIcVRQ8yB6IFtvtJpz7HPfPHIGdYNdFV5kAc5nxa+0rukp11slk10dVPzESFE3O2sy4vvSU4pQ4PKfiUfKthzaIHaTWtAlv7/l2KrYb1J7paqymwlg5Psms1rDvR1evpIK0mehhe7OCV0nQrQ8taQSU13coIhK2kkAqMQJaJlvAiLdESXrK1DjHR1qNDwQie/tY6JLxI69ESXrL9MxQTbT06FIzg6R9d6yhLrJl3OESHa/7KFQUfVPBTBT/o8FEd3qjgngouq+DoXIEtJroiLcE+fyunytlWhwU6zNDhZHkbG3s9LiNIZTSJZgMHq9yp6CldQAomvzvsMdE9+DKNzRS8G1YCVLBIh0Knsd8/fuhERpNoFZyva5EquB9aVDyiHR6E3gxHQTQd3ofeDEdEdLHUVyPYFHMW7ZkvsEsdrlDwNfTGmLPoDuUtbPLTnOrwNvQGmbPov8InsY4NHKs0bpVpYbVgAwfaffxX6E0zZ9Ed5gvspsNVddDQm2fOojs0BWNeeGgBzF10BwouhJbAURA9KrIRC7nLRkzkLBuxkaNsdfiGGMlNtgpeIVZUcCm0IA6v7iBmckm2OpxG7GjiyfY3npP5gQf1VwJTvdbtcAMpQYcTqV0f8a82WoJtSI3mFPaq4GUSkgWL6nAEqVL++R6Oi+35j3gl5/ITJSywk4LrsQlfahcNHEZuNAVjSzMly/lcdr2CF/yEVZI9uSot/20DUzjevs59Vx1e0+GzH7CsoT00/Ts+/2ZEBWeSeQlnGIZhGIaBf/EbFJrdfOgbvowAAAAASUVORK5CYII="/>
          </defs>
        </svg>
        <h4>GALÉRIA</h4>
      </div>
      </div>
    </div>
    <div class="grid-item" @click="openLightBox(1)">
      <h3>DREVOSTAVBY</h3>
      <div class="grid-item-text">
      <p>
        Zaoberáme komplexnými službami v oblasti nehnuteľností. Zabezpečujeme všetko od projektov, inštalácií až po posledný detail.
      </p>
      <div class="galeria">
        <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="click">
          <rect width="90" height="90" fill="url(#pattern0_2207_10)"/>
          <defs>
          <pattern id="pattern0_2207_10" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlink:href="#image0_2207_10" transform="scale(0.0111111)"/>
          </pattern>
          <image id="image0_2207_10" width="90" height="90" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAADX0lEQVR4nO2dPYxMYRSGXxGhIRobQiQSKoVCKxE9HQWJTkPs0qkkOlo0tlLo7n5nVmNDlBKswk8hIlGJKMTvzpx3sTZXvjUjU4yxd3bufj9znuR0dyff99x3zs7ce2YGMAzDMAzDyJbyJjaowzk6zKqg5YuCxyqYKGewPvT6skAFOyh4QUHZsxye+2NCrzP5JLOf5C7ZluwVoL5d/E9yu1QwPrxTPGLQYXa5ounwKPR6k0UFzQqJboZeb7JwuWluV+j1JgtNtInOClqiTXRW0BJtorOClmgTnRW0RJvorKAl2kRnBS3RJjoraIk20VlBS3TcokubA6lftNocSP2JLm0OZHVE64BzIH74xo+XtcfMukfOxkdiMIcVRQ8yB6IFtvtJpz7HPfPHIGdYNdFV5kAc5nxa+0rukp11slk10dVPzESFE3O2sy4vvSU4pQ4PKfiUfKthzaIHaTWtAlv7/l2KrYb1J7paqymwlg5Psms1rDvR1evpIK0mehhe7OCV0nQrQ8taQSU13coIhK2kkAqMQJaJlvAiLdESXrK1DjHR1qNDwQie/tY6JLxI69ESXrL9MxQTbT06FIzg6R9d6yhLrJl3OESHa/7KFQUfVPBTBT/o8FEd3qjgngouq+DoXIEtJroiLcE+fyunytlWhwU6zNDhZHkbG3s9LiNIZTSJZgMHq9yp6CldQAomvzvsMdE9+DKNzRS8G1YCVLBIh0Knsd8/fuhERpNoFZyva5EquB9aVDyiHR6E3gxHQTQd3ofeDEdEdLHUVyPYFHMW7ZkvsEsdrlDwNfTGmLPoDuUtbPLTnOrwNvQGmbPov8InsY4NHKs0bpVpYbVgAwfaffxX6E0zZ9Ed5gvspsNVddDQm2fOojs0BWNeeGgBzF10BwouhJbAURA9KrIRC7nLRkzkLBuxkaNsdfiGGMlNtgpeIVZUcCm0IA6v7iBmckm2OpxG7GjiyfY3npP5gQf1VwJTvdbtcAMpQYcTqV0f8a82WoJtSI3mFPaq4GUSkgWL6nAEqVL++R6Oi+35j3gl5/ITJSywk4LrsQlfahcNHEZuNAVjSzMly/lcdr2CF/yEVZI9uSot/20DUzjevs59Vx1e0+GzH7CsoT00/Ts+/2ZEBWeSeQlnGIZhGIaBf/EbFJrdfOgbvowAAAAASUVORK5CYII="/>
          </defs>
        </svg>
        <h4>GALÉRIA</h4>
      </div>
      </div>
    </div>
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="blob">
        <path fill="#061FFF" d="M40.9,-17.5C48.1,8.8,45.5,34,31.2,44.9C16.8,55.8,-9.4,52.4,-30,38.2C-50.5,24,-65.4,-1,-59.5,-25.6C-53.6,-50.1,-26.8,-74.1,-5,-72.5C16.9,-70.9,33.7,-43.7,40.9,-17.5Z" transform="translate(100 100)" />
    </svg>
  </div>
  <Lightbox />
</template>

<style>
.grid-item-text {
  text-align: center;
  display: none;
}
.grid-item:hover .grid-item-text{
  display: block; 
}
.click {
  margin: 1rem -1.6rem 0 0;
  height: 30px;
  position: relative;
}

.galeria {
  display: flex;
  flex-direction: row;
  margin-right: 2rem;
  color: #f6ad00;
  justify-content: center;

}
h3 {
  font-size: 40px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.308);
}
.blob {
  position: absolute;
  z-index: -1;
  height: 70%;
  margin: 12rem 0 0 12em;
  filter: blur(250px)
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  height: 70rem;
  width: 70rem;
  max-width: 80vw;
  margin: 0;
  padding: 0;
  gap: 1rem;
  position: relative;
  z-index: 1;
}

.grid-item {
  padding: 0;
  box-sizing: border-box;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px;
  border-radius: 12px;
  border: 7px solid rgba(90, 90, 90, 0.356);
  transition: transform 0.3s ease;
}

.grid-item:nth-child(1) {
  background: linear-gradient(rgba(43, 42, 42, 0.404), rgba(0, 0, 0, 0.123)), url('@/assets/icons/sluzby-grid/bg_ext.JPEG') no-repeat center;
  background-size: cover;
  margin-top: 40%;
  height: 60%;
  width: 110%;
}
  .grid-item:nth-child(2) {
  background: linear-gradient(rgba(66, 66, 66, 0.493), rgba(0, 0, 0, 0.3)), url('@/assets/icons/hero.png') no-repeat center;
  background-size: cover;
  margin-left: 10%;
  margin-top: 15%;
  height: 85%;
}

.grid-item:nth-child(3) {
  background: linear-gradient(rgba(54, 54, 54, 0.438), rgba(0, 0, 0, 0.3)), url('@/assets/icons/sluzby-grid/bg_int.JPEG') no-repeat;
  background-size: cover;
  margin-left: 30%;
  width: 60%;
}

.grid-item:nth-child(4) {
  background: linear-gradient(rgba(65, 64, 64, 0.685), rgba(49, 49, 49, 0.397)), url('@/assets/icons/sluzby-grid/bg_drevo.JPG') no-repeat;
  background-size: cover;
  margin-left: -10%;
  width: 80%;
  height: 70%;
}
.grid-item:hover {
  cursor: pointer;
  transform: scale(1.05);
}
</style>
