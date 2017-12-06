define(['knockout', 'text!./home.html'], function(ko, templateHtml) {
    return {
        viewModel: function(params) {
            var self = this;
            self.name = ko.observable();
        },
        template: templateHtml
    };
});
