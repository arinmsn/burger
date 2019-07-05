# Eat-Da-Burger!

## About the app
 
* Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.
* Whenever a user submits a burger's name, the app will display the burger on the left side of the page -- waiting to be devoured.
* Each burger in the waiting area also has a Devour it! button. When the user clicks it, the burger will move to the right side of the page.
* The app will store every burger in a database, whether devoured or not.

## Demo

Heroku App Link: https://secure-harbor-71324.herokuapp.com/

## Instructions

If you would like to run the app locally, you need to take some steps to prepare.

1. Clone the repository
The first step is to clone the project repository to a local directory on your computer. To clone the repository, run the following commands:
<pre>
git clone https://github.com/arinmsn/burger.git
cd burger
</pre>
2. Install Node.js

3. Install the dependencies 
<pre>npm install</pre>

It will automatically install the following dependencies:
* express 
* body-parser
* dotenv 
* mysql 
* express-handlebars 

4. We are working on Windows so we used MySQL Workbench.

5. You will need to run the following statements in:
6. Execute the following statements:

<pre>
  CREATE DATABASE burger_db;
  USE burger_db;
</pre>

Run the statements in the seeds.sql file to create some dummy variables. If not, you can just  type the names of some dummy burgers.

7. After checking your connection details (e.g.correct password for MySQL, port #, etc) Run the server: <pre>node server.js</pre> 
  
