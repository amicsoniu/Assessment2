var preview = document.getElementById("preview");
var hair = document.getElementById("hair");
var eyes = document.getElementById("eyes");
var nose = document.getElementById("nose");
var mouth = document.getElementById("mouth");

var colorRange = document.getElementById("colorRange");
var rg1 = document.getElementById("rg1");
var rg2 = document.getElementById("rg2");
var rg3 = document.getElementById("rg3");
var rg4 = document.getElementById("rg4");
var rangeButton = document.getElementById("rangeButton");
var numberButton = document.getElementById("numberButton");
var randomButton = document.getElementById("randomButton");
var plusButton = document.getElementById("plusButton");

var display = document.getElementById("display");

var hairnum = 2;
var eyesnum = 2;
var nosenum = 2;
var mouthnum = 2;


colorRange.addEventListener("change", function(){
    preview.style.backgroundColor = colorRange.value;
});

numberButton.addEventListener("click", function(){
   rg1.type = "number";
    rg2.type = "number";
    rg3.type = "number";
    rg4.type = "number";
});

rangeButton.addEventListener("click", function(){
   rg1.type = "range";
    rg2.type = "range";
    rg3.type = "range";
    rg4.type = "range";
});

rg1.addEventListener("change", function(){
    hair.style.width = rg1.value + "%";
});

rg2.addEventListener("change", function(){
    eyes.style.width = rg2.value + "%";
});

rg3.addEventListener("change", function(){
    nose.style.width = rg3.value + "%";
});

rg4.addEventListener("change", function(){
    mouth.style.width = rg4.value + "%";
});

hair.addEventListener("click", function(){
    hair.src = "img/hair" + hairnum + ".png";
    hairnum = hairnum + 1;
    if(hairnum > 3){
        hairnum = 1;
    }
});

eyes.addEventListener("click", function(){
    eyes.src = "img/eyes" + eyesnum + ".png";
    eyesnum = eyesnum + 1;
    if(eyesnum > 3){
        eyesnum = 1;
    }
});

nose.addEventListener("click", function(){
    nose.src = "img/nose" + nosenum + ".png";
    nosenum = nosenum + 1;
    if(nosenum > 3){
        nosenum = 1;
    }
});

mouth.addEventListener("click", function(){
    mouth.src = "img/mouth" + mouthnum + ".png";
    mouthnum = mouthnum + 1;
    if(mouthnum > 3){
        mouthnum = 1;
    }
});

plusButton.addEventListener("click", function(){
    var newDiv = document.createElement("div");
    newDiv.style.width = "100px";
    newDiv.style.height = "100px";
    newDiv.style.display = "inline-block";
    
    var newHairImg = document.createElement("img");
    newHairImg.src = hair.src;
    newHairImg.style.width = rg1.value + "%";
    newHairImg.style.display = "block";
    
    var newEyesImg = document.createElement("img");
    newEyesImg.src = eyes.src;
    newEyesImg.style.width = rg2.value + "%";
    newEyesImg.style.display = "block";
    
    var newNoseImg = document.createElement("img");
    newNoseImg.src = nose.src;
    newNoseImg.style.width = rg3.value + "%";
    newNoseImg.style.display = "block";
    
    var newMouthImg = document.createElement("img");
    newMouthImg.src = mouth.src;
    newMouthImg.style.width = rg4.value + "%";
    newMouthImg.style.display = "block";
    
    newDiv.appendChild(newHairImg);
    newDiv.appendChild(newEyesImg);
    newDiv.appendChild(newNoseImg);
    newDiv.appendChild(newMouthImg);
    
    display.appendChild(newDiv);
    
});


randomButton.addEventListener("click", function(){
    
    var randomHairnum = Math.floor((Math.random() * 100) + 1);
   hairnum = Math.floor((Math.random() * 3) + 1);
    hair.src = "img/hair" + hairnum + ".png";
    hair.style.width = randomHairnum + "%";
    rg1.value = randomHairnum;
    
    
    var randomEyesnum = Math.floor((Math.random() * 100) + 1);
    eyesnum = Math.floor((Math.random() * 3) + 1);
    eyes.src = "img/eyes" + eyesnum + ".png";
    eyes.style.width = randomEyesnum + "%";
    rg2.value = randomEyesnum;
    
    var randomNosenum = Math.floor((Math.random() * 100) + 1);
    nosenum = Math.floor((Math.random() * 3) + 1);
    nose.src = "img/nose" + nosenum + ".png";
    nose.style.width = randomNosenum + "%";
    rg3.value = randomNosenum;
    
    var randomMouthnum = Math.floor((Math.random() * 100) + 1);
    mouthnum = Math.floor((Math.random() * 3) + 1);
    mouth.src = "img/mouth" + mouthnum + ".png";
    mouth.style.width = randomMouthnum + "%";
    rg4.value = randomMouthnum;
    
    var randomColornum1 = Math.floor((Math.random() * 255) + 1);
    var randomColornum2 = Math.floor((Math.random() * 255) + 1);
    var randomColornum3 = Math.floor((Math.random() * 255) + 1);
    colorRange.value = randomColornum1, randomColornum2, randomColornum3;
});







