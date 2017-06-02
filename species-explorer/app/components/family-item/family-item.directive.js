angular
  .module('speciesApp')
  .directive('familyItem', familyItem)

function familyItem (SpeciesService) {
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

  function FamilyItemController () {
  }
}
