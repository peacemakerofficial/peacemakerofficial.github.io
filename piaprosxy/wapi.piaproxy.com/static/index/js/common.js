let userinfotxt
$(function () {

    $('.select_list').html(`
        <a href="javascript:;" onclick="multiclcik('')" class="li">English</a>
        <a href="javascript:;" onclick="multiclcik('hk')" class="li">繁體中文</a>    
    `)
    $('.yeslogin_langlist').html(`
        <div class="cont-box">
            <a href="javascript:;" class="li" onclick="multiclcik('')">
                <img src="${$('#static_url').val()}/index/img/flags/united-states.svg" alt="header">
                <p>English</p>
            </a>
            <a href="javascript:;" class="li" onclick="multiclcik('hk')">
                <img src="${$('#static_url').val()}/index/img/flags/china.svg" alt="header">
                <p>中文繁体</p>
            </a>
        </div>
    `)


    if(window.location.host == 'wapi.piaproxy.com' && (window.location.pathname == '' || window.location.pathname == '/')){
        location.href = 'https://www.piaproxy.com'
    }
    if(window.location.pathname == '' || window.location.pathname == '/' || window.location.pathname == '/hk' || window.location.pathname == '/hk/'){
        $('.footusefulLinks').show()
    }else{
        $('.footusefulLinks').remove()
    }

    $('.go_kefu').attr('href', 'https://chat.roxlabs.io/chatVisitorIndex?kefu_id=AVhbVz8KWQxQcAVABQ5fQzxleVV4Zghcfl43AnVEBUMLTAFBWUxSXUIuJFEyeDAPNFAtNgk/')
    $('.go_kefu').attr('target', '_blank')
    var pathname = window.location.pathname
    let langPath = ''
    if (pathname.indexOf('/kr') != -1) {
        langPath = '/kr'
    } else if (pathname.indexOf('/vn') != -1) {
        langPath = '/vn'
    } else if (pathname.indexOf('/ru') != -1) {
        langPath = '/ru'
    } else if (pathname.indexOf('/id') != -1) {
        langPath = '/id'
    } else if (pathname.indexOf('/in') != -1) {
        langPath = '/in'
    } else if (pathname.indexOf('/bd') != -1) {
        langPath = '/bd'
    } else if (pathname.indexOf('/my') != -1) {
        langPath = '/my'
    } else if (pathname.indexOf('/ar') != -1) {
        langPath = '/ar'
    } else if (pathname.indexOf('/hk') != -1) {
        langPath = '/hk'
    } else if (pathname.indexOf('/pt') != -1) {
        langPath = '/pt'
    } else if (pathname.indexOf('/tr') != -1) {
        langPath = '/tr'
    }

    // $(".downGooglePlug").attr("href", "https://chrome.google.com/webstore/detail/ipchanger-vpn-ip-proxy-fo/oahegmgcjlpcachkhdngcjopmflnobci")
    // $(".telegramUtl").attr("href", "https://t.me/PIA_S5_Proxy")
    // $(".telegramUtl").attr("target", "_blank")
    let get_customer_url = $('#ipchangerPayUrl').val() + '/get_customer_url'
    common.ajax_jsonp(get_customer_url, {}, function (data) {
        $(".telegramUtl").attr("href", JSON.parse(data).data)
        $(".telegramUtlTxt").attr("href", JSON.parse(data).data)
        $(".telegramUtlTxt").html(JSON.parse(data).data)
        $(".telegramUtl").attr("target", "_blank")
    });
    // if($('.popDiscCodeList').length>0){
    //     let halloween_couponurl = $('#ipchangerPayUrl').val() + '/pay/halloween_coupon'
    //     common.ajax_jsonp(halloween_couponurl, {}, function (data) {
    //         let obj = JSON.parse(data).data.list
    //         for (let i = 0; i < obj.length; i++) {
    //             $('.popDiscCode' + i).html(obj[i].coupon_no)
    //         }
    //     });
    // }
    
    $('.downipthis_guide').attr('href','https://download.piaproxy.com/file/pc/PIA_S5_Proxy_channel_guide_V1.2.9_202210262005.exe')
    $('.downipthis_group').attr('href','https://download.piaproxy.com/file/pc/PIA_S5_Proxy_channel_group_V1.2.9_202210262004.exe')
    $('.downipthis_kine').attr('href','https://download.piaproxy.com/file/pc/PIA_S5_Proxy_V1.2.0_kine.09081559.exe')
    $('.downipthis_mine').attr('href','https://download.piaproxy.com/file/pc/PIA_S5_Proxy_V1.2.0_mine.09081559.exe')
    $('.downipthis_nine').attr('href','https://download.piaproxy.com/file/pc/PIA_S5_Proxy_V1.2.0_nine.09081558.exe')
    $('.downipthis_oine').attr('href','https://download.piaproxy.com/file/pc/PIA_S5_Proxy_V1.2.0_oine.09081559.exe')
    $('.downipthis_pcbing').attr('href','https://download.piaproxy.com/file/pc/PIA_S5_Proxy_channel_pcbing_V1.2.9_202210262004.exe')
    $('.downipthis_pcsem').attr('href','https://download.piaproxy.com/file/pc/PIA_S5_Proxy_V1.2.0_pcsem.09081600.exe')
    $('.downipthis_pcyandex').attr('href','https://download.piaproxy.com/file/pc/PIA_S5_Proxy_V1.2.0_pcyandex.09081600.exe')
    $('.downipthis_plane').attr('href','https://download.piaproxy.com/file/pc/PIA_S5_Proxy_channel_plane_V1.2.9_202210262005.exe')
    $('.downipthis_smooth').attr('href','https://download.piaproxy.com/file/pc/PIA_S5_Proxy_V1.2.0_smooth.09081600.exe')
    $('.downipthis_tine').attr('href','https://download.piaproxy.com/file/pc/PIA_S5_Proxy_V1.2.0_tine.09081559.exe')
    $('.downipthis_yine').attr('href','https://download.piaproxy.com/file/pc/PIA_S5_Proxy_V1.2.0_yine.09081559.exe')

    $('.downipthis_usecase').attr('href','https://download.piaproxy.com/file/pc/PIA_S5_Proxy_channel_use-cases_V1.2.9_202210262004.exe')
    $('.downipthis_apiproxy').attr('href','https://download.piaproxy.com/file/pc/PIA_S5_Proxy_channel_apiproxy_V1.2.9_202210262004.exe')
    $('.downipthis_dragon').attr('href','https://download.piaproxy.com/file/pc/PIA_S5_Proxy_channel_dragon_V1.2.9_202210262005.exe')
    $('.downipthis_lemon').attr('href','https://download.piaproxy.com/file/pc/PIA_S5_Proxy_channel_lemon_V1.2.9_202210262005.exe')
    $('.downipthis_cute').attr('href','https://download.piaproxy.com/file/pc/PIA_S5_Proxy_channel_cute_V1.2.9_202210270101.exe ')
    $('.downipthis_yellow').attr('href','https://download.piaproxy.com/file/pc/PIA_S5_Proxy_channel_yellow_V1.2.9_202210270101.exe')
    $('.downipthis_war').attr('href','https://download.piaproxy.com/file/pc/PIA_S5_Proxy_channel_war_V1.2.9_202210270101.exe')


    $('.holiday_close').on('click', function (e) {
        e.stopPropagation()
        e.preventDefault()
        $(this).parents('.pop-box').hide()
        $('.left-bom-pendant').show()
    })



    // let countTime = (new Date(new Date().getTime()+86400000-(new Date().getHours()*60*60+new Date().getMinutes()*60+new Date().getSeconds())*1000).getTime()) - (new Date().getTime())
    // let countTime = new Date(2022, 07, 27, 15).getTime() - new Date().getTime()
    getctivityTime()
    let dountinterval;
    let countTime;
    $('.holidy_show').on('click',function (e) {
        e.stopPropagation()
        e.preventDefault()
        $(this).parents('.left-bom-pendant').hide()
        $('.pop_holid').show()
    })
    if($('.pop_holid').data('val') == 'ok'){
        setTimeout(() => {
            $('.pop_holid').show()
        }, 2000);
    }
    function getctivityTime() {
        let activityTime = $('#ipchangerPayUrl').val() + '/activity/time'
        common.ajax_jsonp(activityTime, {t:1}, function (data) {
            countTime = JSON.parse(data).data.time * 1000
            if (countTime > 0) {
                dountTime()
                dountinterval = setInterval(() => {
                    dountTime()
                }, 1000);
            }
        });
    }
    function dountTime() {
        if(countTime <= 0){
            clearInterval(dountinterval)
            getctivityTime()
            return
        }
        let d = Math.floor(countTime / 1000 / 60 / 60 / 24);
        let h = Math.floor(countTime / 1000 / 60 / 60 % 24);
        let m = Math.floor(countTime / 1000 / 60 % 60);
        let s = Math.floor(countTime / 1000 % 60);
        $('.dount_D').html(d >= 10 ? d : '0' + d)
        $('.dount_H').html(h >= 10 ? h : '0' + h)
        $('.dount_M').html(m >= 10 ? m : '0' + m)
        $('.dount_S').html(s >= 10 ? s : '0' + s)
        countTime = countTime - 1000
    }



    let googlePlayUrl = 'https://play.google.com/store/apps/details?id=com.marsbrother.ipchanger'
    let iosDownUrl = 'https://apps.apple.com/app/id1624871258'
    let iosDownUrl911 = 'https://download.piaproxy.com/file/mac/PIA S5 Proxy V1.0.0.dmg'
    setTimeout(() => {
        $('.pop-loading').fadeOut();
    }, 2000);
    userinfotxt = location.search
    let userinfomd = userinfotxt.replace('?s=', '')
    if (userinfotxt.indexOf('?s=') != -1) {
        userinfotxt = userinfomd.replace(/\%3D/g, "=").replace(/\%3d/g, "=").replace(/\%2F/g, "/").replace(/\%2f/g, "/").replace(/\%2b/g, '+')
    } else {
        if (localStorage.getItem('ACCESS_TOKEN_MD')) {
            userinfotxt = localStorage.getItem('ACCESS_TOKEN_MD').replace(/\%3D/g, "=").replace(/\%3d/g, "=").replace(/\%2F/g, "/").replace(/\%2f/g, "/").replace(/\%2b/g, '+')
        }
    }
    let userinfourl = $('#ipchangerPayUrl').val() + '/pay/userinfo'
    if (window.location.pathname.indexOf('/contrast') == -1) {
        common.ajax_jsonp(userinfourl, { s: userinfotxt }, function (data) {
            let obj = JSON.parse(data)
            if (obj.code == 0) {
                $('.loginTxt').html(obj.data.username)
                $('.loginTxt').parents('.header-login-box').addClass('logintxtshow')
                $('.loginTxt').removeClass('loginTxtBtn')
                // $('.newchangelang').hide()
                $('.registerBtn').hide()
                $('.headertelegram').show()
                $('.header_email').html(obj.data.email)

                $('.referF_cash_back_ip').html(obj.data.cash_back_ip)
                $('.referF_invite_user').html(obj.data.invite_user)
                $('.referF_invite_url').val(obj.data.invite_url)
                $('.refercopy').html('Copy link')
                $('.referF_invite_url').show()


                localStorage.setItem('userName', obj.data.username)
                localStorage.setItem('email', obj.data.email)
                localStorage.setItem('ACCESS_TOKEN_MD', userinfotxt)
            } else {
                localStorage.removeItem('userName')
                localStorage.removeItem('ACCESS_TOKEN_MD')
            }

            

            function isMobile() {
                if (window.navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) {
                    return true;
                } else {
                    return false;
                }
            }
            if (isMobile()) {
                console.log(location.pathname.search("/wap") == -1);
                if (location.pathname.search("/wap") == -1) {
                    location.href = "/wap"
                } else {

                };
            }
            
        });
    }
    if ($('#get_version_down_url').length > 0) {
        common.ajax_jsonp($('#get_version_down_url').val(), {}, function (rt) {
            var rtobj = JSON.parse(rt);
            if (rtobj.code == 1) {
                let arr = rtobj.ret_data
                for (const i in arr) {
                    if (arr[i] == null || arr[i] == '') continue;
                    if (arr[i].platform == 'pc') {
                        $('.downip911').attr('href', arr[i].down_url)
                        windUrl = arr[i].down_url
                    }
                    if (arr[i].platform == 'mac') {
                        $('.downMac911').attr('href', arr[i].down_url)
                    }
                }

            }
        });
    }
    if ($('#get_version_flagship_down_url').length > 0) {
        common.ajax_jsonp($('#get_version_flagship_down_url').val(), {}, function (rt) {
            var rtobj = JSON.parse(rt);
            if (rtobj.code == 1) {
                let terminal = detTerminal()
                let windUrl = 'javascript:;';
                let androdiUrl = 'javascript:;';
                let iosUrl = 'javascript:;';
                let arr = rtobj.ret_data
                for (const i in arr) {
                    if(arr[i] == null || arr[i] == '') continue;
                    if (arr[i].platform == 'pc') {
                        $('.downWind').attr('href', arr[i].down_url)
                        windUrl = arr[i].down_url
                    } else if (arr[i].platform == 'android') {
                        $('.downAndroid').attr('href', arr[i].down_url)
                        androdiUrl = arr[i].down_url
                    }
                }
                $('.downGooglePlay').attr('href', googlePlayUrl)
                $('.downIos').attr('href', iosDownUrl)
                $('.downIos').attr('target', '_blank')
                if (terminal == 'and') {
                    // $('.downAndroid').attr('href',googlePlayUrl)
                    $('.banner-downnav').find('.downAndroid').addClass('active')
                } else if (terminal == 'iphone') {
                    // $('.downWind').attr('href',iosUrl)
                    $('.banner-downnav').find('.downIos').addClass('active')
                }
            }
        });
    }
    // $('.downAndroid').attr('href', 'javascript:;')
    // $('.downGooglePlay').attr('href', 'javascript:;')
    // $('.downIos').attr('href', 'javascript:;')
    $('.downAndroid').attr('target', '')
    $('.downGooglePlay').attr('target', '')
    $('.downIos').attr('target', '')
    if ($('#get_version_business_down_url').length > 0) {
        common.ajax_jsonp($('#get_version_business_down_url').val(), {}, function (rt) {
            var rtobj = JSON.parse(rt);
            if (rtobj.code == 1) {
                let arr = rtobj.ret_data
                for (const i in arr) {
                    if (arr[i] == null || arr[i] == '') continue;
                    if (arr[i].platform == 'pc') {
                        $('.downWind_business').attr('href', arr[i].down_url)
                    }
                }
            }
        });

    }


    if (!IsPC()) {
        let cliHeight = document.documentElement.clientHeight;
        $('.ip-index .banner').css('height', cliHeight + 10 + 'px')
        if (cliHeight > 600) {
            if (cliHeight - 670 > 20) {
                $('.ip-index .earth-box').css('top', cliHeight - 570 + 'px')
                $('.ip-index .b-scroll-box4 .banner-btnbox').css('margin-top', cliHeight - 670 + 'px')
            } else {
                $('.ip-index .earth-box').css('top', '80px')
                $('.ip-index .b-scroll-box4 .banner-btnbox').css('margin-top', '25px')
            }
        }
        $('.ip-index .banner-btnbox .ban-btn').attr('href', $('#ucenterUrl').val()).addClass('regTxtBtn').removeClass('downWind')
    }
    $('.downWind').on('click', function () {
        gtag_report_conversion()
        setdownRecord('pc')
    })

    $('.downip911').on('click', function () {
        gtag_report_conversion_ip911()
        gtag_report_conversion1111()
        gtag_report_conversion11001675437()
        gtag_report_conversion11004599427()
        gtag_report_conversion11001597670()
        gtag_report_conversion22222()
        gtag_report_conversion3333()
        // setdownRecord('pc')
    })
    $('.downipthis').on('click', function () {
        gtag_report_conversion_ip911()
        gtag_report_conversion1111()
        gtag_report_conversion11001675437()
        gtag_report_conversion11004599427()
        gtag_report_conversion11001597670()
        gtag_report_conversion22222()
        gtag_report_conversion3333()
        // setdownRecord('pc')
    })
    function gtag_report_conversion_ip911(url) {
        var callback = function () {
            if (typeof (url) != 'undefined') {
                window.location = url;
            }
        };
        gtag('event', 'conversion', {
            'send_to': 'AW-10813327792/n35qCNPqgocDELCTmaQo',
            'event_callback': callback
        });
        return false;
    }
    function gtag_report_conversion22222(url) {
        var callback = function () {
            if (typeof (url) != 'undefined') {
                window.location = url;
            }
        };
        gtag('event', 'conversion', {
            'send_to': 'AW-10970875259/TxYTCP__9NYDEPuKqe8o',
            'event_callback': callback
        });
        return false;
    }
    function gtag_report_conversion3333(url) {
        var callback = function () {
            if (typeof(url) != 'undefined') {
                window.location = url;
            }
          };
        gtag('event', 'conversion', {
            'send_to': 'AW-10893117251/o_xlCJysh9sDEMOOn8oo',
            'event_callback': callback
        });
        return false;
    }
    function gtag_report_conversion1111(url) {
        var callback = function () {
            if (typeof (url) != 'undefined') {
                window.location = url;
            }
        };
        gtag('event', 'conversion', {
            'send_to': 'AW-10837241848/Wz0oCODIzNcDEPjfzK8o',
            'event_callback': callback
        });
        return false;
    }
    function gtag_report_conversion11001675437(url) {
        var callback = function () {
            if (typeof(url) != 'undefined') {
              window.location = url;
            }
        };
        gtag('event', 'conversion', {
            'send_to': 'AW-11001675437/dbb_CO_BjOUDEK39gP4o',
            'event_callback': callback
        });
        return false;
    }
    function gtag_report_conversion11004599427(url) {
        var callback = function () {
          if (typeof(url) != 'undefined') {
            window.location = url;
          }
        };
        gtag('event', 'conversion', {
            'send_to': 'AW-11004599427/QuQuCPyekeYDEIO5s_8o',
            'event_callback': callback
        });
        return false;
    }
    function gtag_report_conversion11001597670(url) {
        var callback = function () {
          if (typeof(url) != 'undefined') {
            window.location = url;
          }
        };
        gtag('event', 'conversion', {
            'send_to': 'AW-11001597670/GWddCOnkkYAYEOad_P0o',
            'event_callback': callback
        });
        return false;
      }
    $('.downAndroid').on('click', function () {
        gtag_report_conversion()
        setdownRecord('android')
    })
    $('.downGooglePlay').on('click', function () {
        gtag_report_conversion()
        setdownRecord('googleplay')
    })
    $(document).on('click', '.goUrl', function () {
        let url = $(this).data('url')
        window.open(url)
    })
    // regtxtben ios
    $('.downIos').on('click', function (e) {
        setdownRecord('ios')
    })

    function test(name) {
        return location.pathname.search(name) !== -1
    }


    if (test("/blog") || test("/how-to") || test("/latest") || test("/service-updates") || test("/faq") || test("/internet-security") || test("/quick")) {
        $(".lang-select").remove();
        $(".skr").remove();
        $("#lang-select").remove();
    }

    function setdownRecord(type) {
        let p = ''
        if (IsPC()) {
            p = 'web'
        } else {
            p = 'wap'
        }
        common.ajax_jsonp($('#setdownload_record').val(), {
            link: window.location.href,
            t: type,
            p: p,
        }, function (rt) { });
    }

    $(document).on('scroll', function () {
        let top = $(this).scrollTop()
        if (top > 20) {
            $('header').addClass('show')
        } else {
            $('header').removeClass('show')
        }
        if (top > 200) {
            $('.go-top').addClass('show')
        } else {
            $('.go-top').removeClass('show')
        }
    })
    $('.go-top').on('click', function () {
        $("html, body").animate({ scrollTop: "0" }, 500);
    })

    var param = GetRequest();
    let ad = param['utm-source']
    let keyword = param['utm-keyword']
    var host = window.location.host;
    var hosturl = ''
    if (pathname.substr(pathname.length - 1, 1) == '/') {
        pathname = pathname.slice(0, pathname.length - 1)
    }
    // if(getpath(1) == '' || getpath(1) == 'index'){
    //     hosturl = host
    // }else{
    //     hosturl = host + pathname
    // }
    if (ad != undefined && keyword != undefined) {
        keyword = keyword.substr(1)
        let adstorage = {
            ad: ad,
            keyword: keyword,
            host: host,
            time: new Date().getTime()
        }
        sessionStorage.setItem('adstorage', JSON.stringify(adstorage))
        common.ajax_jsonp($('#comApiUrl').val() + '/api/web/ad_link', { ad_url: ad, keywordscode: keyword, domain: host }, function (rt) {
        });
    }
    if (ad != undefined && keyword != undefined) {
        common.ajax_jsonp($('#comApiUrl').val() + '/api/web/visitor_record', { code: ad, key_words_code: keyword, domain: host }, function (rt) {
        });
    }

    $(document).on('click', function () {
        $('.lang_select').find('.select-list').hide()
    })
    $('.select_list').on('click', '.li', function (e) {
        e.stopPropagation()
        let html = $(this).html()
        $(this).parents('.lang_select').find('.select_val').html(html)
        $(this).parents('.select_list').hide()
    })
    $('.lang_select').on('click', function (e) {
        e.stopPropagation();
        $(this).find('.select_list').show()
    })
    let ipchangerPayUrl = $('#ipchangerPayUrl').val()
    let ipchangerUcenterUrl = $('#ipchangerUcenterUrl').val()
    $(document).on('click', '.goPay', function () {
        window.open(ipchangerPayUrl)
    })
    let adstor = ''
    if (sessionStorage.getItem('adstorage') != '' && sessionStorage.getItem('adstorage') != null) {
        adstor = JSON.parse(sessionStorage.getItem('adstorage'))
    }

    let md = localStorage.getItem('ACCESS_TOKEN_MD')
    $('.loginTxtBtn').on('click', function (e) {
        md = comformatting_s(localStorage.getItem('ACCESS_TOKEN_MD'))
        e.preventDefault()
        let oldurl = ''
        let seturl = $(this).data('setting')
        if ($(this).attr('href') == undefined) {
            oldurl = $(this).data('url') + langPath
        } else {
            oldurl = $(this).attr('href') + langPath
        }

        if (is_login()) {
            if(seturl == 'account'){
                window.open(oldurl + '/account/settings?s=' + md)
            }else{
                window.open(oldurl + '/user/settings?s=' + md)
            }
            return false
        } else {
            if (adstor != '' && adstor != null) {
                if (adstor.time > new Date().getTime() - 259200000) {
                    if (IsPC()) {
                        if(seturl == 'account'){
                            window.open(oldurl + '/login_account?t=webaccount&source=' + adstor.ad + '&code=' + adstor.keyword + '&domain=' + location.host)
                        }else{
                            window.open(oldurl + '/login?t=web&source=' + adstor.ad + '&code=' + adstor.keyword + '&domain=' + location.host)
                        }
                    } else {
                        window.open(oldurl + '/login?t=wap&source=' + adstor.ad + '&code=' + adstor.keyword + '&domain=' + location.host)
                    }
                    return false
                } else {
                    sessionStorage.setItem('adstorage', '')
                }
            } else {
                if (IsPC()) {
                    if(seturl == 'account'){
                        window.open(oldurl + '/login_account?t=webaccount' + '&domain=' + location.host)
                    }else{
                        window.open(oldurl + '/login?t=web' + '&domain=' + location.host)
                    }
                } else {
                    window.open(oldurl + '/login?t=wap' + '&domain=' + location.host)
                }
            }
            return false
        }
    })

    // regtxtben
    $('.regTxtBtn').on('click', function (e) {
        md = comformatting_s(localStorage.getItem('ACCESS_TOKEN_MD'))
        e.preventDefault()
        let oldurl = $(this).attr('href') + langPath
        if (!IsPC()) {
            if (is_login()) {
                window.open(oldurl + '/user/settings?s=' + md)
                return false
            } else {
                if (adstor != '' && adstor != null) {
                    if (adstor.time > new Date().getTime() - 259200000) {
                        let oldurl = $(this).attr('href') + langPath
                        window.open(oldurl + '/register?t=wap&source=' + adstor.ad + '&code=' + adstor.keyword + '&domain=' + location.host)
                        return false
                    } else {
                        sessionStorage.setItem('adstorage', '')
                    }
                } else {
                    window.open(oldurl + '/register?t=wap'+ '&domain=' + location.host)
                }
                return false
            }
        }
    })
    $(document).on('click', '.logOutBtn', function () {
        md = localStorage.getItem('ACCESS_TOKEN_MD')
        $(this).addClass('com-disabled')
        let logouturl = $('#web_sign_out_url').val()
        common.ajax_jsonp(logouturl, { s: md }, function (data) {
            localStorage.removeItem('ACCESS_TOKEN_MD')
            location.reload()
        });
    })


    let modego = function () {
        $('.havemdGo').on('click', function (e) {
            md = comformatting_s(localStorage.getItem('ACCESS_TOKEN_MD'))
            e.preventDefault()
            let oldurl = $(this).attr('href')
            if(oldurl.indexOf('/register') != -1){
                let arr = oldurl.split('/register')
                oldurl = arr[0] + '/' + langPath + '/register' +  arr[1]
            }else{
                if(oldurl.indexOf('?') != -1){
                    let arr = oldurl.split('?')
                    oldurl = arr[0]+ '/' + langPath + '?' +  arr[1]
                }else{
                    oldurl = oldurl + langPath
                }
            }
            if (oldurl.indexOf('?') != -1) {
                oldurl = oldurl + '&domain=' + location.host
            } else {
                oldurl = oldurl + '?domain=' + location.host
            }
            if (is_login()) {
                // let oldurl = $(this).attr('href') + langPath
                if (adstor != '' && adstor != null) {
                    if (adstor.time > new Date().getTime() - 259200000) {
                        window.open(oldurl + '&s=' + md + '&source=' + adstor.ad + '&code=' + adstor.keyword )
                        return false
                    } else {
                        window.open(oldurl + '&s=' + md)
                        return false
                    }
                } else {
                    window.open(oldurl + '&s=' + md)
                    return false
                }
            } else {
                if (adstor != '' && adstor != null) {
                    if (adstor.time > new Date().getTime() - 259200000) {
                        if (IsPC()) {
                            window.open(oldurl + '&source=' + adstor.ad + '&code=' + adstor.keyword )
                        } else {
                            window.open(oldurl + '&p=4&source=' + adstor.ad + '&code=' + adstor.keyword )
                        }
                        return false
                    } else {
                        if (IsPC()) {
                            window.open(oldurl)
                        } else {
                            window.open(oldurl + '?p=4')
                        }
                        sessionStorage.setItem('adstorage', '')
                        return false
                    }
                } else {
                    if (IsPC()) {
                        console.log(oldurl);
                        window.open(oldurl)
                    } else {
                        window.open(oldurl + '?p=4')
                    }
                    return false
                }
            }
        })
    }


    modego()

    window.modego = modego





    // wap
    $('.wap_showpop').on('click', function () {
        if ($('.head-right-pop').hasClass('show')) {
            $('.head-right-pop').removeClass('show')
            $(this).removeClass('show')
        } else {
            $(this).addClass('show')
            $('.head-right-pop').addClass('show')
        }
    })
    // setBrowserLang()

    $('.quest-list').on('click', '.tit', function () {
        if ($(this).parent('.li').hasClass('show')) return;
        $(this).parent('.li').addClass('show').siblings().removeClass('show')
        $('.quest-list').find('.cont').slideUp(300)
        $(this).siblings('.cont').slideToggle(300)
    })
    $('.questchanger').on('click', '.li', function () {
        $('.questchangerImg').attr('src', $(this).data('img'))
    })

    $('.copyBtn').on('click',function () {
        if(is_login()){
            let val = $(this).parents('.copyBox').find('.copyInput').val()
            let copyInput = document.createElement('input');
            document.body.appendChild(copyInput);
            copyInput.setAttribute('value', val);
            copyInput.select();
            layer.msg('Copy Success')
            document.execCommand("Copy");
            copyInput.remove();
        }else{
            // layer.msg('Please log in first')
            // setTimeout(() => {
                location.href = $('#ucenter_index_url').val() + langPath +'/login?t=refer'
            // }, 2000);
        }
    })
    $('.noinpuCopy').on('click',function (e) {
        let val = $(this).parents('.copyBox').find('.copyInput').html()
        console.log(val);
        let copyInput = document.createElement('input');
        document.body.appendChild(copyInput);
        copyInput.setAttribute('value', val);
        copyInput.select();
        layer.msg('Copy Success')
        document.execCommand("Copy");
        copyInput.remove();
        e.stopPropagation()
        e.preventDefault()
    })

    $('.popClose').on('click',function () {
        $(this).parents('.pop-box').hide()
    })

})
if(location.host == 'show.piaproxy.com'){
    var _hmt = _hmt || [];
    (function() {
        var hm = document.createElement("script");
        hm.src = "https://www.googletagmanager.com/gtag/js?id=AW-11004599427";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'AW-11004599427');
    })();
}


function multiclcik(name) {
    let pathname = location.pathname.replace('/hk','')
    console.log('/hk' + pathname);
    if(name == 'hk'){
        pathname = '/hk' + pathname
    }
    location.href = location.origin + pathname + location.search
}

window.onload = function () {
    $('.pop-loading').fadeOut();
}

function multilingualClick(url) {
    location.href = location.origin + url
}

function shopopMsg(txt) {
    
}

function showPop(name,islogin) {
    if(islogin ==1){
        if(is_login()){
            $('.'+ name).show()
        }else{
            // layer.msg('Please log in first')
            // setTimeout(() => {
                location.href = $('#ucenter_index_url').val() +'/login?t=refer'
            // }, 2000);
        }
    }else{
        $('.'+ name).show()
    }
}

function userBehaviorStatistics(id, lang) {
    let ubsUrl = $('#comApiUrl').val() + '/api/web/add_official_behavior'
    let params = {
        s: userinfotxt,
        behavior_id: id,
        browser_info: getBrowser(),
        language: lang,
    }
    common.ajax_jsonp(ubsUrl, params, function (data) {
        // console.log(data);
        // let obj = JSON.parse(data)
    });
}

function getBrowser() {
    var u = navigator.userAgent;
    var bws = [{
        name: 'sgssapp',
        it: /sogousearch/i.test(u)
    }, {
        name: 'wechat',
        it: /MicroMessenger/i.test(u)
    }, {
        name: 'weibo',
        it: !!u.match(/Weibo/i)
    }, {
        name: 'uc',
        it: !!u.match(/UCBrowser/i) || u.indexOf(' UBrowser') > -1
    }, {
        name: 'sogou',
        it: u.indexOf('MetaSr') > -1 || u.indexOf('Sogou') > -1
    }, {
        name: 'xiaomi',
        it: u.indexOf('MiuiBrowser') > -1
    }, {
        name: 'baidu',
        it: u.indexOf('Baidu') > -1 || u.indexOf('BIDUBrowser') > -1
    }, {
        name: '360',
        it: u.indexOf('360EE') > -1 || u.indexOf('360SE') > -1
    }, {
        name: '2345',
        it: u.indexOf('2345Explorer') > -1
    }, {
        name: 'edge',
        it: u.indexOf('Edge') > -1
    }, {
        name: 'ie11',
        it: u.indexOf('Trident') > -1 && u.indexOf('rv:11.0') > -1
    }, {
        name: 'ie',
        it: u.indexOf('compatible') > -1 && u.indexOf('MSIE') > -1
    }, {
        name: 'firefox',
        it: u.indexOf('Firefox') > -1
    }, {
        name: 'safari',
        it: u.indexOf('Safari') > -1 && u.indexOf('Chrome') === -1
    }, {
        name: 'qqbrowser',
        it: u.indexOf('MQQBrowser') > -1 && u.indexOf(' QQ') === -1
    }, {
        name: 'qq',
        it: u.indexOf('QQ') > -1
    }, {
        name: 'chrome',
        it: u.indexOf('Chrome') > -1 || u.indexOf('CriOS') > -1
    }, {
        name: 'opera',
        it: u.indexOf('Opera') > -1 || u.indexOf('OPR') > -1
    }];

    for (var i = 0; i < bws.length; i++) {
        if (bws[i].it) {
            return bws[i].name;
        }
    }

    return 'other';
}

function remSetting(win, doc) {
    function changeSize() {
        let width = doc.documentElement.clientWidth
        if (width < 1920) {
            width = 1920
        }
        doc.documentElement.style.fontSize = width / 19.20 + 'px';
    }
    changeSize();
    win.addEventListener('resize', changeSize, false);

}
remSetting(window, document);

function GetRequest() {
    var url = location.search.replace(/\%3F/g, "?").replace(/\%3f/g, "?");
    //console.log(location.href);
    var theRequest = new Array();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = (strs[i].split("=")[1]);
        }
    }
    return theRequest;
}
function timestampToTime(timestamp, hms) {
    var date = new Date(timestamp * 1000);
    Y = date.getFullYear();
    M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate());
    // h = date.getHours();
    h = (date.getHours() < 10 ? '0' + (date.getHours()) : date.getHours());
    m = (date.getMinutes() < 10 ? '0' + (date.getMinutes()) : date.getMinutes());
    s = (date.getSeconds() < 10 ? '0' + (date.getSeconds()) : date.getSeconds());
    if (hms == 1) {
        return Y + '-' + M + '-' + D + ' ' + h + ':' + m + ':' + s;
    } else if (hms == 2) {
        return Y + '-' + M + '-' + D + ' ' + h + ':' + m;
    } else if (hms == 3) {
        if (M == '01') {
            M = 'Jan.'
        } else if (M == '02') {
            M = 'Feb.'
        } else if (M == '03') {
            M = 'Mar.'
        } else if (M == '04') {
            M = 'Apr.'
        } else if (M == '05') {
            M = 'May.'
        } else if (M == '06') {
            M = 'Jun.'
        } else if (M == '07') {
            M = 'Jul.'
        } else if (M == '08') {
            M = 'Aug.'
        } else if (M == '09') {
            M = 'Sep.'
        } else if (M == '10') {
            M = 'Oct.'
        } else if (M == '11') {
            M = 'Nov.'
        } else if (M == '12') { M = 'Dec.' }
        return M + ' ' + D + ' ' + Y
    }
    return Y + '-' + M + '-' + D;
}

function navigatorLanguage() {
    let navigatorLanguage = (navigator.language || navigator.browserLanguage).toLowerCase()
    let lang = 'en'
    switch (navigatorLanguage) {
        case 'en':
            lang = 'en'
            break
        case 'ko':
            lang = 'kr'
            break
        case 'vi':
            lang = 'vn'
            break
        case 'ru':
            lang = 'ru'
            break
    }
    return lang
}

function IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
        "SymbianOS", "Windows Phone",
        "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}
function detTerminal() {
    var userAgentTxt = navigator.userAgent;
    var Agents = ["Android", "iPhone",
        "SymbianOS", "Windows Phone",
        "iPad", "iPod"];
    if (userAgentTxt.indexOf('Android') > 0 || userAgentTxt.indexOf('SymbianOS') > 0 || userAgentTxt.indexOf('Windows Phone') > 0) {
        return 'and'
    }
    if (userAgentTxt.indexOf('iPhone') > 0 || userAgentTxt.indexOf('iPad') > 0 || userAgentTxt.indexOf('iPod') > 0) {
        return 'iphone'
    }
}
function getpath(index) {
    return window.location.pathname.split('/')[index]
}
function is_login() {
    var userid = localStorage.getItem('userName');
    if (typeof (userid) == "undefined" || userid == 'null' || userid == null) {
        return 0;
    }
    return 1;
}

function intNumScroll() {
    var doms = $("[data-numScroll]");
    doms.each(function () {
        var _this = $(this),
            num = parseInt(_this.data("numscroll"));
        let jia = _this.data('jia')
        num = isNaN(num) ? 0 : num;
        numsRun(_this, 0, num, parseInt(num / 20), jia);
    });
    function numsRun(dom, i, t, step, jia) {
        if (i >= t) {
            i = t;
        } else {
            setTimeout(function () {
                numsRun(dom, i + step, t, step, jia);
            }, 120);
        }
        console.log(jia);
        if (jia) {
            dom.text(i.toLocaleString() + '+');
        } else {
            dom.text(i.toLocaleString() + '');
        }
    }
}
function comformatting_s(txt) {
    if (txt == '' || txt == null) {
        return
    } else {
        return txt.replace(/\=/g, '\%3d').replace(/\//g, '\%2F').replace(/\+/g, '\%2b')
    }
}

function msgBox(txt) {
    let html = '<div class="msgBox">' + txt + '</div>'
    $('body').append(html)
    setTimeout(() => {
        $('.msgBox').fadeOut()
    }, 2000);
    setTimeout(() => {
        $('.msgBox').remove()
    }, 3000);

}




// function urlLangreplace(pathname, urllang) {
//     let path = pathname.replace('/kr', '').replace('/vn', '').replace('/ru', '')
//     if (urllang == 'en') {
//         return path + location.search
//     } else {
//         return '/' + urllang + path + location.search
//     }
// }

// function langHas() {
//     let path = location.pathname
//     if (path.indexOf('/kr') != -1 || path.indexOf('/vn') != -1 || path.indexOf('/ru') != -1) {
//         return true
//     }
//     return false
// }

// function setBrowserLang() {
//     let urlLang = localStorage.getItem('urlLang')
//     if (urlLang == undefined) {
//         let urlalngundef = navigatorLanguage()
//         localStorage.setItem('urlLang', urlalngundef)
//         location.href = location.origin + urlLangreplace(location.pathname, urlalngundef)
//     } else {
//         let getpath1 = getpath(1)
//         if (urlLang != 'en') {
//             if (getpath1 != urlLang) {
//                 if (langHas()) {
//                     localStorage.setItem('urlLang', getpath1)
//                     location.href = location.origin + urlLangreplace(location.pathname, getpath1)
//                 } else {
//                     localStorage.setItem('urlLang', urlLang)
//                     location.href = location.origin + urlLangreplace(location.pathname, urlLang)
//                 }
//             }
//         }
//     }
// }