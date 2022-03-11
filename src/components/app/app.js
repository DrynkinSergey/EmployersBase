import React, {Component} from "react";
import './app.css';
import '../../index.css';
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeeList from "../employee-list/employee-list";
import AddForm from "../add-form/add-form";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Sergey', salary: 1400, increase: false, id: 1, rise: true},
                {name: 'Andrew', salary: 400, increase: false, id: 2, rise: false},
                {name: 'Sasha', salary: 1000, increase: false, id: 3, rise: false}],
            totalId: 3,
            findString: '',
            filter:''
        }
    }

    onDelete = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }


    onToggleProps = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }
    onToggleFilterBtn = (prop) => {

    }

    onAdd = (e, name, salary) => {
        e.preventDefault();
        const initial = {name, salary, increase: false, id: this.state.totalId + 1, rise: false};

        this.setState(({data, totalId}) => {
            return {
                data: [...data, initial],
                totalId: totalId + 1
            }
        })
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items
        }
        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onSearch = (findString) => {
        this.setState(({findString}))
    }
    onFilter = (filter) => {
        this.setState(({filter}))
    }

    filterEmp = (items, filter) => {
        switch (filter) {
            case 'rise':
            {
            return items.filter(item => item.rise)
            }
            case 'moreThen1000':
            {
                return items.filter(item => item.salary > 1000)
            }
            default: return items
        }

    }


    render() {
        const {data, findString, filter} = this.state;
        let count = 0;
        // Делается двойной фильтр для отображения отфильтрованных данных
        const visibleData = this.filterEmp(this.searchEmp(data,findString), filter)
        data.forEach(item => {
            if (item.rise === true) {
                count++
            }
        })

        return (
            <div className="app">
                <AppInfo countOfUsers={data.length}
                         riseCount={count}
                />
                <div className="search-panel">
                    <SearchPanel searchItem={this.onSearch}/>
                    <AppFilter onFilter={this.onFilter} data={data}/>
                </div>
                <EmployeeList
                    data={visibleData}
                    deleteItem={this.onDelete}
                    onToggleProps={this.onToggleProps}
                />
                <AddForm addItem={this.onAdd}/>
            </div>
        );
    }
}

export default App;
