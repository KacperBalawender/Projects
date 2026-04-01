var tcs = document.getElementsByClassName('theme-card');
var tcf = document.getElementsByClassName('tcf');
var tcb = document.getElementsByClassName('tcb');
var mc = document.getElementById('mc');
var cc = document.getElementById('cc');
var ar = document.getElementById('ar');
var al = document.getElementById('al');
var clicked = false;

const transformStyles = [
    'translateX(-230%) rotateY(-15deg) scale(0.740)',
    'translateX(-178%) rotateY(-12deg) scale(0.855)',
    'translateX(-100%) rotateY(-7deg) scale(0.957)',
    '', // center card
    'translateX(100%) rotateY(7deg) scale(0.957)',
    'translateX(178%) rotateY(12deg) scale(0.855)',
    'translateX(230%) rotateY(15deg) scale(0.740)'
];


mc.addEventListener('mouseenter', () => {
    if (clicked) return;

    const centerIndex = Math.floor(tcs.length / 2);
    let zindex = 2;

    for (let i = 0; i < tcs.length; i++) {
        if (tcs[i].classList.contains('tc')) {
            let rotate = (i - centerIndex) * 8;
            let translateX = (i - centerIndex) * 15;

            tcs[i].style.transform = `rotate(${rotate}deg) translateX(${translateX}px)`;
            tcs[i].style.transformOrigin = 'bottom center';
            tcs[i].style.zIndex = zindex;

            zindex++;
        }
    }

    mc.classList.remove('main-card');
    mc.classList.add('main-card-inv');
});

mc.addEventListener('mouseleave', () => {
    if (!clicked) {
        for (let i = 0; i < tcs.length; i++) {
            tcs[i].style = '';
        }
    }

    mc.classList.add('main-card');
    mc.classList.remove('main-card-inv');
});

mc.addEventListener('click', () => {
    clicked = true;

    for (let i = 0; i < tcs.length; i++) {
        tcs[i].classList.remove('tc');
        tcs[i].style = '';
    }

    cc.classList.add('card-container-hovered');
    cc.classList.remove('card-container');
    mc.classList.add('main-card-dis');

    for (let i = 0; i < tcs.length; i++) {
        if (transformStyles[i]) {
            tcs[i].style.transform = transformStyles[i];
            tcs[i].style.transformStyle = 'preserve-3d';
        }
    }

    al.classList.remove('arr-left-b');   
    al.classList.add('arr-left-a');
    ar.classList.remove('arr-right-b');   
    ar.classList.add('arr-right-a');
});


let zIndexStyles = [1, 3, 6, 10, 6, 3, 1];

function applyTransforms() {
    for (let i = 0; i < tcs.length; i++) {
        tcs[i].style.transform = transformStyles[i];
        tcs[i].style.transformStyle = 'preserve-3d';
        tcs[i].style.zIndex = zIndexStyles[i];
    }
}


function rotateRight() {
    // Rotate transform and zIndex styles
    transformStyles.push(transformStyles.shift());
    zIndexStyles.push(zIndexStyles.shift());
    applyTransforms();

    // Remove flipped class from all cards
    for (let i = 0; i < tcs.length; i++) {
        tcs[i].classList.remove('flipped');
    }
}

function rotateLeft() {
    transformStyles.unshift(transformStyles.pop());
    zIndexStyles.unshift(zIndexStyles.pop());
    applyTransforms();

    // Remove flipped class from all cards
    for (let i = 0; i < tcs.length; i++) {
        tcs[i].classList.remove('flipped');
    }
}

for (let i = 0; i < tcs.length; i++) {
    tcs[i].addEventListener('click', function () {
        // tylko środkowa karta
        if (transformStyles[i] !== '') return;

        tcs[i].classList.toggle('flipped');
    });
}




ar.addEventListener('click', rotateRight);
al.addEventListener('click', rotateLeft);