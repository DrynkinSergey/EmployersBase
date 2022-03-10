import './app-info.css';

 const AppInfo = (props) =>  {
     const {countOfUsers,riseCount} = props;
        return (
            <div className="app-info">
                <h1>Учет сотрудников компании</h1>
                <h2>Общее число сотрудников: {countOfUsers}</h2>
                <h2>Премию получат: {riseCount}</h2>
            </div>
        );

}

export default AppInfo;