
var btn_generator = document.getElementById('generate-color');
btn_generator.addEventListener("click", generateColors);

getColors();
generateColors();
function generateColors(){
    
    var colorBox = document.getElementsByClassName("color-box");
    let idx;
    for(idx = 0; idx < colorBox.length; idx++){
        var rgb1 = random_rgb1();
        var rgb2 = random_rgb2();
        var rgb3 = random_rgb3();       
        colorBox[idx].style.backgroundColor = 'rgb('+rgb1+', '+rgb2+', '+rgb3+')';
    }

    function random_rgb1(){
        min_rgb = 0;
        max_rgb = 255;
        let rgb_difference = max_rgb - min_rgb;
        let random_code = Math.random();
        random_code = Math.floor(random_code * rgb_difference);
        random_code = random_code + min_rgb;
        return random_code;
    }
    function random_rgb2(){
        min_rgb = 0;
        max_rgb = 255;
        let rgb_difference = max_rgb - min_rgb;
        let random_code = Math.random();
        random_code = Math.floor(random_code * rgb_difference);
        random_code = random_code + min_rgb;
        return random_code;
    }
    function random_rgb3(){
        min_rgb = 0;
        max_rgb = 255;
        let rgb_difference = max_rgb - min_rgb;
        let random_code = Math.random();
        random_code = Math.floor(random_code * rgb_difference);
        random_code = random_code + min_rgb;
        return random_code;
    }

    
}

function getColors(){
    const box1 = document.getElementById('box1');
    const box2 = document.getElementById('box2');
    const box3 = document.getElementById('box3');
    const box4 = document.getElementById('box4');
    const box5 = document.getElementById('box5');
    const box6 = document.getElementById('box6');
    const box7 = document.getElementById('box7');
    const box8 = document.getElementById('box8');
    let outputBox = document.getElementById('rgb-code');
    let bodyColor = document.getElementsByTagName('body')[0];
    box1.addEventListener('click', ()=>{
        outputBox.innerHTML = box1.style.backgroundColor;
        bodyColor.style.backgroundColor = box1.style.backgroundColor;
    });
    box2.addEventListener('click', ()=>{
        outputBox.innerHTML = box2.style.backgroundColor;
        bodyColor.style.backgroundColor = box2.style.backgroundColor;
    });
    box3.addEventListener('click', ()=>{
        outputBox.innerHTML = box3.style.backgroundColor;
        bodyColor.style.backgroundColor = box3.style.backgroundColor;
    });
    box4.addEventListener('click', ()=>{
        outputBox.innerHTML = box4.style.backgroundColor;
        bodyColor.style.backgroundColor = box4.style.backgroundColor;
    });
    box5.addEventListener('click', ()=>{
        outputBox.innerHTML = box5.style.backgroundColor;
        bodyColor.style.backgroundColor = box5.style.backgroundColor;
    });
    box6.addEventListener('click', ()=>{
        outputBox.innerHTML = box6.style.backgroundColor;
        bodyColor.style.backgroundColor = box6.style.backgroundColor;
    });
    box7.addEventListener('click', ()=>{
        outputBox.innerHTML = box7.style.backgroundColor;
        bodyColor.style.backgroundColor = box7.style.backgroundColor;
    });
    box8.addEventListener('click', ()=>{
        outputBox.innerHTML = box8.style.backgroundColor;
        bodyColor.style.backgroundColor = box8.style.backgroundColor;
    });
}
