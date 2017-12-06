requirejs.config({
    baseUrl: 'js/libs',
    paths: {
        'jquery': './vendor/jquery/dist/jquery',
        'knockout': './vendor/knockout/dist/knockout.debug',
        'bootstrap': './vendor/bootstrap/dist/js/bootstrap',
        'jquery': './vendor/jquery/dist/jquery',
        'text': './vendor/text/text',
        'navbar': '../components/navbar/navbar'
    },
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: '$'
        }
    }
});

require(['knockout', 'jquery', '../app'], function(ko, $, app) {
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

    ko.applyBindings(new app())
});
