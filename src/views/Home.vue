<template>
  <body id="spa">
    <header><!-- inicio Cabecalho -->
        <nav class="navbar navbar-expand-sm navbar-light">
          <div class="container">
            <a href="#" class="navbar-brand">
              <img alt="Logo" src="../assets/logo.png" width="142">
            </a>
            <button class="navbar-toggler" data-toggle="collapse" data-target="#nav-principal">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="nav-principal">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                  <a href="#home" class="nav-link" style="color: #e9e6e1;">Home</a>
                </li>
                <li class="nav-item">
                  <a href="#apresentacao" class="nav-link" style="color: #e9e6e1;">Recursos</a>
                </li>
                <li class="nav-item">
                  <a href="#footer" class="nav-link" style="color: #e9e6e1;">Benefícios</a>
                </li>
                <li class="nav-item">
                  <a href="" class="nav-link" style="color: #e9e6e1;">Preços</a>
                </li>
                <li class="nav-item">
                  <a href="" class="nav-link" style="color: #e9e6e1;">Downloads</a>
                </li>
                <li class="nav-item">
                  <a href="" class="btn btn-outline-light ml-4" @click="redirect ();" style="color: #e9e6e1;">Entrar</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <section id="home"><!-- Início seção home -->
      <div class="container" >
        <div class="row">
          <div class="col-md-6 d-flex"><!-- Textos da seção -->
            <div class="align-self-center">
              <h1 class="display-4">Descomplique a Gestão da sua igreja</h1>
              <p>
                Ferramenta online para facilitar na gestão completa da sua igreja.
              </p>
              <p>Disponível para
                <a href="" class="btn btn-outline-light">
                  <i class="fab fa-android"></i>
                </a>
              </p>
            </div>
          </div><!--/fim textos da seção -->
          <div class="col-md-6 d-none d-md-block">
            <img src="">
          </div>
        </div>
      </div>
    </section><!--/fim seção home -->

    <section class="caixa"><!--/Início seção saiba -->
      <div class="container" id="apresentacao">
        <div class="row">
          <div class="col-md-6 d-flex">
            <div class="align-self-center">
              <h2>Tenha o total controle Financeiro da sua Igreja</h2>
              <p>
                Com o AdonaiSoft Web você pode categorizar as receitas e despesas de sua igreja e consegue ver através de um resumo simples com gráficos onde está indo o dinheiro de sua igreja
              </p>
            </div>
          </div>
          <div class="col-md-6">
            <img src="../assets/saiba.png" class="img-fluid">
          </div>
        </div>
      </div>
    </section><!--/FIM seção saiba -->

    <section class="caixa"><!--/Início seção juros -->
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <img src="../assets/juros.png" class="img-fluid">
          </div>
          <div class="col-md-6 d-flex">
            <div class="align-self-center">
              <h2>Pare de pagar juros e economize</h2>
              <p>
                Manter as contas em dia é sempre um problema? O Finans avisa você: receba alertas de contas a pagar e a receber!
              </p>
              <a href="" class="btn btn-primary">Veja mais</a>
            </div>
          </div>
        </div>
      </div>
    </section><!--/FIM seção juros -->

    <section class="caixa"><!--/Início seção recursos -->
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <img src="../assets/facil.png" class="img-fluid">
            <h4>Fácil de usar</h4>
            <p>
              Ferramenta simples e fácil de usar, com alguns cliques você consegue fazer um lançamento e até mesmo ver o histórico completo de algum membro
            </p>
          </div>
          <div class="col-md-4">
            <img src="../assets/economize.png" class="img-fluid">
            <h4>Economize seu tempo</h4>
            <p>
              Através do nosso aplicativo de gestão você poderá fazer os acompanhamentos de um membro da palma da sua mão
            </p>
          </div>
          <div class="col-md-4">
            <img src="../assets/suporte.png" class="img-fluid">
            <h4>Suporte amigo</h4>
            <p>
              Dúvidas? Perguntas? Nosso suporte super legal ajuda você! A gente tá aqui pra resolver seus problemas e deixar sua vida bem mais fácil!
            </p>
          </div>
        </div>
      </div>
    </section><!--/FIM seção recursos -->

    <section class="caixa" style="background-color:#033249;"><!--/Início seção juros -->
      <div class="container">
        <div class="row">
          <div class="col-md-3">
          </div>
          <div class="col-md-7">
            <div class="align-self-center">
              <div class="col">
                <div>
                <h1 style="color: #ffffff;">Teste Grátis</h1>
              </div>
              <br>
                <div class="col-sm-7">
                  <input type="text" placeholder="Nome" class="form-control">
                </div>
                <br>
                <div class="col-sm-7">
                  <input type="text" placeholder="Telefone" class="form-control">
                </div>
                <br>
                <div class="col-sm-7">
                  <input type="text" placeholder="Seu e-mail" class="form-control">
                </div>
                <br>
                <div class="col-sm-7">
                  <button
                  class="btn btn-outline-info"
                  @click="form.del=false;form.add=true;form.edit=false;openModal=true;">
                  &nbsp;&nbsp;Proseguir
                </button>
                </div>
                <br>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section><!--/FIM seção juros -->

    <footer id="footer" class="mt-4 mb-4">
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <p>
              <a href="">Home</a>
              <a href="">Recursos</a>
              <a href="">Benefícios</a>
              <a href="">Preços</a>
              <a href="">Downloads</a>
            </p>
          </div>
          <div class="col-md-4 d-flex justify-content-end">
            <a href="" class="btn btn-outline-dark">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="" class="btn btn-outline-dark ml-2">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="" class="btn btn-outline-dark ml-2">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="" class="btn btn-outline-dark ml-2">
              <i class="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </body>
</template>

<script src="./Home.js">
</script>
<style lang=scss scoped>
html{
   scroll-behavior: smooth;
}
#home {
 background: #033249;
 color: white;
}

.apresentacao {
  background-color: blueviolet;
}

.navbar{
  background-color: rgba(3,50,73,0.7);
}
.caixa {
 padding: 60px 0;
 border-bottom: 1px solid #e5e5e5;
}

footer p a {
 margin: 5px 15px;
}
button {
  color: #ffffff;
  border-color:#ffffff;
}
button:hover {
  background-color: #5e8a75;
  border-color:#5e8a75;
}
</style>
