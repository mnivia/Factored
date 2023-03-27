import React, { Component  } from 'react'
import axios from 'axios'
import Imagen from './Imagen';
import Gravatar from 'react-gravatar'
import Table from 'react-bootstrap/Table'
import Radar from './Radar'



export default class user extends Component{
    state={
        users:[],
        status:false
    }
    
    cargarUsuarios= ()=>{
        axios.get('http://127.0.0.1:8000/usuarios/').then(res =>{
            this.setState({
                users:res.data,
                status:true
            });
        });
    }

    componentDidMount=() =>{
        this.cargarUsuarios();
    }

    render(){
        return(
            
            <Table responsive striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>Avatar</th>
                    <th>Id</th>
                    <th>Username</th>
                    <th>Nombre</th>
                    <th>Rol</th>
                    <th>Estado</th>
                    <th>Skills</th>
                    </tr>
                </thead>
                <tbody>
                {this.state.status === true &&
                        (
                            this.state.users.map((user, i) => {
                                return(


                                    <tr key={i}>
                                        <td><Gravatar email={user.username} /></td>
                                        <td>{user.id}</td>
                                        <td> {user.username}</td>
                                        <td>{user.nombre}</td>
                                         <td>{user.rol}</td>                                        
                                         <td>{user.estado}</td>
                                         <td><Radar/></td>
                                     </tr>
                                 );
                            })
                        )}
                </tbody>
    </Table>
                       
        )
    }

}


