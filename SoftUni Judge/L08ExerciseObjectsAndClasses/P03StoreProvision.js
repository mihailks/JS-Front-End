function store(inStock, deliveryProducts) {

    const products = [...inStock, ...deliveryProducts];
    const stock = products.reduce((acc,curr,i)=>{
        if (i%2 ===0){
            if (!acc.hasOwnProperty(curr)){
                acc[curr] = Number(products[i+1]);
            } else {
                acc[curr]+=Number(products[i+1])
            }
        }

        return acc;
    },{})
    Object.entries(stock).forEach(([key,value])=>{
        console.log(`${key} -> ${value}`)
    })
}

store(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'], ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);
store(['Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'], ['Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30']);