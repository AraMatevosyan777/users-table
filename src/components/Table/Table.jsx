import React from 'react';
import m from './table.module.css';
import TableItem from './TableItem';
import Preloader from '../preloader/Preloader';

const Table = (props) => {
    const tableItem = props.users.map((user,index) => 
    <TableItem key={user.id} user={user} deleteUser={props.deleteUser} index={index+1}/>)

    return (
        <div className={m.table}>
            <h3>Table</h3>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Full Name <span onClick={() => props.sortByName()}>&#8964;</span></th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Age <span onClick={() => props.sortByAge()}>&#8964;</span></th>
                        <th>Gender</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {props.users &&
                        tableItem
                    }
                </tbody>
            </table>
            {props.load
                ? <Preloader />
                : !props.users.length &&
                <div className={m.empty}>table is empty</div>
            }
        </div>
    )
}

export default Table;
