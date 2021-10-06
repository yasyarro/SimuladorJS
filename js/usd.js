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
  
   
    let recuperar =  localStorage.getItem('dato');
    
    const USD2020 = 130.92
      document.getElementById("demov2020").innerHTML = ("Sus ventas en 2020 fueron $" + recuperar);
      document.getElementById("demov2020Usd").innerHTML = ("Sus ventas en 2020 fueron USD" + parseInt(recuperar / USD2020)+ " tomando un dolar informal promedio 2020 de $130.92");
    let demov2020Usd = parseInt(parseInt(recuperar / USD2020));
    console.log(demov2020Usd);                      

        const URLGET = "https://www.dolarsi.com/api/api.php?type=valoresprincipales"
        $.get(URLGET, function (respuesta, estado) {
            if(estado === "success"){
              let misDatos = respuesta;
              for (const dato of misDatos) {
                if(dato.casa.nombre == "Dolar Blue")
                $(".usdAPI").append(`
                                     <p><img src="fotos/money.png" alt="usd" width="25" height="25"> ${dato.casa.nombre} a la fecha</p>
                                     <p>${dato.casa.venta}</p>
                                    
                                    `);
                
                                }  
                            }
                      });

    $(".boton").click(function ejecutar()
    {
    const URLGET1 = "https://www.dolarsi.com/api/api.php?type=valoresprincipales"
    $.get(URLGET1, function (respuesta, estado) {
             if(estado === "success"){
            let misDatos = respuesta;
            for (const dato of misDatos) {
            if(dato.casa.nombre == "Dolar Blue")
            $("#usd2021").append("Sus ventas en 2021 deben ser al menos $ " + (parseInt(demov2020Usd) * parseInt(dato.casa.venta) + " para mentener el valor en USD con respecto a 2020, considerando el tipo de cambio informal a la fecha." ));
           
           

       }  
   }
});
    });     

