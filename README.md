# Redux

## Apa itu Redux ?

1. State Management
   ilustrasi : https://blog.codecentric.de/files/2017/12/Bildschirmfoto-2017-12-01-um-08.53.32.png
   ilustrasi flow : https://miro.medium.com/max/3646/1*BZQ8FPvJWhRBXOEd3n9Yhw.png

## Pre

https://redux.js.org/understanding/thinking-in-redux/three-principles

1. Single Source of Truth
2. State is READ-Only (nggak boleh langsung diganti) (concept immutable di redux)
3. Changes are made with pure function
    - input -> output
    - avoid side effect
      sebisa mungkin logic complex ditaruh di action, lalu data dikirim sebagai payload
    - return new value

## Keywords

-   initialState
-   createStore
-   Store: untuk memberi tahu views punya state apa aja
    -   discpatch
-   Reducer: Untuk ngasih tahu store statenya ada apa aja
-   Action: function yang dijalanin kalau di discpatch (store.dispatch)
    -   action creator
    -   action { types }

# TODO

-   Basic Redux
-   [x] initiate store dengan `createStore`
-   [x] membuat reducer dengan `initialState`
-   [x] menggunakan `store.getstate` untuk mendapatkan state
-   [x] menggunakan `store.dispatch` untuk triger action
-   [x] membuat actionCreators
-   [x] membuat actionTypes

-   React Redux
-   [x] membuat Provider Store
-   [x] mendapatkan store dengan `useSelector`
-   [x] merubah state dengan `useDispatch`
