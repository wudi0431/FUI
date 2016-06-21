define(['base', 'language', 'widget'], function (base, language, widget) {

    var L = language.language;
    var Base = base.Base;
    var Widget = widget.Widget;


    var VERSION = '1.0.0';

    var defaults = {
        autoInit: false, //自动初始化页面
        showPageLoadingIndicator: true, //push.js加载页面的时候显示一个加载提示
        router: true, //默认使用router
        swipePanel: "left", //滑动打开侧栏
        swipePanelOnlyClose: true  //只允许滑动关闭，不允许滑动打开侧栏
    };




    function FUI() {
        this.version = VERSION;
        Base.apply(this, arguments);
    }

    FUI.STATICS = {
        Language: L,
        Base: Base,
        Widget: Widget
    };


    //让FFF拥有Language类的static方法
    L.mix(FUI.prototype, L);

    L.extend(FUI, Base, FUI.STATICS);

    var F = new FUI();

    F.FUIConfig = F.extend(defaults, F.config);

    window.FUI = F;

    return F;

});