
function createPlant(type, isPerennial, leafDescription, leafColor, flowerColor, flowerDescription, gallonsWaterPerWeek, amountOfSunNeeded) {

    let plant = {};

    plant.type = type;
    plant.isPerennial = isPerennial;
    plant.leafDescription = leafDescription;
    plant.leafColor = leafColor;
    plant.flowerColor = flowerColor;
    plant.flowerDescription = flowerDescription;
    plant.gallonsWaterPerWeek = gallonsWaterPerWeek;
    plant.amountOfSunNeeded = amountOfSunNeeded;

    return plant;
}




/* ------------------------------------------------
    Exercise Two

    The owner wants you to decide where to put every new plant they get.

    Each plant must go in one of the three gardens of the estate.

    The createEstate() has already been written for you, which returns an object representing the entire estate.
    The estate contains three collections of plants: 
    the roseArbor, the perennialGarden, and the slopePlanters.

    Now complete the function addPlantToEstate()
    This should decide, based upon the plant's properties, where to put the plant in the estate.  

    The rose arbor should contain all of the roses.
    The perennial garden should contain only perennials.  However, the perennial garden doesn't get that much sun.  
    No plants with an amountOfSunNeeded greater than 5 should be placed in the perennial garden.
    The rest of the plans should be placed in the slop planters.
*/

function createEstate() {
    let estate = {
        roseArbor: [],
        perennialGarden: [],
        slopePlanters: [],
    };
    return estate;
}






function addPlantToEstate(estate, plant) {

    if (plant.type === "rose") {
        let tempVar = estate.roseArbor;
        tempVar.push(plant);
        estate.roseArbor = tempVar;
        return estate;
    }


    if (plant.isPerennial === true && plant.amountOfSunNeeded < 4) {
        let tempVar2 = estate.perennialGarden;
        tempVar2.push(plant);
        estate.perennialGarden = tempVar2;
        return estate;
    }


    else {
        let tempVar3 = estate.slopePlanters;
        tempVar3.push(plant);
        estate.slopePlanters = tempVar3;
        return estate;
    }

}

/* ------------------------------------------------


    Write some functions which describe the plants.

    Complete the describePlant(), describePlants(), and describeGarden() functions below.

    They should each return a string, which is a readible english paragraph that nicely describes
    the visual features of the plant or a list of plants, or the entire estate.

    Feel free to be as elaborate as you wish!

    If you want examples of different plants, set a breakpoint and run the test. 
    It will go through several example plants.
    
    Try to have as little redundent code as possible! 
    
    Hint: describeEstate can call describeGarden which can call describePlant

    Hint2: YOu can use Template literals here to make this easy! If you have not used those yet,
    read up on them here: https://flaviocopes.com/javascript-template-literals/  
    `A ${plant.name} which has ....`
    But you can just use string concatenation too   "A " + plant.name + " which has ..."
*/

/**
 * describePlant
 * @param {*} plant - A plant object
 * 
 * Given a plant, this should return a string that is the description of the plant.
 * The description should use at least a few of the properties on the plant to form a sentence.
 * 
 * Example: "A Rose which has green leaves that are rounded with a point.  The flowers are red concentric circles of pedals. "
 */
function describePlant(plant) {
    let description = "";
    let type = plant.type;
    let color = plant.flowerColor;
    let leafcolor = plant.leafColor;
    let sun = plant.amountOfSunNeeded;
    description = `The ${type} is a beautiful ${color} flower that exhibits ${leafcolor} leaves and needs at least ${sun} units of sunlight to survive!`
    return description;
}


/**
 * describeGarden
 * @param {String} gardenName - The name of the garden to describe
 * @param {Object[]} listOfPlants - The List of plants to be described.
 * 
 * // Example: "The Rose Garden has 10 types of plants in it.  It contains: A"
 */
function describeGarden(gardenName, listOfPlants) {

    let lengthy = listOfPlants.length

    let description = `The ${gardenName} contains ${lengthy} different types of plants!\n\n Here is a list of all of them:\n`


    for (i=0; i<lengthy; i++) {
        let innerArray = listOfPlants[i];

        let fcolor = innerArray.flowerColor;
        let fname = innerArray.leafColor;
        let description2 = `${fcolor} flower with ${fname} leaves\n`

        description = description.concat(' ', description2);
    }
    return description;
}


/**
 * describeEstate
 * @param {Object} estate - An estate object
 * Return a string describing all the different visual features of all the gardens in the estate.
 * This should describe every garden and every plant.
 */
function describeEstate(estate) {

    let finalColor = estate.roseArbor[0].flowerColor;
    let description = `The ${finalColor} estate contains an assortment of sections, each with their own flowers. Please use the garden and plant functions for specifics!\n`
    let lengthy = estate.length;

    for (i=0; i<lengthy; i++) {
        let innerArray = estate[i];
        let description2 = `The beautiful ${innerArray}, which contains many different flowers!`
        description = description.concat(' ', description2);
        let description3 = describeGarden(innerArray, innerArray[i]);
        description = description.concat(' ', description3);
    }

    return description
}






/* ---------------------------------------------------------------------------
    Exercise Four

    The owner wants you to tell them how much water the entire garden is going
    to need per week.

    Complete the calculateWaterUsagePerWeek() function.
*/

/**
 * calculateWaterUsagePerWeek
 * @param {Object} estate - An estate object
 * 
 * This should return a number which is the total number of gallons of water
 * needed for the whole estate.
 * 
 * Make a loop for each garden to tally the number of gallons needed by all the plants, then
 * add those up to get the total water usage.
 */
function calculateWaterUsagePerWeek(estate) {
    let numGallons = 0;

    let lengthy2 = estate.roseArbor.length
    let lengthy3 = estate.perennialGarden.length
    let lengthy4 = estate.slopePlanters.length

        for (let i=0; i<lengthy2; i++) {
            let toAdd = estate.roseArbor[i].gallonsWaterPerWeek;
            numGallons+=toAdd;
        }

        for (let i=0; i<lengthy3; i++) {
            let toAdd = estate.perennialGarden[i].gallonsWaterPerWeek;
            numGallons+=toAdd;
        }

        for (let i=0; i<lengthy4; i++) {
            let toAdd = estate.slopePlanters[i].gallonsWaterPerWeek;
            numGallons+=toAdd;
        }
    
        numGallons = Math.round(numGallons);

    return numGallons;

}




/* ---------------------------------------------------------------------------
    Exercise Five

    Clone a plant

    The botanist of the estate wants more colors of roses, so they have devised a way to
    alter the color of a plant.
    They want you to clone each of the roses in the garden giving them more
    elaborate colors.

    First, complete cloneRose().
    Given a plant, this should clone it and return a copy with a new color.

    Complete cloneAllTheRosesAndChangeTheirColors().  
    This function should go attempt to clone all the roses in the garden.  
    Make sure your algorithm does not clone or change the color of flawed plants!
*/

/**
 * cloneRose
 * @param {Object} plant - A plant object
 * 
 * This should return a new object, which is a clone of the given plant.
 * The clone should have identitcal properties to the given plant, except for the color.
 * 
 * Every clone should run changeColorOfPlant(clone)
 * This will use the botanist's special algorithm to make new colors of roses.
 * 
 */
function cloneRose(plant) {
    let clone = {};
    clone = Object.assign(plant, clone);
    changeColorOfPlant(clone);
    return clone;
}


// 
// DO NOT CHANGE ANYTHING IN THIS
/**
 * changeColorOfPlant
 * @param {Object} plant 
 * The Owner's proprietary color changing algorithm.
 * Given a plant, this genetically changes the color.
 * 
 * However!  Due to a flaw in the color changing process, there is a chance that a rose will become flawed
 * after changing the color.
 * If you attempt to modify a flawed flower, it will produce a flowerless
 * plant.
 */
function changeColorOfPlant(plant) {
    let newColors = ["Amber", "Crimson", "Aqua", "Cerulean Blue", "Flamingo", "Gun Smoke", "Jade", "Merigold", "Mustard", "Periwinkle"];
    // ~~ Magic Genetic Engineering ~~
    let randIndex = Math.floor(Math.random() * newColors.length);

    if (plant.isFlawed) {
        plant.flowerDescription = "wilted sad buds with no pedals.";
        plant.flowerColor = null;
    } else {
        plant.flowerColor = newColors[randIndex];
    }

    let randomChance = Math.floor(Math.random() * 3);
    if (randomChance < 1) {
        plant.isFlawed = true;
    }
}
// DO NOT CHANGE ANYTHING IN THIS


/**
 * cloneAllTheRosesAndChangeTheirColors
 * @param {Object} estate - An estate object
 * 
 * This should attempt to clone every rose and add the plant to the garden.
 * Just watch out for flawed plants!  Don't attempt to clone flawed plants. 
 * Otherwise you will produce flowerless roses.
 */
function cloneAllTheRosesAndChangeTheirColors(estate) {
    let amtOfRoses = estate.roseArbor.length;
    let tempArray = [];

    for (let i=0; i<amtOfRoses; i++ ) {

        if (estate.roseArbor[i].isFlawed === true) {
            continue;
            
        }

        if (estate.roseArbor[i].flowerColor!==null) {
            tempArray.push(cloneRose(estate.roseArbor[i]));
        }

    }

    let originalArray = estate.roseArbor;
    let mergeArrays = tempArray.concat(originalArray);
    estate.roseArbor = mergeArrays;

    return estate.roseArbor;

    // for each rose...

    // Hint: Watch out for modifying an array you are currently looping through!  How can you avoid that?
    // Instead of putting the new plants immediately into the rose arbor, maybe store them in a new array
    // until you have finished iterating.  Then you can add them in after your loop finishes.
}


{
    console.log("-----Tests for Exercise One-----");

    {
        let plantProperties = getAllTestPlants()[0];
        console.log("* Get a rose");
        let plant1 = createPlant(...plantProperties); // this is called a "spread" operator, it takes every value in the array and passes each into the function as a parameter

        let hasEveryProperty = true;
        if (plant1) {
            let values1 = Object.values(plant1);
            for (let property of plantProperties) {
                if (!values1.includes(property)) {
                    hasEveryProperty = false;
                    console.log(`ERROR - The plant is missing a value: ${property}`);
                }
            }
        }

        console.log(plant1 && hasEveryProperty);
    }


    console.log("-----Tests for Exercise Two-----");
    {
        let plants2 = getAllTestPlants();
        let estate2 = createEstate();

        console.log("* Add a rose");
        let rose2 = createPlant(...plants2[0]);
        addPlantToEstate(estate2, rose2);
        console.log(estate2.roseArbor.length === 1 && estate2.perennialGarden.length === 0 && estate2.slopePlanters.length === 0 && estate2.roseArbor[0] === rose2);

        console.log("* Add another rose");
        addPlantToEstate(estate2, rose2);
        console.log(estate2.roseArbor.length === 2 && estate2.perennialGarden.length === 0 && estate2.slopePlanters.length === 0 && estate2.roseArbor[1] === rose2);

        console.log("* Add a perrenial");
        let orchid2 = createPlant(...plants2[1]);
        addPlantToEstate(estate2, orchid2);
        console.log(estate2.roseArbor.length === 2 && estate2.perennialGarden.length === 1 && estate2.slopePlanters.length == 0 && estate2.perennialGarden[0] === orchid2);

        console.log("* Add a high sun perrenial");
        let lavender2 = createPlant(...plants2[3]);
        addPlantToEstate(estate2, lavender2);
        console.log(estate2.roseArbor.length === 2 && estate2.perennialGarden.length === 1 && estate2.slopePlanters.length == 1 && estate2.slopePlanters[0] === lavender2);

        console.log("* Add a non-perrenial");
        let marigold2 = createPlant(...plants2[7]);
        addPlantToEstate(estate2, marigold2);
        console.log(estate2.roseArbor.length === 2 && estate2.perennialGarden.length === 1 && estate2.slopePlanters.length == 2 && estate2.slopePlanters[1] === marigold2);
    }


    console.log("-----Tests for Exercise Three-----");
    {
        let estate3 = createdPopulatedEstate();
        console.log("* describePlant works and includes the flower color");
        let plantDescription3 = describePlant(estate3.roseArbor[0]);
        console.log(plantDescription3);
        console.log(plantDescription3 && plantDescription3.length > 0 && plantDescription3.indexOf(estate3.roseArbor[0].flowerColor) > -1);

        console.log("* describeGarden works and includes the flower color");
        let gardenDescription3 = describeGarden("Rose Arbor", estate3.roseArbor);
        console.log(gardenDescription3);
        console.log(gardenDescription3 && gardenDescription3.length > 0 && gardenDescription3.indexOf(estate3.roseArbor[0].flowerColor) > -1);

        console.log("* describeEstate works");
        let estateDescription3 = describeEstate(estate3);
        console.log(estateDescription3);
        console.log(estateDescription3 && estateDescription3.length > 0) && estateDescription3.indexOf(estate3.roseArbor[0].flowerColor) > -1;
    }
    console.log("-----Tests for Exercise Four-----");
    {
        let estate4 = createEstate();
        console.log("* Empty Estate");
        let emptyGallons = calculateWaterUsagePerWeek(estate4);
        console.log(emptyGallons === 0);

        console.log("* Calculate Whole Estate is equal to 12.");
        estate4 = createdPopulatedEstate();
        let totalGallons = calculateWaterUsagePerWeek(estate4);
        console.log(totalGallons === 12);


    }
    console.log("-----Tests for Exercise Five-----");
    {
        let estate5 = createdPopulatedEstate();

        console.log("* Clone Rose");
        let rose5 = estate5.roseArbor[0];
        let rose5Copy = cloneRose(rose5);
        console.log(!!rose5Copy && !!rose5Copy.type &&
            rose5Copy.type === rose5.type &&
            rose5Copy.isPerennial === rose5.isPerennial &&
            rose5Copy.leafDescription === rose5.leafDescription &&
            rose5Copy.leafColor === rose5.leafColor &&
            rose5Copy.flowerColor === rose5.flowerColor &&
            rose5Copy.flowerDescription === rose5.flowerDescription &&
            rose5Copy.gallonsWaterPerWeek === rose5.gallonsWaterPerWeek &&
            rose5Copy.amountOfSunNeeded === rose5.amountOfSunNeeded);


        console.log("* Clone All Roses - First Run");
        let initialNumRoses = estate5.roseArbor.length;
        cloneAllTheRosesAndChangeTheirColors(estate5);
        console.log(estate5.roseArbor.length > 0 && estate5.roseArbor.length === (initialNumRoses * 2));

        console.log("* Clone All Roses - After a few runs... - No flawed roses.");
        cloneAllTheRosesAndChangeTheirColors(estate5);
        cloneAllTheRosesAndChangeTheirColors(estate5);
        cloneAllTheRosesAndChangeTheirColors(estate5);
        let hasNoRuinedRoses = true;
        for (let rose of estate5.roseArbor) {
            if (rose.flowerColor == null) {
                hasNoRuinedRoses = false;
            }
        }
        console.log(estate5.roseArbor.length > 0 && estate5.roseArbor.length > initialNumRoses && hasNoRuinedRoses);
    }

    /*
       -------TEST UTILITIES------------------------------------------------------
       These are utilities for the tests.
    
       Do not modify anything below this line.
    
       But read through these and try to understand what they  do.
    */

    function createdPopulatedEstate() {
        let estate = createEstate();
        let plants = getAllTestPlants();

        for (let plant of plants) {
            let plantObj = createPlant(...plant);
            addPlantToEstate(estate, plantObj);
        }

        return estate;
    }

    function getAllTestPlants() {
        return [
            ["rose", true, "rounded with a point", "green", "red", "concentric circles of pedals", 0.8, 4],
            ["orchid", true, "long and wide with a point at the end", "green", "fuscia", "pedals surrounding a central mouth", 1.2, 2],
            ["lily", true, "small and rounded", "green", "pink, white, blue, or orange", "brightly colored pedals surrounding a lighter center", 2, 4],
            ["lavender", true, "long and skinny", "green", "purple", "fragrant rod-like clusters of many tiny pedals", 2.5, 8],
            ["poppy", true, "long and jagged at the base of the plant", "green", "orange or red", "concentric circles of ruffled pedals surrounding a central core", 0.8, 4],
            ["begonia", false, "large with jagged edges and visible veins", "purple and green", "pink", "a few gently ruffled pedals with a central cluster of yellow pistils", 1.8, 5],
            ["snapdragon", false, "long and skinny along the entire stem", "green", "red, yellow, or orange", "many groups of ruffled pedals all along the stem", 0.5, 4],
            ["marigold", false, "thin and jagged along branches", "green", "yellow and orange", "rounded pedals in groups of five with a darker orange center", 0.8, 4],
            ["rose", true, "rounded with a point", "green", "purple", "concentric circles of pedals", 0.8, 4],
            ["rose", true, "rounded with a point", "green", "blue", "concentric circles of pedals", 0.8, 4]
        ]
    }
}