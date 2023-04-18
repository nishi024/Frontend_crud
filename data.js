var dati = [{
        "id": 10001,
        "birthDate": "1953-09-01",
        "firstName": "Georgi",
        "lastName": "Facello",
        "gender": "M",
        "hireDate": "1986-06-25",
    },
    {
        "id": 10002,
        "birthDate": "1964-06-01",
        "firstName": "Bezalel",
        "lastName": "Simmel",
        "gender": "F",
        "hireDate": "1985-11-20",
    },
    {
        "id": 10003,
        "birthDate": "1959-12-02",
        "firstName": "Parto",
        "lastName": "Bamford",
        "gender": "M",
        "hireDate": "1986-08-27T22:00:00.000+0000",
    },
    {
        "id": 10004,
        "birthDate": "1954-04-30",
        "firstName": "Chirstian",
        "lastName": "Koblick",
        "gender": "M",
        "hireDate": "1986-11-30",

    },
    {
        "id": 10005,
        "birthDate": "1955-01-20",
        "firstName": "Kyoichi",
        "lastName": "Maliniak",
        "gender": "M",
        "hireDate": "1989-09-11T22:00:00.000+0000",

    }
]

var nexId = 10006;

$(document).ready(function() {

    //elimina
    $("body").on("click", ".btn-delete", function() {
        var td = $(this).parent("td");
        var id = td.data("id");
        for (var i = 0; i < dati.length; i++) {
            if (dati[i].id == id) {
                dati.splice(i, 1);
                break;
            }
        }
        displayTable();
    })
    displayTable();

    //aggiungi
    $("body").on("click", ".btn-add", function() {
        var firstName = $('#firstName').val();
        console.log(firstName);
        var lastname = $('#lastname').val();
        console.log(lastname);
        var nuovo = {
            "id": nexId,
            "firstName": firstName,
            "lastName": lastname,
            "gender": "M",
        }
        dati.push(nuovo);
        displayTable();
        nexId++;

        //chiusura dopo aggiungi
        var modal = $('#exampleModal');
        modal.modal("hide");


    });
});



function displayTable() {
    var r = '';
    $.each(dati, function(id, value) {
        r += '<tr>';
        r += '<td>' + value.id + '</td>';
        r += '<td>' + value.firstName + '</td>';
        r += '<td>' + value.lastName + '</td>';
        r += '<td data-id=' + value.id + '> <button type="button" class="btn btn-danger btn-delete">Elimina</button>' + '</td>';
        r += '<tr>' + '</tr>';
    });
    $("tbody").html(r);
}