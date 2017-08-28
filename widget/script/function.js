
function goBack(winName){
    if(winName){
        winName = winName + '_win';
        api.closeWin({
            name: winName
        });
    }else{
        api.closeWin();
    } 
}
function addDate(date,days){ 
   var d=new Date(date); 
   d.setDate(d.getDate()+days); 
   var m=d.getMonth()+1; 
   return d.getFullYear()+'-'+m+'-'+d.getDate(); 
}
function fixStatusBar(headerobj) {
    var systemType = api.systemType;
    var systemVersion = parseFloat(api.systemVersion);
    if (systemType == "ios" || (systemType == "android" && systemVersion >= 4.4)) {
        if (systemType == "android") {
            headerobj.style.paddingTop = '25px';
        }
        $api.fixStatusBar(headerobj);
    } else {
        $api.fixIos7Bar(headerobj);
    }
}
// 手机号验证
function checkPhone(phone) {
    var res = !!phone.match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/);
    return res;
}
function checkNum(num){
    var res = !! num.match(/^[0-9]+.?[0-9]*$/);
    return res;
}
var thisDate = new Date();
var thisYear2 = thisDate.getYear();        //获取当前年份(2位)
var thisYear4 = thisDate.getFullYear();    //获取完整的年份(4位,1970-????)
var thisMonth = thisDate.getMonth();       //获取当前月份(0-11,0代表1月)
var thisDay = thisDate.getDate();        //获取当前日(1-31)
var thisXingqi = thisDate.getDay();         //获取当前星期X(0-6,0代表星期天)
var thisTime = thisDate.getTime();        //获取当前时间(从1970.1.1开始的毫秒数)
var thisHour = thisDate.getHours();       //获取当前小时数(0-23)
var thisMinute = thisDate.getMinutes();     //获取当前分钟数(0-59)
var thisSecond = thisDate.getSeconds();     //获取当前秒数(0-59)
var thisMillsecond = thisDate.getMilliseconds();    //获取当前毫秒数(0-999)
var thisAllDay = thisDate.toLocaleDateString();     //获取当前日期
var thisAllTime = thisDate.toLocaleTimeString();     //获取当前时间
var thisAllDayTime = thisDate.toLocaleString( );        //获取日期与时间

