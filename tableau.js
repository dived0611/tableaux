var b1 = document.getElementById("b1")
b1.addEventListener('click', function ajouter(){
    var table = document.getElementById("t1");
    var newtr = document.createElement("tr");

    table.appendChild(newtr);

    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");

    newtr.appendChild(td1);
    newtr.appendChild(td2);   
    newtr.appendChild(td3);
    newtr.appendChild(td4);

    var suppbuttton = document.createElement("Button");
    suppbuttton.type = 'Button';
    suppbuttton.innerHTML = "supprimer";

    var modifiebuuton = document.createElement("Button");
    modifiebuuton.innerHTML = "modifier" 

    
    td3.appendChild(suppbuttton)
    td4.appendChild(modifiebuuton)


    var nom= prompt("donner le nom:");
    var prenom = prompt("donner le prenom");
    

    td1.innerHTML = nom
    td2.innerHTML = prenom
    modifiebuuton.addEventListener('click',function(){

        var Nnom= prompt("donner le neveau  nom :");
        var Nprenom = prompt("donner le neveau prenom");

        td1.innerHTML = Nnom
        td2.innerHTML =Nprenom



    })

    suppbuttton.addEventListener('click',function (){
        this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode)
    })

})
function show() {
    var table = document.getElementById("t1");
    var div = document.getElementById("Div");
    div.innerHTML = ""; 

    for (var i = 1; i < table.rows.length; i++) {

        var row = table.rows[i];
        var nom = row.cells[0].innerHTML;
        var prenom = row.cells[1].innerHTML; 


        div.innerHTML += nom + " " + prenom + "<br>";
    }
}