<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RaceControl | Telemetria de Pista</title>
    <link rel="stylesheet" href="/static/css/style.css">
</head>
<body>
    <header class="topbar">
        <div class="logo">
            <h1>RACE<span>CONTROL</span> // TELEMETRIA</h1>
            <p class="subtitulo">Painel de Análise de Setores & Estratégia de Stint</p>
        </div>
        <span class="status-badge">● PISTA ATIVA - INTERLAGOS</span>
    </header>

    <main class="container">
        <!-- Painel 1: Tabela de Telemetria com Filtro -->
        <section class="card">
            <div class="card-header">
                <h2>Tempos do Grid (Qualificação)</h2>
                <div class="acoes">
                    <input type="text" id="busca-piloto" placeholder="Buscar piloto...">
                    <select id="filtro-equipe">
                        <option value="TODAS">Todas as Equipes</option>
                        <option value="Ferrari">Scuderia Ferrari</option>
                        <option value="Red Bull">Red Bull Racing</option>
                        <option value="McLaren">McLaren F1</option>
                        <option value="Mercedes">Mercedes-AMG</option>
                    </select>
                </div>
            </div>

            <div class="tabela-wrapper">
                <table>
                    <thead>
                        <tr>
                            <th>Pos</th>
                            <th>Piloto</th>
                            <th>Equipe</th>
                            <th>Setor 1</th>
                            <th>Setor 2</th>
                            <th>Setor 3</th>
                            <th>Volta Rápida</th>
                            <th>Vel. Máx</th>
                        </tr>
                    </thead>
                    <tbody id="corpo-tabela"></tbody>
                </table>
            </div>
        </section>

        <!-- Painel 2: Simulador de Degradação de Pneus -->
        <section class="card">
            <h2>Simulador de Degradação & Ritmo</h2>
            <p class="descricao">Projete a perda de tempo por volta conforme o composto e o desgaste no stint.</p>

            <div class="controles">
                <label>
                    Composto do Pneu
                    <select id="composto">
                        <option value="71.2" data-deg="0.065">Macio (Soft) — Base 1:11.200</option>
                        <option value="71.8" data-deg="0.040">Médio (Medium) — Base 1:11.800</option>
                        <option value="72.4" data-deg="0.022">Duro (Hard) — Base 1:12.400</option>
                    </select>
                </label>

                <label>
                    Voltas Completadas no Stint: <strong id="valor-voltas">10</strong>
                    <input type="range" id="voltas" min="1" max="35" value="10">
                </label>
            </div>

            <div class="resultado-box">
                <div>
                    <span class="label-res">Tempo Projetado na Volta</span>
                    <small id="perda-acumulada">+0.650s de desgaste</small>
                </div>
                <strong id="tempo-projetado">1:11.850</strong>
            </div>
        </section>
    </main>

    <script src="/static/js/telemetria.js"></script>
</body>
</html>