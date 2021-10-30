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
            element += `
             <div class="leftModal">
                <img src="${item.flags.svg}" alt="" srcset="">                
            </div>
            <div class="rightModal" id="rightModal">
                <h1>${item.translations.por.common}</h1>
                <div class="modalInfo">
                    <div class="innerLeft inne">
                        <p><strong>População:</strong>${item.population}</p>
                        <p><strong>Região:</strong>${item.region}</p>
                        <p><strong>Sub-Região:</strong>${item.subregion}</p>
                    </div>
                    <div class="innerRight inne">
                        <p><strong>Capital:</strong>${item.capital}</p>
                        <p><strong>Top Level Domain:</strong>${item.tld}</p>
                        <p><strong>Moeda:</strong>${item.currencies}</p>
                        <p><strong>Idioma:</strong>${item.languages}</p>
                        
                    </div>
                </div>
        `
        });
        flag.innerHTML = element
    }