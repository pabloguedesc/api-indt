# API INDT - NestJS e TypeORM

API REST, desenvolvida com NestJS e TypeScript, utiliza TypeORM para gerenciamento avançado de banco de dados, autenticação via JWT, e segurança de dados com bcrypt. Inclui migrations e seeding de roles, além de um usuário master e alguns usuários iniciais, executados automaticamente durante as migrations. Com Docker, a configuração e o deploy se tornam simplificados, fazendo desta API uma solução robusta e eficiente para projetos que requerem alta segurança e funcionalidades completas de gerenciamento de usuários.

```bash
  Use o tree.txt para ter visão geral dos arquivos e diretórios do projeto
```

## Acessar api online:

`link`: https://api-indt.vercel.app/api/v1/

## Como rodar o projeto:

1. Clonar repositório

```bash
git clone https://github.com/pabloguedesc/api-indt.git
```

2. Instalar as depedências

```bash
npm install
ou
yarn
```

3. Ajustar o .env

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env ( ou somente renomear o arquivo env.example para .env )

`DB_TYPE`
`DB_HOST`
`DB_PORT`
`DB_USERNAME`
`DB_PASSWORD`
`DB_DATABASE`
`NODE_ENV`
`PORT`
`JWT_SECRET`

4. Rodar a aplicação com docker

```bash
docker-compose up --build
```

5. Rodar a aplicação localmente

```bash
npm start
ou
yarn start
```

## Endpoints

BaseURL:

`http://host:port/api/v1`

### Authentication:
- Realizar o login e obter token de acesso - ( abaixo estão as credenciais para acessar como usuário master )

```http
  POST BaseURL/auth

  Exemplo Payload: {
    "email": "master@admin.com",
    "password": "admin123"
  }

```


### Users:

- Criar novo usuário

```http
  POST BaseURL/users

  Exemplo Payload: {
        "name": "user",
        "lastName": "user1",
        "email": "user@email.com",
        "password": "12345678",
        "roleId": "roleId"
    }
```

- Atualizar usuário

```http
  PUT BaseURL/users

  Exemplo Payload: {
        "id": "userId"
        "name": "NewName",
    }
```

- Listar usuários com exceção do usuário master

```http
  GET BaseURL/users
```

- Buscar usuário pelo id

```http
  GET BaseURL/users/:id
```

- Deletar usuário pelo id

```http
  DELETE BaseURL/users/:id
```

- Contagem de usuários ativos e desativados (todos e dividos por nível de acesso)

```http
  GET BaseURL/users/count
```

### Roles:

- Listar níveis de acesso

```http
  GET BaseURL/roles
```
