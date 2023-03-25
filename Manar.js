function setup(){
    canvas = createCanvas(350,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier(" https://tsf7.com/wp-content/uploads/2022/08/%D8%B9%D8%A8%D8%A7%D8%B1%D8%A7%D8%AA-%D8%B9%D9%86-%D9%86%D9%82%D9%84-%D8%A7%D9%84%D9%83%D9%84%D8%A7%D9%85-%D8%A8%D9%8A%D9%86-%D8%A7%D9%84%D9%86%D8%A7%D8%B3-6.png  "، كل عام وانتم بخير );
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
