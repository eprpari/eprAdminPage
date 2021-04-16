import React, { Component } from 'react'
import ApiService from "../../service/ApiService";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MyAlert from './MyAlert'

const style ={
    display: 'flex',
    justifyContent: 'center'
}

class EditUserComponent extends Component {

    constructor(props){
        super(props);
        this.state ={
            id: '',
            name: '',
            number: '',
            address: '',
            img : '',
            city: '',
            age: '',
            salary: '',
            data : '',
            message:'',
            show: false
        }
    }

    componentDidMount() {
        console.log("hai")
        // const userId = +this.props.match.params.id;
        // console.log (userId);
        // ApiService.fetchUserById(userId)
        //     .then((res) => {
        //         let user = res.data;
        //         this.setState({
        //             id: user.id,
        //             name: user.name,
        //             number: user.number,
        //             address: user.address,
        //             img: user.img,
        //             city: user.city,
        //             age: user.age,
        //             salary: user.salary,
        //             data: user.data
        //         })
        //     });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    saveUser = (e) => {
        e.preventDefault();
        let user = {id: this.state.id, name: this.state.name, number: this.state.number, address: this.state.address , img: this.state.img, city: this.state.city , age: this.state.age , salary: this.state.salary , data: this.state.data};
        ApiService.editUser(user)
            .then(res => {
                if(res.data != null) {
                    this.setState({show:true, message : 'User Updated successfully.'});
                    setTimeout(() => this.setState({show:false}), 3000);
                    setTimeout(() => this.userList(), 3000);
                } else {
                    this.setState({show:false});
                }
            });
    }

    userList = () => {
        return this.props.history.push('/users');
    }

    render() {
        return (
            <div>
                 <div style={{"display":this.state.show ? "block" : "none"}}>
                    <MyAlert show = {this.state.show} message = {this.state.message} type = {"success"}/>
                </div>
                <Typography variant="h4" style={style}>Edit Worker</Typography>
                <form>
               {/* <TextField type="text" placeholder="Id" fullWidth margin="normal" name="name" value={this.state.id} onChange={this.onChange}/> */}

                <TextField type="text" placeholder="username" fullWidth margin="normal" name="name" value={this.state.name} onChange={this.onChange}/>
                    <TextField type="number" placeholder="phonenuber" fullWidth margin="normal" name="number" value={this.state.number} onChange={this.onChange}/>
                    <TextField placeholder="Address" fullWidth margin="normal" name="address" value={this.state.address} onChange={this.onChange}/>
                    <TextField placeholder="img" fullWidth margin="normal" name="img" value={this.state.img} onChange={this.onChange}/>
                    <TextField placeholder="city" fullWidth margin="normal" name="city" value={this.state.city} onChange={this.onChange}/>
                    <TextField type="number" placeholder="age" fullWidth margin="normal" name="age" value={this.state.age} onChange={this.onChange}/>
                    <TextField type="number" placeholder="salary" fullWidth margin="normal" name="salary" value={this.state.salary} onChange={this.onChange}/>
                    <TextField type="text" placeholder="data" fullWidth margin="normal" name="data" value={this.state.data} onChange={this.onChange}/>

                        <Button variant="contained" color="primary" onClick={this.saveUser}>Save</Button>
                </form>
            </div>
        );
    }
}

export default EditUserComponent;