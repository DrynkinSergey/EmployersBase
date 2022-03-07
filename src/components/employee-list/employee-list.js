import React from 'react';
import EmployeesListItem from "../employee-list-item/employee-list-item";
import './employee-list.css'

const EmployeeList = ({data,deleteItem}) => {
    const employees = data.map( item => {
            return (
               <EmployeesListItem onDelete={()=> deleteItem(item.id)}  key={item.id} {...item}/>
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