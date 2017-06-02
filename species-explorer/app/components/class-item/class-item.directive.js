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

  function ClassItemController () {
  }
}
