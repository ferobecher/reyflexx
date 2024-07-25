<script>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';
import { eventBus, useLightbox } from '@/eventBus.js';

export default {
  setup() {
    const { isShown, index, sluzbaIndex, openLightBox, closeLightBox } = useLightbox();

    const sluzba = [
      { name: 'exterier', length: 14 },
      { name: 'interier', length: 15 },
      { name: 'drevostavby', length: 14 },
      { name: 'projektovanie', length: 14 },
    ];

    const src = ref('');

    const setSrc = () => {
      src.value = `src/assets/icons/${sluzba[sluzbaIndex.value].name}/${index.value}.JPEG`;
    };

    watch([index, sluzbaIndex], setSrc, {immediate: true});

    const handleKeyDown = (event) => {
      if (!isShown.value) return;

      switch (event.key) {
        case 'ArrowRight':
          nextImage();
          break;
        case 'ArrowLeft':
          prevImage();
          break;
        case 'Escape':
          closeLightBox();
          break;
      }
    };

    const nextImage = () => {
      index.value = (index.value + 1) % sluzba[sluzbaIndex.value].length;
    };

    const prevImage = () => {
      index.value = (index.value - 1 + sluzba[sluzbaIndex.value].length) % sluzba[sluzbaIndex.value].length;
    };

    onMounted(() => {
      window.addEventListener('keydown', handleKeyDown);
      eventBus.on('openLightBox', openLightBox);
    });


    onBeforeUnmount(() => {
      window.removeEventListener('keydown', handleKeyDown);
    });

    return {
      isShown,
      closeLightBox,
      nextImage,
      prevImage,
      src,
      index,
      sluzba,
      sluzbaIndex,
    };
  },
};
</script>


<template>
  <div class="lightbox" v-if="isShown" @click="closeLightBox">
    <div class="lightbox-content" @click.stop>
      <img :src="src">
      <div class="lightbox-exit" @click="closeLightBox">
        <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <rect width="90" height="90" fill="url(#pattern0_2210_10)"/>
            <defs>
            <pattern id="pattern0_2210_10" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlink:href="#image0_2210_10" transform="scale(0.0111111)"/>
            </pattern>
            <image id="image0_2210_10" width="90" height="90" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB40lEQVR4nO2cS2rDQBBEtYpz8ijnyWLQhfK5RRmBDAaHENszPVXd9UDglal+SK0RGvWyGGOMMcYYY4wxxpgbAJwAvAP4Po7990lFFRTyA3gB8IFbNgCvCzkS+f8IyRdWNf8/QvKEVc1/R0hK2RL5HwhJJVsi/3F3bnicNvNuLpP/WPY8S5shu4PkC2tE2H2N2YMtso080S5+40dJdJjszpJ3PpeA0Cv60ka2kY7t4pq3UXlHB28jZCtljboUu7cRhYzyhYA4W5qCQJipC0yFgSjLEBgKBEGGEGYWiiqSZxaMapJnFI6qkiMFoLrkCBGw5LBH4DbgP7neeN/LoLOvdrsQlL2lkUwse0snmVB2XslEsvNLJpBdR/JE2fUkT5BdV3KgbEsOkG3J11h0AHDrSCH5Qt0WAi/vUkqud2bDj+AlJOc/s8EjOa9s8EnOJ5tYch7ZfjkbgLcbBOANNAF4S1gA3uQYgLftBsCwFw4EGYbCVCCIsnSFsTAQZnoK5oJAnC1dIRDImOazXwhlHTWvQ/2je6l5HcpjJKTmdWzCg1Fk5nU08VE/EvM6modXZRpnliW/xIC+LPklRk5myS8xRDVLfomxwFnyH6uRfen3dRyr0me/EM9vjDHGGGOMMcYYswRyBpias+umnbidAAAAAElFTkSuQmCC"/>
            </defs>
        </svg>
      </div>
      <div class="lightbox-prev" @click="prevImage">
        <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <rect width="90" height="90" fill="url(#pattern0_2209_8)"/>
          <defs>
          <pattern id="pattern0_2209_8" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlink:href="#image0_2209_8" transform="scale(0.0111111)"/>
          </pattern>
          <image id="image0_2209_8" width="90" height="90" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACoUlEQVR4nO3dvYrUUBjG8URYjVho4yirjfWCuo2XMDbqZVi4xQoWgp3gDYiIvddgMWCv1S5+sYgoNovioIiFMo37l4MzMIRJMpl5z5tk9vnVOyech2yenMnZbJKIiIiIiIjUAByr8/NSI1jgDvAG+Mt/H4B7wPF5x5ESwEXgHcU+AxfKxpASQArcBkZU+wicKhtPZgDOAgPqeTBrLCkAXAOG1PepaEyZEkoNeAwcsLhsekzJAS5VFN48wrV8LT+2JLULr8qOQp0B6AHPsLM16ziHGosXXpG3wNGm57VqhZf3Cjjf9NxaA9gAXmPrKXCi6bm1qfBuAr8NAw6XnetNz22VCy94Dqw3PbfWAK4CX7ATbgHvAkeanlsrABnw0Ljw9oDLTc+tNVDhuRXeH8OzWIU3TYXnABVe9IAzFV78kDe0wosbcKrCiwyt8NwK76vhbZtWeLmAMxVe/LNYhedQeNtGz/AmtMLLhayvNGNT4UWmwvPb37aLnYPxg1dto50Kec045GHYQuBxgnRK2GxiGPIg/HY0PadWAl4aBDwab+dKm55PawG/lgx5T8/w5gv6p0HQm/FPiY4DXrC8kS4d1UHfws5AZVh+e7djGPZQt3fFYWvBsgJL8E23SXQJ0Nc+OSf6mnQ19jLf8JxHZ+hRliMVpTNUlK5h9/QnEn5hpypKR2jPh2vYmVaUvoH3taL0C7unovQLO1VROkJF6Rp2pqL0DbyvovQLu6ei9As7VVE6QkXZ+Vf97Or9HX4vr3qv7cK27x8tc7/oWIcetkUZXm+sna1ORXmy9ECSWBXlGWUZf0X5bd5jyHJF+WTyeYn3Jt4fwLk640v9f6bwHbiS/5wsvp97e3xnMinLfeARcHqRMaVCeOmrbuNERERERJJW+wc06bCrvC964AAAAABJRU5ErkJggg=="/>
          </defs>
        </svg>
      </div>
      <div class="lightbox-next" @click="nextImage">
        <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <rect width="90" height="90" fill="url(#pattern0_2209_9)"/>
          <defs>
          <pattern id="pattern0_2209_9" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlink:href="#image0_2209_9" transform="scale(0.0111111)"/>
          </pattern>
          <image id="image0_2209_9" width="90" height="90" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACpklEQVR4nO2dzWoTURiGM/5gqotaF2NR8AZEsTuvINm0XkbRjXYnuBXdi7hw6zW4CLjuovhXsRYRKSKiEFBXlmzMI8ERgiRNJvnOd8503ucGcr6H4bxzfuZLoyGEEEIIIYRIFuAocCz2OA4lwGngHvCRv+wDW8C6pNtJvgR8ZjxvgctWv1dLgCXgC5PpARtAFnvMlQS4Tzk6wHLscVcOYI/ydIHV2GOvDMBJ5uMJcCp2HckDnGB+dhSU08l+byC7p6CcLPoOdnQUlAfP0+8MZXcVlONlXwDeGMruA4+AhWmmr1oBNIEHhSQrdoGV2LUlCdACvhrKHgTlbeBI7NqSA8iBp9jyDDgXu7bkALJi5+6XcVBei11bkgAXjYNygFaUo1BQOoOC0lV2rqD0k50pKB1BQekqu6kVpa/wllaUfrJzBaWf7ExB6QgKSlfZTQWlr/CWgtJPdq6g9JOdKSgdQUHpKnuhOMC1PKN8BZx1LKM6AGvFyYsVL4DjsetKEmC5uHxjxY3YNaUelBvFqfm8bMaupy5B+TN2HXUR/SN2HcmCpo5KhuF1h2E36v5691yf64VfsLzUgmUILcH9NpX2DZ/iwbSzFnrslQFtk7pIbmvjv5pHWVdCjrtSoD3n4IIzBV54ybnOBX0C75vhXKyPjIZR4DmAAi+44EyBF15yrsALL7mtwAsruKkVXmBQ4LkE3i2j4/9/aEvzP8m5Ai/8k9xW4IUVrMALzaCPBvDacC7uq9XP6OZVHwwld9W8avTTfNdQckft2Ma/wn0yENxT36SD5+YzBpJ3dYY33Z23Wekr8MpNHbPce+vq0kpJgMclJXcUeDMAnAe+TyG4p466cwJcnSB7Rz2ibTeSHg79scJvYBu4qc/JAgEsqqW8EEIIIYQQolGCPwSNtw1pQ7GPAAAAAElFTkSuQmCC"/>
          </defs>
        </svg>
      </div>
      <div>
        <p> {{ index+1 }} z {{ sluzba[sluzbaIndex].length }}</p>
      </div>
    </div>
  </div>
</template>

<style>

/* lightbox */

.lightbox {
  position: fixed;
  display: flex;
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  overflow: auto;
  top: 0;
  left: 0;
  z-index: 2;
  justify-content: center;
  align-items: center;
}
.lightbox-content {
  position: relative;
  width: auto;
  height: 80vh;
  max-width: 70vw;
  margin: 5% auto;
  margin-top: 100px;
}
.lightbox-content img {
  width: 100%;
  height: 100%;
  border: 6px solid #fff;
  border-radius: 10px;
  object-fit: cover;
}
.lightbox-content svg {
  width: 3.5rem;
}
.lightbox-prev,
.lightbox-next,
.lightbox-exit {
  position: absolute;
  color:#fff;
  cursor: pointer;
  height: 70%;
  top: 15%;
  width: 30rem;
  max-width: 20vw;
  display: flex;
  align-items: center;
  justify-content: center;
}
.lightbox-prev {
  left: -20em;
}
.lightbox-next {
  right: -20rem;
}
.lightbox-exit {
  width: 15rem;
  height: 15rem;
  top: -15%;
  right: -12.3rem;
}
.lightbox-exit svg {
  width: 3rem;
}
</style>