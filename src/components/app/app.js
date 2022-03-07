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
                {name: 'Sergey', salary: 1400, increase: false, id: 1},
                {name: 'Andrew', salary: 400, increase: false, id: 2},
                {name: 'Sasha', salary: 1000, increase: false, id: 3}],
            totalId:3
        }
    }

    onDelete = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }
    onAdd = (e,name,salary) => {
    e.preventDefault();
    const initial = {name, salary, increase: false, id: this.state.totalId+1};

        this.setState(({data, totalId}) => {
           return {
               data: [...data, initial],
               totalId: totalId+1
           }
       })
        console.log(e.currentTarget);
    }

    render() {
        const {data} = this.state;

        return (
            <div className="app">
                <AppInfo/>
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <EmployeeList
                    data={data}
                    // deleteItem ={this.onDelete(data.id)}
                    deleteItem={this.onDelete}
                />
                <AddForm addItem = {this.onAdd}/>
            </div>
        );
    }

}

export default App;
