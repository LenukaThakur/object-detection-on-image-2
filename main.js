function setup(){
    canvas=createCanvas(400, 400)
    canvas.center()
    coco = ml5.objectDetector("cocossd", modelLoaded)
    document.getElementById("status").innerHTML="Detecting Object"
}

function  modelLoaded(){
    console.log('successfully loaded')
}





function preload(){
    bedroom=loadImage("bedroom image.jpg")
    fruits=loadImage("fruits images.wedp")
    waterbottle=loadImage("water bottle.webp")
    TV=loadImage("TV image.webp")
}