$(function () {
    $('.faq_list .li').on('click',function () {
        $(this).addClass('show').siblings().removeClass('show')
        let height = $(this).find('.li-cont p').height()
    })
    $('.makes-li .li').on('mouseenter',function () {
        $(this).addClass('active').siblings().removeClass('active')
        let img = $(this).data('img')
        $(this).parents('.makes-li').find('.makes_img').hide()
        $('.'+img).show()
    })
})