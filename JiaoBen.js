// 声明-数值-模块
let timeS = 1000;   //1s=1000ms
let coinNum = 0;    //金币数
let runningTime = 0 
// 声明-布尔值-模块 0=false  1=true

    //初始化模块
const Dom ={
    textCoinNum:document.getElementById("textCoinNum"),     //初始化变量 textCoinNum    来源:DOM
    oneMoreCoin:document.getElementById("oneMoreCoin"),     //初始化变量 oneMoreCoin
    shop:document.getElementById("shop"),                   //初始化变量 shop
    back:document.getElementById("back"),                   //初始化变量 back
};
const Tools1 ={
    tool : 0,
    about:document.getElementById("aboutTools1"),            //初始化变量 aboutTools1
    buy:document.getElementById("buyTools1"),                //初始化变量 Tools1-buy
    ownedEl:document.getElementById("boughtTools1True"),     //初始化变量boughtTools1True
}

    Dom.back.style.display='none';                         //先隐藏back
    Tools1.about.style.display='none';                     //先隐藏aboutTools1
    Tools1.buy.style.display='none';                       //先隐藏Tools1-buy
    Tools1.ownedEl.style.display='none';                   //先隐藏Tools-ownedEl
    Dom.textCoinNum.textContent=coinNum+"$";               //初始化显示金币数量
    Dom.oneMoreCoin.onclick=function(){                    //点击一次(oneMoreCoin)后执行动作
    coinNum +=1;                                           //增加一个金币
    Dom.textCoinNum.textContent=coinNum+"$";               //更新金币数量
};
    Dom.shop.onclick=function(){                           //点击(shop)按钮后执行动作
        Dom.oneMoreCoin.style.display='none';              //隐藏oneMoreCoin
        Dom.shop.style.display='none';                     //隐藏shop
        Dom.back.style.display='inline'                    //显示返回
        Tools1.about.style.display='inline';               //显示about
        Tools1.ownedEl.style.display='inline';             //显示ownedEl
        Tools1.buy.style.display='inline';
};
    Dom.back.onclick=function(){                           //点击(back)按钮后执行动作
        Dom.oneMoreCoin.style.display='inline';            //显示oneMoreCoin
        Dom.shop.style.display='inline';                   //显示shop
        Dom.back.style.display='none';                     //隐藏back
        Tools1.about.style.display='none';                 //隐藏Tools1-about
        Tools1.buy.style.display='none';                   //隐藏Tools1-buy
        Tools1.ownedEl.style.display='none'                //隐藏boughtTools1True
    }
    //购买模块
    Tools1.buy.onclick=function(){
        if(coinNum >= 50 && Tools1.tool === 0){
            Tools1.tool = 1
            alert(`购买成功!剩余金币${coinNum-50}`);
            Tools1.ownedEl.style.display='inline';
            coinNum -=50;
            Dom.textCoinNum.textContent=coinNum+"$";
            //道具效果：
            
            const boughtTime = setInterval(() => {
            coinNum += 1;
            runningTime += 1;
            Dom.textCoinNum.textContent=coinNum+"$";
            console.log("运行时间："+runningTime);
            }, timeS);

        }else if(coinNum <=50 && Tools1.tool === 0){
            alert(`缺少金币${50-coinNum} 请多多积攒`);
            return;
        }else if(Tools1.tool === 1){
            alert("售罄了");
            return;
        }
    }
    //???
    document.getElementById("reportBugs").onclick=function(){
        alert("别想了，这么小个东西有谁会维护(")
    }



