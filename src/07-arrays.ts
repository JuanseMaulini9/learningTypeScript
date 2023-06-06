(()=>{

  let prices = [1,2,3,4,5,6,78,8, 'hola', true]
  //prices.push('mgfd')
  //prices.push(true)
  //prices.push({})

  prices.push(12434)
  prices = [1,2,1,2]

  let products = ['hola', true]
  products.push(false)

  let mixed: (number | string | boolean | Object)[] = ['hola', true]
  mixed.push(234)
  mixed.push('gfsdg')
  mixed.push(false)
  mixed.push({})
  mixed.push([])


  let numbers = [1,2,3,4,5,6,78,8]
  numbers.map(item => item * 2)

})
