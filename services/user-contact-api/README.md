# User contact API
API gerenciar mensagens de usuários

## Setup

### Instalar dependências

```yarn install```

### Variáveis de ambiente

Configure o arquivo `.env` baseado no `.env.example`

### Crie um container docker com o postgres

```  docker run --name user-contact-local -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres```
### Crie o banco de dados

```bash
  docker exec -it user-contact-local bash
  psql -h localhost -U postgres
  CREATE DATABASE user_contact_local;
```

### Rodar migrations

```yarn typeorm migrations:run```

### Crie um container redis
This project uses Redis with rate limiter to avoid ddos attacks

```docker run --name redis -p 6379:6379 -d -t redis```

## Iniciar

```yarn dev:server```
