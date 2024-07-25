<script>
import axios from 'axios';
export default {
    data() {
        return {
            name: '',
            email: '',
            message: '',
            showSuccessMessage: false,
            successMessage: '',
        };
    },
    methods: {
        submitForm() {
            const formData = {
                name: this.name,
                email: this.email,
                message: this.message,
            };
            axios
                .post('http://localhost:3000/api/submit-form', formData)
                .then((response) => {
                console.log('Server Response:', response.data);
                this.showSuccessMessage = true;
                this.successMessage = "Správa bola úspešne odoslaná!";
                })
                .catch((error) => {
                console.error('Error:', error);
                });
        },
    },
};
</script>

<template>
    <div class="formular">
        <form @submit.prevent="submitForm">
            <h3>Spojte sa s nami cez</h3>
            <h2>KONTAKTNÝ FORMULÁR</h2>
            <div class="input-row">
                <input class="input-1" autocomplete="name" v-model="name" id="meno" type="text" placeholder="Meno a priezvisko">
                <input class="input-2" autocomplete="email" v-model="email" id="email" type="text" placeholder="E-mail">
            </div>
            <input class="input-3" autocomplete="off" v-model="message" id="sprava" type="text" placeholder="Správa">
            <button type="submit">ODOSLAŤ</button>
            <div style="margin-top: 20px" v-if="showSuccessMessage">{{ successMessage }}</div>
        </form>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="blob">
        <path fill="#061FFF" d="M40.9,-17.5C48.1,8.8,45.5,34,31.2,44.9C16.8,55.8,-9.4,52.4,-30,38.2C-50.5,24,-65.4,-1,-59.5,-25.6C-53.6,-50.1,-26.8,-74.1,-5,-72.5C16.9,-70.9,33.7,-43.7,40.9,-17.5Z" transform="translate(100 100)" />
    </svg>
    </div>
    <div class="alebo">
        <div class="alebo1">
            <h3>alebo...</h3>
        </div>
        <div class="alebo2">
            <svg width="41" height="59" viewBox="0 0 41 59" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <rect width="41" height="59" fill="url(#pattern0_2050_162)"/>
                <defs>
                <pattern id="pattern0_2050_162" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#image0_2050_162" transform="matrix(0.0111111 0 0 0.00772128 0 0.152542)"/>
                </pattern>
                <image id="image0_2050_162" width="90" height="90" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEDklEQVR4nO2aP2gUQRTGzz+oIIL/QMFGwcZGELWw0kaNklR2KhaW2tlYaCUWKUQsLBREBbWJpNDKNF4Tc3fzvmFjiBZnIIKFoCBEgokSXRlYIZzZmdndmd25u/fBg8DtzJv55d3b2e+2VmOxWCwWi8VisVgsFovFYrFYLBaLxWI5VBRFmwG8ARBzIJUBERGA7YVgT05ObgQwxqCRBro+Pj6+yUllT09PrwPwnGGjs5Jf1uv1DZmBxnG8Ku2zkZGRNUT0iGHjH+jH9Xp9bR6WNSJ6YhoM4Fa/wyaiu3Ecr9YVJYAHqaBtvw5EdLXqzaK6GLZts1rQtg0ewCUi+t1HVfyHiK5kOTjYgLY6sgA4C+BX1RDgP5aEEBd1LKamprZ0HoWtQCew30VRtMsAexDAjx6u5EUhxBkdg1artZOIJjvHWoNOEs1KKffqEgkhjgKY60HI80R0XLf3KIp2E9GHlcZnAp3EZynlfl1CKeVBAF97CPI3KeURw573AfiUNkce0E4So3vCprAOmQorF+gE9jyAExZfpXYXV/KsqVUS0TGbVpkbdLKQn6abQ6PR2LHSzQGBh83NX0o5BGDBZr5CoG2PO13o/AmL4+y5LMdZF6CtD/BE9CoAiKaweUC7nPUBzQnoPI+kCDB8Wg6uQVubLAgAbMe6vZpozkGXsWi4h+y9OLyA7jLnb7iMducNdOjOH+Vw4EIGHarzt5THgQsadAL7fSjOH9k7cG9d5i0FdCjOHxV04LoCdNXOH1VshJUNOq5ow04cuG4DvSiEOFUzqNls7gEw4yDnjJrLlE+tSa2tJ0Art09KOVSzVFHnz8aB69jzSVs3LljQWSE7cP6MDlyZsHUJK4dcwPl7XeQdOB+wdclK68lEdJqIrumuabfb64lo1CLfqLrWkO+6lHKgzJ7tFXQGyIvJmNsW7/zd1+S8p65JG6/mJqI7ybULZcL2BjoH5DgZ91AHa9lPSGNE9EVF4kcM6sYoN1G9jNixztJgewFt05OllAOaPvgi1yuwORw4m7W66Nm6yauCHLu4oWVx4MqArZu4tHaB9PkaykXLC3liYmIrgKbl+hdMay/SRpyBdljJcce8H4UQh7NCFkIcyPpk6bOynYB2Xcn4P5R9ekNVqAlwq9XaBuBmga+5l8ouDLoEyPGymCOip1LK88okUr6xCvU3EV0A8AzAdwd5nMMuBNpXu0AA4bqN5Abdy5DhAXYu0P0AGY5hZwZd1gEfAYWLPWcC3Y+Q4Wjv1qD7GTIcMLACzZBRmIURNEOGk8rWgmbIcNZGUi9iyHDas1Mv8OlkobfC6nFd97nxvxTAJuMQouiPzwwZFcHmSoZ/2AwZ1bURFovFYrFYLBaLxWKxWCwWi8VisVisWr/rLy/AyDQJIb8dAAAAAElFTkSuQmCC"/>
                </defs>
            </svg>
            <h3>info@reyflexx.com</h3>

            <svg width="54" height="48" viewBox="0 0 54 48" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <rect width="54" height="48" fill="url(#pattern0_2050_163)"/>
                <defs>
                <pattern id="pattern0_2050_163" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#image0_2050_163" transform="matrix(0.00987654 0 0 0.0111111 0.0555556 0)"/>
                </pattern>
                <image id="image0_2050_163" width="90" height="90" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEhklEQVR4nO2cSYgdRRjHW03EFTcUI3pwRQQxXoK4gSBRUUQQggoxCIq44cGTF1HwEiTBEU8iuEQMjpKDElEQnpDh+br+v+55ju8guE4kGEwi4haXaEsxLSM6y5tX3VZ1v/rBd5zp+v+7XnXVV19VkkQikUgkEolEIpHIuACsNsZslPQOsA84IOmVXq93pu+2tQZgPfAZUPw7JH3Z7/dP893GRlMUxeHAVkl/LmQy87Hdd1sby2AwOBJ4YxmDi7JX2xdxle82N47JyckjJL02jMnMx0edTmeV77Y3CmDzCk0uyrjPd9sbA3DjEGPyYrG/2+2e7FtD8ADHAJ+PaHJRjtfP+tYRPMCjLiYzF4eAi31rCXqWIWlPBUYXQMe3nmABrqvI5KKMDb41BYmkpys2etaO+b51BQewq2KjC0lP+NYVHMDXVRsNHOz1emf71hYUkn6pwejCLuN9awsK4OeajC7sh9a3vmCwq7oajR7EPMi80WmNRhfA3X67UiBI2lan0ZLe860xCIAHau7RuW+NQZCm6QU19+jnfGsMBtfMHYvH73meX+RbXzBIerwmo7f61hYUxpizyjRnlSbvBU7wrS04gJ1VGm2M2ehbU5AYYy6v0OipoigO860pWIB3KzD5UJqma31rCRrgsgqMft63jkYAvOpitKQrfGtoBMAa4LtRje7FPPTwSHrIYbZxc439oH2lYaNm9SR17d/71tAYgHOB70fs2Zt9t79RAPeMOoRkWXaX7/Y3CmByRLMPSlrnu/2NIU3TUyR9MaLZX9lZjG8NjSHP80uAn0Y0e2ZmZuYk3xoaA3CHwyLmg36/f6xvDY0B2OJg9ltxR3xIrFHlMbhixHgpZvWGZGpq6ni74epg9jPR7OGHkDUOM5GiLHFYPezzxposy86T9I3LmB3Le4cEuNKxdm/X9PT0ifV2iZZgjLlB0q8OPfvDLMvOGOXZ9syMpBdsjZ891mFTBq2e2QC3AL85mL1nJct1+ysAJmzdyAL/72P78pO2Yoy5dRHhw5pt67Q3LfUMO1uRdGdZyrDsN8AYc07SRoBNkv5wGLNtTCyUzzbGXGp311f48uyQNjEYDI5L2oake13Ntkt2OxzleX4+cA3womOBz2wrT4sxlxcZeRipMd63CbKkTQAbXD6QdUX5a3s5z/NTk7YA3GQ3AHybu4jh3wIPt2Z/M8uy62s+kOQa01mWXZ20aAV5IABTF+vd9vqM7a24Iwq40CUR9T/FbCtuP2OuCioLwNCleve2pC35bLltHtQd+5K20Ol0Vrlsi9Uc+5O2YYy5TdKPAZj7z9iZtJE0TdeG9JGUdHvS8iKdHQGY/Emr89l/Y1Ogkn7wOJden4wL+VzGrufB6KeSMb2680GXkwcrjNftxbfJuJKm6ek20+Zww+QwPXlHp9M5yrfWIJC0Dni7hjH5ybHuyUsdz5P0ZgXHqe3l4/EaouWwiR/gMeDTFRq8G3ik2+0evexDIv+tmALuL8dyu9e41yb1y8T+7rLeY4sx5tpYhhaJRCKRSCQSiUQikUgkkizIXzURdy+ZuAaIAAAAAElFTkSuQmCC"/>
                </defs>
            </svg>
            <h3>+421 915 452 465</h3>
        </div>
    </div>
    <div>
        <h3>a doručíme Vám cenovú ponuku!</h3>
        <svg width="558" height="11" viewBox="0 0 558 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="558" height="11" rx="5.5" fill="url(#paint0_linear_2050_143)"/>
            <defs>
            <linearGradient id="paint0_linear_2050_143" x1="0" y1="5.5" x2="558" y2="5.5" gradientUnits="userSpaceOnUse">
            <stop offset="0.302169" stop-color="#273299"/>
            <stop offset="1" stop-color="#FFB300"/>
            </linearGradient>
            </defs>
        </svg>
    </div>
    <div class="kontakt-bottom">
        <div>
            <h2>OTVARÁCIE HODINY</h2>
            <p><mark>Pondelok – Piatok: </mark> </p>
            <p> <mark>8:00 – 17:00:  </mark>pracovná doba. <br>
                <mark>17:00 – 19:00: </mark> odpovieme na <br> telefonát alebo mail. </p>
            <p>Cez víkend a sviatky Vás <br> poprosíme kontaktovať mailom.
            </p>
        </div>
        <div>
            <h2>FAKTURAČNÉ ÚDAJE</h2>
            <p>REYFLEXX stavebná a projektová <br> činnosť s.r.o. </p>
            <p>Pod Rybou 877/26, 974 01 <br> Banská Bystrica</p>
            <p>IČO: 54 582 393 <br>
            IČ DPH: SK 2121723351</p>
        </div>
    </div>
</template>

<style scoped>
mark {
    background-color: transparent;
    color:#ffffffea;
    font-weight: bold;
}

.kontakt-bottom {
    display: flex;
    flex-direction: row;
    line-height: 30px;
    margin-top: 15rem;
    gap: 10rem;
}

h2 {
    margin-bottom: 5rem;
}
p {
    margin-bottom: 2.5rem;
}

.blob {
  position: absolute;
  z-index: -1;
  height: 70%;
  margin: 12rem 0 0 12em;
  filter: blur(300px)
}
.alebo {
    display: flex;
    margin-top: 8rem;
    text-align: center;
    width: 50rem;
    flex-wrap: wrap;
    margin-bottom: 10rem;
}
.alebo1 {
    display: flex;
    max-width: 50%;
    justify-content: center;
    text-align: center;
    flex-grow: 1;
}
.alebo2 {
    max-width: 50%;
    flex-grow: 1;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
}
.formular {
    background: transparent;
    display: flex;
    text-align: center;
    width: 60rem;
    flex-direction: column;
    z-index: 1;
    position: relative;
}
h2 {
    color: #4154FF;
    font-size: 47px;
}
h3 {
    font-weight: normal;
    font-size: 35px;
}
.input-row {
    display: flex;
    justify-content: center;
    margin: 3rem 0 1.5rem 0;
    gap: 1.5rem;
    flex-wrap: wrap;
}
.input-row input {
    border: 5px solid #4154FF;
    background: transparent;
    color: #ffffff;
    font-size: 18px;
    font-family: Poppins, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    border-radius: 10px;
    flex-grow: 1;
    padding: 1.3rem;
    max-width: calc(50% - 0.75rem); /* Half of container width - half of the gap */
}

.input-3-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1.5rem;
}

.input-3 {
    border: 5px solid #4154FF;
    background: transparent;
    color: #ffffff;
    font-size: 18px;
    font-family: Poppins, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    border-radius: 10px;
    width: 100%;
    max-width: calc(100% - 2 * 1.3rem - 2 * 5px);
    height: 20rem;
    padding: 1.3rem;
    margin-bottom: 1rem;
}
::placeholder {
    font-family: Poppins, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #4154FF;
    font-size: 18px;
    margin: 0px;
    padding: 0px;
}
input:focus::placeholder {
  color: #f6ad00;
}
input:focus {
    border: 5px solid #f6ad00;
}

button {
  font-size: 18px;
  background: transparent;
  margin: 10px 10px 10px 10px;
  font-weight: bold;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  padding: 15px 40px 15px 40px;
  background: linear-gradient(90deg, #0019FF, #0688FF);
  border: 5px solid #0688FF;
  color: white;
  border-radius: 10px;
}

button:hover {
  background: #0688FF;
  color: #dbdbdb;
  cursor: pointer;
}
*:focus {
  outline: none;
}
</style>