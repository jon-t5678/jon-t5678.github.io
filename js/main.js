$(document).ready(function (){
	$("nav a").click(function(){
		var link = $(this#content).attr("href");
		$("#content").load(link);
		return false;
	});
});