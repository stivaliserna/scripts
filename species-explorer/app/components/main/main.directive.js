angular
  .module('speciesApp')
  .directive('main', main)

main.$inject = [
  'SpeciesService'
]

function main (SpeciesService) {
  return {
    restrict: 'A',
    controller: MainController,
    controllerAs: 'main',
    templateUrl: '/app/components/main/main.tpl.html'

  }

  function MainController () {
    const vm = this

    vm.selectKingdom = selectKingdom
    vm.selectClass = selectClass
    vm.selectFamily = selectFamily

    activate()

    function getClassesOfKingdom (kingdomName) {
      return SpeciesService.getClasses({
        kingdom: kingdomName
      })
    }

    function getFamiliesOfClass (kingdomName, className) {
      return SpeciesService.getFamilies({
        kingdom: kingdomName,
        class: className
      })
    }

    function getSpeciesOfFamily (familyName) {
      return SpeciesService.getSpecies({
        family: familyName
      })
    }

    function selectKingdom (kingdomName) {
      vm.classItems = getClassesOfKingdom(kingdomName)
    }

    function selectClass (kingdomName, className) {
      vm.familyItems = getFamiliesOfClass(kingdomName, className)
    }

    function selectFamily (familyName) {
      vm.specieItems = getSpeciesOfFamily(familyName)
    }

    function activate () {
      vm.kingdomItems = SpeciesService.getKingdoms()
    }
  }
}
