# 🚀 API REST com Autenticação JWT, Sequelize e SQLite

Este projeto foi desenvolvido durante o curso **"Node.js: criando API REST com autenticação, perfis de usuários e permissões"** da [Alura](https://www.alura.com.br), com o objetivo de aprofundar meus conhecimentos em desenvolvimento **backend com Node.js**.

A API implementa **CRUD completo**, **autenticação de usuários com JWT**, **criptografia de senhas com BcryptJS**, e **persistência de dados com Sequelize (ORM)** utilizando **SQLite** como banco de dados.

---

## 🧠 Tecnologias Utilizadas

- **Node.js**
- **Express**
- **Sequelize** e **Sequelize-CLI**
- **SQLite**
- **JWT (jsonwebtoken)**
- **BcryptJS**
- **Dotenv**
- **Nodemon** (para ambiente de desenvolvimento)

---

## ⚙️ Funcionalidades

- Cadastro de usuários com criptografia de senha (BcryptJS)  
- Login e geração de token JWT  
- Autenticação e autorização de rotas protegidas  
- CRUD completo de recursos (exemplo: usuários, perfis, permissões)  
- Configuração de variáveis de ambiente (.env)  
- Migrações e seeders com Sequelize-CLI  

---

## ⚡ Como Executar o Projeto

### 1️⃣ Clonar o repositório
```bash
git clone https://github.com/Pellegata/api-sequelize-sqlite.git

2️⃣ Instalar as dependências

npm install

3️⃣ Criar o arquivo .env

Crie um arquivo .env na raiz do projeto e adicione as variáveis:

JWT_SECRET=seu_segredo_aqui
PORT=3000

4️⃣ Executar as migrações do Sequelize

npx sequelize-cli db:migrate

5️⃣ Rodar o servidor

npm start

A API estará disponível em:
👉 http://localhost:3000
🔒 Rotas Principais
Método	Rota	Descrição
POST	/register	Cadastra um novo usuário
POST	/login	Faz login e retorna o token JWT
GET	/users	Lista todos os usuários (rota protegida)
GET	/users/:id	Busca um usuário pelo ID (rota protegida)
PUT	/users/:id	Atualiza um usuário (rota protegida)
DELETE	/users/:id	Remove um usuário (rota protegida)
🧩 Autenticação

    O login retorna um token JWT que deve ser enviado no header Authorization em rotas protegidas.

    Exemplo:

Authorization: Bearer seu_token_aqui

📚 Aprendizados

Durante o desenvolvimento desta API, aprofundei meus conhecimentos em:

    Boas práticas REST

    Autenticação e autorização com JWT

    Criptografia de senhas com BcryptJS

    ORM com Sequelize e manipulação de bancos relacionais

    Configuração de ambiente com dotenv

    Estruturação de projetos backend profissionais

👨‍🏫 Agradecimentos

Agradeço aos instrutores Juliana Amoasei e Raphael Girão pela didática e clareza no ensino, e à Alura pelo excelente conteúdo e suporte à evolução contínua no desenvolvimento web.
🧑‍💻 Autor

Guido Pell
📎 https://www.linkedin.com/in/guidopellegata

    “A prática constante transforma aprendizado em habilidade.” 🚀
