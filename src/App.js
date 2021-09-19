import { useContext, createContext, useState } from "react";
import "./App.css";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import TodoList from "./component/TodoList";
import { Button } from "@material-ui/core";

const themes = {
  light: {
    text: "#C0C0C0",
    background: "FFA500",
  },
  dark: {
    text: "#FFA500",
    background: "rgb(00, 00, 00)",
  },
};

const ThemeContext = createContext();

export default function App() {
  const [valueTheme, setValueTheme] = useState(themes.dark);
  const theme = useContext(ThemeContext);

  return (
    <ThemeContext.Provider value={valueTheme}>
      <div>
        <BrowserRouter>
          <header style={{ backgroundColor: valueTheme.background }}>
            <div className="title" >
              <p style={{ color: valueTheme.text }}>Kelompok 17</p>
            </div>
            <nav >
              <Button 
                variant="contained"
                className="Button"
                onClick={() =>
                  setValueTheme(
                    valueTheme === themes.light ? themes.dark : themes.light
                  )
                }>Ganti Warna</Button>
            </nav>
          </header>
          <Switch>
            <Route path="/" exact component={TodoList}>
                <div className='todo-app'>
                  <TodoList />
                </div>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  );
}


