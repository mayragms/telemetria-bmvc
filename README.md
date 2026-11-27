# Conversor de Unidades (BMVC)

Página estática servida pelo **Bottle** na estrutura **BMVC (Bottle MVC)**, para o nível BMVC I.

## Propósito

Facilitar conversões do dia a dia para estudantes, em um só lugar:

- **Temperatura:** Celsius, Fahrenheit e Kelvin
- **Comprimento:** metros, quilômetros, centímetros e milhas
- **Dados:** bytes, KB, MB e GB

## Como funciona

1. Escolha a categoria.
2. Digite o valor.
3. Escolha a unidade de origem ("De") e a de destino ("Para").
4. Clique em **Converter** para ver o resultado.

Há também um botão para alternar entre tema claro e escuro (a escolha fica salva no navegador).

## Arquitetura

| Camada | Arquivo | Responsabilidade |
|---|---|---|
| Rotas | `route.py` | Liga `/` e `/conversor` ao controlador e serve `/static/...` |
| Controlador | `app/controllers/application.py` | Prepara os dados e renderiza o template |
| Visão | `app/views/html/conversor.tpl` | Página HTML (template TPL) |
| Estáticos | `app/static/css/conversor.css`, `app/static/js/conversor.js` | Estilo e lógica das conversões no navegador |

## Trabalhando com o BMVC no BASH

Na raiz do projeto (onde está o `route.py`):

```
pip install bottle
python3 route.py
```

Abra `http://localhost:8080/` no navegador.

## Trabalhando com o BMVC no DOCKER

```
docker build -t bmvci .
docker run -d -p 8080:8080 -v $(pwd):/bmeta bmvci
```

## Origem

Estrutura baseada em `hgmachine/bmvc_start_from_this` (Bottle MVC), com página própria do conversor.

## Autores

- Nome 1
- Nome 2
