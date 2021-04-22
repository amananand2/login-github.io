import UserActionTypes from "./types";


  const initialState = {
      FormData: {},
      loading: false,
      error: false,
      isAuthenticated:false,
    };
    const reducer = (state = initialState, action) => {
      console.log(action,"action");
      switch (action.type) {
        case UserActionTypes.FORM_SUBMIT_START:
          return {
            ...state,
            FormData: '',
            loading: true,
            isAuthenticated:false,
            error: false,
          };
          case UserActionTypes.FORM_SUBMIT_SUCCESS:
          return {
            ...state,
            FormData: {...action.payload},
            loading: false,
            isAuthenticated:true,
            error: false,
          };
        case UserActionTypes.FORM_SUBMIT_FAILED:
          return {
              ...state,
            url: '',
            loading: false,
            error: true,
          };
          case UserActionTypes.LOGOUT_START:
            return {
             ...state,
             isAuthenticated:false,
            };
        default:
          return state;
      }
    };

    export default reducer;