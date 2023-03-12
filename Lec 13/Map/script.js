// Similar to object but order is maintened  -- object no method is there ,, map has dedicated method for each CRUD operation

const mp = new Map();

mp.set('name', 'BMW')
mp.set('price' , 1223423)
mp.set('brake', true)

mp.get('name')
mp.get('price')

mp.has('name')


// remeber set get has


// object to map
const obj = {
    id: 1,
    name: 'bobby',
  };
  
  const map1 = new Map(Object.entries(obj));
  console.log(map1); // 👉️ {'id' => 1, 'name' => 'bobby'}