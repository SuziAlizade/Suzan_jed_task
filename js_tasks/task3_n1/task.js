// user prompt-la 2 eded daxil edecek. Siz, onlarin quvvetini tapacaqsiniz: tutaq ki, 2,5  ---> 2*2*2*2*2=32 ekrana cixmalidir. 
// Diqqet edin ki, sizin ayrica funksiyalariniz olsun. Hem deyiseni prompt-la alib number-e ceviren funksiyaniz, hem hesablayan funksiyaniz ve hem de ekrana cixaran funksiyaniz. Bir sozle calisin funksiyalarla isleyin.

const getPower = (callback) => {
    num1 = +prompt('Enter the 1st number')
    num2 = +prompt('Enter the 2nd number')
    result = Math.pow(num1, num2)
    callback(result)
}

getPower(function (numbers) {
    console.log(numbers)
})





