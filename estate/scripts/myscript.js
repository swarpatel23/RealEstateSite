$(document).ready(function(){
	var change1=setTimeout(first_phase,"8000");
	var change2=setTimeout(second_phase,"13000");
	var change3=setTimeout(third_phase,"16000");
});
function first_phase()
{
	$("#src-1").attr({"class":"col-12 animation1 overflow-hidden collapse"});
	$("#src-2").attr({"class":"col-12 animation2 overflow-hidden"});
	$("#date-1").css("animation","animation-2-date 2s forwards");
	$("#date-2").css("animation","animation-2-date 3s forwards");
	$("#date-3").css("animation","animation-2-date 3s forwards");
	$("#date-4").css("animation","animation-2-date 4s forwards");
	$("#date-5").css("animation","animation-2-date 4s forwards");
	$("#date-6").css("animation","animation-2-date 5s forwards");
	$("#date-7").css("animation","animation-2-date 7s forwards");	
	$("#correct-mark1").css("animation","animation-2-correct 6s forwards");	
}
function second_phase()
{
	$("#src-2").attr({"class":"col-12 animation2 collapse overflow-hidden"});
	$("#src-3").attr({"class":"col-12 overflow-hidden"});	
	$("#correct-mark").css("animation","animation-3 5s forwards");
	$("#calendar").css("animation","animation-3 5s forwards");
	$("#my-text-date").css("animation", "animation-3-my-text-date 5s forwards");
}
function third_phase()
{
	$("#src-3").attr({"class":"col-12 collapse"});
	$("#src-4").attr({"class":"col-12 overflow-hidden text-center"});	
	$("#my-hand").css("animation","animation-4 2s forwards");
	$("#my-text-hand").css("animation", "animation-4 2s forwards");
}
