import { BrowserRouter, Route } from "react-router-dom";
import { ShowEmp } from "./components/showEmp";
import { CreateEmp } from "./components/createEmp";
import "./App.scss";

function App() {
    return (
        <div className="app-contents">
            <BrowserRouter>
                <Route exact path="/" component={ShowEmp} />
                <Route path="/create-emp" component={CreateEmp} />
            </BrowserRouter>
        </div>
    );
}

export default App;
