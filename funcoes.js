function load() {
    
}

var lastScrollTop = 0;
$(window).scroll(function(event){
   
    var st = $(this).scrollTop();
    if(st == 0) {
        $("#nav_principal").slideUp();
      
    }else{
     
        
        $("#nav_principal").slideDown();

    }
});



