# Back-end do Aplicativo

Este repositório contém o código-fonte do back-end do aplicativo, desenvolvido utilizando Node.js com integração ao banco de dados MongoDB. A API foi criada para gerenciar os dados do usuário e futuramente poderá ser expandida com novas funcionalidades.

## Funcionalidades Atuais

- **Cadastro de Usuários**: Atualmente, a API permite o cadastro de usuários com os campos de **nome** e **e-mail**.
- **Integração com MongoDB**: O sistema está conectado ao banco de dados MongoDB para armazenar as informações dos usuários.

## Tecnologias Utilizadas

- **Node.js**: Utilizado para criar a API do back-end.
- **Express**: Framework para gerenciamento de rotas e requisições HTTP.
- **MongoDB**: Banco de dados NoSQL utilizado para armazenar as informações.
- **Mongoose**: ODM (Object Data Modeling) para modelar os dados em MongoDB.

## Próximos Passos

- Adicionar mais campos ao cadastro de usuários (ex.: senha, data de nascimento).
- Implementar autenticação de usuários.
- Criar endpoints adicionais para outras operações de CRUD (Create, Read, Update, Delete).

## Como Rodar o Projeto Localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Configure o banco de dados MongoDB no arquivo `.env` (ou diretamente no código).
4. Inicie o servidor:
   ```bash
   npm start
   ```

Agora, a API estará rodando localmente em `http://localhost:3000` (ou na porta configurada).
