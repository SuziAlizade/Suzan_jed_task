const url = `https://www.swapi.tech/api/people/5`
const rootElem = document.getElementById('root')

axios.get(url).then((res) => {

    const info = res.data.result.properties
    console.log(info)
    const h1 = document.createElement('h1')
    const hr = document.createElement('hr')
    const gender = document.createElement('p')
    const eye_color = document.createElement('p')
    const hair_color = document.createElement('p')
    const height = document.createElement('p')
    const skin_color = document.createElement('p')
    h1.textContent = info.name
    gender.textContent = `Gender: ${info.gender}`
    eye_color.textContent = `Eye Color: ${info.eye_color}`
    hair_color.textContent = `Hair Color: ${info.hair_color}`
    height.textContent = `Height: ${info.height}`
    skin_color.textContent = `Skin Color: ${info.skin_color}`
 
    rootElem.append(h1, gender, eye_color, hair_color, height, skin_color)

})
