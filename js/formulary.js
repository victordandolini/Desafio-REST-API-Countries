const formulary = document.getElementById('formulary');
const inputFormulary = document.getElementById('input-fomulary');

const formularyClient = data => { 
    formulary.addEventListener('keyup', e => {
        e.preventDefault()
        const inputClient = inputFormulary.value.toLowerCase()
        console.log(inputClient);
        const arrayFiltrado = data.filter(item => {
            const input = item.translations.por.common.toLowerCase();
            if(input.indexOf(inputClient) !== -1){
                return item
            }
        })
        flagPrint(arrayFiltrado);
    })
}
