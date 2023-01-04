export const initialState = {
    basket: [],
    returns_Order: [],
}

const reducer = (state, action) => {
    console.log(action)
    console.log(state.returns_Order);
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item],
            }
        case "REMOVE_FROM_BASKET":
            var new__basket = [...state.basket];
            var index = state.basket.findIndex((cartItem) => cartItem.id === action.id);
            if (index >= 0) {
                //Item Exit in cart remove it
                new__basket.splice(index, 1);
            }
            else {
                console.warn(`can't remove product (id : ${action.id}) as it is exist`)
            }
            return {...state, basket : new__basket}
        case  "ORDER_PLACED":
            if(action.id){
                var new__basket1 = [...state.basket];
                var tmp = 0;
                for (let i = 0; i < new__basket1.length; i++){
                    if (new__basket1[i].id === action.id){
                        tmp = {...new__basket1[i]};
                        new__basket1.splice(i, 1);
                        break;
                    }
                }
                return { ...state, basket: new__basket1, returns_Order : [...state.returns_Order, tmp]}
            }
            return { ...state, returns_Order: [...state.returns_Order, action.item]}
        case "CANCEL_ORDER":
            var new_returnOrder = [...state.returns_Order];
            var idx = new_returnOrder.findIndex((item)=>{
                return item.id === action.id;
            })
            new_returnOrder.splice(idx, 1);
            return ({...state, returns_Order : new_returnOrder})    
        case "CHECKOUT__PRODUCT"  :
            // tmp = [...]
            return{...state, basket : [], returns_Order : [...state.returns_Order, ...state.basket]}      
        default:
            return { ...state };
    }
}

export default reducer