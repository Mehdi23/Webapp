var html = "";
html += "<a id=btn href=# data-role=button data-icon=check data-iconpos=right>";
html +=     "Click the button";
html += "</a>";
$("#home div:jqmData(role=content)").append (html);

var test = "low";
var serviceAddress = "http://mehdiappk.appspot.com/webresources/myresource";

$("#btn").bind ("click", function (event)
{
	addCar();
	
});

function addCar() {
    $.ajax({
        type: 'POST',
        contentType: 'application/json',
        url: serviceAddress,
        dataType: "json",
        data: formToJSON(),
        success: function(data, textStatus, jqXHR){
            alert('Car created successfully');
        },
        error: function(jqXHR, textStatus, errorThrown){
            alert('addCar error: ' + textStatus);
        }
    });
}

//Helper function to serialize all the form fields into a JSON string
function formToJSON() {
    return JSON.stringify({
        "id": $('#carId').val(),
        "license": $('#carLicense').val(),
        "color": $('#carColor').val()
        });
}