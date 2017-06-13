angular.module('speciesApp').directive('kingdomItem', kingdomItem)

function kingdomItem (SpeciesService) {
  return {
    restrict: 'A',
    controller: kingdomItemController,
    controllerAs: 'kingdomItem',
    templateUrl: '/app/components/kingdom-item/kingdom-item.tpl.html',
    scope: {
      kingdom: '=kingdom'
    },
    bindToController: true
  }
}

kingdomItemController.$inject = ['$scope', 'defaultURL', 'ImgService']

function kingdomItemController ($scope, defaultURL, ImgService) {
  const vm = this

  $scope.$watch('kingdomItem.kingdom', function (newValue) {
    if (angular.isUndefined(newValue)) return
    ImgService.getKingdomURL(newValue.KingdomCommonName).then(function (url) {
      vm.itemPicURL = url || defaultURL
    })
  })
}
