angular
  .module('speciesApp')
  .directive('kingdomItem', kingdomItem)

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

  function kingdomItemController () {
  }
}
