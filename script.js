const apiKey = "174b0db6-4b71-4316-aeb1-83128c171252";
const apiLink = "https://api.thecatapi.com/v1/images/search";
var img = document.createElement("img");
img.setAttribute('ID','image');
var imageContainer = document.getElementById("imageContainer");
var button=document.getElementById("button");
button.addEventListener('click',newKitty);
function newKitty(){
    
    fetch(apiLink).then(res => res.json())
    .then(response => {
        img.src = response[0].url;
        imageContainer.appendChild(img);
   setPicDim();
    }).catch(error=>{
        document.getElementById("errorMsg").innerText="something went wrong, please try again",error;
    });
    
}
function setPicDim(){
    heightToBe=document.getElementById('height').value;
    widthToBe=document.getElementById('width').value;
    document.getElementById('image').style.maxHeight=`${heightToBe}px`;
    document.getElementById('image').style.maxWidth=`${widthToBe}px`;

}
