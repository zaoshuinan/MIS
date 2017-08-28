var getKehuUrl = 'http://kehu-xinmuzu.gz-liangcai.com/get/kehuByHaoma';
var ipUrl = $api.getStorage('companySystemIp');
var serverUrl = $api.getStorage('companySystemUrl');
var appUrl = ipUrl + 'Apps/';
appUrl = serverUrl;
var qiantaiMaArr = new Array();
var zhongfangMaArr = new Array();
var peisongMaArr = new Array();
qiantaiMaArr['Q-otcatYQo'] = 1
qiantaiMaArr['Q-CPZ7d%5&'] = 2
qiantaiMaArr['Q-lbqK92WL'] = 3
qiantaiMaArr['Q-y2UR*G&A'] = 4
qiantaiMaArr['Q-GYw9!Ml@'] = 5
qiantaiMaArr['Q-^$ge9!k1'] = 6
qiantaiMaArr['Q-dInu!WKg'] = 7
qiantaiMaArr['Q-Gt0q1rM^'] = 8
qiantaiMaArr['Q-rpQlhkQa'] = 9
qiantaiMaArr['Q-NWJ#&XUG'] = 10
zhongfangMaArr['Z-otcatYQo'] = 1
zhongfangMaArr['Z-CPZ7d%5&'] = 2
zhongfangMaArr['Z-lbqK92WL'] = 3
zhongfangMaArr['Z-y2UR*G&A'] = 4
zhongfangMaArr['Z-GYw9!Ml@'] = 5
zhongfangMaArr['Z-^$ge9!k1'] = 6
zhongfangMaArr['Z-dInu!WKg'] = 7
zhongfangMaArr['Z-Gt0q1rM^'] = 8
zhongfangMaArr['Z-rpQlhkQa'] = 9
zhongfangMaArr['Z-NWJ#&XUG'] = 10
peisongMaArr['P-otcatYQo'] = 1
peisongMaArr['P-CPZ7d%5&'] = 2
peisongMaArr['P-lbqK92WL'] = 3
peisongMaArr['P-y2UR*G&A'] = 4
peisongMaArr['P-GYw9!Ml@'] = 5
peisongMaArr['P-^$ge9!k1'] = 6
peisongMaArr['P-dInu!WKg'] = 7
peisongMaArr['P-Gt0q1rM^'] = 8
peisongMaArr['P-rpQlhkQa'] = 9
peisongMaArr['P-NWJ#&XUG'] = 10
var setTime = {
    'zhongfang':30,
    'peisong':30
}
var userTypeJson = {
    '1':{
        'typeName':'老板',
        'typeUrl':'boss',
        'typeInfo':'查看技师、经理、销售、统计'
    },'2':{
        'typeName':'大堂经理',
        'typeUrl':'jingli',
        'typeInfo':'预约、开卡、充值、业务'
    },'3':{
        'typeName':'前台',
        'typeUrl':'other',
        'typeInfo':'前台'
    },'4':{
        'typeName':'配送',
        'typeUrl':'other',
        'typeInfo':'配送'
    },'5':{
        'typeName':'清洁',
        'typeUrl':'other',
        'typeInfo':'清洁'
    },'6':{
        'typeName':'钟房',
        'typeUrl':'other',
        'typeInfo':'钟房'
    },'7':{
        'typeName':'其他',
        'typeUrl':'other',
        'typeInfo':'其他other'
    },'9':{
        'typeName':'技师',
        'typeUrl':'jishi',
        'typeInfo':'预约、业务'
    }
}
var zimuArr = ['A','B','C','D','E','F'];
var roomAllJson = [
    {
        'id':0,
        'zhName':'沐足房间',
        'roomLie':6,
        'roomNum':12
    },{
        'id':1,
        'zhName':'按摩房间',
        'roomLie':6,
        'roomNum':12
    },{
        'id':2,
        'zhName':'桑拿房间',
        'roomLie':6,
        'roomNum':12
    },{
        'id':3,
        'zhName':'棋牌房间',
        'roomLie':6,
        'roomNum':12
    },{
        'id':4,
        'zhName':'客房房间',
        'roomLie':6,
        'roomNum':12
    },{
        'id':9,
        'zhName':'休息厅座位',
        'roomLie':6,
        'roomNum':12
    },
];
var roomLieClassJson = {
    '1':'aui-col-xs-12',
    '2':'aui-col-xs-6',
    '3':'aui-col-xs-4',
    '4':'aui-col-xs-3',
    '5':'aui-col-5',
    '6':'aui-col-xs-2',
}
var roomStatusColorJson = {
    '0':'success',
    '1':'warning',
    '2':'danger',
    '3':'danger',
    '4':'info'
}
var companyYewuArr = ['muzu','anmo','sangna','qipai','kefang','jishi','yuyue'];
var companyYewuNameArr = ['沐足','按摩','桑拿','棋牌','客房','查看技师','查看预约'];
var jishiTypeNameArr = ['沐足','按摩','桑拿'];
var companyFanweiJson = [
    {
        'id':0,
        'zhName':'沐足',
        'icon':'muzu',
        'color':'danger'
    },{
        'id':1,
        'zhName':'按摩',
        'icon':'anmo',
        'color':'danger'
    },{
        'id':2,
        'zhName':'桑拿',
        'icon':'sangna',
        'color':'danger',
        'detailListName':'',
        'detailJson':''
    },{
        'id':3,
        'zhName':'棋牌',
        'icon':'qipai',
        'color':'danger',
        'detailListName':'',
        'detailJson':''
    },{
        'id':4,
        'zhName':'客房',
        'icon':'kefang',
        'color':'info',
        'detailListName':'',
        'detailJson':''
    },{
        'id':5,
        'zhName':'查看技师',
        'icon':'jishi',
        'color':'danger',
        'detailListName':'',
        'detailJson':''
    },{
        'id':6,
        'zhName':'查看房间',
        'icon':'room',
        'color':'danger',
        'detailListName':'',
        'detailJson':''
    }
];
var header,footer,frameGroupButtonBox,headerHeight,footerHeight,frameGroupButtonBoxHeight,frameStart,frameHeight,frameGroupStart,frameGroupHeight;

var colorArr = ['info','danger','success','warning','primary','dark','default','blue'];
var userTypeId = null;
$api.setStorage('userTypeId', userTypeId);



