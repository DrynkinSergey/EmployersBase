import React, {Component} from 'react';
import './search-panel.css';

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.searchItem(term);
    }

    render() {

        return (
            <input onChange={this.onUpdateSearch}
                   className="search-panel-input"
                   placeholder="Найти сотрудника"
                   type="text"
                   value={this.state.term}
            />
        );
    }
}


export default SearchPanel;