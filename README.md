<div align="center">
    <h1>Webpack and Firebase project</h1>
    <h3>
        <a href="https://20x.pl/sample-project-webpack-firebase/">
            Live
        </a>
        <span> | </span>
        <a href="https://github.com/chriskodehub/sample-project-webpack-firebase">
            GitHub
        </a>
    </h3>
    <p>Sample project based on <b>Webpack</b> and <b>Firebase</b> tutorials </p>
    <br>
    <h4>Technologies and tools:</h4>
    <p>
        <img src="docs/img/html5.svg" width="40" height="40" alt="html"/>
        <img src="docs/img/css3.svg" width="40" height="40" alt="css"/>
        <img src="docs/img/js.svg" width="40" height="40" alt="javascript"/>
        <img src="docs/img/phpstorm.svg" width="40" height="40" alt="phpstorm"/>
        <img src="docs/img/git.svg" width="40" height="40" alt="git"/>
        <img src="docs/img/github.svg" width="40" height="40" alt="github"/>
        <img src="docs/img/firebase.svg" width="40" height="40" alt="firebase"/>
        <img src="docs/img/md.svg" width="40" height="40" alt="mark down"/>
        <img src="docs/img/node.svg" width="40" height="40" alt="node"/>
        <img src="docs/img/webpack.svg" width="40" height="40" alt="webpack"/>
        <img src="docs/img/eslint.svg" width="40" height="40" alt="eslint"/>
    </p>
    <br>
</div>

## Prepare your computer

1. Install [node.js](https://nodejs.org/en/download/).
2. Install [Git](https://git-scm.com/downloads).
3. Install [Visual Studio Code](https://code.visualstudio.com/download).

## Create project

1. Create a folder `sample-project-webpack-firebase`.
2. Create the folder structure according to the projekt. Don't create all files. The files will be created during project development.
    - `src` - here we will put all the files we will work with.
    - `dist` - files automatically generated by Webpack will be placed here, files in this folder will be launched by the browser and visible to the user of the page.
3. Create a file `.gitignore`.
4. Copy the contents of the [.gitignore](https://git-scm.com/docs/gitignore) file from the generator [gitignore.io](https://www.toptal.com/developers/gitignore/api/visualstudiocode,phpstorm,node,firebase), or configure the file yourself.
5. Open project folder in a terminal.
6. Run command `git init && git add . && git commit -m "Initial commit"` [git-init](https://git-scm.com/docs/git-init), [git-add](https://git-scm.com/docs/git-add), [git-commit](https://git-scm.com/docs/git-commit).

## STAGE 1

[Live demo - STAGE 1](https://20x.pl/sample-project-webpack-firebase/stage-1)

### Configure project

1. Open project folder in a terminal.
2. Run command `npm init -y` [npm-init](https://docs.npmjs.com/cli/v8/commands/npm-init).
3. Run command `npm install --save-dev webpack webpack-cli` [Webpack configuration](https://webpack.js.org/guides/getting-started/#basic-setup) and see how it works.
4. Run command `npm install --save-dev webpack-dev-server` [Webpack DevServer](https://webpack.js.org/configuration/dev-server/) after detecting each change, the page will automatically reload. A solution similar to Live Server in Visual Studio Code, but it gives us the ability to work with automating generating JS, CSS code or automatic HTML creation. Thanks to this solution, we can code even in `Notepad`, and all changes will be automatically refreshed.
5. Run command `npm install --save lodash` install probably [the most popular node.js library](https://www.npmjs.com/package/lodash). We will use it to check if our application is properly configured.
8. Run command `npm install --save-dev style-loader css-loader` install modules for [processing CSS](https://webpack.js.org/guides/asset-management/#loading-css) files.
6. Run command `npm install --save-dev eslint eslint-config-standard eslint-plugin-promise eslint-plugin-import eslint-plugin-node`. [ESLint](https://eslint.org/docs/user-guide/getting-started) the tool for error checking and code formatting in Javascript files. This plugin intends to support linting of ES2015+ (ES6+) import/export syntax, and prevent issues with misspelling of file paths and import names.
7. Run command `npm init @eslint/config` select "Use a popular style guide" and select "Standard.". Documentation for [eslint-config-standard](https://www.npmjs.com/package/eslint-config-standard).
9. Create files [index.html](#indexhtml), [index.js](#indexjs), [style.css](#stylecss), [webpack.config.js](#webpackconfigjs) in the given locations and copy the sample content of the files.
10. Change one line in the file [package.json](#packagejson) [Webpack Basic Setup](https://webpack.js.org/guides/getting-started/#basic-setup)
11. After completing the above steps, you can [work with the project](#working-with-the-project).

### index.html

project-folder-name / dist / `index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="icon" href="img/favicon.svg">
    <title>Webpack and Firebase sample project</title>
</head>
<body>
<script src="./index.bundle.js"></script>
</body>
</html>
```

### index.js

project-folder-name / src / js / `index.js`

```js
import _ from 'lodash';
import '../css/style.css';

function component () {
    const element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(
        [
            '<h2>STAGE 1</h2>', 'Hello', 'webpack<br><br>', 'application',
            'work', 'fine', '😁',
        ], ' ');
    element.classList.add('hello');

    return element;
}

document.body.appendChild(component());
```

### style.css

project-folder-name / src / `style.css`

```css
body {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    height: 100vh;
    font-family: sans-serif;
}

.hello {
    color: red;
    font-size: 2rem;
    padding: 20px;
    text-align: center;
}
```

### webpack.config.js

project-folder-name / `webpack.config.js`

```js
const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/js/index.js',
        // login: './src/login.js',
        // todo: './src/todo.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: false,
    },
    devtool: 'eval-source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9999,
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
        ],
    },
};
```

### package.json

project-folder-name / `package.json`

```
{
    // FIRST CHANGE
    // change this line
    "main": "index.js",
        
    // the line should look like this
    "private": true,
    
    // SECOND CHANGE
    // change this part of code
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
    },
    
    // the code should look like this
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "dev": "webpack --mode=development",
        "prod": "webpack --mode=production",
        "serve": "webpack serve"
    },
}
```

### .eslintrc.js

project-folder-name / `.eslintrc.js`

```js
module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'standard',
    ],
    plugins: ['import'],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        // enable additional rules
        indent: ['error', 4],
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'no-console': 'off',
        'import/extensions': ['error', 'never'],
        'import/no-unresolved': [2, { ignore: ['\\bhttp.*'] }],
        'require-jsdoc': 'off',
        'comma-dangle': [
            'error', {
                arrays: 'always-multiline',
                objects: 'always-multiline',
            },
        ],

        // override configuration set by extending "eslint:recommended"
        'no-empty': 'warn',
        'no-cond-assign': ['error', 'always'],

        // disable rules from base configurations
        'for-direction': 'off',
    },
};
```

### Working with the project

#### Manually building the application

1. Open project folder in a terminal.
2. Run command `npm run build` Webpack will start and all files will be created
3. Go to the `dist` folder and run the` index.html` file in your web browser. All the changes made should be visible.
4. Make changes to any of the files `index.html`,` index.js`, `style.css` i powtórz kroki 1-3.

#### Automatic building of the application after each change

1. Open project folder in a terminal.
2. Run command `npm run serve` this will start the server and prepare the necessary files.
3. Enter the following address in the browser `localhost: 9999`. If you have done everything with the instructions, you should see a string **_Hello + webpack + our + application + work + fine_**
4. Make changes to any of the files `index.html`,` index.js`, `style.css`, the changes should be visible in the browser immediately after saving the file.
5. To shut down the server, go to a terminal and click on keyboard `Ctrl + C`.

## STAGE 2

### Install Firebase

1. Run command `npm install --save firebase` [install Firebase](https://firebase.google.com/docs/web/module-bundling#get_started) and prepare for use with Webpack.
2. Create folders for the source files `js` and` css` in the `src` folder. Name the folder `js` for Javascript files and` css` for CSS files.
3. Create file `src/js/firebase-config.js` and copy the contents of the file in the project.
4. In the file `firebase-config.js` in the variable `firebaseConfig` insert [your database data](https://firebase.google.com/docs/web/setup#add-sdk-and-initialize).



---
---

## Tutorials

### Firebase

1. [![YouTube Firebase tutorial](docs/img/youtube-firebase-tutorial.jpg)](https://www.youtube.com/watch?v=rQvOAnNvcNQ&list=PLl-K7zZEsYLnfwBe4WgEw9ao0J0N1LYDR&index=1)
2. [Get started with Firebase](https://firebase.google.com/docs/web/setup)

### Webpack

1. [Getting stared](https://webpack.js.org/guides/getting-started/)
