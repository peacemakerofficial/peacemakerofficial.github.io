$(function () {
   
    $(document).on('click','.at_present_a',function () {
        setTimeout(() => {
            let top = $(document).scrollTop() - 80
            $(document).scrollTop(top)
        }, 1);
    })
    $('#keyword').keyup(function (event) {
        if (event.keyCode == 13) {
            search_do();
        }
    });
    $('#keyword').on('focus',function () {
        $(this).attr('placeholder','')
    })
    $('#keyword').on('blur',function () {
        $(this).attr('placeholder','Ask a question')
    })
    $('#search_submit').on('click', function () {
        search_do();
    });
    let dheight = $(document.body).height();
    $(document).scroll(function () {
        if($(document).scrollTop() > (dheight - 1100)){
            $('.help-right').hide()
        }else{
            $('.help-right').show()
        }
        if($('.blog-next-box').length > 0){
            let top = $(document).scrollTop() 
            let height = $(window).height() + top
            let signtop = $('.blog-next-box').offset().top
            let scroll_bom = $('.scroll_bom').offset().top
            console.log($('.blog-card-cont').height());
            if( $('.blog-card-cont').height() > 610){
                if(height-20 > signtop){
                    if(height < scroll_bom){
                        $('.blog-next').fadeIn()
                        if(height - signtop - 132 > 0){
                            $('.blog-next').css('top',height - signtop - 132)
                        }
                    }
                }else{
                    $('.blog-next').fadeOut()
                }
            }else{
                if(height-100 > signtop){
                    $('.blog-next').fadeIn()
                    $('.blog-next').css({'position':'relative','top':'0'})
                }else{
                    $('.blog-next').fadeOut()
                }
            }
        }
        // if(top >)
    })

    if(getpath(1) == 'help' || getpath(1) == 'use' || getpath(1) == 'explain'){
        $('.help-nav a').eq(0).addClass('active').siblings().removeClass('active')
    }else if(getpath(1) == 'know' || getpath(1) == 'iptips' || getpath(1) == 'helps' || getpath(1) == 'newhot' || getpath(1) == 'http' || getpath(1) == 'https' || getpath(1) == 'https' || getpath(1) == 'python' || getpath(1) == 'ipproxy' || getpath(1) == 'suidao' || getpath(1) == 'freeip' || getpath(1) == 'gaoniip' || getpath(1) == 'proxyserver' || getpath(1) == 'dynamic'){
        $('.help-nav a').eq(1).addClass('active').siblings().removeClass('active')
    }
    function search_do() {
        var keyword = $("#keyword").val();
        // var pid = $("#pid").val();
        if (keyword == '') {
            toastr.warning('Please enter a search keyword');
            return false;
        }
        if (keyword.length < 2) {
            toastr.warning('Search keywords must have at least 2 characters');
            return false;
        }
        window.location.href = "/blog_search?keyword=" + keyword ;
    }

    function get_city_code(page, key = '') {
        common.ajax_jsonp($('#get_city_code').val(), {'page': page, 'key': key}, function (rt) {
            var obj = JSON.parse(rt);
            $('#country_code').html(obj.ret_data.list);
            laypage({
                cont: 'page_city',
                pages: obj.ret_data.last,
                curr: obj.ret_data.current || 1, 
                groups: obj.ret_data.last > 5 ? 5 : obj.ret_data.last,
                jump: function (dobj, first) { 
                    if (!first) {
                        get_city_code(dobj.curr, key);
                    }
                }
            });
        });
    }
    if(getpath(1) == 'citylist'){
        get_city_code(1);
    }
    $('.search-btn').click(function () {
        var key = $('input[name="search_area"]').val();
//      
        $('#country_code').html('<img src="' + static_path + '/index/img/loading.gif" style="margin-top: 100px;">');
        $('#page_city').html('');
        get_city_code(1, key);
    });
    $(document).on('click', '#export', function () {
        var key = $('input[name="search_area"]').val();
        var url = $('#get_city_code').val();
        var param = 'key=' + key + '&export_type=1';
        window.open(url + '?' + param);
    });
    $('#search_areaipt').keyup(function (event) {
        if (event.keyCode == 13) {
            $('.search-btn').click()
        }
    });

    function getlabel() {
        common.ajax_jsonp($('#get_label_article').val(), {'label': $('#label').val(), 'ids': $('#ids').val()}, function (rt) {
            let staticurl = $('#static_url').val()
            let blogListLength = $('.blog_info_list').children().length
            let blogP = $('.blog_info_list').children().eq(Math.ceil(blogListLength/2))
            var obj = JSON.parse(rt).ret_data;
            if(obj.length == 1){
                blogP.before(`<div class="blog-infoli-box">
                                <div class="tit">Related articles</div>
                                <a href="${obj[0].article_url}.html" class="li">
                                    <img src="${staticurl}/index/img/blog/p1.svg" alt="img">
                                    <div class="txt-box">
                                        <p>${obj[0].title}</p>
                                        <span>Richie Brody <i> on ${timestampToTime(obj[0].create_time,3)}</i></span>
                                    </div>
                                </a>
                            </div>`)
            }else if(obj.length == 2){
                blogP.before(`<div class="blog-infoli-box">
                                <div class="tit">Related articles</div>
                                <a href="${obj[0].article_url}.html" class="li">
                                    <img src="${staticurl}/index/img/blog/p1.svg" alt="img">
                                    <div class="txt-box">
                                        <p>${obj[0].title}</p>
                                        <span>Richie Brody <i> on ${timestampToTime(obj[0].create_time,3)}</i></span>
                                    </div>
                                </a>
                                <a href="${obj[1].article_url}.html" class="li" style="margin-top:15px">
                                    <img src="${staticurl}/index/img/blog/p2.svg" alt="img">
                                    <div class="txt-box">
                                        <p>${obj[1].title}</p>
                                        <span>Richie Brody <i> on ${timestampToTime(obj[1].create_time,3)}</i></span>
                                    </div>
                                </a>
                            </div>`)

            }
        });
    }
    
    if($('#blogInfoid').val()){
        let url = $('#blogInfoviews').val()
        let id = $('#blogInfoid').val()
        common.ajax_jsonp(url, {id:id,}, function (rt) {
            var obj = JSON.parse(rt);
        });
    }
    
    getlabel()


})
