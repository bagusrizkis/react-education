# React Router

## Install Dep

## Basic

```js
// import yang dibutuhkan
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

<BrowserRouter> // wrapper react-router

<Switch> // memilih route yang matches dengan url

<Route path=""> // menentukan path dan component yang akan di render

<Link to="">
```

## Dynamic Path

-   `useParams()`

## Programatic Navigation

-   `useHistory()`
-   `history.push('[path]')`

## Private Route

-   contoh: [Private Route](https://reactrouter.com/web/example/auth-workflow)
