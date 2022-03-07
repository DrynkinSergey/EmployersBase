import React from 'react';
import EmployeesListItem from "../employee-list-item/employee-list-item";
import './employee-list.css'

const EmployeeList = ({data}) => {
    const employees = data.map( item => {
            return (
               <EmployeesListItem  key={item.id} {...item}/>
            )
        }
    );


    return (
        <ul className="app-list list-group">
            { employees }
        </ul>
    );
}


export default EmployeeList;