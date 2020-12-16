var namepromet=prompt("What is your name?");
alert("Hello " + namepromet);

var birds=prompt("Do you love birds?");
birdslove(birds);
function birdslove(birds){
    if (birds == 'yes'){
        alert ("welcome to your website");
     }if (birds == 'no'){
        alert ("stay with us to become a fan of birds");
    }   
}

var Favourite=prompt("Which type of birds do you prefer?")
FavouriteBird(Favourite);
function FavouriteBird(Favourite){
    if (Favourite == 'bluejay'){
        alert ("That is a beautiful choice");
    } else {
        alert ("That is a good choice");
    }   
}
