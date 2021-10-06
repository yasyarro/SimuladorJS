$(document).ready(function(){
  console.log ("DOM ok");
});

$(".titulo").fadeIn(1000);
$(".subtitulo").fadeIn(1500);
$(".entradas").fadeIn(2000);

$(".boton1").animate({  left:'250px',
                    
                        height:'35px',
                        width:'140px'   }, //1er parámetro propiedades
                        "fast",            //2do parámetro duración 
                        function(){        //3er parámetro callback
                            console.log("final de animación");
                        });

$(".boton").animate({  left:'500px',
                    
                        height:'35px',
                        width:'160px'   }, //1er parámetro propiedades
                        "fast",            //2do parámetro duración 
                        function(){        //3er parámetro callback
                            console.log("final de animación");
                        });

  document.getElementById("i2021").addEventListener("input", myFunctioni2021);
  function myFunctioni2021() {
    let i2021 = document.getElementById("i2021").value;
    document.getElementById("demoi2021").innerHTML = "La inflación proyectada para el 2021 es " + i2021 + "%";
  }

  let recuperar =  localStorage.getItem('dato');
  
    document.getElementById("demov2020").innerHTML = ("Sus ventas en 2020 fueron $" + recuperar);
  

  $(".boton").click(function ejecutar() 
{
function ventas2021(){

return parseInt(recuperar * parseFloat(1+document.getElementById("i2021").value/100));
}

let ResultadoVentas2021 = document.createElement("h2");
ResultadoVentas2021.innerText = ("Las ventas en 2021 deben ser mayores o iguales a $" + parseInt(ventas2021()) + " considerando un " + document.getElementById("i2021").value) + "% de inflación proyectada para 2021";
document.body.appendChild (ResultadoVentas2021);
ResultadoVentas2021.setAttribute("id", "monto");

})
