document.addEventListener('DOMContentLoaded', (event) => {
    const scanFilesBtn = document.getElementById('scanFiles');

    if (scanFilesBtn) {
        scanFilesBtn.addEventListener('click', () => {
            console.log('Button clicked');
            console.log('scanFiles event sent');
            ipcRenderer.send('scanFiles');
        });
    } else {
        console.log('scanFiles button does not exist');
    }
});
