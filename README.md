# [Interactive periodic table](https://tpe.uri.place/)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

I recommend to use [Firefox](https://www.mozilla.org/) or [Chromium](https://www.chromium.org/chromium-projects/) based navigators when you use the app.\
They can be some issues with the font size on [Safari](https://www.apple.com/safari/) or some mobile apps.

## How to install the project :

1. Install [Node.js with npm](https://nodejs.org/en/download/) and [Git](https://git-scm.com/downloads) on your computer.
2. In your project folder run with your command terminal :
```
git clone https://github.com/ur-d/Interactive-Periodic-Table.git
```
3. Then in "interactive-periodic-table" run ```npm install```
and wait until it's done.
4. When you're done modifying, simply run ```npm run build``` and grab your app in the `build` folder.


## Modify, add, or delete datas or languages

If you want to modify element's data you can edit `public/periodic_table.csv`. (I recommend [LibreOffice](https://www.libreoffice.org/))\
The rows list each elements and the columns each data (electronegativity, atomic radius, ...).

If you want to modify traductions or add a language : `public/languages.csv`.\
The rows list each words and the columns each language, feel free to add any language you want.

## Changing pre-selected and unwanted datas

If you want to change the pre-selected data, you can edit the `src/components/TablePage.js`.\
On the top there are tree settings for data info, language, and gradient.\
Just change the text here : `const [dataInfo, setDataInfo] = useState("HERE")`.

To add or remove an unwanted data go to `src/components/ParametersPart.js` near the top.\
You should find an array named `filteredParameters`, change what you want.

### To change data parameters order

You just have to change the columns order in the `public/periodic_table.csv`

## Code explanation

If you want to modify the source code, don't forget to check the code explanations `READMEdev.md`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


### `npm run deploy`

Builds the app and sends it on github-pages.\
It works with [gh-pages](https://www.npmjs.com/package/gh-pages) package, check for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

