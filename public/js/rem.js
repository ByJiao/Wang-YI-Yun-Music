function remSize(){
    //获取设备的宽度
    var deviceWidth=document.documentElement.clientWidth || window.innerHeight
    if(deviceWidth>=750){
        deviceWidth=750

    }
    if(deviceWidth<=320){
        deviceWidth=320
    }
    //750px-->lrem=100px,375px-->rem=50px
    document.documentElement.style.fontSize=(deviceWidth/7.5)+'px'
    //字体大小
    document.querySelector('body').style.fontSize=0.3+'rem'
}
remSize()
//当我的窗口发生变换，进行调用
window.onresize=function(){
    remSize()
}