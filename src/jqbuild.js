({
    appDir:"./",
    baseUrl:"./",
    dir: "../dist/jquery/v0.2",
    removeCombined:true,
    modules: [{
        name: "FUI.min",
        include: ["FUI","requirejs", "jquery", "base", "attribute", "language", "eventEmitter", "widget"]
    },{
        name: "FUI.fc.template.min",
        include: ["FUI","requirejs", "jquery", "base", "attribute", "language", "eventEmitter", "widget","fastclick","template"]
    },{
        name: "FUI.fc.template.bridge.min",
        include: ["FUI","requirejs", "jquery", "base", "attribute", "language", "eventEmitter", "widget","fastclick","template","H5ToNative","bridge"]
    },{
        name: "FUI.fc.min",
        include: ["FUI","requirejs", "jquery", "base", "attribute", "language", "eventEmitter", "widget","fastclick"]
    },{
        name: "FUI.template.min",
        include: ["FUI","requirejs", "jquery", "base", "attribute", "language", "eventEmitter", "widget","template"]
    }],
    paths: {
        requirejs: "./lib/require",
        zepto: "./lib/zepto",
        jquery: "./lib/jquery",
        base: "./core/base",
        attribute: "./core/attribute",
        FUI: "./core/FUI",
        language: "./core/language",
        eventEmitter: "./core/eventEmitter",
        widget: "./core/widget",
        fastclick:"./lib/fastclick",
        template:"./lib/template",
        H5ToNative:"./util/H5ToNative",
        bridge:"./util/bridge"
    },
    onBuildWrite: function( moduleName, path, contents) {
            if(moduleName=='language'  || moduleName=='widget' || moduleName=='base'){
                return contents.replace('zepto','jquery')
            }else{
                return contents
            }
    }
});
