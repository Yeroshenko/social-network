const initialState = {
  friends: [{
      id: 2,
      name: 'Name1 Surname1',
      site: 'website1.io',
    },
    {
      id: 3,
      name: 'Name2 Surname2',
      site: 'website2.io',
    },
    {
      id: 4,
      name: 'Name3 Surname3',
      site: 'website3.io',
    },
    {
      id: 5,
      name: 'Name4 Surname4',
      site: 'website4.io',
    },
    {
      id: 6,
      name: 'Name5 Surname5',
      site: 'website5.io',
    },
  ]
}

const asideReducer = (state = initialState, action) => {

  return state
}

export default asideReducer