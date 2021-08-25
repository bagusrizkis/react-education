# Multiple Reducers serta Mapping State dan dispatch ke Props

## React Redux: Mapping state dan dispatch ke Prop

-   [ ] Tambahkan connect
        doc: https://react-redux.js.org/api/connect

    ```js
    import { connect } from 'react-redux';

    const mappingState = (state) => ({...});
    const mappingDispatch = (dispatch) => ({...});

    export default connect(mappingState, mappingDispatch)(/*Component*/);
    ```

## Redux: Combining Multiple Reducer

-   [ ] Membuat multiple reducers
        doc: https://redux.js.org/api/combinereducers
-   [ ] Gabungkan dengan combineReducers

    ```js
    import { combineReducers } from "redux";
    export default combineReducers({});
    ```

-   [ ] Rubah akses data menyesuaikan rootReducers

# Redux Middleware (Thunk)

-   [ ] Membuat action creator async
        doc: https://github.com/reduxjs/redux-thunk#motivation

    ```js
    export const actionCreator = () => {
        return (dispatch, getState) => {
            // proses async
            /* complete */ dispatch({ type: "", ... });
        };
    };
    ```

-   [ ] Menambah middleware thunk
        doc: https://github.com/reduxjs/redux-thunk#installation

    ```js
    import { createStore, applyMiddleware } from "redux";
    import thunk from "redux-thunk";

    const store = createStore(/*reducers*/, applyMiddleware(thunk));
    ```

# React Context

> management sharing data yang tingkat compleksitasnya ringan

i.e. theme, lang

Note: Kalau sedikit mending pakai props aja

-   [ ] Initialisasi Provider Context
    ```js
    export const NamaContext = React.createContext({})
    <NamaContext.Provider value={{
        theme: theme,
        onSetTheme: (newTheme) => setTheme(newTheme)
    }}>
    </NamaContext.Provider>
    ```
-   [ ] Konsumsi data Context dengan Comsumer

    ```js
    <NamaContext.Consumer>
        {
            (valueContex) => {
                return ()
            }
        }
    </NamaContext.Consumer>
    ```

-   [ ] Konsumsi data Context dengan useContext

    ```js
    const valueContex = useContext(NamaContext);
    ```

-   [ ] jika mau dinamis manfaatkan state
