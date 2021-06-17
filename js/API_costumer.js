var box = document.getElementsByClassName("container")[0];
function pegaPer () {
    var personagem = document.getElementById("num-per").value;


    const request = new XMLHttpRequest()
    url = 'https://swapi.dev/api/people/'+personagem+'/'
    request.open('GET', url)
    function fdex() {
        var data = JSON.parse(this.responseText);
        console.log(data);
        box.innerHTML = `
            <p>Nome: `+data.name+`</p>
            <p>Altura: `+data.heigth+`</p>
            <p>Massa: `+data.mass+`</p>
            <p>Cor do cabelo: `+data.hair_color+`</p>
            <p>Cor da pele: `+data.skin_color+`</p>
            <p>Cor do olho: `+data.eye_color+`</p>
            <p>Ano de nascimento: `+data.birth_year+`</p>
            <p>Gênero: `+data.gender+`</p>
        `;
    }
    request.onload = fdex
    request.onerror = function () {
    console.log('erro ao executar a requisição')
    }
    request.send()
}