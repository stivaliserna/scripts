angular
  .module('speciesApp')
  .directive('idItem', idItem)

function idItem (SpeciesService) {
  return {
    restrict: 'A',
    controller: IdItemController,
    controllerAs: 'idItem',
    templateUrl: '/app/components/id-item/id-item.tpl.html',
    scope: {
      idData: '=idData'
    },
    bindToController: true
  }

  function IdItemController () {
  }
}
