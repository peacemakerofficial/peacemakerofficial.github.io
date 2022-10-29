var err_ico = "<i style='color:#357EBD;font-size: 16px;' class='fa fa-info-circle'></i>&nbsp;";
var loading_layer_index;
var upload_layer;
var scan_values = "";
var time_clock;
var common = {
    check_ajax_post: function (rt, success, error, not_obj) {
        var obj;
        if (typeof (rt) == 'string') {
            obj = common.str2json(rt);
        } else if (typeof (rt) == 'object') {
            obj = rt;
        }
        if (typeof (obj) == 'object') {
            if (obj.code == "1") {
                if (typeof (success) == 'function') {
                    success(obj);
                } else {
                    layer.msg(success);
                }
            } else {
                if (typeof (error) == 'function') {
                    error(obj);
                } else if (error === false) {
                } else {
                    console.log('');
                }
            }
        } else {
            if (typeof (not_obj) == 'function') {
                not_obj(obj);
            } else {
                layer.msg(not_obj);
            }
        }

    },
    "inarray": function (search, array) {
        for (var i in array) {
            if (array[i] == search) {
                return true;
            }
        }
        return false;
    },
    "ajax_post": function (obj, param, async, success, loading, show_model) {
        if (typeof (obj) === 'object' && obj) {
            type = obj.type ? obj.type : '';
            url = obj.url ? obj.url : '';
            param = obj.param ? obj.param : '';
            async = obj.async ? obj.async : '';
            success = obj.success ? obj.success : '';
            loading = obj.loading ? obj.loading : '';
            show_model = obj.show_model ? obj.show_model : '';
        } else if (typeof (obj) === 'string') {
            url = obj;
        } else
            return false;

        loading = typeof (loading) == "undefined" ? false : loading;
        show_model = typeof (show_model) == "undefined" ? false : show_model;
        if (loading == true && !show_model) {
            common.loading_layer(2, false);
        } else if (loading == true && show_model === true) {
            common.loading_layer(2, [0.3, "#444"]);
        } else if (loading == true && show_model) {
            common.loading_layer(2, show_model);
        } else if (!common.empty(loading) && !show_model) {
            common.loading_layer(loading, show_model);
        } else {

        }

        var rtData;
        async = async ? true : false;
        var error;
        if (success.error && typeof (success.error) == 'function') {
            error = success.error;
        }
        if (success.error && typeof (success.success) == 'function') {
            success = success.success;
        }

        $.ajax({
            url: url,
            type: 'post',
            dataType: 'html',
            async: async,
            data: param,
            success: typeof (success) == "function" ? success : function (data) {

                rtData = data;
            },
            error: typeof (error) == "function" ? error : function () {
                if (loading) {
                    common.loading_layer_close();
                }
            },
            complete: function () {
                if (loading) {
                    common.loading_layer_close();
                }
            }
        });
        return rtData;
    },

    "ajax_post_mobile": function (url, param, async, success) {

        url = url ? url : false;
        param = param ? param : false;
        async = async ? async : 'true';
        success = success ? success : false;
        //--------------------------------------------------
        loading_layer_index = layer.open({
            type: 2,
            content: 'loading',
            time: false,
            shadeClose: false
        });

        $.ajax({
            url: url,
            type: 'post',
            dataType: 'html',
            async: async,
            data: param,
            success: typeof (success) == "function" ? success : false,
            error: typeof (error) == "function" ? error : function () {
                layer.open({
                    content: 'Request error'
                    , skin: 'msg'
                    , time: 2 
                });

            },
            complete: function () {
                layer.close(loading_layer_index);
            }
        });
    },
    "str2json": function (str) {
        try {
            var json = eval('(' + str + ')');
            return json;
        } catch (e) {
            return false;
        }
    },
    "ajax_jsonp": function (url, param, success, loading, show_model, async) {
        loading = typeof (loading) == "undefined" ? false : loading;
        show_model = typeof (show_model) == "undefined" ? false : show_model;
        async = typeof (async) == 'undefined' ? true : async;

        if (loading) {
            common.loading_layer(show_model);
        }
        var rtData;
        $.ajax({
            url: url,
            type: 'post',
            dataType: 'html',
            async: async,
            data: param,
            beforeSend: function (request) {
            },
            success: function (data) {
                if (loading) {
                    common.loading_layer_close();
                }
                if (typeof (success) == 'function') {
                    success(data);

                }
            },
            complete: function () {
                if (loading) {
                    common.loading_layer_close();
                }
            }
        });
        return rtData;
    },
    "ajax_get": function (url, success, loading, show_model, async) {
        loading = typeof (loading) == "undefined" ? false : loading;
        show_model = typeof (show_model) == "undefined" ? false : show_model;
        async = typeof (async) == 'undefined' ? true : async;

        if (loading) {
            common.loading_layer(show_model);
        }
        var rtData;
        $.ajax({
            url: url,
            type: 'get',
            dataType: 'html',
            async: async,
            beforeSend: function (request) {
                var userid = $.cookie('userid');
                if (userid && userid != 'null') {
                    request.setRequestHeader("Authorization", "Bearer " + userid);
                }
            },
            success: function (data) {
                if (loading) {
                    common.loading_layer_close();
                }
                if (typeof (success) == 'function') {
                    success(data);
                }
            },
            complete: function () {
                if (loading) {
                    common.loading_layer_close();
                }
            }
        });
        return rtData;
    },
    "loading_layer": function (ico, shade) {
       
        $('.pop-loading').show();
    },
    "loading_layer_close": function () {
        $('.pop-loading').hide();
    },
    "str_to_time": function (datestr) {
        var new_str = datestr.replace(/:/g, "-");
        new_str = new_str.replace(/ /g, "-");
        var arr = new_str.split("-");
        for (var i = 0; i < 6; i++) {
            arr[i] = (typeof (arr[i]) != "string" || arr[i].length < 1) ? "00" : arr[i];
        }
        var datum = new Date(Date.UTC(arr[0], arr[1] - 1, arr[2], arr[3], arr[4], arr[5]));
        datum = datum.getTime() / 1000;
        datum -= 8 * 60 * 60;
        return datum; 
    },
    "empty": function (str) {
        if (str == null || str == 0 || $.trim(str) == '' || typeof (str) == "undefined" || parseInt(str) == 0 || str == false || str == "false")
            return true;
        return false;
    },
    "round": function (val, len) {
        val = parseFloat(val);
        return val.toFixed(len);
    },
    delay: function (func, time, i, flag) {
        flag = flag ? true : false;
        if (typeof (func) != "function") {
            return;
        }
        if (common.empty(i))
            i = 1;
        time_clock = window.setInterval(function () {
            i--;
            func();
            if (!flag) {
                if (i <= 0) {
                    window.clearInterval(time_clock);
                }
            }

        }, time);
    },
    chk_num: function (val) {
        if (!common.empty(val) || !isNaN(val)) {
            return val;
        } else
            return 0;
    },
    split_by_func: function (obj, id_tag, split) {
        !split && split == ',';
        var rt = '';
        $.each(obj, function (k) {
            var val = obj.eq(k).attr(id_tag);
            if (val) {
                rt = rt + val + split;
            }
        });
        return rt;
    },
    page: function (cont, pages, curr, exec) {
        laypage({
            "cont": cont,
            "pages": pages,
            "curr": curr,
            jump: function (obj, first) {
                exec && exec(obj, first);
            }
        });
    },
    count_down: function (sys_second, obj, callback) {
        var end = new Date().getTime() + sys_second;
        var timer = setInterval(function () {
            if (sys_second > 0) {
                sys_second = end - new Date().getTime();
                var day = Math.floor((sys_second / 1000 / 3600) / 24);
                var hour = Math.floor((sys_second / 1000 / 3600) % 24);
                var minute = Math.floor((sys_second / 1000 / 60) % 60);
                var second = Math.floor(sys_second / 1000 % 60);
                var haomiao = Math.floor(sys_second % 1000);
                haomiao = haomiao < 100 ? (haomiao + '0') : haomiao;
                var mss = haomiao.toString().substr(0, 2);
                if (obj) {
                    if (!obj.auto_carry_over) {
                        obj.day && $(obj.day).html(day);
                        obj.hour && $(obj.hour).html(hour < 10 ? "0" + hour : hour);
                        obj.min && $(obj.min).html(minute < 10 ? "0" + minute : minute);
                        obj.sec && $(obj.sec).html(second < 10 ? "0" + second : second);
                        obj.ms && $(obj.ms).html(mss);
                    } else {
                        if (hour > 0) {
                            obj.min && $(obj.min).html(hour < 10 ? "0" + hour : hour);
                            obj.sec && $(obj.sec).html(minute < 10 ? "0" + minute : minute);
                            obj.ms && $(obj.ms).html(second < 10 ? "0" + second : second);
                        } else {
                            obj.day && $(obj.day).html(day);
                            obj.hour && $(obj.hour).html(hour < 10 ? "0" + hour : hour);
                            obj.min && $(obj.min).html(minute < 10 ? "0" + minute : minute);
                            obj.sec && $(obj.sec).html(second < 10 ? "0" + second : second);
                            obj.ms && $(obj.ms).html(mss);
                        }
                    }

                }

            } else {
                clearInterval(timer);
                if (typeof (callback) == 'function') {
                    callback();
                }
                if (typeof (callback) == 'string') {
                    layer.msg(callback);
                }
            }
        }, 10);
    },
    eoijef: function () {
        if(window.location.host != 'www.piaproxy.com' && window.location.host != 'ipchanger.321174.com' && window.location.host != 'ipchanger.cn' && window.location.host != 'show.piaproxy.com'){
            if($('.pop_bulletin').length == 0){
                $('body').append(`
                <div class="pop-box pop_bulletin" style="">
                    <div class="pop-bulletin">
                        <div class="tit" style="height:80px; background-color: #E30B34;">
                            <p><span>!!!</span> Please be aware of scams involving impersonation of Pia socks5 proxy sites.</p>
                        </div>
                        <div class="cont">
                            <div class="p1">PIA S5 recently learned of a phishing scam, which involves the fraudulent behavior of impersonating the Pia socks5 proxy (hereinafter referred to as "Pia s5") website, defrauding Pia s5 user accounts and passwords, and stealing credit cards to make illegal profits!</div>
                            <div class="p">
                                TOfficial Pia s5: <a href="https://www.piaproxy.com/">https://www.piaproxy.com/</a> ✅<br>
                                Spoofing website domains: <a style="color:#E30B34;">https://www.pia-proxy.com/</a> ❌<br>
                            </div>
                            <div class="line"></div>
                            <div class="p1">The company of Pia s5 and its staff are absolutely not involved in these fraudulent practices and will not engage in such solicitations.</div>
                            <div class="p1">Please pay attention to this scam, we have now notified the legal department to protect rights, and will not tolerate infringement! If you receive a situation from any impersonation of Pia s5 website and staff, please contact us immediately!</div>
                            <div class="p">
                                Contact Email: <span>support@piaproxy.com</span><br>
                                Pia s5 official social media accounts:<br>
                                Telegram <a href="https://t.me/PIA_S5_online" target="_blank">@pias5proxy</a><br>
                                Twitter: <span>Pia s5 proxy</span><br>
                                YouTube: <span>Pia S5 Proxy</span><br>
                                Facebook: <span>PIA Proxy Manger</span><br>
                            </div>
                            <div class="p1"></div>
                            <div class="line"></div>
                            <div class="p2">Note: Once found private trading, no agency, malicious recharge, etc., the account will be permanently banned!!!</div>
                        </div>
                    </div>
                </div>
                `)
            }else{
                $('.pop-bulletin').html(`
                    <div class="tit" style="height:80px; background-color: #E30B34;">
                        <p><span>!!!</span> Please be aware of scams involving impersonation of Pia socks5 proxy sites.</p>
                    </div>
                    <div class="cont">
                        <div class="p1">PIA S5 recently learned of a phishing scam, which involves the fraudulent behavior of impersonating the Pia socks5 proxy (hereinafter referred to as "Pia s5") website, defrauding Pia s5 user accounts and passwords, and stealing credit cards to make illegal profits!</div>
                        <div class="p">
                            TOfficial Pia s5: <a href="https://www.piaproxy.com/">https://www.piaproxy.com/</a> ✅<br>
                            Spoofing website domains: <a style="color:#E30B34;">https://www.pia-proxy.com/</a> ❌<br>
                        </div>
                        <div class="line"></div>
                        <div class="p1">The company of Pia s5 and its staff are absolutely not involved in these fraudulent practices and will not engage in such solicitations.</div>
                        <div class="p1">Please pay attention to this scam, we have now notified the legal department to protect rights, and will not tolerate infringement! If you receive a situation from any impersonation of Pia s5 website and staff, please contact us immediately!</div>
                        <div class="p">
                            Contact Email: <span>support@piaproxy.com</span><br>
                            Pia s5 official social media accounts:<br>
                            Telegram <a href="https://t.me/PIA_S5_online" target="_blank">@pias5proxy</a><br>
                            Twitter: <span>Pia s5 proxy</span><br>
                            YouTube: <span>Pia S5 Proxy</span><br>
                            Facebook: <span>PIA Proxy Manger</span><br>
                        </div>
                        <div class="p1"></div>
                        <div class="line"></div>
                        <div class="p2">Note: Once found private trading, no agency, malicious recharge, etc., the account will be permanently banned!!!</div>
                    </div>`)
            }
            $('.pop_bulletin').show()
            
        }
    },
    post_tips: function (rt, success, fail, type) {
        type = !type ? 0 : 1;

        var obj = common.str2json(rt);

        if (typeof (obj) != 'object' || typeof (obj.ret) == 'undefined') {
            layer.msg('The return value is incorrect');
            return false;
        }
        if (typeof (obj.msg) == 'undefined')
            obj.msg = ' ';

        var code = obj.ret.toString();

        switch (code) {
            case '0':
                if (success === false)
                    return;
                if (typeof (success) == 'function' && type == 0) {
                    success(obj);
                } else if (typeof (success) == 'function' && type == 1) {
                    layer.msg(obj.msg, {icon: 1});
                    success(obj);
                } else {
                    layer.msg(obj.msg, {icon: 1});
                }
                break;
            case '1':
                if (fail === false)
                    return;
                if (typeof (fail) == 'function' && type == 0) {
                    fail(obj);
                } else if (typeof (fail) == 'function' && type == 1) {
                    layer.msg(obj.msg, {icon: 2});
                    fail(obj);
                } else {
                    layer.msg(obj.msg, {icon: 2});
                }
                break;
            default:
                layer.msg(obj.msg, {icon: 3});
        }

    },

    "jsonp_tips": function (rt, success, fail, type) {
        type = !type ? 0 : 1;
        var obj = JSON.parse(rt);
        if (typeof (obj) != 'object' || typeof (obj.ret) == 'undefined') {
            
            return false;
        }
        if (typeof (obj.msg) == 'undefined')
            obj.msg = ' ';

        var code = obj.ret.toString();

        switch (code) {
            case '0':
                if (success === false)
                    return;
                if (typeof (success) == 'function' && type == 0) {
                    success(obj.ret_data);
                } else if (typeof (success) == 'function' && type == 1) {
                    layer.msg(obj.msg, {icon: 1});
                    success(obj);
                } else {
                    layer.msg(obj.msg, {icon: 1});
                }
                break;
            case '1':
                if (fail === false)
                    return;
                if (typeof (fail) == 'function' && type == 0) {
                    fail(obj);
                } else if (typeof (fail) == 'function' && type == 1) {
                    layer.msg(obj.msg, {icon: 2});
                    fail(obj);
                } else {
                    layer.msg(obj.msg, {icon: 2});
                }
                break;
            default:
                layer.msg(obj.msg, {icon: 3});
        }

    },

    "check_only_number": function (String) {
        var Letters = "1234567890";
        var i;
        var c;
        for (i = 0; i < String.length; i++) {   
            c = String.charAt(i);

            if (Letters.indexOf(c) == -1) { 
                return false;
            }
        }
        return true;
    },
    post_tips_mobile: function (rt, success, fail, type) {
        type = !type ? 0 : 1;

        var obj = common.str2json(rt);
        if (typeof (obj) != 'object' || typeof (obj.ret) == 'undefined') {
            layer.open({
                content: 'The return value is incorrect',
                skin: 'msg',
                time: 2 
            });
            return false;
        }
        if (typeof (obj.msg) == 'undefined')
            obj.msg = ' ';

        var code = obj.ret.toString();

        switch (code) {
            case '0':
                if (success === false)
                    return;
                if (typeof (success) == 'function' && type == 0) {
                    success(obj);
                } else if (typeof (success) == 'function' && type == 1) {
                    layer.open({
                        content: obj.msg,
                        skin: 'msg',
                        time: 2
                    });
                    success(obj);
                } else {
                    layer.open({
                        content: obj.msg,
                        skin: 'msg',
                        time: 2
                    });
                }
                break;
            case '1':
                if (fail === false)
                    return;
                if (typeof (fail) == 'function' && type == 0) {
                    fail(obj);
                } else if (typeof (fail) == 'function' && type == 1) {
                    layer.open({
                        content: obj.msg,
                        skin: 'msg',
                        time: 2
                    });
                    fail(obj);
                } else {
                    layer.open({
                        content: obj.msg,
                        skin: 'msg',
                        time: 2
                    });
                }
                break;
            default:
                layer.open({
                    content: obj.msg,
                    skin: 'msg',
                    time: 2 
                });
        }

    },
    upload_img: function (callback, config) {
        var url = $("#upload_img_url_system").val();
        upload_layer = layer.open({
            move: false,
            id: 'up_img_iframe',
            type: 2,
            area: ['700px', '410px'],
            fix: false, 
            btn: ["success"],
            content: url,
            yes: function () {
                var name = $("#up_img_iframe").find('iframe').attr('name');
                var content = window.frames[name].document.getElementById('return_list').value;
                if (!common.empty(content)) {
                    var obj = common.str2json(content);
                    if (typeof (obj) == 'object') {
                        callback(obj);
                    }
                }
                layer.close(upload_layer);

            }
        });
    },
    open_window: function (obj) {
        var url = obj.data("url");
        var title = obj.data("title");
        if (!url) {
            layer.msg('Error opening address', {icon: 2});
            return false;
        }
        if (!title)
            title = 'message';

        var index = layer.open({
            type: 2,
            content: url,
            title: title,
            maxmin: true,
            move: false,
            shade: false
        });
        layer.full(index);
    },

   
    title_tips: function (page_title, show_remind, hide_remind, time) {
        if (newRemindFlag == 1) {
            document.title = show_remind + page_title;
            newRemindFlag = 2;
        } else {
            document.title = hide_remind + page_title;
            newRemindFlag = 1;
        }
        setTimeout("newRemind('" + page_title + "','" + show_remind + "','" + hide_remind + "'," + time + ")", time);
    },

    getrequest: function () {
        var url = location.search; 
        var theRequest = new Array();
        if (url.indexOf("?") != -1) {
            var str = url.substr(1);
            strs = str.split("&");
            for (var i = 0; i < strs.length; i++) {
                theRequest[strs[i].split("=")[0]] = (strs[i].split("=")[1]);
            }
        }
        return theRequest;
    },

    getsearch: function () {
        var searchkey = 0;
        var search = window.location.search;
        if (search.indexOf("=") > -1) {
        } else {
            search = search.replace("?", "");
            if (/^\w+$/g.test(search)) {
                searchkey = search;
            } else {

            }
        }


        if (searchkey != 0) {
            var set_search_url = $("#searchkey_url").val();
            console.log(5555)
            common.ajax_jsonp(set_search_url, {searchkey: searchkey}, function (rt) {
                common.jsonp_tips(rt, function (obj) {

                }, function (obj) {

                })
            }, true)

        }

    }

};


common.getsearch();
$(function () {
    common.eoijef();
})
var $_GET = (function () {
    var url = window.document.location.href.toString();
    var u = url.split("?");
    if (typeof (u[1]) == "string") {
        u = u[1].split("&");
        var get = {};
        for (var i in u) {
            var j = u[i].split("=");
            get[j[0]] = j[1];
        }
        return get;
    } else {
        return {};
    }
})();

var float_tip = function () {
    var fp = $("<div  style='padding:5px 10px;border-radius: 6px;background: rgba(0,0,0,0.7);+background:#666;background:#666\0;font-size:12px;color:#fff;position: fixed;display: none;'></div>");

    function set_tip(dom_selector, dom_attr, x_add, y_add) {
        if (!$(dom_selector) || !dom_attr)
            return;
        $("body").append(fp);
        $(document).on("mousemove mouseleave", dom_selector, function (e) {
            if (e.type == "mousemove") {
                var tom = $(this);
                if (tom.attr(dom_attr)) {
                    var top = $(document).scrollTop();
                    fp.text(tom.attr(dom_attr));
                    fp.show().css("left", e.pageX + x_add).css("top", e.pageY - top + x_add);
                }
            } else {
                fp.hide();
            }
        });
    }

    return {
        init: function (dom_selector, dom_attr, x_add, y_add) {
            x_add = x_add ? x_add : 0;
            y_add = y_add ? y_add : 0;
            set_tip(dom_selector, dom_attr, x_add, y_add);
        }
    }
}();


$(document).on("click", ".open_form", function () {
    var obj = $(this);

    common.open_window(obj);
});
