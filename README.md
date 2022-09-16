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
* Baixe o Banco de dados <strong>MySQL</strong>; <br>
</h4>
<br>
<h3> Passos: </h3>
<br>
<h4>
* Dê um <strong> git clone <em>https://github.com/rinvyssondev/devnology</em> </strong>; <br>
* Abra o MySQL e crie um Schema chamada  <strong>devnology </strong> ; <br>
* Execute o comando  <strong>npm install</strong> ; <br>
* Abra o projeto e vá até o arquivo <strong>database/connection.js</strong> e edite as informações das váriaveis <strong>usuário</strong> e <strong>senha</strong> e coloque de acordo com o que você criou no processo de instalação do MySQL; <br>
* Agora vá até o arquivo <strong>articles/Article.js</strong> e descomente o código <strong>// Article.sync({ force: true });</strong> apagando as duas barras iniciais; <br>
* Dê um <strong>nodemon index.js</strong> e logo após ele criar a tabela volte a comentar o código <strong>// Article.sync({ force: true });</strong>, pois toda vez que salvar/executar o projeto ele tentará criar uma nova tabela por cima da existente. <br>
* Logo após todos os procedimentos acima, o projeto estará no ar em <em>http://localhost:8080</em> .
</h4>
