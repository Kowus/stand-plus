(function () {
    var app = angular.module('stand', []);

    app.controller('ContentController', function () {
        this.conts = pageContent;
    })
    app.controller('ServicesController', function () {
        this.serv = serviceSection;
    });

    var pageContent = [
        {
            name: 'Standplus Constructions Limited',
            motto: 'my motto',
            homeImage: 'images/logo.png'
        }
    ];
    var serviceSection = [
        {
            title: 'Home Builders',
            class: 'fa fa-cubes',
            content: 'content',
            hideUpper: '1'
        },
        {
            title: 'Plumbing',
            class: 'fa fa-toggle-on',
            content: 'my content',
            hideUpper: '0'
        },
        {
            title: 'Tile Works',
            class: 'fa fa-building-o', //try windows
            content: 'my content',
            hideUpper: '0'
        },
        {
            title: 'Block and Brick Makers',
            class: 'fa fa-cubes',
            content: 'my content',
            hideUpper: '0'
        },
        {
            title: 'Painting',
            class: 'fa fa-lightbulb-o',
            content: 'my content',
            hideUpper: '0'
        },
        {
            title: 'Electrical Installations and Maintenance',
            class: 'fa fa-lightbulb-o',
            content: 'my content',
            hideUpper: '0'
        }

    ];

})();