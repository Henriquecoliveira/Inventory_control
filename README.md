# Inventory Control

Sistema fictício de controle de estoque desenvolvido com **Node.js**, **Express**, **MySQL2** e **JWT** para autenticação, com front-end simples estilizado em **Bootstrap**.

Este projeto foi criado como estudo prático de autenticação com JWT, integração com banco de dados relacional via MySQL2 e construção de uma API REST do zero.

---

## Imagens do projeto

### Tela de Login
<img src="https://github.com/user-attachments/assets/72427d0b-1596-4c63-8c9f-5be3ac10a879" alt="login" width="100%" />

### Tela de Cadastro
<img src="https://github.com/user-attachments/assets/ce1a3416-a0c8-47d3-852b-8eb087cb8fb7" alt="sign up" width="100%" />

### Tela de inventário
<img src="https://github.com/user-attachments/assets/0387e90e-f0c0-49cf-a7a0-abe57f90b6c9" alt="inventory" width="100%" />

### Cadastro de Novo Item
<img src="https://github.com/user-attachments/assets/9644700a-ebae-44c3-8d64-8d414e33569d" alt="newItem" width="100%" />

---

## Funcionalidades

- Cadastro de usuários com senha criptografada (bcrypt)
- Login com autenticação via JWT
- Rotas protegidas por middleware de verificação de token
- Listagem de produtos do inventário
- Cadastro de novos produtos
- Interface simples estilizada com Bootstrap 5

---

## Tecnologias utilizadas

**Back-end**
- Node.js
- Express
- MySQL2
- JWT (jsonwebtoken)
- bcrypt
- dotenv
- cors

**Front-end**
- HTML5
- CSS3
- JavaScript
- Bootstrap 5

---

## Estrutura do projeto

```
Inventory_control/
├── server.js
├── package.json
└── src/
    ├── config/
    │   └── db.js              # Conexão com o banco de dados (pool MySQL2)
    ├── controller/
    │   ├── products.js        # Regras de negócio dos produtos
    │   └── users.js           # Regras de negócio dos usuários / autenticação
    ├── database/
    │   └── inventory.sql      # Script de criação do banco de dados
    ├── middleware/
    │   └── auth.js            # Middleware de verificação de token JWT
    ├── router/
    │   ├── products.js        # Rotas de produtos
    │   └── users.js           # Rotas de usuários
    └── public/
        ├── css/
        ├── html/
        └── javascript/
```

---

## Pré-requisitos

Antes de começar, você vai precisar ter instalado:

- Node.js
- MySQL
- npm

---

##  Instalação e execução

1. Clone o repositório

```bash
git clone https://github.com/Henriquecoliveira/Inventory_control.git
cd Inventory_control
```

2. Instale as dependências

```bash
npm install
```

3. Crie o banco de dados

Execute o script `src/database/inventory.sql` no seu MySQL para criar o banco de dados e as tabelas necessárias.

4. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

```env
PORT=3000
DB_HOST=localhost
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_DATABASE=inventory
JWT_KEY=sua_chave_secreta
```

5. Inicie o servidor

```bash
npm run dev
```

O servidor estará disponível em `http://localhost:3000`.

---

##  Aprendizados

Este projeto foi minha primeira experiência utilizando JWT, MySQL2 e Express em conjunto para construir uma API REST, além do primeiro contato com o framework Bootstrap no front-end. Serviu como base para entender:

- Autenticação e autorização com tokens
- Hash e verificação segura de senhas
- Queries parametrizadas para evitar SQL Injection
- Organização de projeto em camadas (rotas, controllers, middlewares)

---
##  Autor

Desenvolvido por **Henrique C. Oliveira**
