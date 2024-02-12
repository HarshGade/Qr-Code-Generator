// selection 
let qrBox = document.getElementById("qrBox")
let qrImage = document.getElementById("qrImage")
let qrText = document.getElementById("qrText")

function generateQR(){
    // the below link will genertae qr code and we have to add the text that need's to be displayed when we scan the qr code
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
    // + qrText.value .value using this we can access the text that we got inside the input 
}
// call the above function
generateQR()

// when we click the button then only the qr cdoe should get visible otherwise it shoud not be visiible logic 

let button = document.querySelector("button")
// selecting the image that will be styled inside this 
let image = document.getElementById("qrImage")
button.addEventListener("click",function(){
    image.style.opacity=1; 
})