(function(){
    // 动态设置html的font-size属性
    setFontSize(640);
    // 参数:设计稿的宽度
    function setFontSize(design){
        // 获取屏幕的宽度
        var width=window.innerWidth;
        if(width>design){
            width=design;
        }
        if(width<320){
            width=320;
        }
        // 当前的rem值 = 当前屏幕宽 / 设计稿宽度 * font-size的值
        // document.querySelector("html").style.fontSize = width / design * 100 + "px";
        document.documentElement.style.fontSize=width / design * 100 + "px";
    }
    // 屏幕宽度改变就执行这个函数
    window.addEventListener("resize",function(){
        setFontSize(640);
    })
})();