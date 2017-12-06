define(['knockout', 'text!./navbar.html'], function(ko, templateHtml) {
    return {
        viewModel: function(params) {
            var self = this;
            self.title = params.title;
            self.currentPage = params.currentPage;
            self.pages = params.pages;
            self.switchPage = function(page) {
                self.currentPage(page);
            }
        },
        template: templateHtml
    };
});
