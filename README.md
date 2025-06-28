# Ephemeral Notes
Esse app permite que o usuário seja capaz de armazentar notas efêmeras. 
### Caso se pergunte: "Como assim 'efêmeras'?": 
Lembra daquelas coisas que precisa lembrar mas tem um ...prazo de validade? 
Notas que apenas precisa recordar até determinado ponto no tempo, e depois já não exercem impacto nos seus dias. A exemplo: "Nota 1: churrasco dia 14", a permanência dessa nota após o dia 14 não faz sentido, logo, ela pode ser efêmera, desaparecendo de forma automática quando o dia descrito chegar ao fim.

## Falando um pouco sobre testes:
- **Testes unitários:** São testes que focam em partes isoladas do código, como um componente ou um hook. Eles trazem uma garantia de que cada parte do código funciona corretamente sozinha, sem depender do restante da aplicação.
- **Testes E2E (End-to-End):** São testes que simulam o comportamento de um usuário real, interagindo com a aplicação completa. Eles validam que diferentes partes do app funcionam em conjunto, por exemplo: navegação entre telas, formulários, login, etc.

## Como rodar a aplicação (no Linux):

```
$ git clone https://github.com/diogooabreu/ephemeral_notes.git
$ cd ephemeral_notes
```
## Para instalar as dependências:
```
$ yarn
```
## Para abrir na web
```
$ yarn start --web
```
## Para rodar os testes
```
$ test
```
