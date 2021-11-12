const calcular = document.getElementById("calcular");

function pace () {
    const name = document.getElementById('name').value
    const time = parseInt(document.getElementById('time').value)
    const km = parseFloat(document.getElementById('km').value)
    const peso = parseFloat(document.getElementById('peso').value)
    const resultado = document.getElementById('result')

    if (name == '' | time == '' | peso == '' | km == '') {
        alert('Para calcular o seu pace , preencha todos os campos.');
        return;
    }

    let hours = Math.round(time / 60, -1) 
    let pace_ =  Math.round(time / km, -1)
    let speed =  Math.round(km / (time/60), -1)
    let calories = Math.round(speed * peso * 0.00175 * time, -1)
    resultado.textContent = `Olá ${name}! Você percorreu ${km}km em ${hours}h. 
                             Isso quer dizer que a sua velocidade média foi de ${speed} km/h,
                             o que o corresponde a um pace de ${pace_}min/km. Com ${peso}kg, você gastou cerca de ${calories} cal`

}
calcular.addEventListener('click', pace)