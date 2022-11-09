// 1. deepClone(obj1, obj2) -> obj1deki butun propertyleri obj2ye menimsetsin
// 2.  deleteProperty(propertyName, obj) ->  verdiyimiz obyektden adini verdiyimiz property-ni silmek
// 3. obyektin propertylerinin sayini gosteren funksiya yazin
const obj1 = {
    name: 'Suzan',
    surname: 'Alizade',
    age: 19,
    job: 'dev'
}
const obj2 = { ...obj1 }
delete obj2.name
for (let property in obj2) {
    const showNumber = () => {
console.log(`obj2 contains ${Object.keys(obj2).length} properties`)
    }
  
    showNumber()
}
