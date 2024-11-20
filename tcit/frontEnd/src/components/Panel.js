import React, { Component } from 'react';
import {  Table, Button, Glyphicon } from 'react-bootstrap';
import store from '../store'


class Panel extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      cart: [],
      carro:[],
      filtro:"",
      busca:"",
      nombre:"1",
      descripcion:"2",
      accion:"3"
    }

    store.subscribe(()=>{
      this.setState({
        cart: store.getState().cart,
        carro: store.getState().carro,
        filtro: store.getState().filtro,
        busca: store.getState().busca
      })
    })

  }

  
  componentDidUpdate(){
  }

  render() {
    return (
       <div>

                  <div>
                      <label htmlFor="data">Filtro</label>
                      <input
                        type="text"
                        id="filtro"
                        // value = "filtro"
                        onChange={this.handleChange}
                      />
                  </div>



                  <Table fill>

                    <thead>
                        <tr>
                          <th>Nombre</th>
                          <th>Descripcion</th>
                        </tr>
                    </thead>   


                    <tbody>
                    {
                    this.state.carro.map((po) =>
                            this.state.filtro==="" 
                           ?

                              <tr  key={po.id}>
                                <td>{po.nombre}</td>
                                <td>{po.descripcion}</td>
                                <td className="text-right"><Button bsSize="xsmall" bsStyle="danger" onClick={() => this.removeFromPost(po)}><Glyphicon glyph="trash" />Eliminar</Button></td>
                              </tr>

                           :

                           ( po.nombre===this.state.filtro ) &&
                              <tr  key={po.id}>
                                <td>{po.nombre}</td>
                                <td>{po.descripcion}</td>
                                <td className="text-right"><Button bsSize="xsmall" bsStyle="danger" onClick={() => this.removeFromPost(po)}><Glyphicon glyph="trash" />Eliminar</Button></td>
                              </tr>

                           

                      )
                    }


                    </tbody>
                  </Table>

                  {/* { this.state.carro!==0 && 
                        <Button bsSize="xsmall" bsStyle="danger" onClick={() => this.clearCarro()}><Glyphicon glyph="trash" /> Borra todo los Post</Button>
                  } */}

           </div>
        )
      }

  async removeFromPost(po) {
    
   //remueve de DB
    const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    };

    await fetch('http://localhost:8000/post/' + po.id, requestOptions)
    .then(response => response.json())
    .then(data => {
        // remueve por Redux si remueve de DB
        if(data.message=== "deleted: 1"){
            store.dispatch({
              type:"REMOVE_FROM_POST",
              po
            })            
        }

    });
  }


  clearCarro() {
    store.dispatch({
      type:"CLEAR_CARRO"
    })
  }  


  handleChange(event) {
    event.preventDefault();
    let dat = event.target.value
    store.dispatch({
      type:"ADD_TO_FILTRO",
      dat
    })
  }
  
  handleFind(event) {
    event.preventDefault();
    let dat = event.target.value
    store.dispatch({
      type:"ADD_TO_BUSCA",
      dat
    })
  }


}

export default Panel;
