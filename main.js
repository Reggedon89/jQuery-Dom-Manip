$(document).ready(()=>{
   
    $("button").on('click', function(e){
        $(".content").removeClass('show')
        $(this).siblings(".content").addClass("show")
    })

})