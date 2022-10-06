const input = document.querySelector('.qr-text');
const qrImg = document.querySelector('.qr-img');
const downloadBtn = document.querySelector('.download-btn');

let userText = 'Hello, World !';
let link;

function handleQR() {
    if(this.value) {
        userText = (this.value);
    }
    
    link =  `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${userText}` ;
    qrImg.src = link;
}

input.addEventListener('change', handleQR);

downloadBtn.addEventListener('click', () => {
    saveAs(link, 'img.png');
});

