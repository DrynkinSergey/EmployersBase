import {Component} from "react";
import './employee-list-item.css';

class EmployeesListItem extends Component {
   /*

   */
    constructor(props) {
        super(props);
        this.state = {
            increase: false,
            liked: false
        }
    }
    setIncrease = () => {
        this.setState(({increase}) => ({
            increase:!increase
            })
        )
    }
    onUserNameClick = () => {
        this.setState(({liked}) => ({
            liked:!liked
            })
        )
    }
    render(){
        const {name, salary} = this.props;
        const {increase,liked} = this.state;
        let classNames = "list-group-item d-flex justify-content-between";
        if (increase){
            classNames += " increase"
        }
        if (liked){
            classNames += " like"
        }
        return (
            <li className={classNames}>
                <span onClick={this.onUserNameClick} className="list-group-item-label ">{name} Smith</span>
                <input type="text" className="list-group-item-input" defaultValue={salary+'$'}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button onClick={this.setIncrease} type="button"
                            className="btn-cookie btn-sm ">
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
                            className="btn-trash btn-sm ">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }

}

export default EmployeesListItem;