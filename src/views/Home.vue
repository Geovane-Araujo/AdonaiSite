<template>
  <div>
    <div id="index-banner" class="parallax-container">
    <div class="section no-pad-bot">
      <div class="container">
        <br><br>
        <h1 align="left" class="header teal-text text-lighten-2">Descomplique a Gestão da sua igreja</h1>
        <div class="row">
          <h5 align="left" class="header col s12 light">Ferramenta online para facilitar na gestão completa da sua igreja.</h5>
        </div>
        <div class="row right">
          <a href="https://app.adonaisoft.com.br/#/register" id="modal1" class="butt modal-trigger btn-small waves-effect waves-light  teal ">Teste Grátis</a>
        </div>
        <br><br>
      </div>
    </div>
    <div class="parallax"><img src="../img/background1.jpg" alt="Unsplashed background img 1" style="background-color: rgba(3,50,73,0.7);"></div>
  </div>
  <div class="container">
    <div class="section">
      <!--   Icon Section   -->
      <div class="row">
        <div class="col s12 m4">
          <div class="icon-block">
            <h2 class="center"><img src="../img/caixa.png" alt="Unsplashed background img 4"></h2>
            <h5 class="center">Controle Financeiro</h5>

            <p class="light">Tenha um controle financeiro completo da sua igreja, abandone papéis, e com nossa ferramenta você pode criar caixas para vários setores da igreja e limitar que usuários possam ver saldos e efetuar alterações</p>
          </div>
        </div>
        <div class="col s12 m4">
          <div class="icon-block">
            <h2 class="center"><img src="../img/users.png" alt="Unsplashed background img 4"></h2>
            <h5 class="center">Acompanhe de Perto os Novos Convertidos</h5>

            <p class="light">Tenha um acompanhamento dos novos convertidos, podendo-lhes dar atenção especial neste começo de caminhada na Fé</p>
          </div>
        </div>
        <div class="col s12 m4">
          <div class="icon-block">
            <h2 class="center"><img src="../img/igreja.png" alt="Unsplashed background img 4"></h2>
            <h5 class="center">Multi-Igrejas</h5>
            <p class="light">Para você que é gestor, gostaria de ter um controle centralizado das igrejas filiais ou dos campos missionarios sem que eles percam sua autonomia? Conheça nosso mádulo Multi-Igreja, nele você pode gerar um relatório resumido sobre o desempenho da igreja, e de seu líder</p>
          </div>
        </div>
        <div class="col s12 m4">
          <div class="icon-block">
            <h2 class="center"><img src="../img/celular.png" alt="Unsplashed background img 4"></h2>
            <h5 class="center">Controle na Palma da Mão</h5>
            <p class="light">Está sendo desenvolvido um aplicativo para que você possa acompanhar a sua igreja da palma de sua mão</p>
          </div>
        </div>
        <div class="col s12 m4">
          <div class="icon-block">
            <h2 class="center"><img src="../img/report.png" alt="Unsplashed background img 4"></h2>
            <h5 class="center">Relatórios, Certificados e Carteirinhas de Membros</h5>
            <p class="light">Gere relatórios, Carteirinhas de Membros, Certificado de conclusão de cursos, ao contratar você ganha o modelo de carteirinha no modelo de sua igreja, assim como certificado</p>
          </div>
        </div>
        <div class="col s12 m4">
          <div class="icon-block">
            <h2 class="center"><img src="../img/help.png" alt="Unsplashed background img 4"></h2>
            <h5 class="center">Suporte a qualquer Momento</h5>
            <p class="light">Duvidas? Conte com uma equipe de suporte especializada que estará sempre de prontidão para sanar suas dúvidas e resolver os problemas</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div  class="parallax-container valign-wrapper">
    <div class="section no-pad-bot">
      <div class="container">
        <div class="row center">
          <h5 class="header" style="color:aliceblue;">Conheça nosso Blog</h5>
          <h6 class="header" style="color:aliceblue;">Nele você encontrará passagens Biblicas, Estudos, Devocionais e muito Mais</h6>
        </div>
      </div>
    </div>
    <div class="parallax"><img src="../img/background2.jpg" alt="Unsplashed background img 2"></div>
  </div>
  <div id="testegratis" class="container">
    <div class="section">
      <div class="col-sm-12">
        <h3>Teste grátis por 7 dias</h3>
        <div v-show="false" class="input-field col s6">
          <input v-model="form.nome"  type="text" class="validate">
          <label for="last_name">Nome Completo</label>
        </div>
        <div v-show="false" class="input-field col s6">
          <the-mask
          type="text" v-model="form.telefone"  the-mask :mask="'(##)#####-####'" class="validate"/>
          <label for="last_name">Telefone</label>
        </div>
        <div v-show="false" class="input-field col s6">
          <input v-model="form.email"  type="text" class="validate">
          <label for="last_name">Email</label>
        </div>
        <div style="margin-top: 60px">
          <a href="https://app.adonaisoft.com.br/#/register" id="download-button" class="butt btn-small waves-effect waves-light  teal ">Teste Grátis</a>
        </div>
      </div>
    </div>
  </div>
  <div  class="parallax-container valign-wrapper">
    <div class="section">
      <div class="container">
        <div class="row">
          <div class="col s12 center">
          <h4 style="color:aliceblue;">Sistema desenvolvido especialmente para Igrejas Evangélicas</h4>
          <p style="color:aliceblue;" class="left-align light">Sistema foi projetado para atender especificamente igrejas evangélicas, por não ser um sistema genérico conseguimos atender e suprir a todas as dificuldades que é encontradas na gestão da Igreja, seja ela Assembéia, Presbiteriana, Batista e muito mais, venha nos conhecer faça um teste grátis e confira todas as vantagens</p>
        </div>
        </div>
      </div>
    </div>
    <div class="parallax"><img src="../img/background3.jpg" alt="Unsplashed background img 3"></div>
  </div>
  <footer class="page-footer transparent">
    <div class="container">
      <div class="row">
        <div class="col l6 s12">
          <h5 class="black-text">AdonaiSoft</h5>
          <p class=" black-text">Rua Maria Martinelo Lavezzo <br>Frarom - Pato Branco - PR</p>
          <p class=" black-text">Fone: (44)99859-7239</p>
        </div>
        <div class="col l3 s12">
          <h5 class="black-text">Contatos</h5>
          <ul>
            <li><a class="black-text" href="#!"><img src="../img/face.png" alt="Unsplashed background img 3"></a></li>
            <li><a class="black-text" href="#!"><img src="../img/whats.png" alt="Unsplashed background img 3"></a></li>
            <li><a class="black-text" href="#!"><img src="../img/insta.png" alt="Unsplashed background img 3"></a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
    </div>
  </footer>
    <!-- Modal Structure -->
  <div  id="modal1" class="modal">
    <div class="modal-content">
      <h4>Modal Header</h4>
      <p>A bunch of text</p>
    </div>
    <div class="modal-footer">
      <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
    </div>
  </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      concluido: false,
      form: {
        nome: '',
        email: '',
        telefone: ''
      }
    }
  },
  mounted () {
  },
  methods: {
    async save (form) {
      await axios.post('http://adonaisoft.tk:8089/adonai/newUser', form).then(res => {
        if (res.data.ret === 'success') {
          alert('Verifique seu Email por favor')
        }
      }).catch(err => alert(err))
    }
    /* modal () {
      var elem = document.querySelector('.modal1')
      var instance = M.Modal.getInstance(elem)
      instance.open()
    } */
  }
}
</script>
<style lang="css" scoped>
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
img { filter: brightness(40%); }

.sidenav-trigger {
  color: #033249;
}

.parallax-container {
  min-height: 410px;
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
