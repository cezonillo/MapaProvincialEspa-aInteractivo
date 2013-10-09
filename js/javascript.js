$(document).ready(function(){
	
	/******************************************************************************************************************************/
	/*Al pasar por encima de cada provincia (o estar a foco), cogemos la clase de su elemento area correspondiente mediante jQuery.
	  Esa clase lleva asociada una imagen que hará que se muestre la provincia realtada.
	  Al salir de la provincia con el puntero, reseteamos la imagen transparente original
	 ******************************************************************************************************************************/		
	 
	/******Eventos al pasar con el ratón por cada provincia y al estar a foco******/ 
	$('area').on('mouseenter', function(){		
		/***seleccionamos el atributo class que nos indica la provincia en la que nos encontramos****/
		var provincia;		
		provincia = $(this).attr('class');		
		/***resaltamos la provincia****/
		$('.spain').attr('src', './img/'+provincia+'.png')	
		$('#listadoProvincias li a.'+provincia).addClass('light')	
		
		/****Aquí gestionaremos cualquier funcionalidad adicional relacionada con el hover del elemento****/				
	
	}).on('mouseleave', function(){		
		/***reseteamos el mapa original****/
		$('.spain').attr('src', './img/transparente.png')	
		$('#listadoProvincias li a').removeClass('light')
	
	}).on('focus', function(){		
		/***seleccionamos el atributo class que nos indica la provincia en la que nos encontramos****/
		var provincia;		
		provincia = $(this).attr('class');		
		/***resaltamos la provincia****/
		$('.spain').attr('src', './img/'+provincia+'.png')	
		$('#listadoProvincias li a.'+provincia).addClass('light')		
		
		/****Aquí gestionaremos cualquier funcionalidad adicional relacionada con el el elemento cuando está a foco****/	
	
	}).on('blur', function(){		
		/***reseteamos el mapa original****/
		$('.spain').attr('src', './img/transparente.png')	
		$('#listadoProvincias li a').removeClass('light')
	
	}).qtip({ // Añadimos tooltip al pasar encima de la provincia: ver documentación sobre las opciones del tooltip en http://qtip2.com/options
	
			content: {
				text: $(this).attr('class')
			},
			position: {
			   	 my: 'bottom center',  
       			 target: 'mouse'
				 
			},
			show: {
     		   event: 'mouseenter focus'
    		},
			hide: {
		        event: 'blur mouseleave'/*,
				target: $('area')*/
    		},
			style: {
     		   classes: 'qtip-bootstrap qtip-shadow'
    		}
			

		})		
	
	
	
	
	/*****************************************************************************************/
	/*Normalmente desearemos realizar alguna acción sobre el evento click, al pulsar "intro"*/
	/****************************************************************************************/
	
	/****gestionamos el evento onclick y keypress****/
	$('area').on('click', function(){		
		/***seleccionamos el atributo class que nos indica la provincia en la que nos encontramos****/
		var provincia;		
		provincia = $(this).attr('class');		
		
				
		/****Aquí gestionaremos cualquier funcionalidad adicional relacionada con el el elemento cuando se pincha con el raton****/	
		var mensaje = $("a."+provincia).text();
		alert("Has seleccionado la provincia: "+ mensaje)
	
	}).on('keypress', function(event){	
		
		/****comprobamos que pulsamos intro***/
		if(event.which == 13){
	
			/***seleccionamos el atributo class que nos indica la provincia en la que nos encontramos****/
			var provincia;		
			provincia = $(this).attr('class');		
						
			/****Aquí gestionaremos cualquier funcionalidad adicional relacionada con el el elemento cuando se pincha con el raton****/	
			var mensaje = $("a."+provincia).text();
			alert("Has seleccionado la provincia: "+ mensaje)
		}
	
	})
	
	
	
	/***************************************************************************************/
	/*El código se replica si mantenemos los listados textuales de las provincias
	/***************************************************************************************/
	
	/******Eventos al pasar con el ratón por cada provincia y al estar a foco******/ 
	$('#listadoProvincias a').on('mouseenter', function(){		
		/***seleccionamos el atributo class que nos indica la provincia en la que nos encontramos****/
		var provincia;		
		provincia = $(this).attr('class');		
		/***resaltamos la provincia****/
		$('.spain').attr('src', './img/'+provincia+'.png')	
		$('#listadoProvincias li a.'+provincia).addClass('light')	
		
		/****Aquí gestionaremos cualquier funcionalidad adicional relacionada con el hover del elemento****/	
	
	}).on('mouseleave', function(){		
		/***reseteamos el mapa original****/
		$('.spain').attr('src', './img/transparente.png')	
		$('#listadoProvincias li a').removeClass('light')
	
	}).on('focus', function(){		
		/***seleccionamos el atributo class que nos indica la provincia en la que nos encontramos****/
		var provincia;		
		provincia = $(this).attr('class');		
		/***resaltamos la provincia****/
		$('.spain').attr('src', './img/'+provincia+'.png')	
		$('#listadoProvincias li a.'+provincia).addClass('light')		
		
		/****Aquí gestionaremos cualquier funcionalidad adicional relacionada con el el elemento cuando está a foco****/	
	
	}).on('blur', function(){		
		/***reseteamos el mapa original****/
		$('.spain').attr('src', './img/transparente.png')	
		$('#listadoProvincias li a').removeClass('light')
	
	}).qtip({ // Añadimos tooltip al pasar encima de la provincia: ver documentación sobre las opciones del tooltip en http://qtip2.com/options
	
			content: {
				text: $(this).attr('class')
			},
			position: {
			   	 my: 'bottom center',  
       			 target: 'mouse'
				 
			},
			show: {
     		   event: 'mouseenter focus'
    		},
			hide: {
		        event: 'blur mouseleave'/*,
				target: $('area')*/
    		},
			style: {
     		   classes: 'qtip-bootstrap qtip-shadow'
    		}
			

		})		
		
	
	
	
	
	/****gestionamos el evento onclick y keypress****/
	$('#listadoProvincias a').on('click', function(){		
		/***seleccionamos el atributo class que nos indica la provincia en la que nos encontramos****/
		var provincia;		
		provincia = $(this).attr('class');		
		
		
		/****Aquí gestionaremos cualquier funcionalidad adicional relacionada con el el elemento cuando se pincha con el raton****/	
		var mensaje = $(this).text();
		alert("Has seleccionado la provincia: "+ mensaje)
	
	}).on('keypress', function(event){	
		
		/****comprobamos que pulsamos intro***/
		if(event.which == 13){
	
			/***seleccionamos el atributo class que nos indica la provincia en la que nos encontramos****/
			var provincia;		
			provincia = $(this).attr('class');	
			
			/****Aquí gestionaremos cualquier funcionalidad adicional relacionada con el el elemento cuando se pincha con el raton****/	
			
			var mensaje = $(this).text();
			alert("Has seleccionado la provincia: "+ mensaje)	
		}
	
	})
	
	
	
	

})