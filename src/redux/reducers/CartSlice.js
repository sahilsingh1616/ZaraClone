
import { createSlice } from "@reduxjs/toolkit";

  export const CartSlice = createSlice({
    name:'sahil',
    initialState:{
        value:[],
        delta:[],
    },

    reducers: {
        addtocart: (state,action) => {
              state.value.push(action.payload)
        },

        removeCart:(state,action)=>{
             console.log(action.payload)
         const a= state.value.filter((item,index)=>index!==action.payload)
         state.value=a;
console.log(a,'++++++++++++')
        },

        addtoWishlist:(state,action)=>{
            state.delta.push(action.payload)

        },
        removetoWishlist:(state,action)=>{
            console.log(action.payload,'0000000000000000000000000000000')
           const killer=state.delta.findIndex((index)=>index==action.payload)
state.delta.splice(killer,1)
        }

    },
})

export const { addtocart,removeCart,addtoWishlist,removetoWishlist } = CartSlice.actions
export default CartSlice.reducer;

// const num=state.cartarray.findIndex((item)=>item.title==action.payload)
// state.cartarray.splice(num,1)
//   console.log(num)

