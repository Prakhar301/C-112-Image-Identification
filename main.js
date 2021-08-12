var prediction="";
Webcam.set({ 
width:250,
height:250, 
image_format : 'pngtg', 
png_quality:90, 
constraints:{
facingMode: "environment"
} 
});
camera = document.getElementById("camera"); 
Webcam.attach(camera);
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("snapshot").innerHTML='<img id="idid" src="'+data_uri+'">';
    })
}
console.log('ml5 version',ml5.version );
var clasifier=ml5.imageClassifier('MobileNet',modelLoaded);
function modelLoaded(){
    console.log('Model Loaded');
}
function identify_image(){
    var img=document.getElementById("idid");
    clasifier.classify(img,gotResult);
}
function gotResult(error,result){
    if(error){
        console.error(error);
    }
    else{
        console.log(result);
        prediction=result[0].label;
        document.getElementById("object_name").innerHTML=prediction;
    }
}