let socket = new WebSocket('ws://localhost:3000/ws/Graph/');

socket.onmessage = function(e) {
    let djangoData = JSON.parse(e.data);
    console.log(djangoData)

    document.querySelector('#Graph').innerText = djangoData.value;
}