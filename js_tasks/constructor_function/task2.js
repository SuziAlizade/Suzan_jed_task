// Car constructor-u yaradin. Biz hemin constructor-u cagiranda onun modelini, 
// istehsal ilini, sahibini verek. Ve elbette, masinin surmek, tormozlamaq kimi methodlari olmalidir ki,
// onlari da verin. Meselen, surmek methodunu cagirsam ekrana,  ali zapi markali masinina qaz verir.

function car(model, il, sahib) {
    this.model = model
    this.il = il
    this.sahib = sahib
    this.surmek = () => {
        console.log(`${this.sahib}  ${this.model} ${il} masina qaz verir`)
    }
    this.tormozlamaq = () => { 
        console.log(`${this.sahib}  ${this.model} ${il} masini tormozlayir`)
    }
}
const user1 = new car('zapi', '2012', 'Ali')
const user2 = new car('lambo', '2020', 'Suzi')
console.log(user1)
console.log(user2)