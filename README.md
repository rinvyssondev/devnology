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
* Visual Studio Code <br>
* Bootstrap - v5.2.1 <br>
* AWS - EC2

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
<h3> Passos (localmente): </h3>
<br>
<h4>
* Dê um <strong> " git clone <em>https://github.com/rinvyssondev/devnology "</em> </strong>; <br>
* Abra o MySQL e crie um Schema chamado  <strong>"devnology" (sem aspas) </strong> ; <br>
* Execute o comando  <strong>npm install</strong> ; <br>
* Abra o projeto e vá até o arquivo <strong>database/connection.js</strong> e edite as informações das váriaveis <strong>usuário</strong> e <strong>senha</strong> e coloque de acordo com o que você criou no processo de instalação do MySQL; <br>
* Dê um <strong> nodemon index.js .</strong> <br>
* Logo após todos os procedimentos acima, o projeto estará no ar em <em>http://localhost:8080/articles</em> localmente.
<br>
<h3> Passos (AWS): </h3>
<br>
<h4>
* Crie uma instância EC2 e entre na máquina; <br>
* Dentro da máquina faça a instalação do <strong>Nodejs</strong> e do <strong>MySQL</strong> ; <br>
* Faça o login no MySQL e crie um Schema (CREATE DATABASES devnology;) chamado  <strong>"devnology" (sem aspas) </strong> ; <br>
* Dê um <strong> " git clone <em>https://github.com/rinvyssondev/devnology "</em> </strong>; <br>
* Entre na pasta <em>devnology</em> e dê um <strong>npm install </strong>;<br>
* Dê um <strong> pm2 start index.js</strong>;<br>
* Logo após todos os procedimentos acima, o projeto estará no ar em <em>http://54.89.224.76:8080/articles</em> no meu caso. "http://<strong>IP DA MAQUINA</strong>:<strong>PORTA</strong>/articles"
