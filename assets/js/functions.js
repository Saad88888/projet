$( document ).ready(function() {
	
function nav(){
	
	$('.nav-toggle').click(function(){
		
		$('.nav').toggleClass('open');
		
	});
	
}



function fullSlider(){
 
	$('#full-slide .prev, #full-slide .next').click(function(){
		
		 var $this = $(this),
		 		current = $('.banner').find('.active'),
		 		position = $('.banner').children().index(current),
		 		totalPics = $('.banner').children().length;
				
		 if ($this.hasClass('next')){
			
		 	if (position < totalPics - 1){
		 		$('.active').removeClass('active').next().addClass('active');
		 	}
			
		 	else {	
		 		$('.banner li').removeClass('active').first().addClass('active');
		 	}
			
		 }
		
		 else {
			
		 	if (position === 0){
		 		$('.banner li').removeClass('active').last().addClass('active');
		 	}
			
		 	else {
		 		$('.active').removeClass('active').prev().addClass('active');
		 	}
			
		 }
		
	});

}

document.querySelector('#full-slide .prev, #full-slide .next').click(function(){
		
	var $this = document.querySelector(this),
			current = document.querySelector('.banner').querySelector('.active'),
			position = document.querySelector('.banner').children().index(current),
			totalPics = document.querySelector('.banner').children().length;
		   
	if ($this.classList.contains('next')){
	   
		if (position < totalPics - 1){
			document.querySelector('.active').removeClass('active').nextElementSibling.classList.add('active');
		}
	   
		else {	
			document.querySelector('.banner li').removeClass('active').first().classList.add('active');
		}
	   
	}
   
	else {
	   
		if (position === 0){
			document.querySelector('.banner li').removeClass('active').last().classList.add('active');
		}
	   
		else {
			document.querySelector('.active').removeClass('active').previousElementSibling.classList.add('active');
		}
	   
	}
   
});

nav();



fullSlider();

});
