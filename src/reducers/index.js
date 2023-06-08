const initialState = {
    apiKey: '', // Boş bir başlangıç değeri
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_API_KEY':
        return {
          ...state,
          apiKey: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  