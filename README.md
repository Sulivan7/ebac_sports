# 🏆 EBAC Sports

Uma aplicação de e-commerce esportivo moderna e responsiva, desenvolvida com React, TypeScript e Redux Toolkit. O projeto oferece uma experiência completa de compras online com carrinho de compras e sistema de favoritos.

![React](https://img.shields.io/badge/React-18.2.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-blue)
![Redux](https://img.shields.io/badge/Redux%20Toolkit-2.9.0-purple)
![Styled Components](https://img.shields.io/badge/Styled%20Components-5.3.6-pink)

## 🎯 Sobre o Projeto

O **EBAC Sports** é uma loja virtual especializada em artigos esportivos, desenvolvida como projeto do curso da EBAC. A aplicação permite aos usuários navegar por uma variedade de produtos esportivos, adicionar itens ao carrinho e gerenciar uma lista de favoritos, tudo com uma interface moderna e intuitiva.

## 🚀 Como Executar

### Pré-requisitos
- **Node.js** (versão 16 ou superior)
- **npm** ou **yarn**

### Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/Sulivan7/ebac_sports.git
   ```

2. **Navegue para o diretório**
   ```bash
   cd ebac_sports
   ```

3. **Instale as dependências**
   ```bash
   npm install
   # ou
   yarn install
   ```

4. **Execute a aplicação**
   ```bash
   npm start
   # ou
   yarn start
   ```

5. **Acesse no navegador**
   ```
   http://localhost:3000
   ```

## 📂 Estrutura do Projeto

```
📦 ebac_sports
├── 📁 public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── 📁 src/
│   ├── 📁 components/
│   │   ├── Header/
│   │   └── Produto/
│   ├── 📁 containers/
│   │   └── Produtos.tsx
│   ├── 📁 services/
│   │   └── api.ts
│   ├── 📁 store/
│   │   ├── index.ts
│   │   └── reducers/
│   │       ├── carrinho.ts
│   │       └── favoritos.ts
│   ├── 📁 styles/
│   ├── 📁 assets/
│   ├── App.tsx
│   ├── index.tsx
│   └── types.ts
└── package.json
```
