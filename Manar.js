function setup(){
    canvas = createCanvas(350,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8KtbGg6Fajv6p4ZDPocz_7gl-a98lwUM_IE9VKg2tBk3Af40x68x8KaIqEM2gYRBvt10&usqp=CAU", كل عام وانتم بخير );
}

function modelLoaded(){
    console.log("كل عام وانتم بخير ")
}

function draw(){
    image(video, 0, 0, 350,300);
    classifier.classify(video, gotResult);
}

function gotResult(error, results){
    if (error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("PersonNameResult").untitled.html = results[0].label;
        document.getElementById("PersonAccuracyResult").untitled.html = results[0].confidence;
    }
}