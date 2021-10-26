## Intro

Lista de estudantes (client + server), utilizando React e Nodejs.

## Requisitos

Para rodar a aplicação você vai precisar ter instalado:

- [Docker](https://www.docker.com/products/docker-desktop) :)

## Configuração

Faça uma cópia do arquivo *.env.example*, que está localizado na raíz do projeto, com o nome *.env*

** Para rodar com o docker-compose é necessário que o DB_HOST esteja com o valor *postgres* (Nome do serviço no docker-compose).
```
DB_HOST=postgres
```

## Executando a aplicação

Na raíz do projeto execute o docker-compose:

```$ docker-compose up```


## Testes

### Client

Lembre-se de antes, navegar até a pasta correta do client:

```$ cd client```

#### Instalando as dependências

Para instalar as depêndencias, execute o comando:

```$ yarn```

ou

```$ npm install```


#### Executando os testes

Para executar os testes, execute o comando:

```$ yarn test```

ou

```$ npm run test```

### Server

Lembre-se de antes, navegar até a pasta correta do server:

```$ cd server```

#### Instalando as dependências

Para instalar as depêndencias, execute o comando:

```$ yarn```

ou

```$ npm install```


#### Executando os testes

Para executar os testes, execute o comando:

```$ yarn test```

ou

```$ npm run test```