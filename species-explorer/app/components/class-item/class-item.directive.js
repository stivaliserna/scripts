angular
  .module('speciesApp')
  .directive('classItem', classItem)

function classItem (SpeciesService) {
  return {
    restrict: 'A',
    controller: ClassItemController,
    controllerAs: 'classItem',
    templateUrl: '/app/components/class-item/class-item.tpl.html',
    scope: {
      data: '=data'
    },
    bindToController: true
  }
}

ClassItemController.$inject = [
  '$scope',
  'defaultURL',
  'ImgService'
]

function ClassItemController ($scope, defaultURL, ImgService) {
  const vm = this

  $scope.$watch('classItem.data', function (newValue) {
    if (angular.isUndefined(newValue)) return
    ImgService.getClassURL(newValue.KingdomCommonName, newValue.ClassCommonName).then(function (url) {
      vm.itemPicURL = url || defaultURL
    })
  })
}
