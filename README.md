# Intro to React.js

## Website React.js

## Mencoba CDN

-   buat file `index.html`
-   import cdn dari web react
-   buat index.js dan import script di html
-   ```js
    ReactDOM.render(React.createElement("h1", {}, "Hello React js"), container);
    ```
-   buat child dengan membuat component createElement, disimpan di array
-   buat class component dengan creteElement

React Child:

-   string
-   component
-   array of component

## Membuat dengan CRA

-   init project dengan CRA
-   JSX ?
-   class component vs functional
-   sample inline styling
-   loop component
-   input onchange arrow func() atau .bind()
-   submit input (update todos)
-   setState() -> membawa method bawaan untuk merubah state
    memungkinkan untuk me rerender views nya. Ngasih tahu ini ada perubahan state. Tolong render ulang.

## Class Component Lifecycle

-   componentDidMount()
    ```js
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => {
                // set state todos
            })
    }
    ```
-   componentDidUpdate()
-   componentWillUnmount()

## Component Props

-   mengirim data state ataupun method dari attribute (this.props)

## Glosarium

-   Declarative - Imperative
    Declarative : Membuat expression tanpa memikirkan control flow
    Imperative : Harus tau datanya dari flow yang dikerjakan contoh JQuery

## Additional

-   React Dev tools
