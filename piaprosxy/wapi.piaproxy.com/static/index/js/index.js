let winheidht =  $(window).height()
$(function () {

    // get_article_views_url
    if(window.location.pathname == '' || window.location.pathname == '/' || window.location.pathname == '/index'){
        get_article_views()
    }
    function get_article_views() {
        get_article_views_url
        let url = $('#get_article_views_url').val()
        let ids = $('#blogIds').val()
        common.ajax_jsonp(url, {ids:ids}, function (data) {
            let obj = JSON.parse(data).ret_data
            for (const k in obj) {
                $('.blogView' + k).html(obj[k])
            }
        });
    }
    

    var swiper = new Swiper('.swiper', {
        speed: 1500,
        navigation: {
            nextEl: '.indexswiper_next1',
            prevEl: '.indexswiper_prev1',
        },
        pagination: {
            el: '.indexswiper_pagination1',
            clickable :true,
        },
        paginationClickable: true,
        loop: true,
        // autoplay: {
        //     delay: 4000,
        //     disableOnInteraction: false,
        // },
    });
    
    $('.boost_nav .li').on('click',function () {
        let navName = $(this).data('class')
        $(this).addClass('active').siblings().removeClass('active')
        $('.boost .boost-list').hide()
        $('.boostList' + navName).show()
        $('.boostList' + navName).addClass('isShow').siblings().removeClass('isShow')
        // $('.boostList' + navName).find('.li').css('top',0)
        $('.boostList' + navName).find('.li').addClass('show')
        $('.boostList' + navName).siblings().find('.li').removeClass('show')
    })
    setTimeout(() => {
        $('.banner').addClass('show')
        if(winheidht > 1300){
            $('.boost .index-h2').addClass('show')
        }
        if(winheidht > 1300){
            $('.step  .index-h2').addClass('show')
        }
    }, 2000);
    
    // let topnum = sessionStorage.getItem('scrTop')
    // if(sessionStorage.getItem('scrTop')){
    //     $(document).scrollTop(topnum*1 +1)
    // }
    let accepts = localStorage.getItem('acceptsty')
    if(accepts){
        $('.lecooken').remove()
    }
    let numscrilstat = 0

    var odostarttype = 0
    var footTedtxtscrol = 0

    $(window).scroll(function (e) {
        indexAnimate(e)
        if(top > 300){
            $('.lecooken').fadeIn()
        }else{
            $('.lecooken').fadeOut()
        }
    })
    // indexAnimate()
    function indexAnimate(e) {
        let top = $(window).scrollTop()
        // sessionStorage.setItem('scrTop',top)
        let height =  $(window).height() - 200;
        if(top> $('.boost .index-h2').offset().top - height - 130){
            $('.boost .index-h2').addClass('show')
        }else{
            $('.boost .index-h2').removeClass('show')
        }
        if($('.boost .isShow .li').length>0 && top> $('.boost .isShow .li').eq(0).offset().top - height - 110){$('.boost .isShow .li').eq(0).addClass('show');}else{$('.boost .isShow .li').eq(0).removeClass('show');}
        if($('.boost .isShow .li').length>1 && top> $('.boost .isShow .li').eq(1).offset().top - height - 110){$('.boost .isShow .li').eq(1).addClass('show');}else{$('.boost .isShow .li').eq(1).removeClass('show');}
        if($('.boost .isShow .li').length>2 && top> $('.boost .isShow .li').eq(2).offset().top - height - 110){$('.boost .isShow .li').eq(2).addClass('show');}else{$('.boost .isShow .li').eq(2).removeClass('show');}
        if($('.boost .isShow .li').length>3 && top> $('.boost .isShow .li').eq(3).offset().top - height - 110){$('.boost .isShow .li').eq(3).addClass('show');}else{$('.boost .isShow .li').eq(3).removeClass('show');}
        if($('.boost .isShow .li').length>4 && top> $('.boost .isShow .li').eq(4).offset().top - height - 110){$('.boost .isShow .li').eq(4).addClass('show');}else{$('.boost .isShow .li').eq(4).removeClass('show');}
        if($('.boost .isShow .li').length>5 && top> $('.boost .isShow .li').eq(5).offset().top - height - 110){$('.boost .isShow .li').eq(5).addClass('show');}else{$('.boost .isShow .li').eq(5).removeClass('show');}
        if($('.boost .isShow .li').length>6 && top> $('.boost .isShow .li').eq(6).offset().top - height - 110){$('.boost .isShow .li').eq(6).addClass('show');}else{$('.boost .isShow .li').eq(6).removeClass('show');}
        if($('.boost .isShow .li').length>7 && top> $('.boost .isShow .li').eq(7).offset().top - height - 110){$('.boost .isShow .li').eq(7).addClass('show');}else{$('.boost .isShow .li').eq(7).removeClass('show');}
        if($('.boost .isShow .li').length>8 && top> $('.boost .isShow .li').eq(8).offset().top - height - 110){$('.boost .isShow .li').eq(8).addClass('show');}else{$('.boost .isShow .li').eq(8).removeClass('show');}
        if($('.boost .isShow .li').length>9 && top> $('.boost .isShow .li').eq(9).offset().top - height - 110){$('.boost .isShow .li').eq(9).addClass('show');}else{$('.boost .isShow .li').eq(9).removeClass('show');}
        if($('.boost .isShow .li').length>10 && top> $('.boost .isShow .li').eq(10).offset().top - height - 110){$('.boost .isShow .li').eq(10).addClass('show');}else{$('.boost .isShow .li').eq(10).removeClass('show');}
        if($('.boost .isShow .li').length>11 && top> $('.boost .isShow .li').eq(11).offset().top - height - 110){$('.boost .isShow .li').eq(11).addClass('show');}else{$('.boost .isShow .li').eq(11).removeClass('show');}

        // if(top> $('.int_li1').offset().top - height && top <= $('.int_li1').offset().top + $('.int_li1').height() - 100){
        //     $('.int_li1').addClass('show');
        //     $('.int_li1').find('.img1').addClass('animate__animated animate__fadeInRightMin').css({'animation-duration': '1500ms','animation-delay':'0ms'});
        //     $('.int_li1').find('.img2').addClass('animate__animated animate__fadeInLeftMin').css({'animation-duration': '1500ms','animation-delay':'0ms'});
        //     $('.int_li1').find('.index-h2').addClass('animate__animated animate__fadeInUpMin').css({'animation-duration': '1500ms','animation-delay':'0ms'});
        //     $('.int_li1').find('.int1-charac').addClass('animate__animated animate__fadeInUpMin').css({'animation-duration': '1500ms','animation-delay':'0ms'});
        //     if(odostarttype == 0){
        //         let odo1num = 180,
        //         odo2num = 6500,
        //         odo3num = 50
        //         // var odo1 = new Odometer('.Odometer1',{
        //         //     num : odo1num,
        //         // });
        //         // var odo2 = new Odometer('.Odometer2',{
        //         //     num : odo2num,
        //         // });
        //         // var odo3 = new Odometer('.Odometer3',{
        //         //     num : odo3num,
        //         // });
        //         // odo1.update(odo1num)
        //         // odo2.update(odo2num)
        //         // odo3.update(odo3num)
        //         odostarttype = 1
        //     }
        // }else{
        //     odostarttype = 0
        //     $('.int_li1').removeClass('show');
        //     $('.int_li1').find('.img1').removeClass('animate__animated animate__fadeInRightMin').css({'animation-duration': '0ms','animation-delay':'0ms'});
        //     $('.int_li1').find('.img2').removeClass('animate__animated animate__fadeInLeftMin').css({'animation-duration': '0ms','animation-delay':'0ms'});
        //     $('.int_li1').find('.index-h2').removeClass('animate__animated animate__fadeInUpMin').css({'animation-duration': '0ms','animation-delay':'0ms'});
        //     $('.int_li1').find('.int1-charac').removeClass('animate__animated animate__fadeInUpMin').css({'animation-duration': '0ms','animation-delay':'0ms'});
        // }
        // if(top> $('.int_li2').offset().top - height && top <= $('.int_li2').offset().top + $('.int_li2').height() - 100){
        //     $('.int_li2').addClass('show');
        //     $('.int_li2').find('.index-h2').addClass('animate__animated animate__fadeInUpMin').css({'animation-duration': '1500ms','animation-delay':'0ms'});
        //     $('.int_li2').find('.int2-subtit').addClass('animate__animated animate__fadeInUpMin').css({'animation-duration': '1500ms','animation-delay':'0ms'});
        //     $('.int_li2').find('.int2-ul .it2li1').addClass('animate__animated animate__fadeInLeftMin').css({'animation-duration': '1500ms','animation-delay':'500ms'});
        //     $('.int_li2').find('.int2-ul .it2li2').addClass('animate__animated animate__fadeInRightMin').css({'animation-duration': '1500ms','animation-delay':'500ms'});
        // }else{
        //     $('.int_li2').removeClass('show');
        //     $('.int_li2').find('.index-h2').removeClass('animate__animated animate__fadeInUpMin').css({'animation-duration': '0ms','animation-delay':'0ms'});
        //     $('.int_li2').find('.int2-subtit').removeClass('animate__animated animate__fadeInUpMin').css({'animation-duration': '0ms','animation-delay':'0ms'});
        //     $('.int_li2').find('.int2-ul .it2li1').removeClass('animate__animated animate__fadeInLeftMin').css({'animation-duration': '0ms','animation-delay':'0ms'});
        //     $('.int_li2').find('.int2-ul .it2li2').removeClass('animate__animated animate__fadeInRightMin').css({'animation-duration': '0ms','animation-delay':'0ms'});
        // }
        if(top> $('.int_brows').offset().top - height && top <= $('.int_brows').offset().top + $('.int_brows').height() - 100){
            $('.int_brows').addClass('show');
            $('.int_brows').find('.tit').addClass('animate__animated animate__fadeInUpMin').css({'animation-duration': '1500ms','animation-delay':'500ms'});
            $('.int_brows').find('.map-box').addClass('animate__animated animate__fadeInUpMin').css({'animation-duration': '1500ms','animation-delay':'500ms'});
            $('.int_brows').find('.more-loca').addClass('animate__animated animate__fadeInUpMin').css({'animation-duration': '1500ms','animation-delay':'500ms'});
            $('.int_brows').find('.lib-ul .libuli1').addClass('animate__animated animate__fadeInLeftMin').css({'animation-duration': '1500ms','animation-delay':'500ms'});
            $('.int_brows').find('.lib-ul .libuli2').addClass('animate__animated animate__fadeInUpMin').css({'animation-duration': '1500ms','animation-delay':'500ms'});
            $('.int_brows').find('.lib-ul .libuli3').addClass('animate__animated animate__fadeInRightMin').css({'animation-duration': '1500ms','animation-delay':'500ms'});
        }else{
            $('.int_brows').removeClass('show');
            $('.int_brows').find('.tit').removeClass('animate__animated animate__fadeInUpMin').css({'animation-duration': '0ms','animation-delay':'0ms'});
            $('.int_brows').find('.map-box').removeClass('animate__animated animate__fadeInUpMin').css({'animation-duration': '0ms','animation-delay':'0ms'});
            $('.int_brows').find('.more-loca').removeClass('animate__animated animate__fadeInUpMin').css({'animation-duration': '0ms','animation-delay':'0ms'});
            $('.int_brows').find('.lib-ul .libuli1').removeClass('animate__animated animate__fadeInLeftMin').css({'animation-duration': '0ms','animation-delay':'0ms'});
            $('.int_brows').find('.lib-ul .libuli2').removeClass('animate__animated animate__fadeInUpMin').css({'animation-duration': '0ms','animation-delay':'0ms'});
            $('.int_brows').find('.lib-ul .libuli3').removeClass('animate__animated animate__fadeInRightMin').css({'animation-duration': '0ms','animation-delay':'0ms'});
        }
        if(top> $('.int_li3').offset().top - height && top <= $('.int_li3').offset().top + $('.int_li3').height()){
            $('.int_li3').addClass('show');
            $('.int_li3').find('.int3-l h6').addClass('animate__animated animate__fadeInUpMin').css({'animation-duration': '1500ms','animation-delay':'0ms'});
            $('.int_li3').find('.int3-l .index-h2').addClass('animate__animated animate__fadeInUpMin').css({'animation-duration': '1500ms','animation-delay':'0ms'});
            $('.int_li3').find('.int3-l .l-li').addClass('animate__animated animate__fadeInUpMin').css({'animation-duration': '1500ms','animation-delay':'600ms'});
            $('.int_li3').find('.int3-l .ipchanger-btnbox').addClass('animate__animated animate__fadeInUpMin').css({'animation-duration': '1500ms','animation-delay':'600ms'});
            $('.int_li3').find('.int3-r .bg').addClass('animate__animated animate__fadeInLeft1').css({'animation-duration': '1500ms','animation-delay':'600ms'});
            $('.int_li3').find('.int3-r .img1').addClass('animate__animated animate__fadeInUpMin').css({'animation-duration': '1500ms','animation-delay':'600ms'});
            $('.int_li3').find('.int3-r .img2').addClass('animate__animated animate__fadeInDownMin').css({'animation-duration': '1500ms','animation-delay':'600ms'});
            $('.int_li3').find('.int3-r .img3').addClass('animate__animated animate__fadeInDownMin').css({'animation-duration': '1500ms','animation-delay':'600ms'});
        }else{
            $('.int_li3').removeClass('show');
            $('.int_li3').find('.int3-l h6').removeClass('animate__animated animate__fadeInUpMin').css({'animation-duration': '0ms','animation-delay':'0ms'});
            $('.int_li3').find('.int3-l .index-h2').removeClass('animate__animated animate__fadeInUpMin').css({'animation-duration': '0ms','animation-delay':'0ms'});
            $('.int_li3').find('.int3-l .l-li').removeClass('animate__animated animate__fadeInUpMin').css({'animation-duration': '0ms','animation-delay':'600ms'});
            $('.int_li3').find('.int3-l .ipchanger-btnbox').removeClass('animate__animated animate__fadeInUpMin').css({'animation-duration': '0ms','animation-delay':'600ms'});
            $('.int_li3').find('.int3-r .bg').removeClass('animate__animated animate__fadeInLeft1').css({'animation-duration': '0ms','animation-delay':'600ms'});
            $('.int_li3').find('.int3-r .img1').removeClass('animate__animated animate__fadeInUpMin').css({'animation-duration': '0ms','animation-delay':'600ms'});
            $('.int_li3').find('.int3-r .img2').removeClass('animate__animated animate__fadeInDownMin').css({'animation-duration': '0ms','animation-delay':'600ms'});
            $('.int_li3').find('.int3-r .img3').removeClass('animate__animated animate__fadeInDownMin').css({'animation-duration': '0ms','animation-delay':'600ms'});
        }
        if(top> $('.int_li4 .int4-r').offset().top - height && top <= $('.int_li4 .int4-r').offset().top + 400){
            $('.int_li4 .int4-r').addClass('show');
            $('.int_li4 .int4-r').addClass('animate__animated animate__fadeInUpMin').css({'animation-duration': '1500ms','animation-delay':'0ms'});
        }else{
            $('.int_li4 .int4-r').removeClass('show');
            $('.int_li4 .int4-r').removeClass('animate__animated animate__fadeInUpMin').css({'animation-duration': '0ms','animation-delay':'0ms'});
        }
        if(top> $('.int_li4 .int4-l').offset().top - height && top <= $('.int_li4 .int4-l').offset().top + 400){
            $('.int_li4 .int4-l').addClass('show');
            $('.int_li4 .int4-l').addClass('animate__animated animate__fadeInLeftMin').css({'animation-duration': '1500ms','animation-delay':'0ms'});
        }else{
            $('.int_li4 .int4-l').removeClass('show');
            $('.int_li4 .int4-l').removeClass('animate__animated animate__fadeInLeftMin').css({'animation-duration': '0ms','animation-delay':'0ms'});
        }
        if(top> $('.foot-ted').offset().top - height - 200 && top <= $('.foot-ted').offset().top + $('.foot-ted').height() - 100){
            $('.foot-ted').addClass('show');
            $('.foot-ted').addClass('animate__animated animate__fadeInLeftMin').css({'animation-duration': '1500ms','animation-delay':'0ms'});
            if(footTedtxtscrol == 0){
                intNumScroll(16)
                footTedtxtscrol = 1
            }
        }else{
            footTedtxtscrol = 0
            $('.foot-ted').removeClass('show');
            $('.foot-ted').removeClass('animate__animated animate__fadeInLeftMin').css({'animation-duration': '0ms','animation-delay':'0ms'});
        }

        if(top> $('.indexfixedBG1').offset().top - height - 200 && top <= $('.indexfixedBG1').offset().top + $('.indexfixedBG1').height()){
            let num = $('.indexfixedBG1').offset().top - top + $('.indexfixedBG1').height() 
            num = -(num/6).toFixed(2) + 100
            $('.indexfixedBG1').find('.bg').css('top', num)
        }
        if(top> $('.indexfixedBG2').offset().top - height - 200 && top <= $('.indexfixedBG2').offset().top + $('.indexfixedBG2').height()){
            let num = $('.indexfixedBG2').offset().top - top + $('.indexfixedBG2').height() 
            num = -(num/6).toFixed(2) + 100
            $('.indexfixedBG2').find('.bg').css('top', num)
        }
        if(top> $('.indexfixedBG3').offset().top - height - 200 && top <= $('.indexfixedBG3').offset().top + $('.indexfixedBG3').height()){
            let num = $('.indexfixedBG3').offset().top - top + $('.indexfixedBG3').height() 
            num = -(num/6).toFixed(2) + 100
            $('.indexfixedBG3').find('.bg').css('top', num)
        }
        if(top> $('.indexfixedBG4').offset().top - height - 200 && top <= $('.indexfixedBG4').offset().top + $('.indexfixedBG4').height()){
            let num = $('.indexfixedBG4').offset().top - top + $('.indexfixedBG4').height() 
            num = -(num/6).toFixed(2) + 100
            $('.indexfixedBG4').find('.bg').css('top', num)
        }
    }
    if(IsPC()){
        $('.int_li2').find('.l-li').eq(0).attr('data-num','0')
        $('.int_li2').find('.l-li').eq(1).attr('data-num','1')
        $('.int_li2').find('.l-li').eq(2).attr('data-num','2')
        let lint2liclickstste = 1
        $('.int_li2').on('click','.l-li',function () {
            if(lint2liclickstste == 0) return        
            lint2liclickstste = 0
            let num = $(this).attr('data-num')
            let html 
            if(num == 0){
                html = '<div class="l-li show">'+
                        $('.int_li2').find('.l-li').eq($('.int_li2').find('.l-li').length-1).html()+
                        '</div>'
                $('.int_li2 .int2-l').prepend(html)
                $('.int_li2 .int2-l').css('top','-238px')
                $('.int_li2 .int2-l').animate({top:'0',},1500)
                $('.int_li2').find('.l-li').eq($('.int_li2').find('.l-li').length-1).addClass('hide')
                setTimeout(() => {
                    $('.int_li2').find('.l-li').eq($('.int_li2').find('.l-li').length-1).remove()
                }, 1500);
            }else if(num == 2){
                html = '<div class="l-li show">'+
                        $('.int_li2').find('.l-li').eq(0).html()+
                        '</div>'
                $('.int_li2 .int2-l').append(html)
                $('.int_li2 .int2-l').animate({top:'-238px',},1450)
                $('.int_li2').find('.l-li').eq(0).addClass('hide')
                setTimeout(() => {
                    $('.int_li2 .int2-l').css('top','0')
                    $('.int_li2').find('.l-li').eq(0).remove()
                }, 1500);
            }
            $(this).addClass('active').siblings().removeClass('active')
            setTimeout(() => {
                $('.int_li2').find('.l-li').removeClass('show')
                $('.int_li2').find('.l-li').eq(0).attr('data-num','0')
                $('.int_li2').find('.l-li').eq(1).attr('data-num','1')
                $('.int_li2').find('.l-li').eq(2).attr('data-num','2')
                lint2liclickstste = 1
            }, 1501);
        })
        setInterval(() => {
            $('.int_li2').find('.l-li').eq($('.int_li2').find('.l-li').length-1).click()
        }, 5000);
    }
    

    // let numscrol = setInterval(() => {
    //     if(numscrilstat == 1){
    //         intNumScroll()
    //         clearInterval(numscrol)
    //     }
    // }, 100);
    // let bannerTit = ['Fastest','Safely','Protect']
    // $('.index_banner_txt1').show()
    // setTimeout(() => {
    //     $('.index_banner_txt1').addClass('show')
    // }, 1000);
    // let txtindex = 0
    // setInterval(() => {
    //     $('.index_banner_txt').hide()
    //     $('.index_banner_txt').removeClass('show')
    //     txtindex += 1
    //     $('.index_banner_txt' + txtindex).show()
    //     $('.index_banner_txt' + txtindex).addClass('show')
    //     let txtarr = $('.index_banner_txt' + txtindex + ' .txtch')
    //     $('.index_banner_txt' + txtindex).find('.txtch').hide()
    //     if(txtarr.length >= 1){setTimeout(() => {$(txtarr[0]).show();}, 100);}
    //     if(txtarr.length >= 2){setTimeout(() => {$(txtarr[1]).show();}, 200);}
    //     if(txtarr.length >= 3){setTimeout(() => {$(txtarr[2]).show();}, 300);}
    //     if(txtarr.length >= 4){setTimeout(() => {$(txtarr[3]).show();}, 400);}
    //     if(txtarr.length >= 5){setTimeout(() => {$(txtarr[4]).show();}, 500);}
    //     if(txtarr.length >= 6){setTimeout(() => {$(txtarr[5]).show();}, 600);}
    //     if(txtarr.length >= 7){setTimeout(() => {$(txtarr[6]).show();}, 700);}
    //     if(txtarr.length >= 8){setTimeout(() => {$(txtarr[7]).show();}, 800);}
    //     if(txtarr.length >= 9){setTimeout(() => {$(txtarr[8]).show();}, 900);}
    //     if(txtarr.length >= 10){setTimeout(() => {$(txtarr[9]).show();}, 1000);}
    //     if(txtindex == 3){
    //         txtindex = 0
    //     }
    // }, 3000);

    $('.lecooken .btn').on('click',function () {
        $('.lecooken').remove()
        localStorage.setItem('acceptsty',true)
    })
    let banecontLeft  = 0
    setInterval(() => {
        eleftscrol($('.countriesCAN'),800,280)
        eleftscrol($('.countriesUSA'),800,280)
        eleftscrol($('.countriesUK'),800,280)
        eleftscrol($('.countriesBRA'),800,280)
        eleftscrol($('.countriesFRA'),800,280)
        eleftscrol($('.countriesDEU'),800,280)
        eleftscrol($('.countriesIND'),800,280)
        // eleftscrol($('.countriesRUS'),800,280)
        eleftscrol($('.countriesJPN'),800,280)
        if(banecontLeft <= -1512){
            banecontLeft = 0
        }
        banecontLeft -= 1.2
        $('.banEarthCont').css('left',banecontLeft)
    }, 30);

    // blog
    $(document).on('click','.blogNavLi',function () {
        $(this).addClass('active').siblings().removeClass('active')
        let id = $(this).data('id')
        $('.blog_cont').hide()
        $('.blog_nav_cont'+id).show()
    })

    $('.blogNavLi').eq(0).click()

})
function eleftscrol(dom,star,end) {
    let earthLeft = $('.earth-box').offset().left;
    let dom1 =dom.eq(0).offset().left,
        dom2 =dom.eq(1).offset().left;
    if(dom1 <= earthLeft + star && dom1 >= earthLeft + end || dom2 <= earthLeft + star && dom2 >= earthLeft + end){
        dom.eq(0).addClass('show').removeClass('hide')
        dom.eq(1).addClass('show').removeClass('hide')
    }else{
        if(dom.hasClass('show')){
            dom.eq(0).addClass('hide').removeClass('show')
            dom.eq(1).addClass('hide').removeClass('show')
        }
    }
}
window.onload = function () {
    $('.pop-loading').fadeOut();
    $('.banner').addClass('show')
    if(winheidht > 1300){
        $('.boost .index-h2').addClass('show')
    }
}
function intNumScroll(sudu) {
    var doms = $("[data-numScroll]");
    doms.each(function () {
        var _this = $(this),
                num = parseInt(_this.data("numscroll"));
        num = isNaN(num) ? 0 : num;
        numsRun(_this, 0, num, parseInt(num / sudu));
    });
    function numsRun(dom, i, t, step) {
        if (i >= t) {
            i = t;
        } else {
            setTimeout(function () {
                numsRun(dom, i + step, t, step);
            }, 120);
        }
        dom.text(i.toLocaleString() + '');
    }
}