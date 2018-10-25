
$(document).ready(function () {
	
	var $title =$('.thaifoodtitle');

	$title.on('click',function(e){
		$('.food-info').hide();

	});


	var $food = $('li.food_list');

	$food.on('click', function(e) {
		$('.food-info').hide();

		var $target = $(e.target);

		var dataType = $target.data('type');
		
		$('.' + dataType).show(500);

	});
});