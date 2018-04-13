document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e){
    let number = document.querySelector('input[type="text"]');

    const xml = new XMLHttpRequest();

    xml.open('GET', `http://api.icndb.com/jokes/random/${number.value}`, true);

    number.value = '';
    xml.onload = function(){
        if(this.status === 200){
            const response = JSON.parse(this.responseText);
            let output = '';
            let i = 1;

            if(response.type === 'success'){
                response.value.forEach(function(joke){
                output += `<li>${i++} - ${joke.joke}</li>`
                });
            } else {
                output = `<li>Buhhh</li>`;
            }

            document.querySelector('.jokes').innerHTML = output;
            //When Chuck Norris throws exceptions, it's across the room.
        }
    }
    xml.send();

    e.preventDefault();
}