
Webcam.set({
width:350,
height:300,
image_format : 'png',
png_quality:90
});

camera=document.getElementById("camera");
Webcam.attach("#camera");
function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="capturedimage"src="'+data_uri+'"/>';
    });
}

console.log("ml5version",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/3ouXN06zM/model.json",modelLoaded);
function modelLoaded(){
    console.log("modelLoaded");
}

function check()
{
img=document.getElementById("capturedimage");
    classifier.classify(img,getresult);
    }

    function getresult(error,result)
    {
        if(error){console.error(error)} 
        else{console.log (result);
        document.getElementById("resultobject").innerHTML=result[0].label;
    document.getElementById("objectaccuracy").innerHTML=result[0].confidence.toFixed(3);}
                 
    }