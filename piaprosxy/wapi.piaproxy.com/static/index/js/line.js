$(function () {
    let static_url = $('#static_url').val()
    $('.line_nav .li').on('click',function () {
        $(this).addClass('active').siblings().removeClass('active')
        let type = $(this).data('type')
        $('#lineType').val(type)
        getLineList(1)
        // $('.line-list').find('.list-table').hide()
        // $('.table_'+numb).show()
    })
    getLineList(1)

    // free low high
    function getLineList(page) {
        let getSrvListurl = $('#getSrvList').val()
        let parms = {
            page: page,
            s: localStorage.getItem('ACCESS_TOKEN_MD'),
            type: $('#lineType').val(),
            key_word: $('.list_search_ipt').val(),
            size: 10,
        }
        common.ajax_jsonp(getSrvListurl, parms, function (data) {
            let arr = JSON.parse(data).ret_data.list
            let html = ''
            for (const i in arr) {
                html += '<div class="tr">'+
                            '<div class="td td1">'+
                                '<img class="flag" src="'+arr[i].flag+'" alt="national flag">'+
                                '<p class="flag-p">'+arr[i].country_show+'</p>'+
                            '</div>'+
                            '<div class="td td2">'+
                                '<p>'+arr[i].adsl_num+'</p>'+
                            '</div>'+
                            '<div class="td td3">'+
                                '<p>'+arr[i].agreement+'</p>'+
                            '</div>'+
                            '<div class="td td4">'+
                                '<img class="icon-gou" src="'+static_url+'/index/img/line/icon_gou.svg" alt="icon">'+
                            '</div>'+
                            '<div class="td td6">'+
                                '<p class="terminal">'+
                                    '<img src="'+static_url+'/index/img/line/supt_1.svg" alt="icon">'+
                                    '<span></span>'+
                                    '<img src="'+static_url+'/index/img/line/supt_2.svg" alt="icon">'+
                                    '<span></span>'+
                                    '<img src="'+static_url+'/index/img/line/supt_3.svg" alt="icon">'+
                                '</p>'+
                            '</div>'+
                            '<div class="td td5">'+
                                '<p class="p1 copytxt">'+(arr[i].domain == '' ? '**************':arr[i].domain)+'</p>'+
                                (arr[i].domain == '' ? '' : '<div class="hover-box box1">'+
                                    '<div class="cont">'+arr[i].domain+'</div>'+
                                '</div>'+
                                '<img class="td-copy" src="'+static_url+'/index/img/line/icon_copy.svg" alt="copy">')+
                            '</div>'+
                            '<div class="td td7">'+
                                '<p class="p2 copytxt">'+(arr[i].username == '' ? '**************':arr[i].username)+'</p>'+
                                (arr[i].username == '' ? '':'<img class="td-copy" src="'+static_url+'/index/img/line/icon_copy.svg" alt="copy">')+
                            '</div>'+
                            '<div class="td td8">'+
                                '<p class="p3 copytxt">'+(arr[i].radius_pass == '' ? '**************':arr[i].radius_pass)+'</p>'+
                                (arr[i].radius_pass == '' ? '':'<div class="hover-box box2">'+
                                    '<div class="cont">'+arr[i].radius_pass+'</div>'+
                                '</div>'+
                                '<img class="td-copy" src="'+static_url+'/index/img/line/icon_copy.svg" alt="copy">')+
                            '</div>'+
                            '<div class="td td9">'+
                                '<p class="p3 copytxt">'+arr[i].l2tp_key+'</p>'+
                                (arr[i].radius_pass == '' ? '':'<div class="hover-box box2">'+
                                    '<div class="cont">'+arr[i].l2tp_key+'</div>'+
                                '</div>'+
                                '<img class="td-copy" src="'+static_url+'/index/img/line/icon_copy.svg" alt="copy">')+
                            '</div>'+
                        '</div>'
            }
            $('.lineList').html(html)
            var page_total = Math.ceil(JSON.parse(data).ret_data.total / parms.size);
            laypage({
                cont: 'pageTime',
                pages: page_total,
                curr: page || 1,
                groups: page_total > 5 ? 5 : page_total,
                jump: function (dobj, first) {
                    if (!first) {
                        getLineList(dobj.curr)
                    }
                },prev: '<'
                ,next: '>'
                ,first:false
                ,last:false
            });
        });
        
    }

    $('.hostSearch').on('click',function () {
        let txt = $(this).data('txt')
        $('.list_search_ipt').val(txt)
        getLineList(1)
    })
    $('.searchClose').on('click',function () {
        $('.list_search_ipt').val('')
        getLineList(1)
    })
    $('.banner .ipt-box').on('mouseenter',function () {
        if($(this).find('.list_search_ipt').val() != ''){
            $(this).find('.searchClose').show()
        }
    })
    $('.banner .ipt-box').on('mouseleave',function () {
        $(this).find('.searchClose').hide()
    })

    $('.lineSarch').on('click',function () {
        getLineList(1)
    })
    $('.lineExport').on('click',function () {
        let getSrvListurl = $('#getSrvList').val()
        let parms = {
            page: 1,
            s: localStorage.getItem('ACCESS_TOKEN_MD'),
            type: $('#lineType').val(),
            key_word: $('.list_search_ipt').val(),
            size: 100000,
        }
        common.ajax_jsonp(getSrvListurl, parms, function (data) {
            let arr = JSON.parse(data).ret_data.list
            let tableHtml = ''
            for (const i in arr) {
                tableHtml += '<tr>'+
                                '<td>'+ arr[i].country_show+'</td>'+
                                '<td>'+arr[i].adsl_num +'</td>'+
                                '<td>'+arr[i].agreement+'</td>'+
                                '<td>'+arr[i].domain+'</td>'+
                                '<td>PC | IOS | Android'+'</td>'+
                                '<td>'+arr[i].username+'</td>'+
                                '<td>'+arr[i].radius_pass+'</td>'+
                                '<td>'+arr[i].l2tp_key+'</td>'+
                            '</tr>'
            }
            $('.exportTabList').html(tableHtml)
            $(".exportTable").table2excel({
                exclude: ".noExl",
                name: "Excel Document Name",
                filename: "myFileName",
                exclude_img: true,
                exclude_links: true,
                exclude_inputs: true
            });
        });
    })
    $(document).on('click','.td-copy',function () {
        let val = $(this).siblings('.copytxt').html()
        $("#copyIptVal").val(val)
        var a = $("#copyIptVal");
        a.select();
        document.execCommand("Copy");
        layer.msg("Copy success!");
    })
})