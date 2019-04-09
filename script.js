ar q=0,to=0,dato;
function addfilas(){
    nombre=document.getElementById("nombre").Value;
    precio=document.getElementById("precio").Value;
    cantidad=document.getElementById("cantidad").Value;
    importe=document.getElementById("importe").value;
    notas=document.getElementById("notas").value;
    document.getElementById("tabla").inserRow(-1).innerHTML="<td>"+q+"</td><td>"
                                                                  +nombre+"</td><td>"
                                                                  +precio+"</td><td>"
                                                                  +cantidad+"</td><td>"
                                                                  +importe+"</td><td>"
                                                                  +notas+"</td>";
}