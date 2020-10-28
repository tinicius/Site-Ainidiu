function load() {
    console.log("Hello");
    document.getElementById("nav_principal").style.display = "none";
}

var lastScrollTop = 0;
$(window).scroll(function(event){
   
    var st = $(this).scrollTop();

    if(st == 0) {
        $("#nav_principal").slideUp("fast");
       
    }else{
        $("#nav_principal").slideDown("slow");
      
    }
});
