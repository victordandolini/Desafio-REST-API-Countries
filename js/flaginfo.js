const flag = document.getElementById ('flag')
const query = new URLSearchParams(window.location.search)
const params = query.get('name')
console.log(params);


document.addEventListener("DOMContentLoaded", e => {
    fetchData()
})

const fetchData = async () => {
    try {
        const res = await fetch(`https://restcountries.com/v3.1/all`)
        const data = await res.json()
        const datafilter = data.filter(item => item.name.common === params)         
        flagPrint(datafilter)
        
    } catch (error) {
        console.log(error);
    }
}
const flagPrint = data => {
    let element = ''
        
    data.forEach(item => {
        const currencies = item.currencies;
        let currencyArr = []
        for( const key in currencies){
              currencyArr.push(currencies[key].name)
        }
                    
        const languages = item.languages;
        let languagesArr = []
        for( const key in languages){
              languagesArr.push(languages[key])
              
        }
        const language = languagesArr.join(', ');    
        
        threeBorders = item.borders
        
        const borders = Object.assign({}, threeBorders);
        
        element += `
            <div class="leftModal">
            <img src="${item.flags.svg}" alt="" srcset="">                
            </div>
            <div class="rightModal" id="rightModal">
            <h1>${item.translations.por.common}</h1>
                <div class="modalInfo">
                <div class="innerLeft inne">
                        <p><strong>População: </strong>${item.population}</p>
                        <p><strong>Região: </strong>${item.region}</p>
                        <p><strong>Sub-Região: </strong>${item.subregion}</p>
                        <p><strong>Capital: </strong>${item.capital}</p>
                        ${ Object.keys(borders).length === 0 && borders.constructor === Object ? '' : `
                        <div>
                        <div class="border-countries-label">
                                <h4>Fronteiras:</h4>
                                <div class="border-countries-btns">
                                ${Object.keys(borders).map(function (key) {
                                    return `<button class='country-btn'  value=${borders[key]}>${borders[key]} </button>`           
                                }).join("")} 
                                   
                                </div>
                                </div>`
                            }
                        </div>
                    </div>
                    <div class="innerRight inne">
                    <p><strong>Top Level Domain: </strong>${item.tld}</p>
                    <p><strong>Moeda: </strong>${currencyArr}</p>
                    <p><strong>Idioma: </strong>${language}</p>
                        
                        </div>
                        </div>
                        
        `
    });
        
       
        
    flag.innerHTML = element
    }
