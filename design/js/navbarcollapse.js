let hamburger = document.getElementsByClassName('hamburger')[0];
let cross = document.getElementsByClassName('cross')[0];
let collapsed_nav = document.getElementsByClassName('navbar-collapsed')[0];
let main_img = document.getElementsByClassName('body-main-image-mob')[0];

hamburger.addEventListener( "click" , function() {    
    cross.style.display = "block";
    collapsed_nav.style.display = "block";
    hamburger.style.display = "none";
    main_img.style.display = "none";
    // document.body.style.backgroundColor = "rgba(0,0,0,0.2)";
    body.style.ovewflowY = "hidden";
});

cross.addEventListener( "click" , function() {
    cross.style.display = "none";
    collapsed_nav.style.display = "none";
    hamburger.style.display = "block";
    main_img.style.display = "block";
    document.body.style.backgroundColor = "white";
});