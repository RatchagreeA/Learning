if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
        document.getElementById("data").innerHTML =
            "latitude: " +
            position.coords.latitude +
            "<br>longitude: " +
            position.coords.longitude;
    });
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("getMessage").onclick = () => {
        // Add your code below this line
        fetch("/json/cats.json")
            .then((response) => response.json())
            .then((data) => {
                document.getElementById("message").innerHTML =
                    JSON.stringify(data);
            });

        // Add your code above this line
    };
});

const req = new XMLHttpRequest();
req.open("GET", "/json/cats.json", true);
req.send();
req.onload = function () {
    const json = JSON.parse(req.responseText);
    document.getElementsByClassName("message")[0].innerHTML =
        JSON.stringify(json);
};

const xhr = new XMLHttpRequest();
xhr.open("POST", url, true);
xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 201) {
        const serverResponse = JSON.parse(xhr.response);
        document.getElementsByClassName("message")[0].textContent =
            serverResponse.userName + serverResponse.suffix;
    }
};
const body = JSON.stringify({ userName: userName, suffix: " loves cats!" });
xhr.send(body);
