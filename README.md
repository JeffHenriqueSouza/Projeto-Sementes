# Projeto Sementes

## Sumário
1. [Introdução](#introdução)
2. [Tecnologias Utilizadas](#tecnologias-utilizadas)
3. [Arquitetura do Sistema](#arquitetura-do-sistema)
4. [Instalação e Configuração](#instalação-e-configuração)
5. [APIs e Funcionalidades](#apis-e-funcionalidades)
6. [Diagrama de Tabelas](#diagrama-de-tabelas)
7. [Documentação Completa](#documentação-completa)
8. [Práticas de Segurança](#práticas-de-segurança)

## Introdução
Projeto Sementes é uma aplicação back-end desenvolvida com o objetivo de avaliar e fornecer feedback sobre o desempenho dos usuários. A aplicação foi construída usando NestJS e TypeScript, com um banco de dados PostgreSQL gerenciado pelo TypeORM. O projeto inclui autenticação JWT e está configurado para ser implantado no Render.com.

## Tecnologias Utilizadas
- **Node.js**: Ambiente de execução para o código JavaScript.
- **NestJS**: Framework Node.js progressivo para construir aplicações do lado do servidor.
- **TypeScript**: Superconjunto do JavaScript que adiciona tipagem estática.
- **TypeORM**: ORM (Object Relational Mapper) para trabalhar com banco de dados relacionais.
- **PostgreSQL**: Sistema de gerenciamento de banco de dados relacional.
- **JWT (JSON Web Token)**: Padrão da indústria para autenticação e autorização.

### Bibliotecas
- `@nestjs/common`: Módulo que fornece decorators, classes e métodos comuns para aplicações NestJS.
- `@nestjs/passport`: Integração com a biblioteca Passport para autenticação.
- `@nestjs/jwt`: Utilitário para trabalhar com JSON Web Tokens no NestJS.
- `@nestjs/typeorm`: Integração com a biblioteca TypeORM para trabalhar com banco de dados no NestJS.
- `class-validator`: Biblioteca para validação de dados de entrada.
- `dotenv`: Carrega variáveis de ambiente de um arquivo `.env` para `process.env`.
- `passport-jwt`: Estratégia de autenticação JWT para Passport.

## Arquitetura do Sistema
A arquitetura do sistema é baseada em módulos do NestJS, cada um responsável por uma parte específica da aplicação:

- **Módulo de Usuários**: Gerencia o registro, autenticação e recuperação de usuários.
- **Módulo de Avaliações**: Gerencia as avaliações feitas para os usuários.
- **Módulo de Feedbacks**: Gerencia os feedbacks relacionados às avaliações dos usuários.

### Relações Entre Entidades
- **UsuarioEntity**: Representa os usuários do sistema.
- **AvaliacaoEntity**: Representa as avaliações feitas para os usuários.
- **Feedback**: Representa os feedbacks relacionados às avaliações dos usuários.

## Instalação e Configuração
### Requisitos
- Node.js
- PostgreSQL

### Passos de Instalação
1. Clone o repositório:
    ```bash
    git clone https://github.com/JeffHenriqueSouza/Projeto-Sementes.git
    ```
2. Navegue até o diretório do projeto:
    ```bash
    cd Projeto-Sementes
    ```
3. Instale as dependências:
    ```bash
    npm install
    ```
4. Configure as variáveis de ambiente no arquivo `.env`:
    ```env
    DB_HOST=dpg-cp2fsemv3ddc73cljlsg-a.oregon-postgres.render.com
    DB_PORT=5432
    DB_USERNAME=projetosementes_user
    DB_PASSWORD=jzTZ9DP1gtbGLFWXea0YxcViMrkRsKEg
    DB_DATABASE=projetosementes
    DB_SYNCHRONIZE=true
    ```

5. Execute as migrações do banco de dados:
    ```bash
    npm run typeorm migration:run
    ```

6. Inicie o servidor:
    ```bash
    npm run start:dev
    ```

## APIs e Funcionalidades

### Autenticação (Login)
- **POST /auth/login**: Autentica o usuário com as credenciais fornecidas e retorna um token JWT válido.
  - Body:
    ```json
    {
      "email": "user@example.com",
      "password": "password"
    }
    ```
  - Retorno:
    ```json
    {
      "token": "jwt_token"
    }
    ```

### Usuários
- **POST /usuarios/register**: Registra um novo usuário na aplicação.
  - Body:
    ```json
    {
      "nome": "Nome do Usuário",
      "email": "user@example.com",
      "password": "password",
      "cargo": "Cargo do Usuário"
    }
    ```
  - Retorno:
    ```json
    {
      "message": "Usuário registrado com sucesso!",
      "user": {
        "id": "uuid",
        "nome": "Nome do Usuário",
        "email": "user@example.com",
        "cargo": "Cargo do Usuário"
      },
      "token": "jwt_token"
    }
    ```

- **GET /usuarios**: Retorna todos os usuários cadastrados na aplicação.
  - Retorno:
    ```json
    [
      {
        "id": "uuid",
        "nome": "Nome do Usuário",
        "email": "user@example.com",
        "cargo": "Cargo do Usuário"
      }
    ]
    ```

### Avaliações
- **POST /avaliacoes/criar**: Cria uma nova avaliação.
  - Body:
    ```json
    {
      "usuarioAvaliadoId": "uuid",
      "comunicacao": 5,
      "proatividade": 4,
      "inteligenciaEmocional": 3,
      "flexibilidade": 5,
      "criatividade": 4,
      "observacao": 3,
      "comentario": "Excelente desempenho"
    }
    ```
  - Retorno:
    ```json
    {
      "id": "uuid",
      "usuarioAvaliadoId": "uuid",
      "comunicacao": 5,
      "proatividade": 4,
      "inteligenciaEmocional": 3,
      "flexibilidade": 5,
      "criatividade": 4,
      "observacao": 3,
      "comentario": "Excelente desempenho"
    }
    ```

- **GET /avaliacoes**: Lista todas as avaliações.
  - Retorno:
    ```json
    [
      {
        "id": "uuid",
        "usuarioAvaliadoId": "uuid",
        "comunicacao": 5,
        "proatividade": 4,
        "inteligenciaEmocional": 3,
        "flexibilidade": 5,
        "criatividade": 4,
        "observacao": 3,
        "comentario": "Excelente desempenho"
      }
    ]
    ```

### Feedbacks
- **POST /feedbacks**: Cria um novo feedback.
  - Body:
    ```json
    {
      "userId": "uuid",
      "message": "Ótimo trabalho!"
    }
    ```
  - Retorno:
    ```json
    {
      "id": "uuid",
      "userId": "uuid",
      "message": "Ótimo trabalho!"
    }
    ```

- **GET /feedbacks**: Lista todos os feedbacks.
  - Retorno:
    ```json
    [
      {
        "id": "uuid",
        "userId": "uuid",
        "message": "Ótimo trabalho!"
      }
    ]
    ```

- **GET /feedbacks/user/:userId**: Busca feedbacks para um usuário específico.
  - Retorno:
    ```json
    [
      {
        "id": "uuid",
        "userId": "uuid",
        "message": "Ótimo trabalho!"
      }
    ]
    ```

### Avaliações
- **POST /avaliacoes/criar**: Cria uma nova avaliação.
- **GET /avaliacoes**: Lista todas as avaliações.
- **GET /avaliacoes/:id**: Busca uma avaliação por ID.
- **PUT /avaliacoes/:id**: Atualiza uma avaliação por ID.
- **DELETE /avaliacoes/:id**: Remove uma avaliação por ID.

### Feedbacks
- **POST /feedbacks**: Cria um novo feedback.
- **GET /feedbacks**: Lista todos os feedbacks.
- **GET /feedbacks/user/:userId**: Busca feedbacks para um usuário específico.

### Documentação

A documentação completa do projeto pode ser encontrada neste link = https://github.com/JeffHenriqueSouza/Projeto-Sementes/blob/main/Documenta%C3%A7%C3%A3o-%20Back%20End.docx

## Diagrama de Tabelas
```plaintext
Table usuarios {
  id uuid [primary key]
  nome varchar
  email varchar
  password varchar
  cargo varchar
}

Table avaliacoes {
  id uuid [primary key]
  usuarioAvaliadoId uuid
  comunicacao integer
  proatividade integer
  inteligenciaEmocional integer
  flexibilidade integer
  criatividade integer
  observacao integer
  comentario text
}

Table feedback {
  id uuid [primary key]
  userId uuid
  message text
}

Ref: usuarios.id < avaliacoes.usuarioAvaliadoId
Ref: usuarios.id < feedback.userId
Ref: avaliacoes.id < feedback.avaliacoesId

