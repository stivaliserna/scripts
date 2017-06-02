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

    activate()

    function getClassesOfKingdom (kingdomName) {
      return SpeciesService.getClasses({
        kingdom: kingdomName
      })
    }

    function selectKingdom (kingdomName) {
      vm.classItems = getClassesOfKingdom(kingdomName)
    }

    function activate () {
      vm.kingdomItems = SpeciesService.getKingdoms()
    }
  }
}
