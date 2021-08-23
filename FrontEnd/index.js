$(document).ready(function() {
    saveButton()
    reset()
})

function saveButton(){
    $("#save").click(function(){
       var id = $("#userID").val()
       var name = $("#name").val()
       var age = $("#age").val()

       if(validAge(parseInt(age) && validName(name))){
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

function validName(Name){

    if(Name != null ){
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
            id: id,
            name: name,
            age: age
        }),
        success: function(response){
            $("#userID").val(response.id)
            alert("Sucess")
        }

    }).fail(function(xhr, status, errorThrow){
        alert("error saving user " + xhr.responseText);
    })
}

function reset(){

    $("#reset").click(function(){
    
        $("#userID").val("")
        $("#name").val("")
        $("#age").val("")
        
    })

}