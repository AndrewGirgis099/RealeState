var fileInput = document.querySelector('.fileInput');
var uploadBtn = document.querySelector('.uploadBtn');
var profileImg = document.querySelector('.profileImg');

uploadBtn.addEventListener('click', () => {
    fileInput.click();
});

fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            profileImg.src = e.target.result;
        }
        reader.readAsDataURL(file);
    }
});

var fileInputt = document.querySelector('.fileInputt');
var uploadBtnn = document.querySelector('.uploadBtnn');
var profileImgg = document.querySelector('.profileImgg');

uploadBtnn.addEventListener('click', () => {
    fileInputt.click();
});

fileInputt.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            profileImgg.src = e.target.result;
        }
        reader.readAsDataURL(file);
    }
});