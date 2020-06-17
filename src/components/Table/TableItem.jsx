import React from 'react'

const TableItem = (props) => {
    const deleteUser = () => {
        let confirm = window.confirm('Are you sure you want to delete user?');
        if(confirm){
            props.deleteUser(props.user.id)
        }
    }
    return (
        <tr>
            <td>{props.index}</td>
            <td>{props.user.firstName + ' ' + props.user.lastName}</td>
            <td>{props.user.email}</td>
            <td>{props.user.phoneNumber}</td>
            <td>{props.user.age}</td>
            <td>{props.user.gender}</td>
            <td><span onClick={()=> deleteUser()}>&times;</span></td>
        </tr>
    )
}

export default TableItem
