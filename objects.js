class Plant {

    constructor(type, isPerennial, leafDescription, leafColor, flowerColor, flowerDescription, gallonsWaterPerWeek, amountOfSunNeeded) {
      this.type = type;
      this.isPerennial = isPerennial;
      this.leafDescription = leafDescription;
      this.leafColor = leafColor;
      this.flowerColor = flowerColor;
      this.flowerDescription = flowerDescription;
      this.gallonsWaterPerWeek = gallonsWaterPerWeek;
      this.amountOfSunNeeded = amountOfSunNeeded;
    }

    changeColor() {
      let newColors = ["Amber", "Crimson", "Aqua", "Cerulean Blue", "Flamingo", "Gun Smoke", "Jade", "Merigold", "Mustard", "Periwinkle"];
      let randIndex = Math.floor(Math.random() * newColors.length);
      if (this.isFlawed) {
          this.flowerDescription = "wilted sad buds with no pedals.";
          this.flowerColor = null;
      } else {
          this.flowerColor = newColors[randIndex];
      }
      let randomChance = Math.floor(Math.random() * 3);
      if (randomChance < 1) {
          this.isFlawed = true;
      }
    }

    describePlant() {
      let description = "";
      let type = this.type;
      let color = this.flowerColor;
      let leafcolor = this.leafColor;
      let sun = this.amountOfSunNeeded;
      description = `The ${type} is a beautiful ${color} flower that exhibits ${leafcolor} leaves and needs at least ${sun} units of sunlight to survive!`;
      return description;
    }

    clone() {
        let clone = {};
        clone = new Plant();
        this.changeColor();
        return clone;
    }
  }















  class Garden {

    constructor(name) {
      this.name = name;
      this.plants = [];
    }


    describeGarden() {
        let lengthy = this.plants.length

        let description = `The ${this.name} contains ${lengthy} different types of plants!\n\n Here is a list of all of them:\n`
    
    
        for (i=0; i<lengthy; i++) {
            let innerArray = this.plants[i];
    
            let fcolor = innerArray.flowerColor;
            let fname = innerArray.leafColor;
            let description2 = `${fcolor} flower with ${fname} leaves\n`
    
            description = description.concat(' ', description2);
        }
        return description;
    }


    addPlant(plant) {
        this.plants.push(plant);
    }
  }













  class Estate {

    constructor(name) {
        this.roseArbor = new Garden("Rose Arbor");
        this.perennialGarden = new Garden("Perennial Garden");
        this.slopePlanters = new Garden("Slope Planters");
    }

    addPlant(plant) {
        if (plant.type === "rose") {
            let tempVar = this.roseArbor;
            tempVar.push(plant);
            this.roseArbor = tempVar;
        }
    
    
        if (plant.isPerennial === true && plant.amountOfSunNeeded < 4) {
            let tempVar2 = this.perennialGarden;
            tempVar2.push(plant);
            this.perennialGarden = tempVar2;
        }
    
    
        else {
            let tempVar3 = this.slopePlanters;
            tempVar3.push(plant);
            this.slopePlanters = tempVar3;
        }
    }

    describe() {
        let finalColor = this.roseArbor[0].flowerColor;
        let description = `The ${finalColor} estate contains an assortment of sections, each with their own flowers. Please use the garden and plant functions for specifics!\n`
        let lengthy = this.length;
    
        for (i=0; i<lengthy; i++) {
            let innerArray = this[i];
            let description2 = `The beautiful ${innerArray}, which contains many different flowers!`
            description = description.concat(' ', description2);
            let description3 = describeGarden(innerArray, innerArray[i]);
            description = description.concat(' ', description3);
        }
    
        return description
    }

    calculateWaterUsagePerWeek () {
        let numGallons = 0;

        let lengthy2 = this.roseArbor.length
        let lengthy3 = this.perennialGarden.length
        let lengthy4 = this.slopePlanters.length
    
            for (let i=0; i<lengthy2; i++) {
                let toAdd = this.roseArbor[i].gallonsWaterPerWeek;
                numGallons+=toAdd;
            }
    
            for (let i=0; i<lengthy3; i++) {
                let toAdd = this.perennialGarden[i].gallonsWaterPerWeek;
                numGallons+=toAdd;
            }
    
            for (let i=0; i<lengthy4; i++) {
                let toAdd = this.slopePlanters[i].gallonsWaterPerWeek;
                numGallons+=toAdd;
            }
        
            numGallons = Math.round(numGallons);
    
        return numGallons;
    }

    cloneAllTheRosesAndChangeTheirColors () {
        let amtOfRoses = this.roseArbor.length;
        let tempArray = [];
    
        for (let i=0; i<amtOfRoses; i++ ) {
    
            if (this.roseArbor[i].isFlawed === true) {
                continue;
                
            }
    
            if (this.roseArbor[i].flowerColor!==null) {
                tempArray.push(cloneRose(this.roseArbor[i]));
            }
    
        }
    
        let originalArray = this.roseArbor;
        let mergeArrays = tempArray.concat(originalArray);
        this.roseArbor = mergeArrays;
    
        return this.roseArbor;
    }
  }
