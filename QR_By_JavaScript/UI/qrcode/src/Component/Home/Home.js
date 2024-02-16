import React from "react";
import { Link } from "react-router-dom";
import './Home.css'


function Home() {

    return (
        <div className="homePage">
            <nav>
                <ul>
                    <li>
                        <Link to="/Qr">QR Code</Link>
                    </li>
                    <li>
                        <Link to="/Bill">Bill</Link>
                    </li>
                </ul>
            </nav>

        </div>
    );
}

export default Home;
