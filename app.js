document.addEventListener("DOMContentLoaded", function () {
    
    let countries = document.getElementById('countries');

    fetch("https://restcountries.com/v3.1/all")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            data.forEach(country => {
                const optionSelected = document.createElement('option');
                optionSelected.value = country.name.common;
                optionSelected.text = country.name.common;
                countries.appendChild(optionSelected);

                
            });
        
        }).catch(error => {
            console.error('Countries not found', error); 
        });
})