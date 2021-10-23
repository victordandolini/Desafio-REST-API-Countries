const formulary = document.getElementById('formulary');
const inputFormulary = document.getElementById('input-fomulary');

const formularyClient = data => { 
    formulary.addEventListener('keyup', e => {
        e.preventDefault()
        const inputClient = inputFormulary.value.toLowerCase()
        console.log(inputClient);
    })
}
