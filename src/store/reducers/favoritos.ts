import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../types'

type FavoritosState = {
  itens: Produto[]
}

const initialState: FavoritosState = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    favoritosAdicionar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      if (state.itens.find((p) => p.id === produto.id)) {
        alert('Item já Favoritado')
      } else {
        state.itens.push(produto)
      }
    }
  }
})

export const { favoritosAdicionar } = favoritosSlice.actions
export default favoritosSlice.reducer
