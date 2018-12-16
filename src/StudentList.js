import userList from "./users.json";
import React from 'react';

class StudentList extends React.Component{

    render() {
        return(
            <div className="student-list">
                <h1>List of students in this class</h1>
                <ol>
                    {userList.map(user => {
                        return (<li>{user.name}</li>);
                    })}
                </ol>
            </div>
        );
    }
}

export default StudentList;