angular.module('HamburgerNavigation', []);

angular.module('HamburgerNavigation')
    .directive('hamburgernavigation', hamburgernavigation)
    .controller('HamburgerNavigationCtrl', HamburgerNavigationCtrl)
;

function hamburgernavigation() {
    var directive = {
        restrict: 'E',
        template: template,
        controller: 'HamburgerNavigationCtrl'
    };
    return directive;

    function template() {
        return [
            '<nav role="navigation" class="nav-hamburger">',
            '<a class="main-toggle" ng-click="isCollapsed = !isCollapsed">',
            '<i class="fa fa-bars"></i>',
            '</a>',
            '<div class="col-xs-12 col-collapse" collapse="isCollapsed" ng-show="!isCollapsed">',
            '<a href="#">',
            '<span>work</span>',
            '</a>',
            '<a href="#">',
            '<span>thinking</span>',
            '</a>',
            '<a href="#">',
            '<span>offerings</span>',
            '</a>',
            '<a href="#">',
            '<span>contact</span>',
            '</a>',
            '</div>',
            '</nav>'
        ].join('');
    }
}

/*placeholder for additional functions if needed*/
HamburgerNavigationCtrl.$inject = ['$scope', '$location'];
function HamburgerNavigationCtrl($scope, $location) {

    $scope.isCollapsed = true;
}
