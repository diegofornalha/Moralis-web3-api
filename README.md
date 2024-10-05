# Flow EVM DApp - Saldos de Carteira

Este projeto é um DApp (Aplicativo Descentralizado) desenvolvido em **React** para exibir os saldos de carteiras na **Flow EVM Testnet** utilizando a **API Moralis**. O projeto contém um frontend que mostra o saldo nativo da carteira (FLOW) e os saldos de tokens ERC20 em uma tabela organizada e estilizada. O backend foi construído em Node.js para servir como intermediário entre o frontend e a API da Moralis.

## Funcionalidades

- Exibe o saldo nativo de uma carteira (FLOW).
- Exibe o saldo de tokens (ERC20) presentes na Flow EVM Testnet.
- Visualização organizada dos saldos em uma tabela estilizada.
- Exibe o JSON completo retornado pela API Moralis para fácil visualização.

## Tecnologias Utilizadas

- **React**: Para o desenvolvimento do frontend.
- **Node.js**: Para o backend que interage com a API da Moralis.
- **Moralis**: Utilizado para obter os dados da carteira na Flow EVM.
- **Axios**: Para fazer requisições HTTP no frontend.
- **Express**: Framework de backend para servir as rotas do servidor.
- **CSS**: Para estilização das tabelas e da interface.

## Como Rodar o Projeto

### Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas:

- **Node.js** e **npm**: Para rodar o backend e o frontend.
- **Chave API da Moralis**: Crie uma conta no [Moralis](https://moralis.io/) e obtenha uma chave de API.
- **Carteira na Flow Testnet**: Para testar o saldo de uma carteira na Flow EVM Testnet.

### Backend (Servidor Node.js)

1. Clone o repositório e navegue até o diretório do servidor:

```bash
bash
Copiar código
git clone <url-do-repositorio>
cd server

```

1. Instale as dependências:

```bash
bash
Copiar código
npm install

```

1. Substitua sua chave API do Moralis no arquivo `index.js`:

```jsx
javascript
Copiar código
const MORALIS_API_KEY = "sua-chave-api-moralis";

```

1. Substitua o endereço da carteira que deseja monitorar:

```jsx
javascript
Copiar código
const address = "seu-endereco-de-carteira";

```

1. Inicie o servidor:

```bash
bash
Copiar código
node index.js

```

O servidor estará rodando na porta 4000.

### Frontend (React)

1. Navegue até o diretório do frontend:

```bash
bash
Copiar código
cd your-first-dapp-react

```

1. Instale as dependências:

```bash
bash
Copiar código
npm install

```

1. Inicie o frontend:

```bash
bash
Copiar código
npm start

```

O frontend estará rodando em `http://localhost:3000`.

### Estrutura do Projeto

```csharp
csharp
Copiar código
your-first-dapp-react/
│
├── public/                # Arquivos estáticos
├── src/                   # Código-fonte
│   ├── App.js             # Componente principal do App React
│   ├── balances.jsx       # Componente responsável por exibir saldos
│   └── balances.css       # Arquivo de estilos CSS para balance.jsx
├── server/                # Backend Node.js
│   └── index.js           # Código do servidor que utiliza Moralis API
├── README.md              # Documentação do projeto
├── package.json           # Dependências do frontend
└── package-lock.json      # Lockfile do frontend

```

### Exemplo de Resultado

Ao acessar o frontend, a página principal terá um botão "Ver Saldos", que redireciona para a página `/balances`. A página exibe o saldo nativo da carteira e os saldos de tokens (se houver), com o **JSON completo** retornado pela API.

### Captura de Tela

### Problemas Comuns

- **Erro 500 no servidor**: Certifique-se de que sua chave API Moralis está correta e de que o endereço da carteira é válido.
- **Tokens não aparecendo**: Verifique se a carteira contém tokens na Flow EVM Testnet e se os dados estão sendo retornados corretamente pela API.

## Contribuições

Sinta-se à vontade para abrir *issues* ou enviar *pull requests* para melhorar o projeto.

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo LICENSE para mais informações.

---
