import React, {Component} from 'react';
import './app-filter.css';
class AppFilter extends Component {
    onBtnClick = (e) => {
        let filterName = e.currentTarget.getAttribute('data-filter');
        this.props.onFilter(filterName);
    }

    render() {
        const btnData = [
            {name: '', label : 'Все сотрудники'},
            {name: 'rise', label : 'На повышение'},
            {name: 'moreThen1000', label : 'З/П больше 1000$'},
        ]
        const buttons = btnData.map(({name, label}, i) => {
            return (
                <button key={i} onClick={this.onBtnClick} data-filter={name}
                        className="btn btn-outline-light"
                        type="button">
                    {label}
                </button>
            )
        })
        return (
            <div className="btn-group">
                {buttons}
            </div>
        );
    }
}

export default AppFilter;