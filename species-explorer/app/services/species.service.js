/* global angular */

angular
  .module('speciesApp')
  .factory('SpeciesService', [
    'API_BASE_URL',
    'CacheFactory',
    '$resource',
    SpeciesService
  ])

function SpeciesService (API_BASE_URL, CacheFactory, $resource) {
  if (!CacheFactory.get('speciesLocalStorageCache')) {
    CacheFactory.createCache('speciesLocalStorageCache', {
      deleteOnExpire: 'aggressive',
      recycleFreq: 60000,
      storageMode: 'localStorage'
    })
  }

  var speciesLocalStorageCache = CacheFactory.get('speciesLocalStorageCache')

  return $resource(API_BASE_URL, null, {
    getKingdoms: {
      method: 'GET',
      isArray: false,
      cache: speciesLocalStorageCache,
      params: {
        op: 'getkingdomnames'
      }
    },
    getClasses: {
      method: 'GET',
      isArray: false,
      cache: speciesLocalStorageCache,
      params: {
        op: 'getclassnames'
      }
    },
    getFamilies: {
      method: 'GET',
      isArray: false,
      cache: speciesLocalStorageCache,
      params: {
        op: 'getfamilynames'
      }
    },
    getSpecies: {
      method: 'GET',
      isArray: false,
      cache: speciesLocalStorageCache,
      params: {
        op: 'getspecies'
      }
    },
    getSpeciesById: {
      method: 'GET',
      isArray: false,
      cache: speciesLocalStorageCache,
      params: {
        op: 'getspeciesbyid'
      }
    }
  })
}
