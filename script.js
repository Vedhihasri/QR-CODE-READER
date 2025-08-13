const inputBox = document.querySelector("#input");
const qrImage = document.querySelector("#qrimage");
const imageBox = document.querySelector("#image-box");



function generateQR(){

    if(inputBox.value.length > 0){
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + inputBox.value;
        imageBox.classList.add("show-img");

        document.querySelector("#download").style.display = "block"
    }
    else{
        inputBox.classList.add("error");

        setTimeout(()=>{
            inputBox.classList.remove("error")
        },1000)
    }

}


