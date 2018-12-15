import React from 'react';
import { hasRole, isAllowed } from "./Role";

class Protected extends React.Component {
     
    render(){
        const { person } = this.props.data;
        console.log(person);
        return(
            <div>
                <h3>Protected</h3>
                {hasRole(person, ["student"]) && <p>just a student</p>}
                {hasRole(person, ["teacher"]) && <p>but also a teacher</p>}
                {hasRole(person, ["admin"]) && <p>Truth: powerful admin</p>}
                {isAllowed(person, ["can_view_homework"]) && <p>Can view reading and assignments</p>}
                {isAllowed(person, ["can_view_students"]) && <p>Can view all students in class</p>}
                {isAllowed(person, ["can_view_teachers"]) && <p>Can view all teachers in HYF</p>}
            </div>
        );
    }
}

export default Protected; 