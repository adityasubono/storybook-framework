import {fetchUtils, Admin, Resource, ListGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";

const fetchJson = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    // add your own headers here
    options.headers.set('X-Custom-Header', 'foobar');
    return fetchUtils.fetchJson(url, options);
}
const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com", fetchJson);

const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="posts" list={ListGuesser} />
        <Resource name="comments" list={ListGuesser} />
    </Admin>,  document.getElementById('root')
);

export default App;
