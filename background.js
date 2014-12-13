$('<a href=#>Sidebar </a>').addClass("sidebarbutton").insertBefore($("#sidebar"));
$('head').append($('<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">'))

// $('.sidebarbutton').hover(function(){
// 	$('.sidebarbutton').css("background-color", "#ff8700")},
// 	function(){
// 	$('.sidebarbutton').css("background-color", "#777")
// 	}
// })
// 

$('.sidebarbutton').hover(function() {
    $( this ).css( "background-color", "#ff8700" );
  }, function() {
    $( this ).css( "background-color", "#777" );
  }
);

$('.sidebarbutton').css({
	"padding": "6px 12px 6px 12px", 
	"display": "inline-block", 
	"margin": "0px 0px 5px 30px", 
	"font-size": "16px", 
	"color": "white", 
	"font-family": "sans-serif", 
	"background-color": "#777", 
	"text-decoration": "none"})


var toggled = true

$('#sidebar').hide();
$('#mainbar').css({marginLeft: "12%"});


$(".sidebarbutton").on("click", function(e){
	e.preventDefault();
 	if (toggled) {
 		$('i', '.sidebarbutton').remove();
 		$('.sidebarbutton').append($('<i class="fa fa-caret-down"></i>'));
 		$("#mainbar").animate({marginLeft: "0%"}, function() {
 			$("#sidebar").slideDown("slow");
 		}); 
 		toggled = false;
 	} else {
 		$('i', '.sidebarbutton').remove();
 		$('.sidebarbutton').append($('<i class="fa fa-caret-up"></i>'));
 		$("#sidebar").slideUp("slow", function() {
 			$("#mainbar").animate({marginLeft: "12%"});
 		});
 		toggled = true;
 	}
})