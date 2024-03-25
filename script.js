const container = document.querySelector('.contender');
const qrCodeBtn = document.querySelector('#qr-code-button');
const qrCodeInput = document.querySelector('#qr-code-input');
const qrCodeImage = document.querySelector('#qr-code-img');

function generateQrCode() {
    const qrCodeInputValue = qrCodeInput.value;
    
    if (!qrCodeInputValue) return;

    qrCodeBtn.innerText = 'Gerando código...';

    qrCodeImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;

    qrCodeImage.addEventListener('load', () => {
        container.classList.add('active');
        qrCodeBtn.innerText = 'Gerar QR Code';
    });
}

qrCodeBtn.addEventListener('click', () => {
    generateQrCode();
});

qrCodeInput.addEventListener('keydown', (e) => {
    if (e.code === 'Enter') {
        generateQrCode();
    }
});

qrCodeInput.addEventListener('keyup', () => {
    if (!qrCodeInput.value) {
        container.classList.remove('active');
        qrCodeBtn.innerText = 'Gerar QR Code';
    }
    
});