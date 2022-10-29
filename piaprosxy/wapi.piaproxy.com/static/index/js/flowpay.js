$(function () {
    let flow_package_url = $('#flow_package_url').val()
    common.ajax_jsonp(flow_package_url, {}, function (data) {
        let arr = JSON.parse(data).ret_data
        for (let i = 0; i < arr.length; i++) {
            if(arr[i].pak_type == "normal"){
                $('.pricingList .li'+i+' .jiaobiao1').show()
            }
            if(arr[i].is_top == 1){
                $('.pricingList .li'+i+' .jiaobiao2').show()
            }
            if(arr[i].gift > 0){
                $('.pricingList .li'+i+' .jiaobiao3').show()
                $('.pricingList .li'+i+' .jiaobiao3').html('+ '+ConvertByte(arr[i].gift))
                $('.pricingList .li'+i+' .pay_traff').html(arr[i].value+arr[i].type + '+' + ConvertByte(arr[i].gift))
            }else{
                $('.pricingList .li'+i+' .pay_traff').html(arr[i].value+arr[i].type)
            }
            $('.pricingList .li'+i+' .pay_name').html(arr[i].name)
            $('.pricingList .li'+i+' .pay_money').html(arr[i].price*1)
            $('.pricingList .li'+i+' .unit').html('$'+arr[i].unit+'/GB')
        }
    });
})

function ConvertByte(num) {
    let length = (num+'').length
    if (length > 0 && length <= 3){
        byte = num + 'MB'
        return byte
    }
    if (length > 3){
        byte = ((num/1000).toFixed(2))*1 + 'G'
        return byte
    }
}
