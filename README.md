# Pass In App

Essa aplicação foi desenvolvida durante o evento NLW Unity, realizado pela Rocketseat, em Março de 2024, com intuito de aprofundar conhecimentos em React.
<hr>

## Informações sobre o projeto

### Como rodar o projeto:

**Você pode clonar o projeto e rodá-lo localmente seguindo os passos abaixo**

1. `git clone https://github.com/thiagorinco/pass-in.git` para clonar o projeto
2. `npm install` para instalar as dependências do projeto
3. `npm run dev`
4. Acessar [http://localhost:5173/](http://localhost:5173/) no navegador
5. Para funcionamento ideal da aplicação, é necessário também clonar e executar o backend presente no link [https://github.com/rocketseat-education/nlw-unite-nodejs]
6. Após clonar o back end, criar na raiz da aplicação o arquivo .env e preenche-lo com 'DATABASE_URL="file:./dev.db"'
7. Executar o comando `npx prisma seed` para popular o banco de dados e por fim, `npm run dev` para executar o servidor backend

### Qual o objetivo da aplicação:

O objetivo da aplicação é apresentar uma tabela de participantes de eventos, contendo informações como nome, email, data de criação do participante e data de check in no evento, tudo isso de forma paginada e contendo possibilidade da busca por nome do participante


### Tecnologias utilizadas
A principal linguagem utilizada foi o JavaScript, em conjunto com o React. Além disso, foram utilizadas algumas biliotecas que facilitam o desenvolvimento e ajudam na estilização, como por exemplo o Vite e Tailwind, respectivamente. Foram abordados conceitos importantes e essenciais do React, como componentização e utilização de hooks (useState, useEffect), além do conceito de URL State, a fim de armanezar na URL, dados referentes a busca de participantes.

<hr>
