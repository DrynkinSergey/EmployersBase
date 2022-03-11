import React, {Component} from 'react';
import EmployeesListItem from "../employee-list-item/employee-list-item";
import './employee-list.css'

class EmployeeList extends Component/*= ({}) =>*/ {
    render() {
        const {data, deleteItem, onToggleProps} = this.props;
        let employees = data.map(item => {
                return (
                    <EmployeesListItem onDelete={() => deleteItem(item.id)}
                                       onToggleProps={(e) => onToggleProps(item.id, e.currentTarget.getAttribute('data-toggle'))}
                                       key={item.id} {...item}/>
                )
            }
        );
        const zeroBlock = <h2 >Нет сотрудников по фильтру</h2>

        if (!employees.length) {
            employees = zeroBlock;
        }

        return (
            <ul className="app-list list-group">
                {employees}
            </ul>
        );
    }
}


export default EmployeeList;