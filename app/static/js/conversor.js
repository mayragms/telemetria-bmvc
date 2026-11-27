// ===== Dados das unidades =====
const UNIDADES = {
  temperatura: {
    celsius: "Celsius (°C)",
    fahrenheit: "Fahrenheit (°F)",
    kelvin: "Kelvin (K)"
  },
  comprimento: {
    metro: "Metros (m)",
    quilometro: "Quilômetros (km)",
    centimetro: "Centímetros (cm)",
    milha: "Milhas (mi)"
  },
  dados: {
    byte: "Bytes (B)",
    kb: "Kilobytes (KB)",
    mb: "Megabytes (MB)",
    gb: "Gigabytes (GB)"
  }
};

// Fatores para converter tudo para uma unidade base
// comprimento: base = metro | dados: base = byte
const FATORES = {
  comprimento: {
    metro: 1,
    quilometro: 1000,
    centimetro: 0.01,
    milha: 1609.344
  },
  dados: {
    byte: 1,
    kb: 1024,
    mb: 1024 * 1024,
    gb: 1024 * 1024 * 1024
  }
};

const SIMBOLOS = {
  celsius: "°C", fahrenheit: "°F", kelvin: "K",
  metro: "m", quilometro: "km", centimetro: "cm", milha: "mi",
  byte: "B", kb: "KB", mb: "MB", gb: "GB"
};

// ===== Elementos da página =====
const form = document.getElementById("form-conversor");
const selectCategoria = document.getElementById("categoria");
const inputValor = document.getElementById("valor");
const selectDe = document.getElementById("de");
const selectPara = document.getElementById("para");
const btnLimpar = document.getElementById("btn-limpar");
const resultado = document.getElementById("resultado");
const btnTema = document.getElementById("btn-tema");

// ===== Preencher os selects conforme a categoria =====
function preencherUnidades(categoria) {
  const unidades = UNIDADES[categoria];
  const chaves = Object.keys(unidades);

  selectDe.innerHTML = "";
  selectPara.innerHTML = "";

  chaves.forEach(function (chave) {
    selectDe.add(new Option(unidades[chave], chave));
    selectPara.add(new Option(unidades[chave], chave));
  });

  // Começa com unidades diferentes em "De" e "Para"
  selectDe.value = chaves[0];
  selectPara.value = chaves[1];
}

// ===== Conversões =====
function converterTemperatura(valor, de, para) {
  // Primeiro converte tudo para Celsius
  let celsius;
  if (de === "celsius") celsius = valor;
  else if (de === "fahrenheit") celsius = (valor - 32) * 5 / 9;
  else celsius = valor - 273.15;

  // Depois converte de Celsius para a unidade de destino
  if (para === "celsius") return celsius;
  if (para === "fahrenheit") return celsius * 9 / 5 + 32;
  return celsius + 273.15;
}

function converterPorFator(categoria, valor, de, para) {
  const base = valor * FATORES[categoria][de];
  return base / FATORES[categoria][para];
}

function converter(categoria, valor, de, para) {
  if (categoria === "temperatura") {
    return converterTemperatura(valor, de, para);
  }
  return converterPorFator(categoria, valor, de, para);
}

// ===== Formatar número para exibir =====
function formatar(numero) {
  return numero.toLocaleString("pt-BR", { maximumFractionDigits: 4 });
}

// ===== Eventos =====
selectCategoria.addEventListener("change", function () {
  preencherUnidades(selectCategoria.value);
  resultado.textContent = "O resultado aparece aqui.";
});

form.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const categoria = selectCategoria.value;
  const valor = parseFloat(inputValor.value);
  const de = selectDe.value;
  const para = selectPara.value;

  if (isNaN(valor)) {
    resultado.textContent = "Digite um número válido.";
    return;
  }

  // Kelvin não pode ser negativo
  if (categoria === "temperatura" && de === "kelvin" && valor < 0) {
    resultado.textContent = "Kelvin não pode ser menor que zero.";
    return;
  }

  const final = converter(categoria, valor, de, para);

  resultado.textContent =
    formatar(valor) + " " + SIMBOLOS[de] + " = " +
    formatar(final) + " " + SIMBOLOS[para];
});

btnLimpar.addEventListener("click", function () {
  form.reset();
  preencherUnidades(selectCategoria.value);
  resultado.textContent = "O resultado aparece aqui.";
});

// ===== Tema claro/escuro =====
// Quando o tema escuro está ativo, o <body> recebe a classe "tema-escuro"
function aplicarTema(escuro) {
  document.body.classList.toggle("tema-escuro", escuro);
  btnTema.textContent = escuro ? "Tema claro" : "Tema escuro";
}

btnTema.addEventListener("click", function () {
  const escuro = !document.body.classList.contains("tema-escuro");
  aplicarTema(escuro);
  try {
    localStorage.setItem("tema", escuro ? "escuro" : "claro");
  } catch (erro) {
    // Se o navegador bloquear o armazenamento, o tema só vale nesta visita
  }
});

// ===== Início =====
preencherUnidades(selectCategoria.value);

try {
  aplicarTema(localStorage.getItem("tema") === "escuro");
} catch (erro) {
  aplicarTema(false);
}
