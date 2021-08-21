$(document).ready(function() {
    saveButton()
})

function saveButton(){
    $("#save").click(function(){
       var id = $("#userID").val()
       var name = $("#name").val()
       var age = $("#age").val()

       if(validAge(parseInt(age))){
           $("#spanage").text("")
           ajaxSave(id,name,parseInt(age))
       }else {
           $("#spanage").text("Invalid age")
       }
    })
}

function validAge(Age){

    if(Age >= 0 && Age <= 110){
       return true
    }

    return false
}

function ajaxSave(id,name,age){

    $.ajax({
        url: "http://localhost:8081/springboot-rest-api-sample/save" ,
        type: 'POST',
        async: true,
        contentType: 'application/json',
        data: JSON.stringify({
            id: null,
            name: name,
            age: age
        }),
        error: function(){
            alert('error');
        }
    })
}