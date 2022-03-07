import React from "react";
import './app.css';
import '../../index.css';
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeeList from "../employee-list/employee-list";
import AddForm from "../add-form/add-form";

function App() {

    const data = [
        {name: 'Sergey', salary:1400, increase: true, id:1 },
        {name: 'Andrew', salary:400, increase: false, id:2 },
        {name: 'Sasha', salary:1000, increase: false, id:3 },
    ]

    return (
        <div className="app">
            <AppInfo/>
            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
            <EmployeeList data={data}/>
            <AddForm/>
        </div>
    );
}

export default App;
