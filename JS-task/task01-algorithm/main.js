const cityList = [{
    id: 1,
    name: "Cockburn Town",
    population: 15,
    area: 63
}, {
    id: 2,
    name: "Béziers",
    population: 16,
    area: 74
}, {
    id: 3,
    name: "Guaiúba",
    population: 7,
    area: 83
}, {
    id: 4,
    name: "Veliko Tŭrnovo",
    population: 17,
    area: 83
}, {
    id: 5,
    name: "São Pedro",
    population: 9,
    area: 70
}, {
    id: 6,
    name: "Ouadda",
    population: 19,
    area: 52
}, {
    id: 7,
    name: "Sanquan",
    population: 18,
    area: 35
}];

/**
 * 
 * @param {City[]} list 
 * @param {Number} population 
 * @param {Number} area 
 * @returns all cities where population is lower than the specified and the area
 * is greater then the specified.
 */
const cityFilter = (list, population, area) => {
    
// lakosság alacsonyabba megadottnál
// a területe a városnak pedig nagyobb legyen, mint a meghat.
    return list.filter(item => item.population < population && item.area > area)
        .map( item => item.name);
// leszűkítem csak a város nevekre

};

const citySorter = (list, key) => {
    return list.sort(item => item.key );
};

const citySlicer = (list, limit) => {
    return citySorter(list, 'name').slice(0, limit);
};

if (typeof module !== 'undefined') {
    module.exports = {
        cityList,
        cityFilter,
        citySorter,
        citySlicer
    };
}


// ABC szerint rendezni a tömböt

const names = ['Aladár', 'Béla', 'Kati' ];
names.sort((a,b)=>a.localeCompare(b))
console.log(names);
