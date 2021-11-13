function traerInformacionCategory () {
    $.ajax({
        url:"http://150.230.160.207:8080/api/Category/all",
        type: "GET",
        datatype: "JSON",
        success : function (respuesta){

            console.log(respuesta);
            pintarRespuesta(respuesta);
        }

    });
}

function pintarRespuesta(respuesta) {

    let myTable = "<table class='ui center aligned celled table'>" + "<thead><tr><th>NAME</th><th colspan='3'>DESCRIPTION</th></tr></thead>"

    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>" + respuesta[i].name+"</td>";
        myTable+="<td>" + respuesta[i].description+"</td>";
        myTable+="<td> <button class='ui Yellow button' onclick='actualizarInformacionCategory("+respuesta[i].id+")'>ACTUALIZAR</button>";
        myTable+="<td> <button class='ui Yellow button' onclick='borrarInformacionCategory("+respuesta[i].id+")'>BORRAR</button>";
        myTable+="</tr>";
    }

    myTable+="</table>";
    $("#resultado1").html(myTable);
}

function guardarInformacionCategory(){

    let var2 = {
        name:$("#Cname").val(),
        description:$("#Cdescription").val()
    };

    $.ajax({
        type: 'POST',
        contentType: "application/JSON; charset-UTF-8",
        datatype: 'JSON',
        data: JSON.stringify(var2),

        url: "http://150.230.160.207:8080/api/Category/save",

        success: function(respuesta){
            console.log(respuesta);
            console.log("Category se guardo correctamente");
            alert("Category se guardo correctamente");
            window.location.reload()
        },

        error: function (jqXHR, textStatus, errorThrown) {
            window.location.reload(),
            alert("No se guardo con exito");
        }

    });
}

function actualizarInformacionCategory(idElmento) {

    let myData = {
        id : idElemento,
        name:$("#name").val(),
        description:$()
    };

    console.log(myData);
    let dataToSend = JSON.stringify(myData);

    $.ajax({

        url:"150.230.160.207:8080/api/Category/update",
        type: 'PUT',
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function(respuesta){
            $("#resultado1").empty();
            $("#id").val("");
            $("#CName").val("");
            $("#Cdescription"). val("");
            traerInformacionCategory();
            alert("Se ha actualizado la informacion");
        }
    });
}

function borrarInformacionCategory (idElemento){

    let myData = {
        id: idElemento
    };

    let dataToSend = JSON.stringify(myData);

    $.ajax ({

        url:"150.230.160.207:8080/api/Category/" + idElemento,
        type: 'DELETE',
        data : dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function(respuesta){
            $("#resultado").empty();
            traerInformacionCategory();
            alert("Se elimino correctamente")
        }

    });
}





