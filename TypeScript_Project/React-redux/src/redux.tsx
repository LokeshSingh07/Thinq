// -------------------- Using CreateReducer, CreateAction --------------------
// import { configureStore, createReducer, createAction } from "@reduxjs/toolkit"; 


// interface StateType{
//     count:number,
// }

// // const increment = createAction("increment");
// const decrement = createAction("decrement");

// const initialState:StateType = {count:0}


// let rootReducer = createReducer(initialState, (builder)=>{
//     builder.addCase("increment", (state)=>{
//         state.count +=1;
//     }).addCase(decrement, (state)=>{
//         state.count -=1;
//     })

// });


// export const store = configureStore({reducer: {
//     root: rootReducer,
// }});









// -------------------- Using CreateSlice --------------------
import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface StateType{
    count:number,
}
const initialState:StateType = {
    count:0
}




const rootSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state)=>{
            state.count += 1;
        },
        decrement: (state)=> {
            state.count -= 1;
        },
        incrementByValue: (state, actions: PayloadAction<number>)=>{
            state.count = actions.payload;
        }
    }

})


export const {increment, decrement, incrementByValue} = rootSlice.actions;
const CounterReducer = rootSlice.reducer;
export const store = configureStore({reducer: CounterReducer });



// agar StateType nhi hota tab
type Cus = ReturnType<typeof store.getState>;