function Fetch() {
    fetch(
        "https://www.timeapi.io/api/time/current/zone?timeZone=Europe%2FAmsterdam"
    )
        .then((response) => {
        return response.json();
    })
    .then(data => {

            document.getElementById("time").innerText = data.hour + ":" + data.minute + ":" + data.seconds
        
    }). catch(error => {
        console.log(error);
        clearInterval(coroutine);
    });

}
const coroutine = setInterval(Fetch, 1000);
