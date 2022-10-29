var ROXCHAT={
    ROXCHAT_URL:"http://roxchat.321174.com",
    ROXCHAT_KEFU_ID:"",
    ROXCHAT_BTN_TEXT:"Chat with me",
    ROXCHAT_LANG:"en",
    ROXCHAT_EXTRA: {},
    ROXCHAT_AUTO_OPEN:true,
    ROXCHAT_AUTO_SHOW:false,
    ROXCHAT_WITHOUT_BTN:false,
};
ROXCHAT.launchButtonFlag=false;
ROXCHAT.titleTimer=0;
ROXCHAT.titleNum=0;
ROXCHAT.noticeTimer=null;
ROXCHAT.originTitle=document.title;
ROXCHAT.chatPageTitle="";
ROXCHAT.kefuName="";
ROXCHAT.kefuAvator="";
ROXCHAT.init=function(config){
    var _this=this;
    if(typeof config=="undefined"){
        return;
    }

    if (typeof config.ROXCHAT_URL!="undefined"){
        this.ROXCHAT_URL=config.ROXCHAT_URL.replace(/([\w\W]+)\/$/,"$1");
    }
    this.dynamicLoadCss(this.ROXCHAT_URL+"/static/css/roxchat-front.css?v=1");

    if (typeof config.ROXCHAT_KEFU_ID!="undefined"){
        this.ROXCHAT_KEFU_ID=config.ROXCHAT_KEFU_ID;
    }
    if (typeof config.ROXCHAT_BTN_TEXT!="undefined"){
        this.ROXCHAT_BTN_TEXT=config.ROXCHAT_BTN_TEXT;
    }
    if (typeof config.ROXCHAT_EXTRA!="undefined"){
        this.ROXCHAT_EXTRA=config.ROXCHAT_EXTRA;
    }
    if (typeof config.ROXCHAT_AUTO_OPEN!="undefined"){
        this.ROXCHAT_AUTO_OPEN=config.ROXCHAT_AUTO_OPEN;
    }
    if (typeof config.ROXCHAT_AUTO_SHOW!="undefined"){
        this.ROXCHAT_AUTO_SHOW=config.ROXCHAT_AUTO_SHOW;
    }
    if (typeof config.ROXCHAT_WITHOUT_BTN!="undefined"){
        this.ROXCHAT_WITHOUT_BTN=config.ROXCHAT_WITHOUT_BTN;
    }
    var refer=document.referrer?document.referrer:"无";
    this.ROXCHAT_EXTRA.refer=refer;
    this.ROXCHAT_EXTRA.host=document.location.href;
    this.ROXCHAT_EXTRA.getOS=getOS();
    this.ROXCHAT_EXTRA.browse=Browse();
    this.ROXCHAT_EXTRA=JSON.stringify(_this.ROXCHAT_EXTRA);

    this.dynamicLoadJs(this.ROXCHAT_URL+"/assets/js/functions.js?v=1",function(){
        if (typeof config.ROXCHAT_LANG!="undefined"){
            _this.ROXCHAT_LANG=config.ROXCHAT_LANG;
        }else{
            _this.ROXCHAT_LANG=checkLang();
        }
        _this.ROXCHAT_EXTRA=utf8ToB64(_this.ROXCHAT_EXTRA);
    });
    if (typeof $!="function"){
        this.dynamicLoadJs(_this.ROXCHAT_URL +"/assets/js/cdn/jquery.min.js",function () {
            _this.dynamicLoadJs(_this.ROXCHAT_URL + "/assets/js/cdn/jquery.cookie.js",function () {
            });
            _this.dynamicLoadJs(_this.ROXCHAT_URL + "/assets/js/cdn/layer.min.js",function () {
                _this.jsCallBack();
            });
        });
    }else{
        this.dynamicLoadJs(_this.ROXCHAT_URL + "/assets/js/cdn/layer.min.js",function () {
            _this.jsCallBack();
        });
    }
    _this.addEventlisten();
}
ROXCHAT.jsCallBack=function(){
    this.showKefuBtn();
    this.addClickEvent();
    this.getNotice();
}
ROXCHAT.showKefuBtn=function(){
    var _this=this;
    if(_this.ROXCHAT_WITHOUT_BTN){
        return;
    }
    var html="<div class='launchButtonBox'>" +
                '<div id="launchButton" class="launchButton">' +
                '<div id="launchIcon" class="launchIcon animateUpDown">1</div> ' +
                '<div class="launchButtonText"><div class="imgbox"><span></span></div></div>' +
                '<div id="launchButtonNotice" class="launchButtonNotice"></div>' +
            '</div>';
    $('body').append(html);
}
ROXCHAT.addClickEvent=function(){
    var _this=this;
    $(".launchButton").on("click",function() {
        _this.ROXCHAT_AUTO_SHOW=true;
        _this.showKefu();
        $("#launchIcon").text(0).hide();
    });

    $("body").on("click","#launchNoticeClose",function() {
        $("#launchButtonNotice").hide();
    });

    $("body").click(function () {
        clearTimeout(_this.titleTimer);
        document.title = _this.originTitle;
    });
}
ROXCHAT.addEventlisten=function(){
    var _this=this;
    window.addEventListener('message',function(e){
        var msg=e.data;
        if(msg.type=="message"){
            clearInterval(_this.noticeTimer);
            var width=$(window).width();
            if(width>768){
                if(msg.data.is_kefu == 'yes'){
                    _this.flashTitle();//标题闪烁
                }
            }
            if (_this.launchButtonFlag){
                return;
            }
            // console.log(msg.data);
            // var welcomeHtml="<div class='flyUser'><div class='img-box headPorBox flyAvatar headPorBg"+msg.data.avator+"'>"+getFirstName(msg.data.name)+"</div><span class='flyUsername'>"+msg.data.name+"</span>" +
            //     "<span id='launchNoticeClose' class='flyClose'>×</span>" +
            //     "</div>";
            // welcomeHtml+="<div id='launchNoticeContent'>"+replaceContent(msg.data.content,_this.ROXCHAT_URL)+"</div>";
            // $("#launchButtonNotice").html(welcomeHtml).show();
            var news=$("#launchIcon").text();
            $("#launchIcon").text(++news).show();
        }
        if(msg.type=="focus"){
            clearTimeout(_this.titleTimer);
            _this.titleTimer=0;
            document.title = _this.originTitle;
        }
    });
    window.onfocus = function () {
        clearTimeout(_this.titleTimer);
        _this.titleTimer=0;
        document.title = _this.originTitle;
    };
}
ROXCHAT.dynamicLoadCss=function(url){
    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.type='text/css';
    link.rel = 'stylesheet';
    link.href = url;
    head.appendChild(link);
}
ROXCHAT.dynamicLoadJs=function(url, callback){
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    if(typeof(callback)=='function'){
        script.onload = script.onreadystatechange = function () {
            if (!this.readyState || this.readyState === "loaded" || this.readyState === "complete"){
                callback();
                script.onload = script.onreadystatechange = null;
            }
        };
    }
    head.appendChild(script);
}

ROXCHAT.getNotice=function(){
    var _this=this;
    // $.ajax({
    //     type:"get",
    //     url: this.ROXCHAT_URL+"/notice?kefu_id="+this.ROXCHAT_KEFU_ID,
    //     headers:{
    //         "token":localStorage.getItem("token"),
    //         "platform": 'web'
    //     },
    //     success: function(res) {
    //         if(res.result.status=='offline'){
    //             _this.chatPageTitle="<div class='launchPointer offline'></div>";
    //         }else{
    //             _this.chatPageTitle="<div class='launchPointer'></div>";
    //             // setTimeout(function(){
    //                 // var userInfo="<img style='margin-top: 5px;' class='flyAvatar' src='"+_this.ROXCHAT_URL+res.result.avatar+"'/> <span class='flyUsername'>"+res.result.username+"</span>"
    //                 // $('.launchButtonText').html(userInfo);
    //             // },3000);
    //         }
    //         _this.kefuAvator=res.result.avatar;
    //         _this.kefuName=res.result.username;
    //         _this.chatPageTitle+=`<img src="${_this.ROXCHAT_URL+res.result.avatar}" class='flyAvatar'>
    //                                 <div class="fly-user">
    //                                     <p>${res.result.username}</p>
    //                                     <span>${res.result.status == "offline" ? "Online":"Offline"}</span>
    //                                 </div>`;
    //         if(_this.ROXCHAT_AUTO_OPEN&&_this.isIE()<=0){
    //             _this.showKefu();
    //             $(".launchButtonBox").show();
    //             _this.launchButtonFlag=false;
    //         }
    //         if (res.result.welcome != null) {
    //             var msg = res.result.welcome;
    //             var len=msg.length;
    //             var i=0;
    //             if(len>0){
        
    //                 _this.noticeTimer=setInterval(function(){
    //                     if(i>=len||typeof msg[i]=="undefined"||msg[i]==null){
    //                         clearInterval(_this.noticeTimer);
    //                         return;
    //                     }
    //                     var content = msg[i];
    //                     if(typeof content.content =="undefined"){
    //                         return;
    //                     }
    //                     var welcomeHtml="<div class='flyUser'><img class='flyAvatar' src='"+_this.ROXCHAT_URL+res.result.avatar+"'/> <span class='flyUsername'>"+res.result.username+"</span>" +
    //                         "<span id='launchNoticeClose' class='flyClose'>-</span>" +
    //                         "</div>";
    //                     welcomeHtml+="<div id='launchNoticeContent'>"+replaceContent(content.content,_this.ROXCHAT_URL)+"</div>";
        
    //                     var obj=$("#launchButtonNotice");
    //                     if(obj[0]){
    //                         obj[0].innerHTML=welcomeHtml;
    //                         obj.show();
    //                     }
    //                     i++;
    //                     $("#launchIcon").text(i).show();
    //                 },4000);
    //             }
        
    //         }
           
    //     }
    // });
}
ROXCHAT.isIE=function(){
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器
    var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器
    var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
    if(isIE) {
        var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
        reIE.test(userAgent);
        var fIEVersion = parseFloat(RegExp["$1"]);
        if(fIEVersion == 7) {
            return 7;
        } else if(fIEVersion == 8) {
            return 8;
        } else if(fIEVersion == 9) {
            return 9;
        } else if(fIEVersion == 10) {
            return 10;
        } else {
            return 6;//IE版本<=7
        }
    } else if(isEdge) {
        return 'edge';//edge
    } else if(isIE11) {
        return 11; //IE11
    }else{
        return -1;//不是ie浏览器
    }
}
ROXCHAT.showPanel=function (){
    var width=$(window).width();
    this.ROXCHAT_AUTO_SHOW=true;
    if(this.isIE()>0){
        this.windowOpen();
        return;
    }
    if(width<768){
        this.layerOpen("100%","100%");
        return;
    }
    this.layerOpen("400px","530px");
    this.launchButtonFlag=true;
}
ROXCHAT.showKefu=function (){
    if (this.launchButtonFlag) return;
    var width=$(window).width();
    if(this.isIE()>0){
        this.windowOpen();
        return;
    }
    // if(width<768){
    //     this.layerOpen("100%","100%");
    //     return;
    // }
    this.layerOpen("342px","540px");
    this.launchButtonFlag=true;
    $(".launchButtonBox").hide();
}
ROXCHAT.layerOpen=function (width,height){
    if (this.launchButtonFlag) return;
    var layBox=$("#layui-layer19911116");
    if(layBox.css("display")=="none"){
        layBox.show();
        return;
    }
    var _this=this;
    layer.index="19911115";
    layer.open({
        type: 2,
        title: ` `,
                // <div class="firbt-kf"> ${this.ROXCHAT_BTN_TEXT}
                //         <div class="fifkf-user">${this.chatPageTitle}</div>
                //         <div class="fifkf-dp">
                //             <div class="giv-img givimg_dz"></div>
                //             <div class="giv-img givimg_cp"></div>
                //         </div>
                //     </div>
        // title: '欢迎来到 Roxlabs',
        closeBtn: 1, //不显示关闭按钮
        shade: 0,
        area: [width, height],
        offset: 'rb', //右下角弹出
        anim: 2,
        content: [this.ROXCHAT_URL+'/chatIndex?kefu_id='+this.ROXCHAT_KEFU_ID+'&lang='+this.ROXCHAT_LANG+'&refer='+window.document.title+'&extra='+this.ROXCHAT_EXTRA , 'yes'], //iframe的url，no代表不显示滚动条
        success:function(){
            var layBox=$("#layui-layer19911116");
            if(_this.ROXCHAT_AUTO_SHOW&&layBox.css("display")=="none"){
                _this.launchButtonFlag=true;
                layBox.show();
            }
        },
        end: function(){
            _this.launchButtonFlag=false;
            $(".launchButtonBox").show();
        },
        cancel: function(index, layero){
            $("#layui-layer19911116").hide();
            _this.launchButtonFlag=false;
            $(".launchButtonBox").show();
            return false;
        }
    });
}
ROXCHAT.windowOpen=function (){
   window.open(this.ROXCHAT_URL+'/chatIndex?kefu_id='+this.ROXCHAT_KEFU_ID+'&lang='+this.ROXCHAT_LANG+'&refer='+window.document.title+'&extra='+this.ROXCHAT_EXTRA);
}
ROXCHAT.flashTitle=function () {
    if(this.titleTimer!=0){
        return;
    }
    this.titleTimer = setInterval("ROXCHAT.flashTitleFunc()", 500);
}
ROXCHAT.flashTitleFunc=function(){
    this.titleNum++;
    if (this.titleNum >=3) {
        this.titleNum = 1;
    }
    if (this.titleNum == 1) {
        document.title = '【】' + this.originTitle;
    }
    if (this.titleNum == 2) {
        document.title = '【new message】' + this.originTitle;
    }
}

window.addEventListener("message", this.handleMessage);

function handleMessage(e) {
    let _this = this
    let data = e.data
    if(data.cmd == 'pageClose'){
        $("#layui-layer19911116").hide();
        ROXCHAT.launchButtonFlag=false;
        $(".launchButtonBox").show();
    }
}

// 获取操作系统
function getOS() {
    var sUserAgent = navigator.userAgent;
    var isWin = (navigator.platform == "Win32") || (navigator.platform == "Windows");
    var isMac = (navigator.platform == "Mac68K") || (navigator.platform == "MacPPC") || (navigator.platform == "Macintosh") || (navigator.platform == "MacIntel");
    if (isMac) return "Mac";
    var isUnix = (navigator.platform == "X11") && !isWin && !isMac;
    if (isUnix) return "Unix";
    var isLinux = (String(navigator.platform).indexOf("Linux") > -1);
    if (isLinux) return "Linux";
    if (isWin) {
        var isWin2K = sUserAgent.indexOf("Windows NT 5.0") > -1 || sUserAgent.indexOf("Windows 2000") > -1;
        if (isWin2K) return "Win2000";
        var isWinXP = sUserAgent.indexOf("Windows NT 5.1") > -1 || sUserAgent.indexOf("Windows XP") > -1;
        if (isWinXP) return "WinXP";
        var isWin2003 = sUserAgent.indexOf("Windows NT 5.2") > -1 || sUserAgent.indexOf("Windows 2003") > -1;
        if (isWin2003) return "Win2003";
        var isWinVista= sUserAgent.indexOf("Windows NT 6.0") > -1 || sUserAgent.indexOf("Windows Vista") > -1;
        if (isWinVista) return "WinVista";
        var isWin7 = sUserAgent.indexOf("Windows NT 6.1") > -1 || sUserAgent.indexOf("Windows 7") > -1;
        if (isWin7) return "Win7";
        var isWin10 = sUserAgent.indexOf("Windows NT 10") > -1 || sUserAgent.indexOf("Windows 10") > -1;
        if (isWin10) return "Win10";
    }
    return "other";
}
// 获取浏览器
function Browse () {
    var browser = {};
    var userAgent = navigator.userAgent.toLowerCase();
    var s;
    (s = userAgent.match(/msie ([\d.]+)/)) ? browser.ie = s[1] : (s = userAgent.match(/firefox\/([\d.]+)/)) ? browser.firefox = s[1] : (s = userAgent.match(/chrome\/([\d.]+)/)) ? browser.chrome = s[1] : (s = userAgent.match(/opera.([\d.]+)/)) ? browser.opera = s[1] : (s = userAgent.match(/version\/([\d.]+).*safari/)) ? browser.safari = s[1] : 0;
    var version = "";
    if (browser.ie) {
        version = 'IE ' + browser.ie;
    }
    else {
        if (browser.firefox) {
            version = 'firefox' +'(' + browser.firefox + ')';
        }
        else {
            if (browser.chrome) {
                version = 'chrome' +'('+ browser.chrome + ')';
            }
            else {
                if (browser.opera) {
                    version = 'opera' +'('+ browser.opera + ')';
                }
                else {
                    if (browser.safari) {
                        version = 'safari' +'('+ browser.safari + ')';
                    }
                    else {
                        version = '未知浏览器';
                    }
                }
            }
        }
    }
    return version;
}
