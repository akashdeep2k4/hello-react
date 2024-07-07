// import { useState } from 'react'
import "./App.css";
import Card from "./components/Card";

function App() {
    return (
        <>
            <h1 className="text-3xl bg-green-500 rounded-md">Vite with Tailwind</h1>
            <Card username="akashdeep" />
            <Card username="Json" post="staff" />
            <Card />
        </>
    );
}

export default App;
