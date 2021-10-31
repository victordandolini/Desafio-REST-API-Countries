const formulary = document.getElementById('formulary');
const inputFormulary = document.getElementById('input-fomulary');

const formularyClient = data => { 
    function removeAcento(text){       
        text = text.toLowerCase();                                                         
        text = text.replace(new RegExp('[ÁÀÂÃ]','gi'), 'a');
        text = text.replace(new RegExp('[ÉÈÊ]','gi'), 'e');
        text = text.replace(new RegExp('[ÍÌÎ]','gi'), 'i');
        text = text.replace(new RegExp('[ÓÒÔÕ]','gi'), 'o');
        text = text.replace(new RegExp('[ÚÙÛ]','gi'), 'u');
        return text;                 
    }
    formulary.addEventListener('keyup', e => {
        e.preventDefault()
        const inputClient = removeAcento(inputFormulary.value.toLowerCase())
        console.log(inputClient);
        const arrayFiltrado = data.filter(item => {
            const input = removeAcento(item.translations.por.common.toLowerCase());
            if(input.indexOf(inputClient) !== -1){
                return item
            }
        })
        flagPrint(arrayFiltrado);
    })
}
