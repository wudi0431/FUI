({
    appDir:"./",
    baseUrl:"./",
    dir: "../dist/zepto/v0.2",
    //optimize:'none',
    modules: [{
        name: "FFF.min",
        include: ["FFF","requirejs", "zepto", "base", "attribute", "language", "eventEmitter", "widget"]
    },{
        name: "FFF.fc.template.min",
        include: ["FFF","requirejs", "zepto", "base", "attribute", "language", "eventEmitter", "widget","fastclick","template"]
    },{
        name: "FFF.fc.template.bridge.min",
        include: ["FFF","requirejs", "zepto", "base", "attribute", "language", "eventEmitter", "widget","fastclick","template","H5ToNative","bridge"]
    },{
        name: "FFF.fc.min",
        include: ["FFF","requirejs", "zepto", "base", "attribute", "language", "eventEmitter", "widget","fastclick"]
    },{
        name: "FFF.template.min",
        include: ["FFF","requirejs", "zepto", "base", "attribute", "language", "eventEmitter", "widget","template"]
    }],
    paths: {
        requirejs: "./lib/require",
        zepto: "./lib/zepto",
        base: "./core/base",
        attribute: "./core/attribute",
        FFF: "./core/FFF",
        language: "./core/language",
        eventEmitter: "./core/eventEmitter",
        widget: "./core/widget",
        fastclick:"./lib/fastclick",
        template:"./lib/template",
        H5ToNative:"./util/H5ToNative",
        bridge:"./util/bridge"
    }
});
