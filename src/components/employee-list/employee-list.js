import React from 'react';
import EmployeesListItem from "../employee-list-item/employee-list-item";
import './employee-list.css'
const EmployeeList = () => (
    <ul className="app-list list-group">
        <EmployeesListItem/>

    </ul>

);

export default EmployeeList;