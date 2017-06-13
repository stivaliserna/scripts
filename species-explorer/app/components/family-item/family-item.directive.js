angular
  .module('speciesApp')
  .directive('familyItem', familyItem)

function familyItem (PhotosService) {
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
  'PhotosService'
]

function FamilyItemController ($scope, PhotosService) {
  const vm = this

  $scope.$watch('familyItem.family', function (newValue) {
    if (angular.isUndefined(newValue)) return

    PhotosService.getFamilyURL(newValue.FamilyName).then(function (url) {
      vm.itemPicURL = url
    })
  })
}
