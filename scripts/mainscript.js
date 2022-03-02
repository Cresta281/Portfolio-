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
    $('#close_about').hide()
    
})


/* scroll up! */
if (window.matchMedia('(max-width: 767px)').matches){
    $('.scroll_up').css('width','8%')
}if (window.matchMedia('(min-width: 768px)').matches){
    $('.scroll_up').css('width','3%')
    $('.scroll_up').css('height','4%')
    $('.scroll_up').css('padding','0.1rem')
}else {
}
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
    $('#skills_certificates').fadeIn(500)
    $('#certificates').fadeOut(500)

    if (window.matchMedia('(max-width: 767px)').matches) {
        $('html,body').animate({ scrollTop: a + 240},500)
        $('.skills_container_content_column2').css('margin-top','33rem')
        $('#skills_certificates').css('margin-top','30rem')
    }if (window.matchMedia('(min-width: 768px)').matches) {
        $('.skills_container_content_column2').css('margin-top','35rem')
        $('#skills_certificates').css('margin-top','15rem')
        $('html,body').animate({ scrollTop: a + 350},500)
    }if (window.matchMedia('(min-width: 1200px)').matches) {
        $('html,body').animate({ scrollTop: a + 450},500)
        $('#skills_certificates').css('margin-top','25rem')
        $('.skills_container_content_column2').css('margin-top','0rem')
        $('.contact').css('padding-top','37rem')
    }else {

    }
    $('#close_certificates').click(function(){
        $('#skills_certificates').fadeOut(500)
        $('#certificates').fadeIn(500)
        $('.contact').css('margin-top','0')
        if (window.matchMedia('(max-width: 767px)').matches) {
            $('html,body').animate({ scrollTop: a - 20},500)
            $('.skills_container_content_column2').css('margin-top','0rem')
            $('#skills_certificates').css('margin-top','0rem')
        }if (window.matchMedia('(min-width: 768px)').matches) {
            $('html,body').animate({ scrollTop: a - 80},500)
            $('.skills_container_content_column2').css('margin-top','0rem')
        }if (window.matchMedia('(min-width: 1200px)').matches) {
            $('html,body').animate({ scrollTop: a - 150},500)
            $('.contact').css('padding-top','8rem')
        }else {
        }
    
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
/*mobile about button */
if (window.matchMedia('(max-width: 767px)').matches){
$('#hide_button').click(function(){
    $('#hide').show().css('width','200%')
    $('#hide1').show().css('width','200%')
    $('#hide2').show().css('width','200%')
    $('#hide_button').fadeOut(400)
    $('#close_about').show()
    $('.about').css('height','1050px')
})
$('#close_about').click(function() {
    $('#hide').hide()
    $('#hide1').hide()
    $('#hide2').hide()
    $('#hide_button').fadeIn(400)
    $('#close_about').hide()
    $('.about').css('height','550px')
})
}
/* ipad about button */
if (window.matchMedia('(min-width: 768px)').matches){
    $('#hide_button').click(function(){
        $('#hide').show().css('width','130%')
        $('#hide1').show().css('width','130%')
        $('#hide2').show().css('width','200%')
        $('#hide_button').fadeOut(400)
        $('#close_about').show()
        $('.about').css('height','900px')
    })
    $('#close_about').click(function() {
        $('#hide').hide()
        $('#hide1').hide()
        $('#hide2').hide()
        $('#hide_button').fadeIn(400)
        $('#close_about').hide()
        $('.about').css('height','550px')
    })
}