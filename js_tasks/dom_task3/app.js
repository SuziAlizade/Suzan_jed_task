const users = [
    {
        id: 1,
        username: "Ali",
        img: 'ali',
        job: 'developer'
    },
    {
        id: 2,
        username: 'bedbext_developer',
        img: 'bedbext_developer',
        job: 'test2',
    },
    {
        id: 3,
        username: 'duman',
        img: 'duman',
        job: 'test3',
    },
    {
        id: 4,
        username: 'js_oyrenen_shexs',
        img: 'js_oyrenen_shexs',
        job: 'test4',
    },
    {
        id: 5,
        username: 'qarli_daglar',
        img: 'qarli_daglar',
        job: 'test5',
    },
    {
        id: 6,
        username: 'qoca_cinar',
        img: 'qoca_cinar',
        job: 'test6',
    },
    {
        id: 7,
        username: 'visselka',
        img: 'visselka',
        job: 'test7',
    },
    {
        id: 8,
        username: 'novxani',
        img: 'novxani',
        job: 'test8',
    },
]
const root = document.getElementById('root')
//   your code goes here
const images = 'img\\'
for(const value of users){
    const div = document.createElement('div')
    root.append(div)
    const img = document.createElement('img')
    img.src= `${images}${value.img}.jpg`
    div.append(img)
    const h1 = document.createElement('h1')
    h1.textContent=`${value.username}`
    div.append(h1)
    const p = document.createElement('p')
    p.textContent = `${value.job}`
    div.append(p)
}