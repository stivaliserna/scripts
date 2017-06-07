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
        cache: true,
        params: {
          op: 'getkingdomnames'
        }
      },
      getClasses: {
        method: 'GET',
        isArray: false,
        cache: true,
        params: {
          op: 'getclassnames'
        }
      },
      getFamilies: {
        method: 'GET',
        isArray: false,
        cache: true,
        params: {
          op: 'getfamilynames'
        }
      },
      getSpecies: {
        method: 'GET',
        isArray: false,
        cache: true,
        params: {
          op: 'getspecies'
        }
      },
      getSpeciesById: {
        method: 'GET',
        isArray: false,
        cache: true,
        params: {
          op: 'getspeciesbyid'
        }
      }
    }
  )
}
