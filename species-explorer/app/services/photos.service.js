/* global angular */

angular
  .module('speciesApp')
  .factory('PhotosService', [
    '$q',
    'SpeciesService',
    PhotosService
  ])

function PhotosService ($q, SpeciesService) {
  const defaultURL = 'https://pbs.twimg.com/profile_images/600060188872155136/st4Sp6Aw.jpg'

  return {
    getFamilyURL: getFamilyURL
  }

  function getFamilyURL (familyName) {
    return getSpeciesOfFamily(familyName).then(function (species) {
      if (!species || !species.length) {
        // If the API returns no species for the requested family,
        // don't bother to pick a random species since it doesn't exists
        return $q.resolve(defaultURL)
      } else {
        // ...otherwise, pick one and hit the API to get its details,
        // and pass it over to the next Promise#then
        return getRadomImageUrl(species, [])
      }
    })
  }

  // Take an array of species and randomly select a candidate,
  // get the detailed info of that canditate and check if there's an image URL for it,
  // return that image URL if it does exist,
  // otherwise, pick another candidate and repeat the process until an image URL is found,
  // but return the default image URL if the array has been exhausted.
  function getRadomImageUrl (species, chekedIds) {
    if (species.length === chekedIds.length) {
      return $q.resolve(defaultURL)
    }

    let randomSpeciesTaxonId = pickRandomElement(species).TaxonID

    if (chekedIds.includes(randomSpeciesTaxonId)) {
      return getRadomImageUrl(species, chekedIds)
    }

    return getSpecieById(randomSpeciesTaxonId).then(function (theSingleSpecies) {
      if (
        theSingleSpecies.Profile &&
        theSingleSpecies.Profile.Image &&
        theSingleSpecies.Profile.Image.URL
      ) {
        // If the species (singular) returned by the API has the Profile.Image.URL,
        // send it back...
        return $q.resolve(theSingleSpecies.Profile.Image.URL)
      } else {
        // ...otherwise, return the default image URL
        return getRadomImageUrl(species, chekedIds.concat(randomSpeciesTaxonId))
      }
    })
  }

  function pickRandomElement (arr) {
    const bottom = 0
    const top = arr.length
    const randomNumber = getRandomInt(bottom, top)

    return arr[randomNumber]
  }

  function getRandomInt (min, max) {
    // Taken from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#Getting_a_random_integer_between_two_values
    return Math.floor(Math.random() * (max - min)) + min
  }

  function getSpecieById (taxonId) {
    return SpeciesService.getSpeciesById({
      taxonid: taxonId
    }).$promise.then(function (species) {
      return $q.resolve(species.Species)
    })
  }

  function getSpeciesOfFamily (familyName) {
    return SpeciesService.getSpecies({
      family: familyName
    }).$promise.then(function (species) {
      return $q.resolve(species.Species)
    })
  }
}
