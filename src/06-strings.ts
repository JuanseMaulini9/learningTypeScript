(()=>{

  let productTitle = 'My amazing product'


  productTitle = 'My amazing product changed'

  console.log('productTitle', productTitle)

  const productDescription = "hola que tal soy la descripcion"

  console.log('productDescription', productDescription)

  let productPrice = 100
  let isNew: boolean = false;

  const summary = `
    title: ${productTitle},
    discription: ${productDescription}
    price: ${productPrice}
    isNew: ${isNew}
  `

  console.log(summary)





})()
