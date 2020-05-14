function r() {
    b = []
    let c = [1, 2, 3, 4]
    const z = c[1]
    for (a in c) {
        b.push(c[a])
        if (a == z) {
            b.pop()
            // console.log(a)
        }
        // console.log(b)
    }
    return b
}
console.log(r())
