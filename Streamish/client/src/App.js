import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ApplicationViews from "./components/ApplicationViews";
import Header from "./components/Header";
import { onLoginStatusChange } from "./modules/authManager";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(null);

    useEffect(() => {
        onLoginStatusChange(setIsLoggedIn);
    }, []);

    return (
        <div className="App">
            <Router>
                <Header isLoggedIn={isLoggedIn} />
                <ApplicationViews isLoggedIn={isLoggedIn} />
            </Router>
        </div>
    );
}

export default App;