# Async Await - Projeto de Estudo

Projeto de estudo sobre requisições assíncronas em JavaScript utilizando Async/Await, com um servidor proxy em Node.js para contornar restrições de CORS.

## Tecnologias utilizadas

- JavaScript (Async/Await, Fetch API)
- Node.js
- Express
- node-fetch
- cors

## Como executar

### 1. Instalar dependências
```bash
npm install
```

### 2. Iniciar o servidor
```bash
node Server.js
```

### 3. Abrir o projeto

Abra o arquivo `index.html` com o Live Server do VS Code.

## Como funciona

O navegador não consegue chamar APIs externas diretamente por causa das restrições de CORS. Para resolver isso, o projeto utiliza um servidor proxy local em Node.js que faz as requisições para a API externa e retorna os dados ao navegador.
```
Navegador (porta 5500) -> Servidor proxy (porta 3000) -> JSONPlaceholder API
```

## Estrutura do projeto
```
Async await/
├── index.html
├── Async-await.js
├── Server.js
├── package.json
├── package-lock.json
└── .gitignore
```

## API utilizada

JSONPlaceholder - https://jsonplaceholder.typicode.com

API gratuita e publica utilizada para testes e prototipagem, que fornece dados fictícios de usuarios, posts, e outros recursos.

## Repositorio

https://github.com/AlirioDinis/Async-Await