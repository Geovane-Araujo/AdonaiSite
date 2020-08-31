<template>
  <div id="app">
    <div id="nav">
      <nav class="white" role="navigation">
        <div class="nav-wrapper container">
          <div class="left">
            <a id="logo-container" href="#" class="left brand-logo" style="color:#033249;">AdonaiSoft</a>
          </div>
          <ul class="right hide-on-med-and-down">
            <li><a href="#/" style="color:#033249;">Home</a></li>
            <li><a href="#testegratis" style="color:#033249;">Planos</a></li>
            <li><a href="http://app.adonaisoft.com.br/#/login" style="color:#033249;">Acesse</a></li>
            <li><a href="#/blog" style="color:#033249;">Adonai Blog</a></li>
          </ul>
          <ul id="nav-mobile" class="sidenav">
            <li><a href="#" style="color:#033249;">Home</a></li>
            <li><a href="#testegratis" style="color:#033249;">Planos</a></li>
            <li><a href="http://app.adonaisoft.com.br/#/login" style="color:#033249;">Acesse</a></li>
            <li><a href="http://app.adonaisoft.com.br/#/login" style="color:#033249;">Adonai Blog</a></li>
          </ul>
          <a href="#" data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>
        </div>
      </nav>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  methods: {
    reload () {
      // document.location.reload(true)
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav ul a,
nav .brand-logo {
  color: #033249;
}
th {
  color: aliceblue;
  font-size: 20px;
}
html {
  scroll-behavior: smooth;
}
p {
  line-height: 2rem;
}

.sidenav-trigger {
  color: #033249;
}
.parallax {
  filter: brightness(40%);
  background-image: url('./img/background3.jpg');
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  color: aliceblue;
}
.parallax-container {
  min-height: 380px;
  line-height: 0;
  height: auto;
  color: rgba(255,255,255,.9);
}
  .parallax-container .section {
    width: 100%;
  }

@media only screen and (max-width : 992px) {
  .parallax-container .section {
    position: absolute;
    top: 40%;
  }
  #index-banner .section {
    top: 10%;
  }
}

@media only screen and (max-width : 600px) {
  #index-banner .section {
    top: 0;
  }
} /**#5e8a75;**/
.center {
  color: #033249;
}
.icon-block {
  padding: 0 15px;
}
.icon-block .material-icons {
  font-size: inherit;
}

footer.page-footer {
  margin: 0;
}
</style>
