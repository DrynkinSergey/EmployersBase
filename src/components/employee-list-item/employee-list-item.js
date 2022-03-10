import './employee-list-item.css';

const EmployeesListItem = (props) =>  {

        const {name, increase, rise, salary, onDelete, riseEmployee, increaseEmployee} = props;

        let classNames = "list-group-item d-flex justify-content-between";
        if (increase) {
            classNames += " increase"
        }
        if (rise) {
            classNames += " like"
        }
        return (
            <li className={classNames}>
                <span onClick={riseEmployee} className="list-group-item-label ">{name} Smith</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button onClick={increaseEmployee} type="button"
                            className="btn-cookie btn-sm ">
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
                            onClick={() => onDelete()}
                            className="btn-trash btn-sm ">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )


}

export default EmployeesListItem;