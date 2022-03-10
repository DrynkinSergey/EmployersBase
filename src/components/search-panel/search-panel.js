import React, {Component} from 'react';
import './search-panel.css';
class SearchPanel extends Component{
    render() {
        return (
            <input className="search-panel-input"
                   placeholder="Найти сотрудника"
                   type="text"
            />
        );
    }
}


export default SearchPanel;