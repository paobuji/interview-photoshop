$(function(){
    $('.box2').click(function(){
        $('.box1').hide();
        $(this).next('.box1').show();

        $(this).addClass('active').siblings().removeClass('active')
    })


    $('.bodyleft>div').click(function(){

        $(this).addClass('active').siblings().removeClass('active')

        let index = $(this).index();
        $('.bodymid_item').eq(index).show().siblings().hide();

    })


    $('.footer>div').click(function(){
        $(this).addClass('active').siblings().removeClass('active')

        let index = $(this).index();

        $('.footer_content').eq(index).show().siblings().hide();
    })
})

