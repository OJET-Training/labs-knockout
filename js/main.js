requirejs.config({
    baseUrl: 'js/libs',
    paths: {
        'jquery': './vendor/jquery/dist/jquery',
        'knockout': './vendor/knockout/dist/knockout.debug',
        'bootstrap': './vendor/bootstrap/dist/js/bootstrap',
        'jquery': './vendor/jquery/dist/jquery',
        'text': './vendor/text/text',
        'router': './vendor/ko-component-router/dist/ko-component-router',
        'navbar': '../components/navbar/navbar',
        'home': '../pages/home/home',
        'countries': '../pages/countries/countries'
    },
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: '$'
        }
    }
});

require(['knockout', 'router', 'jquery', '../app'], function(ko, router, $, app) {
    console.log('app loaded ...');

    ko.bindingHandlers.toggle = {
        init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
            var value = valueAccessor();
            $(element).click(function(event) {
                event.preventDefault();
                var previousValue = ko.unwrap(value);
                value(!previousValue);
            });
        },
        update: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
            $(element).toggleClass("active", ko.unwrap(valueAccessor()));
        }
    };

    ko.components.register('navbar', {
        require: 'navbar'
    });

    ko.components.register('home', {
        require: 'home'
    });

    ko.components.register('countries', {
        require: 'countries'
    });

    var Router = router.Router;
    Router.setConfig({
      hashbang: true,
    })
    Router.useRoutes({
        '/': ['home'],
        '/countries': ['countries']
    });

    ko.applyBindings(new app())
});
