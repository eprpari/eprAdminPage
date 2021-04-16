import React, { Component } from 'react'
import ApiService from "../../service/ApiService";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import MyAlert from './MyAlert'

const style ={
    display: 'flex',
    justifyContent: 'center'
}

class ListUserComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users: [],
            show: false,
            message: ''
        }
    }

    componentDidMount() {
        ApiService.fetchUsers()
            .then((res) => {
                this.setState({users: res.data})
            });
    }

    deleteUser = (userId) => {
        ApiService.deleteUser(userId)
           .then(res => {
               if(res.data != null) {
                this.setState({"show":true, message : 'User deleted successfully.'});
                setTimeout(() => this.setState({"show":false}), 3000);
                this.setState({
                    users: this.state.users.filter(user => user.id !== userId)
                });
            } else {
                this.setState({"show":false});
            }
           })
    }

    editUser = (id) => {
        this.props.history.push('/edit-user/'+ id);
    }

    addUser = () => {
        this.props.history.push('/add-user');
    }

    render() {
        const {users} = this.state;
        console.log(users)

        return (
            <div>
                <div style={{"display":this.state.show ? "block" : "none"}}>
                    <MyAlert show = {this.state.show} message = {this.state.message} type = {"error"}/>
                </div>
                <Typography variant="h4" style={style}>User Details</Typography>
                <Button variant="contained" style={{ background: '#2E3B55' }} onClick={() => this.addUser()}>
                    Add Worker
                </Button>

                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">Id</TableCell>
                            <TableCell align="right">Title</TableCell>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">Number</TableCell>
                            <TableCell align="right">Address</TableCell>
                            <TableCell align="right">Img</TableCell>
                            <TableCell align="right">City</TableCell>
                            <TableCell align="right">Age</TableCell>
                            <TableCell align="right">Salary</TableCell>
                            <TableCell align="right">Data</TableCell>




                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {
                        users.length === 0 ?
                        <TableRow>
                            <TableCell colSpan="10" align="center">No Workers Available.</TableCell>
                        </TableRow> 
                        :
                        users.map(row => (
                            <TableRow key={row.id}>
                                <TableCell align="right">
                                    {row.id}
                                </TableCell>
                                <TableCell align="right">{row.title}</TableCell>
                                <TableCell align="right">{row.name}</TableCell>
                                <TableCell align="right">{row.number}</TableCell>
                                <TableCell align="right">{row.adderess}</TableCell>
                                <TableCell align="right">{row.img}</TableCell>
                                <TableCell align="right">{row.city}</TableCell>
                                <TableCell align="right">{row.age}</TableCell>
                                <TableCell align="right">{row.salary}</TableCell>
                                <TableCell align="right">{row.data}</TableCell>
                                <TableCell align="right" onClick={() => this.editUser(row.id)}><CreateIcon /></TableCell>
                                <TableCell align="right" onClick={() => this.deleteUser(row.id)}><DeleteIcon /></TableCell>
                            </TableRow>
                        ))
                    }
                    </TableBody>
                </Table>

            </div>
        );
    }

}

export default ListUserComponent;