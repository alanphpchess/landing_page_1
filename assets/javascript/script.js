
var ul = document.querySelector('nav ul');
var menuBtn = document.querySelector('.menu-btn i');
const logoImg = document.querySelector('.logo img');
var urlParams = new URLSearchParams(window.location.search);
var successParam = urlParams.get('success');


$('.formulario-cadastro').submit(function (e) {
    e.preventDefault();

    $.ajax({
        type: 'POST',
        url: 'index.php/home/contato',
        data: $(this).serialize(),
        beforeSend: function () {

            let timerInterval
            Swal.fire({
                html: '<h3>Encaminhando E-mail...</h3>',
                width: 300,
                heightAuto: true,
                timerProgressBar: false,
                didOpen: () => {
                    Swal.showLoading()
                    const b = Swal.getHtmlContainer().querySelector('b')
                    timerInterval = setInterval(() => {

                    }, 100)
                },
                willClose: () => {
                    clearInterval(timerInterval)
                }
            }).then((result) => {
            })

        },
        success: function (response) {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'E-mail enviado com sucesso',
                showConfirmButton: false,
                timer: 1500
            });
            $('input, textarea').val('');
        },
        error: function (xhr, status, error) {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'E-mail enviado com sucesso',
                showConfirmButton: false,
                timer: 1500
            });
        }
    });

});






$('.sub-btn').click(function () {
    $(this).next('.sub-menu').slideToggle();
    $(this).find('.dropdown').toggleClass('rotate');

});

$('.menu-t-btn').click(function () {
    $('.side-bar').addClass('active');
    $('.menu-t-btn').css("visibility", "hidden");
});

$('.close-btn').click(function () {
    $('.side-bar').removeClass('active');
    $('.menu-t-btn').css("visibility", "visible");
});

$('.item a').click(function () {
    $('.side-bar').removeClass('active');
    $('.menu-t-btn').css("visibility", "visible");
});

var behavior = function (val) {
    return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
},
    options = {
        onKeyPress: function (val, e, field, options) {
            field.mask(behavior.apply({}, arguments), options);
        }
    };

$('.telefone').mask(behavior, options);


window.addEventListener('scroll', function () {
    var backToTop = document.getElementById('back-to-top');
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    var scrollPosition = window.scrollY || window.pageYOffset;

    if (windowWidth <= 768 && scrollPosition > windowHeight / 2) {
        backToTop.classList.remove('hidden-arrow');
    } else {
        backToTop.classList.add('hidden-arrow');
    }
});



function itemMenu(itemId) {

    var menuItems = document.querySelectorAll(".menu li a");
    for (var i = 0; i < menuItems.length; i++) {
        menuItems[i].classList.remove("active");
    }


    if (itemId != 'simulacao') {
        document.querySelector("." + itemId + "").classList.add('active');
    }

}


// Detecta o evento de rolagem
window.onscroll = function() {
    let terreno = document.getElementById("terreno");
    
    // Verifica a largura da tela e a posição da rolagem
    if (window.innerWidth > 768) {  // Verifica se a largura da tela é maior que 768px (tamanho de telas desktop)
        if (window.scrollY > 200) {  // 200px de rolagem (você pode ajustar esse valor)
            terreno.classList.add("fixed");  // Adiciona a classe "fixed" ao elemento
        } else {
            terreno.classList.remove("fixed");  // Remove a classe "fixed" quando voltar para o topo
        }
    } else {
        terreno.classList.remove("fixed");  // Garante que o elemento não fique fixo em dispositivos móveis
    }
};



$('#myModal').modal({
    maxWidth: 800,
    minWidth: 400
});

$('.title').balloon();

$('.carrosel').slick({
    centerMode: true, // Habilita o modo de centro
    slidesToShow: 3, // Exibe 3 slides ao mesmo tempo
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    dots: true,
    centerMode: true,
    variableWidth: true,
    centerPadding: '60px',


});