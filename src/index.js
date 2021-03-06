import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "dayjs/locale/ja";
import { Provider } from "react-redux";
import createStore from "./reducks/store/store";
import DayjsUtils from "@date-io/dayjs";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { ConnectedRouter } from "connected-react-router";
import * as History from "history";
import { MuiThemeProvider } from "@material-ui/core";
import { theme } from "./assets/theme";

const history = History.createBrowserHistory();
export const store = createStore(history);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <MuiPickersUtilsProvider utils={DayjsUtils}>
        {/* <React.StrictMode> */}
        <MuiThemeProvider theme={theme}>
          <App />
        </MuiThemeProvider>
        {/* </React.StrictMode> */}
      </MuiPickersUtilsProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
