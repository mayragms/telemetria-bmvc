<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{titulo}}</title>
  <link rel="stylesheet" type="text/css" href="/static/css/conversor.css">
</head>
<body>

  <header class="topo">
    <h1>{{titulo}}</h1>
    <p>Converta temperatura, comprimento e dados de forma rápida e simples.</p>
    <button id="btn-tema" type="button">Tema escuro</button>
  </header>

  <main class="container">
    <section class="cartao" id="conversor">
      <h2>Faça sua conversão</h2>

      <form id="form-conversor">
        <div class="campo">
          <label for="categoria">Categoria</label>
          <select id="categoria">
            <option value="temperatura">Temperatura</option>
            <option value="comprimento">Comprimento</option>
            <option value="dados">Dados (armazenamento)</option>
          </select>
        </div>

        <div class="campo">
          <label for="valor">Valor</label>
          <input type="number" id="valor" placeholder="Digite um número" step="any" required>
        </div>

        <div class="linha">
          <div class="campo">
            <label for="de">De</label>
            <select id="de">
              <option value="celsius">Celsius (°C)</option>
              <option value="fahrenheit">Fahrenheit (°F)</option>
              <option value="kelvin">Kelvin (K)</option>
            </select>
          </div>

          <div class="campo">
            <label for="para">Para</label>
            <select id="para">
              <option value="fahrenheit">Fahrenheit (°F)</option>
              <option value="celsius">Celsius (°C)</option>
              <option value="kelvin">Kelvin (K)</option>
            </select>
          </div>
        </div>

        <div class="botoes">
          <button type="submit" id="btn-converter">Converter</button>
          <button type="button" id="btn-limpar">Limpar</button>
        </div>
      </form>

      <div class="resultado" id="resultado" aria-live="polite">
        O resultado aparece aqui.
      </div>
    </section>

    <section class="cartao" id="sobre">
      <h2>Sobre o projeto</h2>
      <p>
        Esta página é um conversor de unidades servido pelo Bottle na estrutura BMVC,
        com template TPL, CSS e JavaScript externos.
        O objetivo é facilitar conversões do dia a dia para estudantes.
      </p>
      <ul>
        <li>Temperatura: Celsius, Fahrenheit e Kelvin</li>
        <li>Comprimento: metros, quilômetros, centímetros e milhas</li>
        <li>Dados: bytes, KB, MB e GB</li>
      </ul>
    </section>
  </main>

  <footer class="rodape">
    <p>Desenvolvido por: <strong>{{autores}}</strong></p>
    <p><a href="{{repositorio}}" target="_blank" rel="noopener">Repositório no GitHub</a></p>
  </footer>

  <script src="/static/js/conversor.js"></script>
</body>
</html>
