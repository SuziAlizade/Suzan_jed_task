const url = `https://www.themealdb.com/api/json/v1/1/random.php`
const rootEelem = document.getElementById('root')

axios.get(url).then((res) => {
    console.log(res)

    const item = res.data.meals
    console.log(item)
    item.forEach((info) => {
        const h1 = document.createElement('h1')
        const hr = document.createElement('hr')
        const h3 = document.createElement('h3')
        const a = document.createElement('a')
        const img = document.createElement('img')
        const br = document.createElement('br')

        h1.textContent = 'Meal name'
        h3.textContent = info.strMeal
        a.text = 'How to cook'
        a.href = info.strYoutube
        img.src = info.strMealThumb
        img.alt = info.strTags
        rootEelem.append(h1, h3, hr,img,br,a)

    })


})