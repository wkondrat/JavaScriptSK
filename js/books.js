var xmlhttp = new XMLHttpRequest();
var url = "books.json";
// var url = "http://localhost:8080/webstore/rest/books";

xmlhttp.open("GET", url, true);

xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        getDataToTable(xmlhttp.responseText);
    }
}

xmlhttp.send();

function getDataToTable(response) {
    var arr = JSON.parse(response);
    var i;
    var out = "<table>";

    for (i = 0; i < arr.length; i++) {
        out += "<tr><td>" +
            arr[i].id +
            "</td> <td>" +
            arr[i].title +
            "</td><td>" +
            arr[i].authors +
            "</td><td>" +
            arr[i].status +
            "</td></tr>";
    }

    out += "</table>";
    document.getElementById("booksTable").innerHTML = out;
}
