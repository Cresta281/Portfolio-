/* Sticky navbar */
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY){
            $('#header').addClass("header")
        }else{
            $('#header').removeClass("header")
        }if(this.scrollY > 500){
            $('#scroll_up').fadeIn(400)
        }else {
            $('#scroll_up').fadeOut(400)
        }
    })
    
})

/* scroll up! */
$('#scroll_up').click(function(){
    $('html').animate({scrollTop: 0});
})
/*typed text*/
var typed = new Typed (".typing",{
    strings: ["Developer", "Psychologyst", "Freelancer", "Writer"],
    typeSpeed: 90,
    backSpeed: 50,
    loop: true
})

/*show/hide certificates */
$('#certificates').click(function(){
    let a = $(window).scrollTop()
    $('#skills_certificates').fadeIn(800)
    $('html,body').animate({ scrollTop: a + 700},800)
    $('#certificates').fadeOut(1000)
    $('.contact').css('margin-top','30rem')

    $('#close_certificates').click(function(){
        $('#skills_certificates').fadeOut(800)
        $('#certificates').fadeIn(800)
        $('.contact').css('margin-top','0')
    
    })
})

/* Fields form */

$('#field1').change(function(){
 $('#input1').addClass('input')

})

$('#field2').change(function(){
 $('#input2').addClass('input')

})

$('#field3').change(function(){
 $('#input3').addClass('input')

})

$('#field4').change(function(){
    $('#input4').addClass('input')

})