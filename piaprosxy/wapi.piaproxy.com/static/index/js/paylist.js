$(function () {
    let static_url = $('#static_url').val()
    let lang = $('#langval').val()
    const PAY_ALL_LANG_JSON = {
        en: {
            paynam1:'Flexible Proxy Plans for PIA Proxy Manager',
            paynam2:'50 million anonymous IP',
            paynam3:'Unlimited connections',
            paynam4:'30-day money-back guarantee',
            cont_h1_l_ip:'Choose the right plan that fits your ',
            cont_h1_c_ip:'business.',
            cont_h1_r_ip:'',
            cont_h_txt_ip:'Our flexible plans and add-ons are designed to grow with your business. Contact us for help choosing or to get a custom quote.',
            navjb:'SAVE',
            paytoptxt:'This plan includes the biggest savings and is fully refundable for 30 days.',
            total:'Total',
            paylisttotel_week_l:'USD ',
            paylisttotel_week_r:' billed now,then billed every week',
            paylisttotel_mon1_l:'USD ',
            paylisttotel_mon1_r:' billed now,then billed every 1 month',
            paylisttotel_mon12_l:'USD ',
            paylisttotel_mon12_r:' billed now,then billed every 12 months',
            paybest_h5:'PIA S5 Proxy\'s one-day unlimited  plan is Billing by time, unlimited number of IPs used',
            paybest1:'180+ countries around the world',
            paybest2:'50M+ residential proxy',
            paybest3:'SOCKS5',
            paybest4:'Ensure maximum anonymity',
            paybest5:'99.9% success rate',
            paybest6:'24/7 Email and implementation chat support',
            unlimili1:'Unlimited IP usage',
            unlimili2:'Billing by time',
            unlimili3:'Only available on one client',
            paybest_ip1:'180+ countries around the world',
            paybest_ip1_1:'Only US resources',
            paybest_ip2:'50M+ residential proxy',
            paybest_ip2_1:'3M+ residential proxy',
            paybest_ip3:'SOCKS5',
            paybest_ip4:'Ensure maximum anonymity',
            paybest_ip5:'99.9% success rate',
            paybest_ip6:'24/7 Email and implementation chat support',
            needpay:'You need pay：',
            baynow:'Buy Now',
            yousave:'You save：',
        },
        cn: {
            paynam1:'PIA VPN代理管理器的灵活代理计划',
            paynam2:'5000万匿名IP',
            paynam3:'无限连接',
            paynam4:'30天退款保证',
            cont_h1_l_ip:'Choose the right plan that fits your ',
            cont_h1_c_ip:'business.',
            cont_h1_r_ip:'',
            cont_h_txt_ip:'Our flexible plans and add-ons are designed to grow with your business. Contact us for help choosing or to get a custom quote.',
            navjb:'SAVE',
            paytoptxt:'该计划包括最大的节省，可在 30 天内全额退款。',
            total:'总计',
            paylisttotel_week_l:'现在收费 ',
            paylisttotel_week_r:' 美元，然后每周收费',
            paylisttotel_mon1_l:'现在收费 ',
            paylisttotel_mon1_r:' 美元，然后每 1 个月收费一次',
            paylisttotel_mon12_l:'现在收费 ',
            paylisttotel_mon12_r:' 美元，然后每 12 个月收费一次',
            paybest1:'无限安全浏览',
            paybest2:'30天退款保证',
            paybest3:'180 个国家，7800 台服务器',
            paybest4:'5000万匿名IP',
            paybest5:'静态或动态 IP',
            paybest6:'7*24电子邮件和实时聊天支持',
            paybest_ip1:'全球180多个国家',
            paybest_ip2:'50M+住宅代理',
            paybest_ip3:'SOCKS5',
            paybest_ip4:'确保最大程度的匿名性',
            paybest_ip5:'99.9% 成功率',
            paybest_ip6:'24/7 电子邮件和实施聊天支持',
            needpay:'您需要支付：',
            baynow:'立即购买',
            yousave:'节省：',
        },
        hk: {
            total:'總計',
            paybest_h5:'PIA S5 Proxy 的一日無限計劃是按時間計費，使用的ip數不限',
            paybest_ip1:'全球180多個國家',
            paybest_ip1_1:'只有美國資源',
            paybest_ip2:'5千萬住宅代理',
            paybest_ip2_1:'3百萬住宅代理',
            paybest_ip3:'Socks5',
            paybest_ip4:'確保最大程度的匿名性',
            paybest_ip5:'99.9%成功率',
            paybest_ip6:'7*24電子郵件和實時聊天支持',
            unlimili1:'無限 IP 使用',
            unlimili2:'按時間計費',
            unlimili3:'僅在一個客戶端上可用',
        },
    }
    let langobj = PAY_ALL_LANG_JSON[lang]
    for (const k in langobj) {
        $('.lang_'+k).html(langobj[k])
    }
    let users = localStorage.getItem('ACCESS_TOKEN_MD')
    if(users != null && users != '' && users != undefined){
        users = users.replace(/\%3D/g, "=").replace(/\%3d/g, "=").replace(/\%2F/g, "/").replace(/\%2f/g, "/").replace(/\%2b/g, '+')
    }
    if($('#get_package_url').length > 0){
        let getpackurl = $('#get_package_url').val()
        common.ajax_jsonp(getpackurl, {s:userinfotxt}, function (data) {
            let arr = JSON.parse(data).ret_data
            let html = ''
            
            for (let i = 0; i < arr.length; i++) {
                let lihtml = ''
                if(arr[i].type == 'week'){
                    if(arr[i].can_pay){
                        lihtml += `<div class="li li-week package-${arr[i].id} liType-${arr[i].pak_type}" data-id="${arr[i].id}" data-value="${arr[i].value}" data-price="${arr[i].price}" data-originprice="${arr[i].origin_price}">`
                    }else{
                        lihtml += `<div class="li li-week-no com-disabled package-${arr[i].id} liType-${arr[i].pak_type}" data-id="${arr[i].id}" data-value="${arr[i].value}" data-price="${arr[i].price}" data-originprice="${arr[i].origin_price}">`
                    }
                }else{
                    if(arr[i].is_top == 1){
                        lihtml += `<div class="li li1 package-${arr[i].id} liType-${arr[i].pak_type}" data-id="${arr[i].id}" data-value="${arr[i].value}" data-price="${arr[i].price}" data-originprice="${arr[i].origin_price}">`
                    }else{
                        lihtml += `<div class="li package-${arr[i].id} liType-${arr[i].pak_type}" data-id="${arr[i].id}" data-value="${arr[i].value}" data-price="${arr[i].price}" data-originprice="${arr[i].origin_price}">`
                    }
                }
    
                html += `${lihtml}
                            ${arr[i].type == 'week' 
                            ? `<div class="li-border"></div>
                                <div class="top-jiaobiao2"><span>New User</span></div>` 
                            : ``}
                            ${arr[i].discount_desc == ''
                            ? ``
                            : `<div class="top-jiaobiao1" data-oasnief="${arr[i].is_top}"><span>${langobj.navjb}</span>&nbsp;${arr[i].discount_desc}</div>`}
                            ${arr[i].is_top == 1
                            ? `<div class="top-jiaobiao">Most Popular</div>
                                <div class="li-border">
                                    <div class="zan">
                                        <img src="${static_url}/index/img/zan.svg" alt="zan">
                                        <span>${langobj.paytoptxt}</span>
                                    </div>
                                </div>`
                            : ``}
                            <div class="li-cont">
                                <div class="pay-name-box">
                                    <div class="pay-name">${arr[i].name}</div>
                                </div>
                                <div class="pay-mony-box">
                                    <div class="pay-mony">
                                        ${arr[i].type == 'week'
                                        ? `<p>USD &nbsp;<span>${arr[i].unit}</span>/WEEK</p>`
                                        : `<p>USD &nbsp;<span>${arr[i].unit}</span>/MO</p>`}
                                    </div>
                                </div>
                                <div class="pay-li-fot">
                                    <div class="check">
                                        <div class="quan"></div>
                                    </div>
                                    <div class="f-txt txt1"><span>${langobj.total}</span>: ${arr[i].price} <b>${arr[i].origin_price}</b></div>
                                </div>
                            </div>
                        </div>`
            }
            $('.payList').html(html)
            $('.pay-list').find('.li').eq(1).click()
        });
    }
    if($('#pay_ip_url').length > 0){
        let payipurl = $('#pay_ip_url').val()
        common.ajax_jsonp(payipurl, {s:userinfotxt}, function (data) {
            let arr_nor = JSON.parse(data).ret_data.normal
            let arr_nor_six = JSON.parse(data).ret_data.normal_six
            let arr_nor_day = JSON.parse(data).ret_data.normal_dat
            let arr_nor_time = JSON.parse(data).ret_data.normal_time
            let html1 = ''
            let html2 = ''
            let html3 = ''
            let html4 = ''
            for (let i = 0; i < arr_nor.length; i++) {
                let savehtml = ''
                let payname = arr_nor[i].gift > 0 ? `${arr_nor[i].gift > 0 ? `<div class="pay-name">${arr_nor[i].value}<span>+${arr_nor[i].gift}IPs</span></div>` :``}` : `<div class="pay-name">${arr_nor[i].name}</div>`
                if(arr_nor[i].is_top == 1){
                    if(arr_nor[i].desc != ''){
                        savehtml = '<div class="pay-ipsave">'+arr_nor[i].desc+'</div>'
                    }
                    if(arr_nor[i].discount_desc != ''){
                        // savehtml = `<div class="pay-ipsave">
                        //                 <div class="p1">NEW USER</div>
                        //                 <div class="p2">${arr_nor[i].discount_desc} <div class="off">% <br> OFF</div></div>
                        //             </div>`
                        savehtml = '<div class="pay-ipsave">'+arr_nor[i].discount_desc+'% <div class="off">OFF</div></div>'
                    }
                    if(arr_nor[i].gift !== 0){
                        // savehtml = '<div class="pay-ipsave">'+arr_nor[i].discount_desc+'% <div class="off">OFF</div></div>'
                        // savehtml = `<div class="pay-ipsave">
                        //                 <div class="p1">OLD USER</div>
                        //                 <div class="p2">${arr_nor[i].discount_desc} <div class="off">% <br> OFF</div></div>
                        //             </div>`
                        payname = `<div class="pay-name">${arr_nor[i].value}<span style="color:#FF602D">+${arr_nor[i].gift}IPs</span></div>`
                    }
                }else{
                    // if(arr_nor[i].gift > 0){
                    //     savehtml = '<div class="pay-ipsave">+'+arr_nor[i].gift+' <div class="off">IPs</div></div>'
                    // }
                    if(arr_nor[i].desc != ''){
                        savehtml = '<div class="pay-ipsave">'+arr_nor[i].desc+'</div>'
                    }
                }
                html1 += `<div class="li package-${arr_nor[i].id} liType-${arr_nor[i].pak_type} ${arr_nor[i].is_top == 1 ? 'istop' :''} ${arr_nor[i].stand_out == 1 ? 'stand_out' :''}" data-id="${arr_nor[i].id}" data-value="${arr_nor[i].value}" data-price="${(arr_nor[i].activity_price == null || arr_nor[i].activity_price == 0 ) ?  arr_nor[i].price : arr_nor[i].activity_price}" data-originprice="${arr_nor[i].origin_price}">
                            ${savehtml}
                            <div class="li-cont">
                                <div class="pay-name-box">
                                    ${payname}
                                </div>
                                <div class="pay-mony-box">
                                    <div class="pay-mony">
                                        <p><span>$${arr_nor[i].unit}</span>/IP</p>
                                    </div>
                                </div>
                                ${arr_nor[i].origin_unit > 0 ? `<div class="pay-orginprc">$${(arr_nor[i].origin_unit*1).toFixed(2)}/IP</div>`: ``}
                                <div class="pay-li-fot">
                                    <div class="check">
                                        <div class="quan"></div>
                                    </div>
                                    <div class="f-txt txt1"><span>${langobj.total}</span>: <span class="rtxt">$${(arr_nor[i].activity_price == null || arr_nor[i].activity_price == 0 )?  arr_nor[i].price : arr_nor[i].activity_price}</span> ${arr_nor[i].origin_price != 0 ? `<span class="dtxt">$${arr_nor[i].origin_price}</span>` : ``}</div>
                                </div>
                            </div>
                        </div>`
            }
            for (let i = 0; i < arr_nor_six.length; i++) {
                let savehtml = ''
                if(arr_nor_six[i].is_top == 1){
                    if(arr_nor_six[i].desc != ''){
                        savehtml = '<div class="pay-ipsave">'+arr_nor_six[i].desc+'</div>'
                    }
                    if(arr_nor_six[i].discount_desc != ''){
                        // savehtml = `<div class="pay-ipsave">
                        //                 <div class="p1">Discount</div>
                        //                 <div class="p2">${arr_nor_six[i].discount_desc} <div class="off">% <br> OFF</div></div>
                        //             </div>`
                        savehtml = '<div class="pay-ipsave">'+arr_nor_six[i].discount_desc+'% <div class="off">OFF</div></div>'
                    }
                    if(arr_nor_six[i].gift !== 0){
                        // savehtml = `<div class="pay-ipsave">
                        //                 <div class="p1">Discount</div>
                        //                 <div class="p2">${arr_nor_six[i].discount_desc} <div class="off">% <br> OFF</div></div>
                        //             </div>`
                        // savehtml = '<div class="pay-ipsave">'+arr_nor_six[i].discount_desc+'% <div class="off">OFF</div></div>'
                    }
                    
                }else{
                    if(arr_nor[i].gift > 0){
                        savehtml = '<div class="pay-ipsave">+'+arr_nor[i].gift+' <div class="off">IPs</div></div>'
                    }
                    if(arr_nor[i].desc != ''){
                        savehtml = '<div class="pay-ipsave">'+arr_nor[i].desc+'</div>'
                    }
                }
                html2 += `<div class="li package-${arr_nor_six[i].id} liType-${arr_nor_six[i].pak_type} ${arr_nor_six[i].is_top == 1 ? 'istop' :''} ${arr_nor_six[i].stand_out == 1 ? 'stand_out' :''}" data-id="${arr_nor_six[i].id}" data-value="${arr_nor_six[i].value}" data-price="${(arr_nor_six[i].activity_price == null || arr_nor_six[i].activity_price == 0 ) ?  arr_nor_six[i].price : arr_nor_six[i].activity_price}" data-originprice="${arr_nor_six[i].origin_price}">
                            ${savehtml}
                            <div class="li-cont">
                                <div class="pay-name-box">
                                    <div class="pay-name">${arr_nor_six[i].name}</div>
                                </div>
                                <div class="pay-mony-box">
                                    <div class="pay-mony">
                                        <p><span>$${arr_nor_six[i].unit}</span>/IP</p>
                                    </div>
                                </div>
                                ${arr_nor_six[i].origin_unit > 0 ? `<div class="pay-orginprc">$${(arr_nor_six[i].origin_unit*1).toFixed(2)}/IP</div>`: ``}
                                <div class="pay-li-fot">
                                    <div class="check">
                                        <div class="quan"></div>
                                    </div>
                                    <div class="f-txt txt1"><span>${langobj.total}</span>: <span class="rtxt">$${(arr_nor_six[i].activity_price == null || arr_nor_six[i].activity_price == 0 ) ?  arr_nor_six[i].price : arr_nor_six[i].activity_price}</span> ${arr_nor_six[i].origin_price != 0 ? `<span class="dtxt">$${arr_nor_six[i].origin_price}</span>` : ``}</div>
                                </div>
                            </div>
                        </div>`
            }
            for (let i = 0; i < arr_nor_day.length; i++) {
                let savehtml = ''
                if(arr_nor_day[i].desc != ''){
                    savehtml = '<div class="pay-ipsave">'+arr_nor_day[i].desc+'</div>'
                }
                if(arr_nor_day[i].discount_desc != ''){
                    savehtml = '<div class="pay-ipsave">'+arr_nor_day[i].discount_desc+'% <div class="off">OFF</div></div>'
                }
                html3 += `<div class="li package-${arr_nor_day[i].id} liType-${arr_nor_day[i].pak_type} ${i == 4 ? 'istop' :''}" data-id="${arr_nor_day[i].id}" data-value="${arr_nor_day[i].value}" data-price="${(arr_nor_day[i].activity_price == null || arr_nor_day[i].activity_price == 0 ) ?  arr_nor_day[i].price : arr_nor_day[i].activity_price}" data-originprice="${arr_nor_day[i].origin_price}">
                            ${savehtml}
                            <div class="li-cont">
                                <div class="pay-name-box">
                                    <div class="pay-name">${arr_nor_day[i].name}</div>
                                </div>
                                <div class="pay-mony-box">
                                    <div class="pay-mony">
                                        <p><span>$${arr_nor_day[i].unit}</span>/IP</p>
                                    </div>
                                </div>
                                ${arr_nor_day[i].origin_unit > 0 ? `<div class="pay-orginprc">$${(arr_nor_day[i].origin_unit*1).toFixed(2)}/IP</div>`: ``}
                                <div class="pay-li-fot">
                                    <div class="check">
                                        <div class="quan"></div>
                                    </div>
                                    <div class="f-txt txt1"><span>${langobj.total}</span>: <span class="rtxt">$${(arr_nor_day[i].activity_price == null || arr_nor_day[i].activity_price == 0 ) ?  arr_nor_day[i].price : arr_nor_day[i].activity_price}</span> ${arr_nor_day[i].origin_price != 0 ? `<span class="dtxt">$${arr_nor_day[i].origin_price}</span>` : ``}</div>
                                </div>
                            </div>
                        </div>`
            }
            for (let i = 0; i < arr_nor_time.length; i++) {
                html4 += `<div class="li-unlimit-box">
                            <div class="liunlimit-l">
                                <h4>One-Day <b>Unlimited</b> IP Plan</h4>
                                <h5>${langobj.paybest_h5}</h5>
                                <div class="best-ul">
                                    <div class="best-li">
                                        <img src="${static_url}/index/img/pay/best_ip1.svg" alt="best1">
                                        <p class="lang_paybest_ip1">${langobj.paybest_ip1}</p>
                                    </div>
                                    <div class="best-li">
                                        <img src="${static_url}/index/img/pay/best_ip2.svg" alt="best1">
                                        <p class="lang_paybest_ip2">${langobj.paybest_ip2}</p>
                                    </div>
                                    <div class="best-li">
                                        <img src="${static_url}/index/img/pay/best_ip3.svg" alt="best1">
                                        <p class="lang_paybest_ip3">${langobj.paybest_ip3}</p>
                                    </div>
                                    <div class="best-li">
                                        <img src="${static_url}/index/img/pay/best_ip4.svg" alt="best1">
                                        <p class="lang_paybest_ip4">${langobj.paybest_ip4}</p>
                                    </div>
                                    <div class="best-li">
                                        <img src="${static_url}/index/img/pay/best_ip5.svg" alt="best1">
                                        <p class="lang_paybest_ip5">${langobj.paybest_ip5}</p>
                                    </div>
                                    <div class="best-li">
                                        <img src="${static_url}/index/img/pay/best_ip6.svg" alt="best1">
                                        <p class="lang_paybest_ip6">${langobj.paybest_ip6}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="liunlimit-r">
                                <div class="cont unlimitLi package-{{$v.Id}}" data-id="${arr_nor_time[i].id}" data-value="${arr_nor_time[i].value}" data-price="${arr_nor_time[i].price}" data-originprice="${arr_nor_time[i].origin_price}">
                                    ${arr_nor_time[i].discount_desc == '' ? `` 
                                    : `<div class="pay-ipsave">
                                        <div class="txt">
                                            ${arr_nor_time[i].discount_desc} <div class="off">OFF</div>
                                        </div>
                                    </div>`}
                                    <div class="name">${arr_nor_time[i].name}</div>
                                    <div class="pic">
                                        <p>$${arr_nor_time[i].price}</p><b>/Day</b>
                                        ${arr_nor_time[i].origin_price == 0 ? `` : `<div class="old">$${arr_nor_time[i].origin_price}</div>`}
                                    </div>
                                    <div class="unlimit-ul">
                                        <div class="unli-li">
                                            <img src="${static_url}/index/img/pay/icon_click1.svg" alt="best1">
                                            <p>${langobj.unlimili1}</p>
                                        </div>
                                        <div class="unli-li">
                                            <img src="${static_url}/index/img/pay/icon_click1.svg" alt="best1">
                                            <p>${langobj.unlimili2}</p>
                                        </div>
                                        <div class="unli-li">
                                            <img src="${static_url}/index/img/pay/icon_click1.svg" alt="best1">
                                            <p>${langobj.unlimili3}</p>
                                        </div>
                                    </div>
                                    <a href="${$('#ipchangerPayUrl').val()}?paynavVal=4" target="_blank" class="ipchanger-btn">Buy Now</a>
                                    <div class="b-type">
                                        <div class="type-box">
                                            <img src="${static_url}/index/img/pay/paytype_visa.svg" alt="visa">
                                            <img src="${static_url}/index/img/pay/paytype_mastercard.svg" alt="mastercard">
                                            <img src="${static_url}/index/img/pay/paytype_unionpay.svg" alt="unionpay">
                                            <img src="${static_url}/index/img/pay/paytype_alipay.svg" alt="alipay">
                                            <img src="${static_url}/index/img/pay/paytype_TRX26.svg" style="width: 24px;" alt="visa">
                                            <img src="${static_url}/index/img/pay/paytype_virtual1.png" style="width: 24px;" alt="visa">
                                            <img src="${static_url}/index/img/pay/paytype_virtual10.png" style="width: 24px;" alt="visa">
                                            <img src="${static_url}/index/img/pay/paytype_iospay.svg" alt="iospay">
                                            <img src="${static_url}/index/img/pay/paytype_googlepay.svg" alt="googlepay">
                                            <div class="type-more">...</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>`
            }
            $('.pcselect_paynav1').html(html1)
            $('.pcselect_paynav2').html(html2)
            $('.pcselect_paynav3').html(html3)
            $('.pcselect_paynav4').html(html4)
            $('.header_pic1').html(arr_nor[arr_nor.length-1].unit)
            $('.header_pic2').html(arr_nor_six[arr_nor_six.length-1].unit)
            $('.header_pic3').html(arr_nor_day[arr_nor_day.length-1].unit)
            $('.header_pic4').html((arr_nor_time[arr_nor_time.length-1].unit*1).toFixed(0))
            console.log($('.pcselect_paynav1').find('.li.stand_out'));
            $('.pcselect_paynav1').find('.li.stand_out').click()
        });
    }
    $('.payList').on('click','.li',function () {
        $(this).addClass('active').siblings().removeClass('active')
        let money = $(this).data('price')
        let difference_money = ($(this).data('originprice') - money).toFixed(2)
        $("i[name='package_money']").html(formatDecimal(money,2))
        $("i[name='difference_money']").html(difference_money)
        if($(this).parents('.payList').hasClass('pcselect_paynav1')){
            $('#pay_liIndex_paynav1').val($(this).data('id'))
        }else if($(this).parents('.payList').hasClass('pcselect_paynav2')){
            $('#pay_liIndex_paynav2').val($(this).data('id'))
        }else if($(this).parents('.payList').hasClass('pcselect_paynav3')){
            $('#pay_liIndex_paynav3').val($(this).data('id'))
        }
    })

    $('.paylist-nav .nav-li').on('click',function () {
        $(this).addClass('active').siblings().removeClass('active')
        let type = $(this).data('type')
        sessionStorage.setItem('listNavType',type)
        $('.payList').hide()
        $('.pcselect_'+type).show()
        let id = ''
        if(type == 'paynav1'){
            let senior_id = $('#pay_liIndex_paynav1').val()
            if(senior_id == ''){
                senior_id = $('.pcselect_paynav1 .li').eq(3).data('id')
                $('#pay_liIndex_paynav1').val(senior_id)
            }else{
                $('.package-' + senior_id).click()
            }
        }else if (type == 'paynav2'){
            let senior_id = $('#pay_liIndex_paynav2').val()
            if(senior_id == ''){
                senior_id = $('.pcselect_paynav2 .li').eq(3).data('id')
                $('#pay_liIndex_paynav2').val(senior_id)
                $('.pcselect_paynav2').find('.li').eq(3).click()
            }else{
                $('.package-' + senior_id).click()
            }
            $('.bestPayBtn').attr('href',$('#ipchangerPayUrl').val() + '?paynavVal=2')
        }else if (type == 'paynav3'){
            let senior_id = $('#pay_liIndex_paynav3').val()
            if(senior_id == ''){
                senior_id = $('.pcselect_paynav3 .li').eq(3).data('id')
                $('#pay_liIndex_paynav3').val(senior_id)
                $('.pcselect_paynav3').find('.li').eq(3).click()
            }else{
                $('.package-' + senior_id).click()
            }
            $('.bestPayBtn').attr('href',$('#ipchangerPayUrl').val() + '?paynavVal=3')
        }else if (type == 'paynav4'){
            $('.unlimitLi').click()
        }
        if(type == 'paynav4'){
            $('.pay-best').hide()
        }else{
            $('.pay-best').show()
        }
        if(type == 'paynav3'){
            $('.lang_paybest_ip1').html(langobj.paybest_ip1_1)
            $('.lang_paybest_ip2').html(langobj.paybest_ip2_1)
        }else{
            $('.lang_paybest_ip1').html(langobj.paybest_ip1)
            $('.lang_paybest_ip2').html(langobj.paybest_ip2)
        }
    })


})
function formatDecimal(num, decimal) {
    num = num+'';
    let index = num.indexOf('.')
    if (index !== -1) {
        num = num.substring(0, decimal + index + 1)
    } else {
        num = num.substring(0)
    }
    return parseFloat(num).toFixed(decimal)
}
