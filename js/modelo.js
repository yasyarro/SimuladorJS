$(document).ready(function(){
    console.log ("DOM ok");
  });

$(".tituloInicio").fadeIn(500);
$(".tituloInicio").animate({  left:'250px',
                        height:'130px',
                        width:'700px'   }, //1er parámetro propiedades
                        "fast",            //2do parámetro duración 
                        function(){        //3er parámetro callback
                            console.log("final de animación");
                        });

const URLGET = "https://www.dolarsi.com/api/api.php?type=valoresprincipales"
 $.get(URLGET, function (respuesta, estado) {
 if(estado === "success"){
 let misDatos = respuesta;
 for (const dato of misDatos) {
 if(dato.casa.nombre == "Dolar Oficial")
 $(".usdAPI2").append(`
 <p><img src="fotos/money.png" alt="usd" width="25" height="25"> ${dato.casa.nombre} a la fecha</p>
<p>COMPRA ${dato.casa.compra}</p>
<p>VENTA ${dato.casa.venta}</p>
 `);
 if(dato.casa.nombre == "Dolar Blue")
 $(".usdAPI3").append(`
 <p><img src="fotos/money.png" alt="usd" width="25" height="25"> ${dato.casa.nombre} a la fecha</p>
<p>COMPRA ${dato.casa.compra}</p>
<p>VENTA ${dato.casa.venta}</p>
 `);
 if(dato.casa.nombre == "Dolar turista")
 $(".usdAPI4").append(`
 <p><img src="fotos/money.png" alt="usd" width="25" height="25"> ${dato.casa.nombre} a la fecha</p>
<p>COMPRA ${dato.casa.compra}</p>
<p>VENTA ${dato.casa.venta}</p>
 `);
 if(dato.casa.nombre == "Dolar Contado con Liqui")
 $(".usdAPI5").append(`
 <p><img src="fotos/money.png" alt="usd" width="25" height="25"> ${dato.casa.nombre}</p>
<p>COMPRA ${dato.casa.compra}</p>
<p>VENTA ${dato.casa.venta}</p>
 `);
 if(dato.casa.nombre == "Dolar Bolsa")
 $(".usdAPI6").append(`
 <p><img src="fotos/money.png" alt="usd" width="25" height="25"> ${dato.casa.nombre} a la fecha</p>
<p>COMPRA ${dato.casa.compra}</p>
<p>VENTA ${dato.casa.venta}</p>
 `);
                                
 }  
  }
});