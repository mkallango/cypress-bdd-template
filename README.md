# Template de Automação Web utilizando Cypress e Cucumber

Esse template tem como intuito facilitar a criação de novos projetos de automação de testes.

---

#### Requisitos:
- nodejs
- npm
- docker
- docker-compose

---

### Configurando o projeto

Executar o comando abaixo:
```sh
npm install
```

Configurando gerador de relatório:
```sh
npm install -g mochawesome-report-generator
```
---

### Executando os testes

Executar os testes via Docker utilizando docker-compose

```sh
npm run cy:run
```
