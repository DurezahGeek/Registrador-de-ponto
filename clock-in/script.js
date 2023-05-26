//Armazena elementos referências aos elementos HTML
const relogio = document.getElementById("clock");
const dataElemento = document.getElementById("date");

//Atualizar os elementos clock e date
function atualizarHora() {
  const dataAtual = new Date();
  const hora = dataAtual.getHours();
  const minutos = dataAtual.getMinutes();
  const segundos = dataAtual.getSeconds();
  const dia = dataAtual.getDate();
  const mes = dataAtual.getMonth() + 1;
  const ano = dataAtual.getFullYear();

  relogio.textContent = `${padZero(hora)}:${padZero(minutos)}:${padZero(segundos)}`;
  dataElemento.textContent = formatarDataPorExtenso(dia, mes, ano);
}

setInterval(atualizarHora, 1000);

function padZero(numero) {
  return numero.toString().padStart(2, "0");
}

//Para obter o nome do mês, exemplo: 1 de abril de 2023
function formatarDataPorExtenso(dia, mes, ano) {
  const meses = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro"
  ];

  return dia + " de " + meses[mes - 1] + " de " + ano;
}

// Função para gerar um CAPTCHA aleatório
function gerarCaptcha() {
  var caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var captcha = "";
  for (var i = 0; i < 6; i++) {
  captcha += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
  }
  return captcha;
  }
  
  // Atualizar o texto do CAPTCHA e limpar o campo de entrada
  function atualizarCaptcha() {
  var textoCaptcha = document.getElementById("texto-captcha");
  var campoCaptcha = document.getElementById("captcha-input");
  campoCaptcha.value = "";
  textoCaptcha.textContent = gerarCaptcha();
  }
  
  // Mensagem de sucesso ou de erro  do CAPTCHA
  function validarCaptcha() {
  var textoCaptcha = document.getElementById("texto-captcha").textContent;
  var campoCaptcha = document.getElementById("captcha-input").value;
  var pontos = document.getElementById("pontos");
  var mensagem = document.getElementById("mensagem");
  
  if (campoCaptcha === textoCaptcha) {
  var horaAtual = new Date().toLocaleTimeString();
  pontos.textContent = "Ponto registrado com sucesso às " + horaAtual;
  mensagem.textContent = "";
  atualizarCaptcha();

    // Exibir pop-up de sucesso
    alert("Ponto registrado com sucesso às " + horaAtual);
  
    // Reiniciar a página
    location.reload();
  } else {
    mensagem.textContent = "Erro! O CAPTCHA digitado está incorreto.";
    pontos.textContent = "";
    atualizarCaptcha();

    // Adicionar a classe de estilo ao elemento #mensagem
    mensagem.classList.add("erro-temporario");

    // Ocultar mensagem de erro após 3 segundos
    setTimeout(function () {
      mensagem.textContent = "";
      mensagem.classList.remove("erro-temporario");
    }, 2000);
  }
}
  

// Associar a função validarCaptcha ao envio do formulário
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  validarCaptcha();
});

// Gerar o CAPTCHA inicial e associar evento de atualização ao carregar a página
document.addEventListener("DOMContentLoaded", function () {
  atualizarCaptcha();
});
