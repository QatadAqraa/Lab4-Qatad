//var namepromet=prompt("What is your name?");
//alert("Hello " + namepromet);
//var birds=prompt("Do you love birds?");
//birdslove(birds);
//function birdslove(birds){
  //  if (birds == 'yes'){
    //    alert ("welcome to your website");
     //}if (birds == 'no'){
       // alert ("stay with us to become a fan of birds");
    //}   
//}

//var Favourite=prompt("Which type of birds do you prefer?")
//FavouriteBird(Favourite);
//function FavouriteBird(Favourite){
  //  if (Favourite == 'bluejay'){
    //    alert ("That is a beautiful choice");
    //} else {
      //  alert ("That is a good choice");
    //}   
//}
let getItem = function() {
    let userInput = prompt('please enter what you need ?');
    let item = '';
  
    while(userInput !== 'birds') {
      userInput = prompt('Please enter birds');
    }
  
    if(userInput === 'birds') {
      item = '<img src="image/202984001.jpg" />';
    }
    return item;
  }
  
  let howMany = function() {
    let count = prompt('How many do you want ?');
  
    while(count === '' || isNaN(count)) {
      count = prompt('Please enter a number!!');
    }
  
    return count;
  }
  let showOrder = function() {
    let item = getItem();
    let total = howMany();
    let result = '';
  
    for(let i = 0; i < total; i++) {
      result = result + '<p>Model #' + i + ' ' + item + '</p>';
    }
    return result;
  }