import React, {Component} from 'react';
import './add-form.css'

class AddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }
    onInputChange = (e) => {
        this.setState({
        [e.target.name] : e.target.value
        })
    }
    render() {
        const {name, salary} = this.state;
        const {addItem} = this.props;
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    onSubmit={(e)=> addItem(e,name,salary)}
                    className="add-form d-flex">
                    <input
                        onChange={this.onInputChange}
                        value={name}
                        name="name"
                        type="text"
                           className="form-control new-post-label"
                           placeholder="Имя сотрудника: "/>
                    <input
                        onChange={this.onInputChange}
                        value={salary}
                        name="salary"
                        type="number"
                           className="form-control new-post-label"
                           placeholder="З/П: "/>
                    <button type="submit"
                            className="btn btn-outline-light">Добавить
                    </button>
                </form>
            </div>
        );
    }

}

export default AddForm;