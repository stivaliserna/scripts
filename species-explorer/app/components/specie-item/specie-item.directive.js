angular
  .module('speciesApp')
  .directive('specieItem', specieItem)

function specieItem (SpeciesService) {
  return {
    restrict: 'A',
    controller: SpecieItemController,
    controllerAs: 'specieItem',
    templateUrl: '/app/components/specie-item/specie-item.tpl.html',
    scope: {
      specie: '=specie'
    },
    bindToController: true
  }

  function SpecieItemController () {
  }
}
