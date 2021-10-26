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
            <article class="card">
            <img src="${item.flags.svg}" class="img-flag" alt="flag">
            <div class="card-content margin">
                <h3>${item.translations.por.common}</h3>
                <p>
                    <b> População:</b>
                    ${item.population}
                </p>
                <p> 
                    <b> Capital:</b>
                    ${item.capital}
                </p>
                <p>
                    <b> Região:</b>
                    ${item.region}
                </p>                
            </div>
        </article>
        `
        });
        flag.innerHTML = element
    }