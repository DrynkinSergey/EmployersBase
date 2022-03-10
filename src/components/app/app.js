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
                {name: 'Sergey', salary: 1400, increase: false, id: 1, rise: false},
                {name: 'Andrew', salary: 400, increase: false, id: 2, rise: false},
                {name: 'Sasha', salary: 1000, increase: false, id: 3, rise: false}],
            totalId: 3
        }
    }

    onDelete = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }


    onToggleIncrease = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, increase: !item.increase}
                }
                return item;
            })
        }))

    }

    onToggleRise = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, rise: !item.rise}
                }
                return item;
            })
        }))
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


    render() {
        const {data} = this.state;
        let count = 0;

       data.forEach(item => {
            if (item.rise === true) {
                count++
            }
        })

        return (
            <div className="app">
                <AppInfo countOfUsers={data.length}
                    riseCount = {count}
                />
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <EmployeeList
                    data={data}
                    deleteItem={this.onDelete}
                    riseEmployee={this.onToggleRise}
                    increaseEmployee={this.onToggleIncrease}
                />
                <AddForm addItem={this.onAdd}/>
            </div>
        );
    }
}

export default App;
