const input = document.getElementById('url');
const button = document.getElementById('btn');
const sizeSelect = document.getElementById('select');
const qrContainer = document.getElementById('qr');
const qrOuter = document.getElementById('qr-container');
const downloadBtn = document.getElementById('download');

let size = parseInt(sizeSelect.value, 10) || 200;

button.addEventListener('click', (e) => {
  e.preventDefault();
  size = parseInt(sizeSelect.value, 10) || 200;
  generateQRCode();
});

sizeSelect.addEventListener('change', () => {
  size = parseInt(sizeSelect.value, 10) || 200;
  const text = input.value.trim();
  if (text) {
    // Regenerate QR with the new size using current input
    generateQRCode();
  }
});

function generateQRCode() {
  if (typeof QRCode === 'undefined') {
    alert('QR library failed to load. Please check your internet connection.');
    return;
  }
  const text = input.value.trim();
  if (!text) {
    alert('Please enter text/URL to encode.');
    return;
  }
  qrContainer.innerHTML = '';
  try {
    new QRCode(qrContainer, {
      text,
      width: size,
      height: size,
      colorDark: '#000000',
      colorLight: '#ffffff',
      correctLevel: QRCode.CorrectLevel.M
    });
    // mark container as generated to switch layout
    qrOuter.classList.add('generated');
  } catch (err) {
    alert('Failed to generate QR: ' + err.message);
  }
}

// Download as PNG when button clicked
downloadBtn.addEventListener('click', () => {
  const canvas = qrContainer.querySelector('canvas');
  if (canvas) {
    const link = document.createElement('a');
    link.download = 'qr.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
    return;
  }
  const img = qrContainer.querySelector('img');
  if (img && img.src) {
    const link = document.createElement('a');
    link.download = 'qr.png';
    link.href = img.src;
    link.click();
  } else {
    alert('Generate a QR before downloading.');
  }
});
