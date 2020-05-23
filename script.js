// function r() {
//     b = []
//     let c = [1, 2, 3, 4]
//     const z = c[1]
//     for (a in c) {
//         b.push(c[a])
//         if (a == z) {
//             b.pop()
//             // console.log(a)
//         }
//         // console.log(b)
//     }
//     return b
// }
// console.log(r())

let p = [1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 0]
function fola(p) {
    let content = 4
    let items = Math.ceil(p.length / content)
    let i = 0
    let counts = 0
    let j
    let len = []
    while (i < items) {
        j = p.splice(0, content)
        len.push(j)
        i++
        console.log(j, i, content * i, p)
    }
}
fola(p)

