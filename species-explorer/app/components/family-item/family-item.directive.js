angular
  .module('speciesApp')
  .directive('familyItem', familyItem)

function familyItem (ImgService) {
  return {
    restrict: 'A',
    controller: FamilyItemController,
    controllerAs: 'familyItem',
    templateUrl: '/app/components/family-item/family-item.tpl.html',
    scope: {
      family: '=family'
    },
    bindToController: true
  }
}

FamilyItemController.$inject = [
  '$scope',
  'defaultURL',
  'ImgService'
]

function FamilyItemController ($scope, defaultURL, ImgService) {
  const vm = this

  $scope.$watch('familyItem.family', function (newValue) {
    if (angular.isUndefined(newValue)) return

    ImgService.getFamilyURL(newValue.FamilyName).then(function (url) {
      vm.itemPicURL = url || defaultURL
    })
  })
}
