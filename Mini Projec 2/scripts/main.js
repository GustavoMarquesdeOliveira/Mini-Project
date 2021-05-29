const nodemailer = require("nodemailer");
var requirejs = require('requirejs');

requirejs.config({
    //Pass the top-level main.js/index.js require
    //function to requirejs so that node modules
    //are loaded relative to the top-level JS file.
    nodeRequire: require
});

requirejs(['foo', 'bar'],
    function(foo, bar) {
        //foo and bar are loaded according to requirejs
        //config, but if not found, then node's require
        //is used to load the module.
    });


function age() {

    var EM = document.getElementById("email").value
    var nm = document.getElementById("nome").value
    var qp = document.getElementById("qtd").value
    var dt = document.getElementById("datah").value;

    let transporter = nodemailer.createTransport({
        host: "smtp.live.com",
        port: 25 || 465,
        secure: false,
        auth: {
            user: "",
            pass: ""
        }
    });
    transporter.sendMail({
        from: "Gustavo <gustavomqol@hotail.com>",
        to: EM,
        subject: "E-mail de confirmação",
        text: `E - mail de confirmação,
    seus dados são esses Nome: ${nm}, Quantidade de pessoas${qp} e Data:${dt}.`

    })
}