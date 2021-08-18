# Hooks

## Doc & Motivation

https://reactjs.org/docs/hooks-intro.html

## Functional Component?

-   react functional component seperti function biasa di JS yang mereturn jsx

## Hooks?

React 16.8.0
Fitur state, lifecycle, dll tanpa class

### Rules

-   memanggil hanya di react function component
-   memanggil hook di custom hooks

## Builtin Hooks?

-   `useState(initailState)`
    -> mengembalikan `[initialState, functionDispacth]`

-   `useEffect(arg1, arg2)`
    -   tanpa `arg2`: efek updating setiap perubahan state (semua state)
    -   arg2 diberi `[]`: efek berjalan sekali saat mounting (mirip componentDidMount)
    -   mengunakan nama2 deps di arg2 `[dep, ...]`: efek dijalankan ketika deps mengalami perubahan

## Custom Hooks

-   awalan `use[]`
