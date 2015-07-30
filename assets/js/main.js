$(function(){
    $('.navicon').click(function(){
        $('.main-container').toggleClass( "turn-left" );
        $(this).toggleClass( "hold" ); 
    });
});