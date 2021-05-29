function enviarEmail(e) {
    var EM = document.getElementById("email").value
    var nm = document.getElementById("nome").value
    var qp = document.getElementById("qtd").value
    var dt = document.getElementById("datah").value;
    e.preventDefault();

    saveContactInfo(EM, nm, qp, dt)

    sendEmail(EM, nm, qp, dt)
}

function sendEmail(EM, nm, qp, dt) {
    var EM = document.getElementById("email").value
    var nm = document.getElementById("nome").value
    var qp = document.getElementById("qtd").value
    var dt = document.getElementById("datah").value;
    Email.send({

        Host: "smtp.gmail.com",
        Username: "doutorgus336@gmail.com",
        Password: "dtbelwbowmujhkff",
        To: EM,
        From: "doutorgus336@gmail.com",
        Subject: `Yuri Sushis - reserva feita com sucesso`,
        Body: `Nome: ${nm} <br> Email: ${EM} <br> Quantidade de pessoa(s): ${qp} <br> Data: ${dt}`,
    }).then((nm) => window.location.href = 'Yuri3.html');

}