import React, {Component} from 'react';
import EmployeesListItem from "../employee-list-item/employee-list-item";
import './employee-list.css'

class EmployeeList extends Component/*= ({}) =>*/ {
    render() {
        const {data, deleteItem, riseEmployee, increaseEmployee} = this.props;
        const employees = data.map(item => {
                return (
                    <EmployeesListItem onDelete={() => deleteItem(item.id)}
                                       riseEmployee={() => riseEmployee(item.id)}
                                       increaseEmployee={() => increaseEmployee(item.id)}
                                       key={item.id} {...item}/>
                )
            }
        );


        return (
            <ul className="app-list list-group">
                {employees}
            </ul>
        );
    }
}


export default EmployeeList;