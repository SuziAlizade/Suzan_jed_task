/* TASK3. ekranda bu formada sekil cekin
*
****
***
**
*
*/
debugger
function drawStars(number) {
    for (let i = 0; i < number; i++) {
        for (let j = number; j > i; j--) {
            document.write('*')

        }document.write('</br>')
    } 
}
drawStars(1)
drawStars(4) 