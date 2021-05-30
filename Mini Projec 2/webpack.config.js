const path = require("path");
const webpack = require('webpack');
const dotenv = require('dotenv').config({
    path: path.join(__dirname, '.env')
});

module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "app.js",
    },
    module: {
        rules: [{
            test: /.ts$/,
            use: 'ts-loader',
            exclude: /node_modules/,
            include: path.resolve(__dirname, "src"),

        }, ]
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": dotenv.parsed
        }),
    ],
}; // `process.env` is the one defined in the webpack's DefinePlugin
const envVariables = process.env;

// Read vars from envVariables object
const {
    username,
    password,
    from
} = envVariables;

/**
 * @const _getRowString
 * @description Concatenate `description` and `envVar` for creating a row text.
 * @param description 
 * @param envVar 
 * 
 * @returns {string}
 */
const _getRowString = (description, envVar) => {
    return `<p>${description}: <strong>${envVar}</strong></p>`;
}

// Append rows to `.env-vars` class
document.querySelector('.env-vars').innerHTML = `
  ${_getRowString('Email', username)}
  ${_getRowString('Senha', password)}
  ${_getRowString('Email2', from)}
  
`;

// Expose envVariables to the window object
window.envVariables = envVariables;