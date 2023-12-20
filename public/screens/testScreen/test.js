export default function FindMyCoordinates() {
    // console.log("hello");
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(position);
            console.log(position.coords.latitude, position.coords.longitude);

            // const bdcAPI = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}`
            // getAPI(bdcAPI)
        }, (err) => {
            alert("user Denignt")
        })
    } else {
        alert("error")
    }
}

// function getAPI(bdcAPI) {
//     http.open("GET", bdcAPI);
//     http.send();
//     http.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//             result.innerHTML = this.responseText;
//         }
//     }
// }