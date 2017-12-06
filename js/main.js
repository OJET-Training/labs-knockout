requirejs.config({
    baseUrl: 'js/libs',
    paths: {
        'jquery': './vendor/jquery/dist/jquery',
        'knockout': './vendor/knockout/dist/knockout.debug',
        'bootstrap': './vendor/bootstrap/dist/js/bootstrap',
        'jquery': './vendor/jquery/dist/jquery',
    },
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: '$'
        }
    }
});
