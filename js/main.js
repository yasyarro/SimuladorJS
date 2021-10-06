  $(document).ready(function(){
    console.log ("DOM ok");
  });

$(".titulo").fadeIn(1000);
$(".subtitulo").fadeIn(1500);
$(".entradas").fadeIn(1700);
$(".gif").fadeIn(1000);

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

  document.getElementById("v2019").addEventListener("input", myFunctionv2019);
 
  function myFunctionv2019() {
    let ventas2019 = document.getElementById("v2019").value;
    document.getElementById("demov2019").innerHTML = "Sus ventas en 2019 fueron $" + ventas2019;
  }
    
  document.getElementById("u2019").addEventListener("input", myFunctionu2019);

  function myFunctionu2019() {
    let unidades2019 = document.getElementById("u2019").value;
    document.getElementById("demou2019").innerHTML = "Sus ventas en 2019 fueron " + unidades2019 + " unidades";
  }
  document.getElementById("v2020").addEventListener("input", myFunctionv2020);

  function myFunctionv2020() {
    let ventas2020 = document.getElementById("v2020").value;
    document.getElementById("demov2020").innerHTML = "Sus ventas en 2020 fueron $" + ventas2020;
  }

  document.getElementById("u2020").addEventListener("input", myFunctionu2020);

  function myFunctionu2020() {
    let unidades2020 = document.getElementById("u2020").value;
    document.getElementById("demou2020").innerHTML = "Sus ventas en 2020 fueron " + unidades2020 + " unidades";
  }



const inflacion = 0.361;

$(".boton").click(function ejecutar() 
{

localStorage.setItem('dato', v2020.value);
let recuperar =  localStorage.getItem('dato');
console.log(recuperar);

function ventaNeta2019(){return document.getElementById("v2019").value * 1};
function ventaNeta2020(){return document.getElementById("v2020").value * 1}

function variacion1()
{return (ventaNeta2020()) - (ventaNeta2019());}


function variacion2()
{return (variacion1()) / (ventaNeta2019());}

let variacionVentasReal = (variacion2()-parseFloat(inflacion))*100;
let variacionVentasRealRedondeo = Math.round(variacionVentasReal);

let resultadoVentaReal = document.createElement('div');

let img = document.createElement ("img");
img.src = "fotos/graficosuba.jpg";
img.alt = "Suba";
let img2 = document.createElement ("img");
img2.src = "fotos/graficobaja.jpg";
img2.alt = "Baja";

let p = document.createElement('p');
p.innerText = (`La facturación en 2020 varió en  ${variacionVentasRealRedondeo} %`);
resultadoVentaReal.appendChild (p);
if(variacionVentasRealRedondeo > 0){resultadoVentaReal.appendChild (img);};
if(variacionVentasRealRedondeo <= 0){resultadoVentaReal.appendChild (img2);};
document.body.appendChild (resultadoVentaReal);

let variacionUnidades = parseInt(document.getElementById("u2020").value) - parseInt(document.getElementById("u2019").value);

let resultadoVentaUnidades = document.createElement("div");
let img3 = document.createElement ("img");
img3.src = "fotos/graficosuba.jpg";
img3.alt = "Suba";
let img4 = document.createElement ("img");
img4.src = "fotos/graficobaja.jpg";
img4.alt = "Baja";

let p1 = document.createElement('p');
p1.innerText = (`Las ventas en 2020 variaron en  ${variacionUnidades} unidades`);
resultadoVentaUnidades.appendChild (p1);
if(variacionUnidades > 0){resultadoVentaUnidades.appendChild (img3);};
if(variacionUnidades <= 0){resultadoVentaUnidades.appendChild (img4);};
document.body.appendChild (resultadoVentaUnidades);

let variacionUnidadesPorcentaje = (parseInt(variacionUnidades) / parseInt(document.getElementById("u2019").value))*100;
let variacionVentasUnidadesPorcentajeRedondeo = Math.round(variacionUnidadesPorcentaje);
let resultadoVentaUnidadesPorcentaje = document.createElement("div");

let img5 = document.createElement ("img");
img5.src = "fotos/graficosuba.jpg";
img5.alt = "Suba";
let img6 = document.createElement ("img");
img6.src = "fotos/graficobaja.jpg";
img6.alt = "Baja";

let p2 = document.createElement('p');
p2.innerText = (`Las ventas en 2020 variaron un  ${variacionVentasUnidadesPorcentajeRedondeo} % en unidades`);
resultadoVentaUnidadesPorcentaje.appendChild (p2);
if(variacionVentasUnidadesPorcentajeRedondeo > 0){resultadoVentaUnidadesPorcentaje.appendChild (img5);};
if(variacionVentasUnidadesPorcentajeRedondeo <= 0){resultadoVentaUnidadesPorcentaje.appendChild (img6);};
document.body.appendChild (resultadoVentaUnidadesPorcentaje);

document.body.appendChild (resultadoVentaUnidadesPorcentaje);

resultadoVentaReal.setAttribute("id", "monto");
resultadoVentaUnidades.setAttribute("id", "unidades");
resultadoVentaUnidadesPorcentaje.setAttribute("id", "unidades");
img2.setAttribute("id", "img2");
img.setAttribute("id", "img");
img3.setAttribute("id", "img");
img4.setAttribute("id", "img2");  
img5.setAttribute("id", "img");
img6.setAttribute("id", "img2");  
});


