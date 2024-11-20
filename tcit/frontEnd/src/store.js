import { createStore} from 'redux'

const reducer =(state, action) => {

    switch (action.type) {
        case "ADD_TO_FILTRO":   
          return {
                ...state,
                filtro: action.dat
                 }        

        case "ADD_TO_BUSCA":   
          return {
                ...state,
                busca: action.dat
                 }        

        case "ADD_TO_POST_DAT":   
          action.dat.id = action.dat.id1
          return {
                ...state,
                carro: [...state.carro, action.dat]
                }          

        case "ADD_TO_POST_All":   
          return {
                ...state,
                carro: [...state.carro, action.dat]
                 }        

        case "REMOVE_FROM_POST":   
        return {
                ...state,
                carro: state.carro.filter(pp => pp.id !== action.po.id)
                }        
             
        case "CLEAR_CARRO":
                return {
                        ...state,
                        carro: [],
                };

        case "FILTRA_CARRO":
                return {
                        ...state,
                        carro: [],
                };
                        
        default:
                return {
                  ...state,
                };

    }
    

}
export default createStore(reducer, { cart:[],carro:[],filtro:"",busca:""} )