const api_host = 'http://restcountries.eu/rest/v2/name/eesti';

window.addEventListener('load',()=>{
    fetch(api_host).then(responce=>{
        return responce.json();
    }).then(data =>{
        console.log(data[0]);
    })

});



