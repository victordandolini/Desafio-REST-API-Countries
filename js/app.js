const flags = document.getElementById('flag')

document.addEventListener("DOMContentLoaded", e => {
    fetchData()
})

const fetchData = async () => {
    try {
        const res = await fetch(`https://restcountries.com/v3.1/all`)
        console.log(res);
        const data = await res.json()
        console.log(data);
        flagPrint(data)
        formularyClient(data)
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
                <h3>${item.name.common}</h3>
                <p>
                    <b> Populaçao:</b>
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
        flags.innerHTML = element
    }
    
