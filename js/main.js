$('#btn-request1').click(function(){
	$.fancybox.open({
		src: '#hidden-request',
		type: 'inline'
	});
});
$('#btn-advice1').click(function(){
	$.fancybox.open({
		src: '#hidden-advice',
		type: 'inline'
	});
});
$('#btn-request2').click(function(){
	$.fancybox.open({
		src: '#hidden-request',
		type: 'inline'
	});
});
$('#btn-advice2').click(function(){
	$.fancybox.open({
		src: '#hidden-advice',
		type: 'inline'
	});
});
$('#btn-question').click(function(){
	$.fancybox.open({
		src: '#hidden-question',
		type: 'inline'
	});
});
$(document).ready(function(){
    $("#stages-slider").owlCarousel({
        margin:75,
        dots:true,
        responsive:{
            768:{
                items:3
            },
            480:{
                items:2
            },
            320:{
                items:1
            },
        },
    });
    $("#what-slider").owlCarousel({
        margin:75,
        dots:true,
        responsive:{
            992:{
                items:4
            },
            768:{
                items:3
            },
            480:{
                items:2
            },
            320:{
                items:1
            },
        },
    });
    $("#stations-slider").owlCarousel({
        margin:75,
        items:1,
        dots:true,
    });
});

$(".faq__item .faq__item-text").hide().prev().click(function() {
    $(this).parents(".faq__item").find(".faq__item-text").not(this).slideUp().prev().removeClass("active");
    $(this).next().not(":visible").slideDown().prev().addClass("active");
});