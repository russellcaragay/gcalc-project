// Initializing Variables
var pi = Math.PI


function sepiatheme(sepiatheme){
    var element = document.body;

    const light = document.querySelectorAll('.light');
    light.forEach(nav => nav.classList.remove('light-theme'));
    light.forEach(nav => nav.classList.add('theme-icon'));

    const dark = document.querySelectorAll('.dark');
    dark.forEach(nav => nav.classList.remove('dark-theme'));
    dark.forEach(nav => nav.classList.add('theme-icon'));

    element.classList.remove('light-theme');
    element.classList.remove('dark-theme');
    element.classList.add('sepia-theme');

    sepiatheme.classList.remove('theme-icon');
    sepiatheme.classList.add('sepia-theme');
}

function lighttheme(lighttheme){
    var element = document.body;

    const sepia = document.querySelectorAll('.sepia');
    sepia.forEach(nav => nav.classList.remove('sepia-theme'));
    sepia.forEach(nav => nav.classList.add('theme-icon'));

    const dark = document.querySelectorAll('.dark');
    dark.forEach(nav => nav.classList.remove('dark-theme'));
    dark.forEach(nav => nav.classList.add('theme-icon'));

    element.classList.remove('sepia-theme');
    element.classList.remove('dark-theme');
    element.classList.add('light-theme');

    lighttheme.classList.remove('theme-icon');
    lighttheme.classList.add('light-theme');
}

function darktheme(darktheme){
    var element = document.body;

    const sepia = document.querySelectorAll('.sepia');
    sepia.forEach(nav => nav.classList.remove('sepia-theme'));
    sepia.forEach(nav => nav.classList.add('theme-icon'));

    const light = document.querySelectorAll('.light');
    light.forEach(nav => nav.classList.remove('light-theme'));
    light.forEach(nav => nav.classList.add('theme-icon'));

    element.classList.remove('sepia-theme');
    element.classList.remove('light-theme');
    element.classList.add('dark-theme');

    darktheme.classList.remove('theme-icon');
    darktheme.classList.add('dark-theme');
}




// Circle Calculator Functions
function circlecalc(){

    // Initializing the Circle Variables and Performing the Formulas
    var r = parseInt(document.getElementById('radius').value);
    var CArea = pi * (r**2);
    var CDiameter = 2*r;
    var CCircumference = 2*pi*r;

    // Rounding the Answers to 3 Decimal Places and Displaying it
    document.getElementById('circArea').value = CArea.toFixed(3);
    document.getElementById('circDiameter').value = CDiameter.toFixed(3);
    document.getElementById('circCircumference').value = CCircumference.toFixed(3);
}

// Triangle Calculator Function
function trianglecalc(){

    // Initializing the Triangle Variables and Performing the Formulas
    var a = parseInt(document.getElementById('triside').value);
    var TArea = (Math.sqrt(3) / 4) * (a**2);
    var TPerimeter = 3*a;

    // Rounding the Answers to 3 Decimal Places and Displaying it
    document.getElementById('triArea').value = TArea.toFixed(3);
    document.getElementById('triPerimeter').value = TPerimeter.toFixed(3);
}

// Square Calculator Function
function squarecalc(){

    // Initializing the Triangle Variables and Performing the Formulas
    var s = parseInt(document.getElementById('sqside').value);
    var TArea = 4*s;
    var TPerimeter = s**2;

    // Rounding the Answers to 3 Decimal Places and Displaying it
    document.getElementById('sqArea').value = TArea.toFixed(3);
    document.getElementById('sqPerimeter').value = TPerimeter.toFixed(3);
}