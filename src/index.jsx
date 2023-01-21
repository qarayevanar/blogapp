// import CounterApp from './CounterApp';
import React from "react";
import ReactDOM from "react-dom";
import "./style/bootstrap.min.css";
import congigureStore from "./store/configureStore";
import AppRouter from "./routers/AppRouter";
import { Provider } from "react-redux";
import { getBlogsFromDatabase } from "./actions/blogAction";
const store = congigureStore();


const result =   <Provider store={store}>
<AppRouter />
</Provider>


ReactDOM.render(<p>Loading...</p>, document.getElementById('root'));

store.dispatch(getBlogsFromDatabase()).then(() => {
    ReactDOM.render(result, document.getElementById('root'));
})
