const flags = document.getElementById('flag')

// carregamento da pagina apos consumo da api
document.addEventListener("DOMContentLoaded", e => {
    fetchData()
})
// Busca a API e transfoma em json atraves do async/await
const fetchData = async () => {
    try {
        const res = await fetch(`https://restcountries.com/v3.1/all`)
        const data = await res.json()
        console.log(data);
        flagPrint(data)
        formularyClient(data)
        filtros(data)
        
    } catch (error) {
        console.log(error);
    }
}
// Mostra os itens filtrados (ou nao) na tela 
const flagPrint = data => {
        let element = ''
        data.forEach(item => {
            element += `<article class="card">
            <a href="flagpage.html?name=${item.name.common}"><div class="country-img" style="background-image: url(${item.flags.svg});"></div></a>
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
        flags.innerHTML = element
        
}
