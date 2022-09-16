<h2> Devnology - Teste Programa de Trainee </h2>
<br>
<h3> Sobre o Exercício</h3>
<br>
<h4>
- Desenvolva uma API gerenciar links, com a URL e um título/label. Os links também podem ser editados e excluídos.<br>
- Construa uma interface, como quiser, para que um usuário possa ver e gerenciar os links manualmente <br>
- Automatize este processo de salvar links com um web crawler que importe artigos de seus blogs favoritos, como a [devGo](https://devgo.com.br/). <br>
- Hospede sua aplicação em algum servidor.<br>
</h4>
<br>
<h3> Tecnologias utilizadas: </h3>
<br>
<h4>
* Git - v2.37 <br>
* NodeJS - v16.17.0 <br>
* MySQL Server - v8.0.30 <br>
* MySQL Workbench CE - v8.0 CE <br>
* Visual Studio Code

<h4>
<br>
<h3> Instalação: </h3>
<br>
<h4>
* Faça a instalação do Git; <br>
* Instalação do NodeJS; <br>
* Um editor de código de sua preferência (Utilizei o vscode); <br>
* Baixe o Banco de dados **MySQL**; <br>
</h4>
<br>
<h3> Passos: </h3>
<br>
<h4>
* Baixe o projeto em __https://github.com/rinvyssondev/devnology__ ; <br>
* Abra o MySQL e crie um Schema chamada **devnology** ; <br>
* Execute o comando **npm install** ; <br>
* Abra o projeto e vá até o arquivo **database/connection.js** e edite as informações das váriaveis **usuário** e **senha** e coloque de acordo com o que você criou no processo de instalação do MySQL; <br>
* Agora vá até o arquivo **articles/Article.js** e descomente o código **// Article.sync({ force: true });** apagando as duas barras iniciais; <br>
* Dê um **nodemon index.js** e logo após ele criar a tabela volte a comentar o código **// Article.sync({ force: true });**, pois toda vez que salvar/executar o projeto ele tentará criar uma nova tabela por cima da existente. <br>
* Logo após todos os procedimentos acima, o projeto estará no ar em __http://localhost:8080__ .
</h4>
