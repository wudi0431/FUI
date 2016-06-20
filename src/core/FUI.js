define(['base', 'language', 'widget'], function (base, language, widget) {

    var L = language.language;
    var Base = base.Base;
    var Widget = widget.Widget;


    var VERSION = '0.1.2';

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

    window.FUI = F;

    return {
        FUI: F
    };

});