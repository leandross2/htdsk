https://travis-ci.org/leandross2/htdsk.svg?branch=master

# HTDSK

O projeto foi feito utilizando o gerenciador de pacotes yarn, então caso nao tenha ele instalado, segue a linha de instalação a baixo.

```
npm i -g yarn
```

Dentro da pasta do projeto utilize o yarn para instalar as dependencias

```
yarn

yarn dev
```

***criar arquivo .env na raiz do projeto, conforme o modelo do arquivo .env-example***

## Database

O projeto foi feito utilizando banco postgres.
Os acessos do banco(HOST, USER, PASS, DB-NAME) você configura no arquivo .env
Para criar as tabelas, basta rodar o comando

```
yarn migration
```
