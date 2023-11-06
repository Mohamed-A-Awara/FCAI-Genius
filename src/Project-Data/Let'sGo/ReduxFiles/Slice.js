import { createSlice } from "@reduxjs/toolkit";

export const  Slice = createSlice({
    name :"counter",
    initialState:{
        valueteam1 :0,
        valueteam2 :0,
    },
    reducers:{
        addnumberOne :(state)=>{
            state.valueteam1 += 1
        },
        addnumberTwo:(state) => {
            state.valueteam2 += 1
        },
        delnumberOne : (state)=>{
            state.valueteam1 -= 1
        },
        delnumberTwo : (state)=>{
            state.valueteam2 -= 1
        },
        resetvalue : (state)=>{
            state.valueteam1 = 0
            state.valueteam2 = 0
        },
        add5numberOne: (state)=>{
            state.valueteam1 += 5
        },
        add5numberTwo: (state)=>{
            state.valueteam2 += 5
        },
        del5numberTwo: (state)=>{
            state.valueteam2 -= 5
        },
        del5numberOne: (state)=>{
            state.valueteam1 -= 5
        },
    }
})

export const {addnumberTwo , add5numberOne, add5numberTwo,addnumberOne
, resetvalue ,delnumberOne ,delnumberTwo , del5numberTwo ,del5numberOne
} = Slice.actions

export default Slice.reducer