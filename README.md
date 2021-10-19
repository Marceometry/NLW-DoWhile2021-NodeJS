<h1 align="center">
  DoWhile - Node.js
</h1>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-executar">Como executar</a>
</p>

## 🧪 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Prisma](https://www.prisma.io/)
- [Socket.io](https://socket.io/)

## 💻 Projeto

Backend do projeto DoWhile, feito durante a `NLW Heat` em Node.js.

## 💣 Funcionalidades

- Roteamento com `Express.js`
- Banco de dados relacional de usuários e mensagens com `Prisma`
- Conexão em real time com `Socket.io`
- Fluxo de autenticação com `Github OAuth` e `JWT web token`

## 🚀 Como executar

- Clone o repositório
- Crie um novo OAuth app no seu Github (https://github.com/settings/developers)
- Copie seu `Client ID` e `Client Secret`
- Crie uma chave aleatória para o `JWT_SECRET`
- Preencha as variáveis ambiente com os dados do seu projeto, de acordo com o arquivo `.env.example`
- Instale as dependências com `yarn`
- Inicie o servidor com `yarn dev`

Agora você pode testar as rotas a partir do [`localhost:4000`](http://localhost:4000).
