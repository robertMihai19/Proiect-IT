var subjects = [ 'PC', 'USO', 'Fizica', 'OOp'];
var select =document.getElementById("materie");

for (var i=0;i<subjects.length;i++)
    {   var option=document.createElement("OPTION");
         txt = document.createTextNode(subjects[i]);
         option.appendChild(txt);          
         select.insertBefore(option, select.lastChild);
    }

function getInputText(){
        var titlu=document.getElementById('msg').value;
        var materie=document.getElementById('materie').value;
        if(materie!="default" && titlu!=0)
            $("#listAdaug").append("<h5>"+titlu+"</h5> <h6>(" + materie +")</h6>");
    }


