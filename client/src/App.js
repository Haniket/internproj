import { BrowserRouter, Route } from "react-router-dom";
import  Home  from "./components/home";

function App() {
    return (
        <div className="app-contents">
            <BrowserRouter>
                <Route exact path="/" component={Home} />
            </BrowserRouter>
        </div>
    );
}

export default App;
