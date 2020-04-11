const url = "https://covid19-brazil-api.now.sh/api/report/v1";

window.onload = function(){
    getStates();
}

function getStates(){
    console.log("PEGAR ESTADOS");
    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'json';
    request.send();

    request.onload = function(){
        let states = request.response;
        showStates(states);
        
    }
}


function showStates({data:states}){  //{data:[{state},...]}

    let state = "";
    for(let i = 0; i < states.length; i++) {
        var icone = `
        <img src="https://devarthurribeiro.github.io/covid19-brazil-api/static/flags/${states[i].uf}.png" alt="flag" width="40px">
        
        `


        state = {
            uf: icone,
            state: states[i].state,
            cases: states[i].cases,
            deaths: states[i].deaths
        }
        createTableElement(state); 
    }
}


function createTableElement(state){
    console.log("ESCREVER ESTADOS");
    $("#state_table").append("<tr>");
    
    let chaves = Object.keys(state);
    for (let i = 0; i < chaves.length; i++) {
        let chaveDaVez = chaves[i];
        $("#state_table").append("<td>" + state[chaveDaVez] + "</td>");
    }

    $("#state_table").append("</tr>");
}