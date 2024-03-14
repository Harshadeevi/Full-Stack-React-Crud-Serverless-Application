Full Stack React Crud App 

Instructions creating monorepo from scratch

Creating React Application

Create a new directory (folder) in your project called ui
Open your terminal and cd into this new directory: cd ui
Now run the command: npx create-react-app .
Now run the command rm -rf .git while still in the ui directory we created. This will remove git associated with this directory. We want git to be used in the root directory of our project and not in the ui folder that's why we are doing this
You have successfully created your react application and can use the command npm start to start the app. To stop running the application ctrl + 


Creating API (Express Server)

Create a new directory (folder) in your project called api
Open your terminal and cd into this new directory: cd api
Run the command npm init this will ask you a handful of questions, just hit enter for each question. This will create our package.json for us
Now we can install our dependencies npm i express nodemon
Create a file in our api directory called index.js and add the following express code:
const express = require("express");
const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.send("Hello from express!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
We want to add some scripts to our package.json so add the following:
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  },
We can start our API. While in the api directory run npm start and you can now go to http://localhost:3001/ to see the "Hello from express!" message.


Pushing code to github

Now is a good time to push your code to github. In the root directory of the project run: git init this will make the folder a git repository allowing us to run git commands in it.
Now we can run the following commands to push our code to github like normal:
git add .
git commit -m "feat: created ui and api"
git branch -M main
git remote add origin github-repo-url-goes-here
git push -u origin main
