const dadosTelemetria = [
    { pos: 1, piloto: "Charles Leclerc", equipe: "Ferrari", s1: "18.412", s2: "36.105", s3: "16.503", volta: "1:11.020", vmax: "334 km/h", roxo: true },
    { pos: 2, piloto: "Max Verstappen", equipe: "Red Bull", s1: "18.450", s2: "36.120", s3: "16.515", volta: "1:11.085", vmax: "336 km/h", roxo: false },
    { pos: 3, piloto: "Lando Norris", equipe: "McLaren", s1: "18.490", s2: "36.180", s3: "16.520", volta: "1:11.190", vmax: "332 km/h", roxo: false },
    { pos: 4, piloto: "Lewis Hamilton", equipe: "Mercedes", s1: "18.510", s2: "36.240", s3: "16.550", volta: "1:11.300", vmax: "331 km/h", roxo: false },
    { pos: 5, piloto: "Carlos Sainz", equipe: "Ferrari", s1: "18.530", s2: "36.260", s3: "16.580", volta: "1:11.370", vmax: "333 km/h", roxo: false },
    { pos: 6, piloto: "Oscar Piastri", equipe: "McLaren", s1: "18.545", s2: "36.290", s3: "16.600", volta: "1:11.435", vmax: "331 km/h", roxo: false }
];

const corpoTabela = document.getElementById("corpo-tabela");
const filtroEquipe = document.getElementById("filtro-equipe");
const buscaPiloto = document.getElementById("busca-piloto");

function renderizarTabela() {
    const equipe = filtroEquipe.value;
    const termo = buscaPiloto.value.toLowerCase().trim();

    const filtrados = dadosTelemetria.filter(item => {
        const bateEquipe = equipe === "TODAS" || item.equipe === equipe;
        const bateNome = item.piloto.toLowerCase().includes(termo);
        return bateEquipe && bateNome;
    });

    corpoTabela.innerHTML = filtrados.length ? "" : `<tr><td colspan="8" style="text-align:center; color:#8b949e;">Nenhum piloto encontrado.</td></tr>`;

    filtrados.forEach(item => {
        const linha = document.createElement("tr");
        linha.innerHTML = `
            <td><strong>#${item.pos}</strong></td>
            <td>${item.piloto}</td>
            <td>${item.equipe}</td>
            <td>${item.s1}s</td>
            <td>${item.s2}s</td>
            <td>${item.s3}s</td>
            <td class="${item.roxo ? 'melhor-tempo' : ''}">${item.volta}</td>
            <td>${item.vmax}</td>
        `;
        corpoTabela.appendChild(linha);
    });
}

// Simulador de Degradação
const selectComposto = document.getElementById("composto");
const inputVoltas = document.getElementById("voltas");
const spanVoltas = document.getElementById("valor-voltas");
const displayTempo = document.getElementById("tempo-projetado");
const displayPerda = document.getElementById("perda-acumulada");

function atualizarSimulador() {
    const opcao = selectComposto.options[selectComposto.selectedIndex];
    const tempoBase = parseFloat(opcao.value);
    const taxaDeg = parseFloat(opcao.dataset.deg);
    const voltas = parseInt(inputVoltas.value);

    spanVoltas.textContent = voltas;
    const perda = voltas * taxaDeg;
    const tempoTotal = tempoBase + perda;

    const minutos = Math.floor(tempoTotal / 60);
    const segundos = (tempoTotal % 60).toFixed(3).padStart(6, '0');

    displayPerda.textContent = `+${perda.toFixed(3)}s de desgaste acumulado`;
    displayTempo.textContent = `${minutos}:${segundos}`;
}

filtroEquipe.addEventListener("change", renderizarTabela);
buscaPiloto.addEventListener("input", renderizarTabela);
selectComposto.addEventListener("change", atualizarSimulador);
inputVoltas.addEventListener("input", atualizarSimulador);

renderizarTabela();
atualizarSimulador();