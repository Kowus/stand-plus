(function () {

    var app = angular.module('stand', []);

    app.controller('ContentController', function () {
        this.conts = pageContent;
    });
    app.controller('ServicesController', function () {
        this.serv = serviceSection;
    });
    app.controller('ContactCtrl', function () {
        this.cont = contact;
    });

    var pageContent = [
        {
            name: 'Standplus Constructions Limited',
            motto: 'my motto',
            homeImage: 'images/logo.png'
        }
    ];
    var contact = {
        about: 'John Drinks Mountainous Amount Of Gasoline When He\'s Happy!',
        name: 'Standplus Construction Ltd.',
        box: 'P.O.Box NT 515 Newtown',
        loc: 'Accra, Ghana',
        tel: '+233 26 412 3606',
        mob: '+233 24 021 4606',
        email: 'standplusghana@gmail.com'
    };
    var serviceSection = [
        {
            title: 'Community Builders',
            class: 'fa fa-university',
            content: 'content',
            hideUpper: '1'
        },
        {
            title: 'Plumbers',
            class: 'fa fa-toggle-on',
            content: 'my content',
            hideUpper: '0'
        },
        {
            title: 'Tile Workers',
            class: 'fa fa-building-o', //try windows
            content: 'my content',
            hideUpper: '0'
        },
        {
            title: 'Block and Brick Makers',
            class: 'fa fa-archive',
            content: 'my content',
            hideUpper: '0'
        },
        {
            title: 'Painters',
            class: 'fa fa-paint-brush',
            content: 'my content',
            hideUpper: '0'
        },
        {
            title: 'Electrical Experts',
            class: 'fa fa-lightbulb-o',
            content: 'my content',
            hideUpper: '0'
        }

    ];

})();