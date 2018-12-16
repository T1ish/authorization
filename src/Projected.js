import React from 'react';
import { hasRole, isAllowed } from './Role';
import Assignment from './Assignment';
import StudentList from './StudentList';
import Edit from './Edit';

class Protected extends React.Component {
    render(){
        const { person } = this.props.data;
        return(
            <div>
                <h3>Protected</h3>
                {hasRole(person, ["student"]) && <p>You are just a student</p>}
                {hasRole(person, ["teacher"]) && <p>You get the teacher's view</p>}
                {hasRole(person, ["admin"]) && <p>You can do everything because you are the all powerful administrator</p>}
                {isAllowed(person, ["can_view_homework"]) && <Assignment />}
                {isAllowed(person, ["can_view_students"]) && <StudentList />}
                {isAllowed(person, ["can_view_teachers"]) && <Edit />}
            </div>
        );
    }
}

export default Protected; 