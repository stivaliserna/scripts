/* global angular */

angular
  .module('speciesApp')
  .factory('ImgService', ['$q', 'SpeciesService', ImgService])

function ImgService ($q, SpeciesService) {
  return {
    getFamilyURL: getFamilyURL,
    getClassURL: getClassURL,
    getKingdomURL: getKingdomURL
  }

  function getKingdomURL (kingdomName) {
    return getClassesOfKingdom(kingdomName).then(function (classes) {
      if (!classes || !classes.length) {
        return $q.resolve(null)
      } else {
        return pickRandomImgUrlOfClasses(classes, [])
      }
    })
  }

  function getClassURL (kingdomName, className) {
    return getFamiliesOfClass(kingdomName, className).then(function (families) {
      if (!families || !families.length) {
        return $q.resolve(null)
      } else {
        return pickRandomImgUrlOfFamilies(families, [])
      }
    })
  }

  function getFamilyURL (familyName) {
    return getSpeciesOfFamily(familyName).then(function (species) {
      if (!species || !species.length) {
        // If the API returns no species for the requested family,
        // don't bother to pick a random species since it doesn't exists
        return $q.resolve(null)
      } else {
        // ...otherwise, pick one and hit the API to get its details,
        // and pass it over to the next Promise#then
        return pickRandomImgUrlOfSpecies(species, [])
      }
    })
  }

  function pickRandomImgUrlOfClasses (classes, checkedClassNames) {
    if (classes.length === checkedClassNames.length) {
      return $q.resolve(null)
    }

    let randomClass = pickRandomElement(classes)

    if (checkedClassNames.includes(randomClass.ClassCommonName)) {
      return pickRandomImgUrlOfClasses(classes, checkedClassNames)
    }

    return getClassURL(
      randomClass.KingdomCommonName,
      randomClass.ClassCommonName
    ).then(function (url) {
      if (url) {
        return $q.resolve(url)
      } else {
        return pickRandomImgUrlOfClasses(
          classes,
          checkedClassNames.concat(randomClass.ClassCommonName)
        )
      }
    })
  }

  function pickRandomImgUrlOfFamilies (families, checkedFamilyNames) {
    if (families.length === checkedFamilyNames.length) {
      return $q.resolve(null)
    }

    let randomFamilyName = pickRandomElement(families).FamilyName

    if (checkedFamilyNames.includes(randomFamilyName)) {
      return pickRandomImgUrlOfFamilies(families, checkedFamilyNames)
    }

    return getFamilyURL(randomFamilyName).then(function (url) {
      if (url) {
        return $q.resolve(url)
      } else {
        return pickRandomImgUrlOfFamilies(
          families,
          checkedFamilyNames.concat(randomFamilyName)
        )
      }
    })
  }

  // Take an array of species and randomly select a candidate,
  // get the detailed info of that canditate and check if there's an image URL for it,
  // return that image URL if it does exist,
  // otherwise, pick another candidate and repeat the process until an image URL is found,
  // but return the default image URL if the array has been exhausted.
  function pickRandomImgUrlOfSpecies (species, chekedIds) {
    if (species.length === chekedIds.length) {
      return $q.resolve(null)
    }

    let randomSpeciesTaxonId = pickRandomElement(species).TaxonID

    if (chekedIds.includes(randomSpeciesTaxonId)) {
      return pickRandomImgUrlOfSpecies(species, chekedIds)
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
        return pickRandomImgUrlOfSpecies(
          species,
          chekedIds.concat(randomSpeciesTaxonId)
        )
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

  function getClassesOfKingdom (kingdomName) {
    return SpeciesService.getClasses({
      kingdom: kingdomName
    }).$promise.then(function (classes) {
      return $q.resolve(classes.Class)
    })
  }

  function getFamiliesOfClass (kingdomName, className) {
    return SpeciesService.getFamilies({
      kingdom: kingdomName,
      class: className
    }).$promise.then(function (families) {
      return $q.resolve(families.Family)
    })
  }

  function getSpeciesOfFamily (familyName) {
    return SpeciesService.getSpecies({
      family: familyName
    }).$promise.then(function (species) {
      return $q.resolve(species.Species)
    })
  }

  function getSpecieById (taxonId) {
    return SpeciesService.getSpeciesById({
      taxonid: taxonId
    }).$promise.then(function (species) {
      return $q.resolve(species.Species)
    })
  }
}
