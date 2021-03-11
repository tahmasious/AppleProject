function buy_macbook_air() {
    alert('soon you can buy it...');
}

// function animation() {
//     var id = setInterval(pass, 5);
//     var elem = document.getElementById('ggg')
//     var pos = 0;

//     function pass() {
//         if (pos < 200) {
//             pos++;
//             elem.style.right = pos + 'px';
//         } else {
//             clearInterval(id);
//         }
//     }

// }

var safari_link = document.getElementById('pills-Safari-tab');
var safari_image = document.getElementById('safari-pic');
safari_link.addEventListener('click', show_safari);


var photo_link = document.getElementById('pills-Photos-tab');
var photo_image = document.getElementById('photo-pic');
photo_link.addEventListener('click', show_photo);

var imovie_link = document.getElementById('pills-iMovie-tab');
var imovie_image = document.getElementById('imovie-pic');
imovie_link.addEventListener('click', show_imovie);

var garagband_link = document.getElementById('pills-GarageBand-tab');
var garagband_image = document.getElementById('garagband-pic');
garagband_link.addEventListener('click', show_garagband);

var pages_link = document.getElementById('pills-Pages-tab');
var pages_image = document.getElementById('pages-pic');
pages_link.addEventListener('click', show_pages);

var numbers_link = document.getElementById('pills-Numbers-tab');
var numbers_image = document.getElementById('numbers-pic');
numbers_link.addEventListener('click', show_numbers);

var keunote_link = document.getElementById('pills-Keynote-tab');
var keunote_image = document.getElementById('keunote-pic');
keunote_link.addEventListener('click', show_keunote);



function show_safari() {
    safari_image.style.display = 'block';
    photo_image.style.display = 'none';
    imovie_image.style.display = 'none';
    garagband_image.style.display = 'none';
    pages_image.style.display = 'none';
    numbers_image.style.display = 'none';
    keunote_image.style.display = 'none';
}

function show_photo() {
    safari_image.style.display = 'none';
    photo_image.style.display = 'block';
    imovie_image.style.display = 'none';
    garagband_image.style.display = 'none';
    pages_image.style.display = 'none';
    numbers_image.style.display = 'none';
    keunote_image.style.display = 'none';
}

function show_imovie() {
    safari_image.style.display = 'none';
    photo_image.style.display = 'none';
    imovie_image.style.display = 'block';
    garagband_image.style.display = 'none';
    pages_image.style.display = 'none';
    numbers_image.style.display = 'none';
    keunote_image.style.display = 'none';
}

function show_garagband() {
    safari_image.style.display = 'none';
    photo_image.style.display = 'none';
    imovie_image.style.display = 'none';
    garagband_image.style.display = 'block';
    pages_image.style.display = 'none';
    numbers_image.style.display = 'none';
    keunote_image.style.display = 'none';
}

function show_pages() {
    safari_image.style.display = 'none';
    photo_image.style.display = 'none';
    imovie_image.style.display = 'none';
    garagband_image.style.display = 'none';
    pages_image.style.display = 'block';
    numbers_image.style.display = 'none';
    keunote_image.style.display = 'none';
}

function show_numbers() {
    safari_image.style.display = 'none';
    photo_image.style.display = 'none';
    imovie_image.style.display = 'none';
    garagband_image.style.display = 'none';
    pages_image.style.display = 'none';
    numbers_image.style.display = 'block';
    keunote_image.style.display = 'none';
}

function show_keunote() {
    safari_image.style.display = 'none';
    photo_image.style.display = 'none';
    imovie_image.style.display = 'none';
    garagband_image.style.display = 'none';
    pages_image.style.display = 'none';
    numbers_image.style.display = 'none';
    keunote_image.style.display = 'block';
}

var logicpro_link = document.getElementById('pills-logicpro-tab');
var logicpro_image = document.getElementById('logicpro-pic');
logicpro_link.addEventListener('click', show_logicpro);


var MainStage_link = document.getElementById('pills-MainStage-tab');
var MainStage_image = document.getElementById('MainStage-pic');
MainStage_link.addEventListener('click', show_MainStage);

var FinalCutPro_link = document.getElementById('pills-FinalCutPro-tab');
var FinalCutPro_image = document.getElementById('FinalCutPro-pic');
FinalCutPro_link.addEventListener('click', show_FinalCutPro);

var Motion_link = document.getElementById('pills-Motion-tab');
var Motion_image = document.getElementById('Motion-pic');
Motion_link.addEventListener('click', show_Motion);

var Compressor_link = document.getElementById('pills-Compressor-tab');
var Compressor_image = document.getElementById('Compressor-pic');
Compressor_link.addEventListener('click', show_Compressor);





function show_logicpro() {
    logicpro_image.style.display = 'block';
    MainStage_image.style.display = 'none';
    FinalCutPro_image.style.display = 'none';
    Motion_image.style.display = 'none';
    Compressor_image.style.display = 'none';

}

function show_MainStage() {
    logicpro_image.style.display = 'none';
    MainStage_image.style.display = 'block';
    FinalCutPro_image.style.display = 'none';
    Motion_image.style.display = 'none';
    Compressor_image.style.display = 'none';

}

function show_FinalCutPro() {
    logicpro_image.style.display = 'none';
    MainStage_image.style.display = 'none';
    FinalCutPro_image.style.display = 'block';
    Motion_image.style.display = 'none';
    Compressor_image.style.display = 'none';

}

function show_Motion() {
    logicpro_image.style.display = 'none';
    MainStage_image.style.display = 'none';
    FinalCutPro_image.style.display = 'none';
    Motion_image.style.display = 'block';
    Compressor_image.style.display = 'none';

}

function show_Compressor() {
    logicpro_image.style.display = 'none';
    MainStage_image.style.display = 'none';
    FinalCutPro_image.style.display = 'none';
    Motion_image.style.display = 'none';
    Compressor_image.style.display = 'block';

}