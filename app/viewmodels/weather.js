define(['services/yr', 'knockout'], function(yrService, ko) {
    var viewModel = {
        forecast: ko.observable(),
    };
    viewModel.activate = function() {
        return yrService.get('sted/Norge/Oslo/Oslo/Oslo/varsel.json')
            .done(function(data) {
                viewModel.forecast(data);
                viewModel.location = ko.computed(function () {
                    return 'Været for ' + viewModel.forecast().place + ', ' + viewModel.forecast().country;
                });
                viewModel.currentTemperature = ko.computed(function () {
                    return viewModel.forecast().forecasts[0].periods[0].temperature + '°';
                });
                viewModel.precipitation = ko.computed(function () {
                    return viewModel.forecast().forecasts[0].periods[0].precipitationMin + ' – ' + viewModel.forecast().forecasts[0].periods[0].precipitationMax + ' mm';
                });
                viewModel.wind = ko.computed(function () {
                    return viewModel.forecast().forecasts[0].periods[0].windType + ', ' + viewModel.forecast().forecasts[0].periods[0].windSpeed + ' fra ' + viewModel.forecast().forecasts[0].periods[0].windDirection;
                });
            });
    };
    return viewModel;
});
