(()=>{
  let myDynamicVar: any
  myDynamicVar = 100
  myDynamicVar = {}
  myDynamicVar = null
  myDynamicVar = ''

  //cast

  myDynamicVar = 'Hola'
  const rta = (myDynamicVar as string).toLowerCase()
  console.log(rta)

  myDynamicVar = 1212
  const rta2 = (<number>myDynamicVar).toFixed()
  console.log(rta2)
})()
