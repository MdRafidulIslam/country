const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

loadCountries();

const displayCountries = countries => {

    const countryDiv = document.getElementById('country')

    countries.forEach(countery => {

        const div = document.createElement('div')
        div.classList.add('countryss')
        // const h3 = document.createElement('h3')
        // h3.innerText = countery.name.common
        // const p = document.createElement('p')
        // p.innerText = countery.capital;
        // div.appendChild(h3)
        // div.appendChild(p)
        div.innerHTML = `

        <h3>Name : ${countery.name.common}</h3>
        <p>Capital : ${countery.capital}</p>
        <button onclick="loadCountryName('${countery.name.common}')">shoe details</button>

        `;
        countryDiv.appendChild(div);
    })

}

const loadCountryName = name => {
    const url = `https://restcountries.com/v3.1/name/${name}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountry(data[0]))
}

const displayCountry = country => {
    const divin = document.getElementById('detail')
    console.log(country)

    divin.innerHTML = `
    <h4>Name : ${country.name.common}</h4>
    <p>Name : ${country.population}</p>
    <img width="200px" src="${country.flags.png}" alt="">
    `;
}