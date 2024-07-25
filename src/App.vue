<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
  <div id="layout">
    <header>
      <div class="navbar">
        <nav>
          <RouterLink :to="{ path: '/', hash: '#domov' }" >DOMOV</RouterLink>
          <RouterLink :to="{ path: '/', hash: '#onas' }">O NÁS</RouterLink>
          <a href="/">
            <img class="logo" src="C:\Users\Ja\Desktop\Projects\reyflexx_v2\src\assets\icons\logo.png">
          </a>
          <RouterLink :to="{ path: '/', hash: '#sluzby' }">SLUŽBY</RouterLink>
          <RouterLink :to="{ path: '/', hash: '#kontakt' }">KONTAKT</RouterLink>
          </nav>
      </div>
    </header>
    <RouterView />
  </div>
</template> 

<style>
html {
  scroll-behavior: smooth;
}
.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
}
h1 {
  font-size: 70px;
  margin: 5px;
  font-weight: bold;
}
h2 {
  font-size: 42px;
  margin: 5px;
  font-weight: bold;
}
h3 {
  font-size: 30px;
  margin: 5px;
  font-weight: bold;
}
p {
  font-size: 18px;
  font-weight: medium;
}
#layout {
  font-family: Poppins, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #FFFFFF;
  margin: 0px;
  padding: 0px;
  background: #10101E;
}
body {
  margin: 0px;
}
nav {
  gap: 7px;
  position: absolute;
  font-size: 18px;
  top: 70px;
  text-shadow: rgba(0, 0, 0, 0.05) 1.95px 1.95px 2.6px;
  display: flex;
  z-index: 2;
}
nav a {
  color: #dbdbdb;
  padding: 20px 20px 20px 20px;
  text-decoration: none;
  transition: all 0.3s ease;
  font-weight: bold;
}
nav a:hover {
  transform: scale(1.2);
  
}
.logo {
  height: 150px;
  margin-top: -50px;
}
</style>
