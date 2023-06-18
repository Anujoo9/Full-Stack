// Selectors 

const h1 = $('h1');
// console.log(h1);

// h1.css('color', 'red');


const favMovies = $('.fav-movies');
// console.log(favMovies);


$('.fav-movies').first().css('color', 'pink')
$('.fav-movies').last().css('color', 'pink')

// for (let movies of favMovies){
//     $(movies).css('color','lightgreen');
// }

// $('#special').css('border','2px solid black');

// console.log($('h1').text());
$('h1').text("Manhoos");

$('#special').html('<em>Hue HUe</em>')
$('#special').text('<em>Hue HUe</em>')


$('.h1').attr('class','heading');

$('.para').first().addClass('paragraph')
// $('.para').addClass('paragraph')


// $('.para').removeClass('para')

// $('.p').first().hasClass('para')


// console.log($('li').parent())
// console.log($('li').parents()) // for all 
// console.log($('li:first-child').next()) 

// create element 
const h2 = $('<h2>');
console.log(h2)

h2.text('This is h2 BOi');

$('h1').after(h2);
$('h1').before(h2);

$('ul').append($('<li>').text("fun 2"))

$('ul li:nth-child(4)').remove();

$('input[type ="text"]').on('keydown',(e)=>{
    if(e.which === 13){
        console.log("You pressedn enter ")
    }
})