import _ from 'lodash'

const data = [
  {
    username: 'juanse',
    rol: 'admin'
  },
  {
    username: 'elyssa',
    rol: 'seller'
  },
  {
    username: 'Jonan',
    rol: 'seller'
  },
  {
    username: 'Ander',
    rol: 'customer'
  }
]

const rta = _.groupBy(data, (item)=>item.rol)



console.log(rta)
