(()=>{
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  const login = (data: {email: string, password: number}) =>{
    console.log(data.email, data.password)
  }
  //login('juanse@gmaol.com', '121232')
  login({
    email: 'juanse@gmail.com',
    password: 12324
  })

  const products: any[] = []

  const addProduct = (data: {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  }) =>{

    products.push(data)
  }

  addProduct({
    title: 'pro1',
    createdAt: new Date(),
    stock: 1
  })
  addProduct({
    title: 'pro2',
    createdAt: new Date(),
    stock: 13,
    size: 'L'
  })
  console.log(products)
})()
