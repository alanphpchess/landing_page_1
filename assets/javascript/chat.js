


// CHAT

$(document).on("click", "#send-it", function () {
    var a = document.getElementById("telefone_chat");
    if ("" != a.value) {
        var b = $("#telefone").text(),
            c = "Olá, Gostaria de saber a respeito do empreendimento.",
            d = "https://web.whatsapp.com/send",
            e = b,
            f = "&text=" + c;
        if (
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent
            )
        )
            var d = "whatsapp://send";
        var g = d + "?phone=+551149925099" + e + f;
        window.open(g, "_blank");
        jQuery.support.cors = true;

        $.ajax({
            url: "actions/sendChat.php",
            type: "POST",
            dataType: 'text',
            data: {
                nome: $("#nome_chat").val(),
                telefone: $("#telefone_chat").val(),
                email: $("#email_chat").val(),
                mensagem: 'mensagem encaminhada diretamente do site',
                id_cliente_primario: 4
            }

        }).done(function (resposta) {
            console.log(resposta);

        }).fail(function (jqXHR, textStatus) {
            console.log("Request failed: " + textStatus);

        }).always(function () {
            console.log("completou");
        });

        $("#whatsapp-chat")
            .addClass("hide")
            .removeClass("show");

    }
});

$(document).on("click", ".informasi", function () {
    (document.getElementById("get-number").innerHTML = $(this)
        .children(".my-number")
        .text()),
        $(".start-chat,.get-new")
            .addClass("show")
            .removeClass("hide"),
        $(".home-chat,.head-home")
            .addClass("hide")
            .removeClass("show"),
        (document.getElementById("get-nama").innerHTML = $(this)
            .children(".info-chat")
            .children(".chat-nama")
            .text()),
        (document.getElementById("get-label").innerHTML = $(this)
            .children(".info-chat")
            .children(".chat-label")
            .text());
});
$(document).on("click", ".close-chat", function () {
    $("#whatsapp-chat")
        .addClass("hide")
        .removeClass("show");
});
$(document).on("click", ".blantershow-chat", function () {
    $("#whatsapp-chat")
        .addClass("show")
        .removeClass("hide");
});


// fim

