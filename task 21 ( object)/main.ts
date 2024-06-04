interface item{
    name : string
    prices: number
}
// create two object
const book :item ={
    name : "Essential Typescript 5",
    prices : 500
}

const apple:item ={
    name : 'apple',
    prices : 200
}
console.log(`Book name ${book.name},price ${book.prices}`);
console.log(`Apple name ${apple.name},price ${apple.prices}`);
