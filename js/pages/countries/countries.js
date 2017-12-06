define(['knockout', 'text!./countries.html'], function(ko, templateHtml) {
    return {
        viewModel: function(params) {
            var self = this;
            self.countries = ko.observableArray([
                { id: '0', name: 'Germany' },
                { id: '1', name: 'Austria' },
            ]);

            self.selectedCountryId = ko.observable();
            self.selectedCountryName = ko.observable();
            self.selectCountry = function(country) {
                console.log(country);
                self.selectedCountryId(country.id);
                self.selectedCountryName(country.name);
            };

            self.addCountry = function() {
                self.countries.push({
                    id: self.selectedCountryId(),
                    name: self.selectedCountryName()
                });
                self.selectedCountryId('');
                self.selectedCountryName('');
            };

            self.deleteCountry = function(country) {
                self.countries.remove(country);
            };
        },
        template: templateHtml
    };
});
