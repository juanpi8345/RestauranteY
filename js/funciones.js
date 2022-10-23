var alto_menu;

new WOW().init();

var acciones = {

	listo:function(){
		$("#cabecera .container .bars").click(acciones.desplazar_menu);
		$("#cabecera nav a").click(acciones.link);
		$("#banner .container a").click(acciones.prox_seccion);
		$("#carta a").click(acciones.abrir_imagen);
		$("#postres a").click(acciones.abrir_imagen);
		$(".cuerpo-imagen a").click(acciones.cerrar_imagen);
		
		//owl carousel
		$('.owl-carousel').owlCarousel({
    		loop:true,
   			margin:10,
		    nav:true,
		    responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:1
		        },
		        1000:{
		            items:1
		        }
		    }
		})

		},

	

	desplazar_menu:function(e){
		e.preventDefault();
		$("#cabecera .menu").toggleClass("abierto");
		$("body").toggleClass("abierto");
		$(this).find("i").toggleClass("fa-close");
	},

	cerrar_menu:function(){
		$("#cabecera nav").removeClass("abierto");
		$("body").removeClass("abierto");
		$("#cabecera").find('i').removeClass("fa-close");;
	},

	oscurecer_menu:function(){
		alto_menu = $("header").innerHeight();

		if($(window).scrollTop() > alto_menu){
			$("header").addClass("fondo");
		}else{
			$("header").removeClass("fondo");
		}
	},


	abrir_imagen:function(e){
		e.preventDefault();
		var src = $(this).closest(".contenedor-imagen").find("img").attr("src");

		$(".cuerpo-imagen").find("img").attr("src",src);

		$(".trama").fadeIn("slow", function() {
			$(".cuerpo-imagen").fadeIn("fast");
		});

		$("body").addClass("abierto");
	},

	cerrar_imagen:function(e){
		e.preventDefault();
		$(".cuerpo-imagen").fadeOut("slow",function(){
			$(".trama").fadeOut("fast");
		})

		$("body").removeClass("abierto");

	},

	precarga:function(){
		$(".trama2").fadeOut("slow");
		$("body").removeClass("abierto");
		$("body").removeClass("desaparecido");
	},


}

$(window).scroll(acciones.oscurecer_menu);

$(document).ready(acciones.listo);

$(document).ready(acciones.precarga);


