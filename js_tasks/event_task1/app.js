// #task. Eger sehifede simsimacil  sozunu yazdimsa, ekrana, 
// xos geldin menim agam yazisi cixsin. 
// Prompt-dan falan istifade etmeyin. 
// Sadece, keyboard eventlari ile isleyin.



const text = document.getElementById('text')

window.addEventListener('keyup', (e) => {
    const simvol = e.key
    if (simvol.length < 3) {

        text.textContent = text.textContent + simvol
    }
    if (simvol === 'Backspace') {

        text.textContent = text.textContent.slice(0, text.textContent.length - 1)
    }

    if (text.textContent === 'simsimacil') {

        alert("xos geldin menim agam")
    }
})