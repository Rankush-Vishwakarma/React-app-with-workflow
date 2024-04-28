import React from "react";
 
function Card({ receiver, writer }) {
    return (
        <div>
            <h1 style={{
                backgroundColor: "lightblue",
                width: "fit-content"
            }}>
                Rankush Vishwakarma
            </h1>
 
            <h2 style={{
                backgroundColor: "lightgrey",
                width: "fit-content"
            }}>
                
            </h2>
            <h5>
              "Data Scientist Rankush Vishwakarma, expert in Python, SQL, ML & NLP. Proven track record in data analysis & project development. View work on GitHub."
            </h5>
            <h3>Your truly, {writer}</h3>
        </div>
    );
}
 
export default function App() {
    return (
        <div>
            <Card writer="Rankush" receiver="" />
        </div>
    );
}