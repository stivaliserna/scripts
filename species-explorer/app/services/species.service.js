/* global angular */

angular
  .module('speciesApp')
  .factory('SpeciesService', [
    'API_BASE_URL',
    '$resource',
    SpeciesService
  ])

function SpeciesService (API_BASE_URL, $resource) {
  return $resource(
    API_BASE_URL,
    null,
    {
      getKingdoms: {
        method: 'GET',
        isArray: false,
        params: {
          op: 'getkingdomnames'
        }
      }
    }
  )
}
