(()=>{

  let userId: string | number

  userId = 12212
  userId = 'Hola que tal'

  function greeting(myText: string | number){
    if(typeof myText === 'string'){
      console.log(`string ${myText.toLowerCase()}`)
    } else {
      console.log(`number ${myText.toFixed(1)}`)
    }
  }
  greeting('hola')
  greeting(1.212)
})()
