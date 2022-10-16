var alto_menu;

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

	link:function(){
		var link = this.hash;
		var url = $(this).attr("href");
		if($(link).length > 0){
			acciones.animar_link(link);
			acciones.cerrar_menu();
		}else{
			window.location.url = url;
		}

	},

	animar_link:function(link){
		$("html,body").animate({
			"scrollTop" : $(link).offset().top
		}, "slow")
	},

	prox_seccion:function(){
		var posicion = $(this).closest("section").next("section").offset().top;
		$("html,body").animate({
			"scrollTop" : posicion
		}, "slow");
	},

	abrir_imagen:function(e){
		e.preventDefault();
		var src = $(this).closest(".contenedor-imagen").find("img").attr("src");

		$(".cuerpo-imagen").find("img").attr("src",src);

		$(".trama").fadeIn("slow", function() {
			$(".cuerpo-imagen").fadeIn("fast");
		});
	},

	cerrar_imagen:function(e){
		e.preventDefault();
		$(".cuerpo-imagen").fadeOut("slow",function(){
			$(".trama").fadeOut("fast");
		})

	},


}

$(window).scroll(acciones.oscurecer_menu);

$(document).ready(acciones.listo);


