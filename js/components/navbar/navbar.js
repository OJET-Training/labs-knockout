define(['knockout', 'text!./navbar.html'], function(ko, templateHtml) {
    return {
        viewModel: function(params) {
            var self = this;
            self.title = params.title;
            self.pages = params.pages;
        },
        template: templateHtml
    };
});
