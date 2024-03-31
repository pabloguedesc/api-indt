# API INDT - NestJS e TypeORM

API REST, construída com NestJS e TypeScript, emprega o TypeORM para gerenciamento otimizado de banco de dados, com autenticação via JWT e segurança de dados via bcrypt. A utilização do Docker facilita a configuração e o deploy, tornando-a uma escolha robusta e prática para projetos que demandam alta segurança e eficiência.

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
