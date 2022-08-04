$('h1').css('color', 'red')

// Adding event listeners

$('h1').click(function(){
   $('h1').css('color', 'black'); 
})


$('button').click(function(){
    console.log('I got clicked');
})