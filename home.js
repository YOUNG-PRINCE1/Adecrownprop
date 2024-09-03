$(document).ready(function() {


    new Typed ("#design",{
        strings: [
            "Deals with all kind of properties",
            "Buying and selling",
            "Renting and subletting of properties",
            "have your home with us at affordable prices",
            "years of experience",
            "contact me now",
        ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
            
    })

});

try{
    const userAge = prompt("Enter your age:");

    if (userAge < 25){
        alert("You must be 25 above to enter this site");
    }else{
        alert("wellcome to Adecrown property ");
    }
}catch(error){
    console.log(error);
}