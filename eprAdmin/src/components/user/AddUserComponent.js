import React, { Component } from 'react'
import ApiService from "../../service/ApiService";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MyAlert from './MyAlert'
import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import {Form} from "react-bootstrap"
const formContainer = {
    display: 'flex',
    flexFlow: 'row wrap'
};

const style ={
    display: 'flex',
    justifyContent: 'center'

}

class AddUserComponent extends Component{
    constructor(props){
        super(props);
        this.state ={
          // id: ' ',
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

    saveUser = (e) => {
        e.preventDefault();
        let user = {
          // id: this.state.id, 
            name: this.state.name, 
            number: this.state.number, 
            address: this.state.address, 
            img : this.state.img,
            city: this.state.city, 
            age: this.state.age, 
            salary: this.state.salary,
            data : this.state.data
        };

        ApiService.addUser(user)
            .then(res => {
                if(res.data != null) {
                    this.setState({show:true, message : 'Worker added successfully.'});
                    setTimeout(() => this.setState({show:false}), 3000);
                    setTimeout(() => this.userList(), 3000);
                } else {
                    this.setState({show:false});
                }
            });
    }

    userList = () => {
        return this.props.history.push('/admin');
    }

    onChange = (e) =>
        this.setState({ 
            [e.target.name]: e.target.value 
        });

    render() {
        return(
            <div>
                <div style={{"display":this.state.show ? "block" : "none"}}>
                    <MyAlert show = {this.state.show} message = {this.state.message} type = {"success"}/>
                </div>
                
                <Typography variant="h4" style={style}>Add Worker</Typography>
                <form style={formContainer}>
                {/* <TextField type="text" placeholder="Id" fullWidth margin="normal" name="id" value={this.state.id} onChange={this.onChange}/> */}
                <TextField type="text" placeholder="title" fullWidth margin="normal" name="title" value={this.state.title} onChange={this.onChange}/>
                    <TextField type="text" placeholder="username" fullWidth margin="normal" name="name" value={this.state.name} onChange={this.onChange}/>
                    <TextField type="number" placeholder="phonenuber" fullWidth margin="normal" name="number" value={this.state.number} onChange={this.onChange}/>
                    <TextField placeholder="Address" fullWidth margin="normal" name="address" value={this.state.address} onChange={this.onChange}/>
                    <TextField placeholder="img" fullWidth margin="normal" name="img" value={this.state.img} onChange={this.onChange}/>
                    <TextField placeholder="city" fullWidth margin="normal" name="city" value={this.state.city} onChange={this.onChange}/>
                    <TextField type="number" placeholder="age" fullWidth margin="normal" name="age" value={this.state.age} onChange={this.onChange}/>
                    <TextField type="number" placeholder="salary" fullWidth margin="normal" name="salary" value={this.state.salary} onChange={this.onChange}/>
                    <TextField type="text" placeholder="data" fullWidth margin="normal" name="data" value={this.state.data} onChange={this.onChange}/>

<br/><br/>
                    {/* <Form>
                        <Form.Group>
                            <Form.File id="exampleFormControlFile1" label="Workers Avatar Photo input" />
                        </Form.Group>
                    </Form><br/> */}









 {/* const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}));

export default function UploadButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span">
          Upload
        </Button>
      </label>
      <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
      <label htmlFor="icon-button-file">
        <IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton>
      </label>
    </div>

);
} */}



                    <Button variant="contained" style={{ background: '#2E3B55' }} onClick={this.saveUser}>Save</Button>
                </form>
            </div>
        );
    }
}

export default AddUserComponent;