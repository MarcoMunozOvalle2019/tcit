import React, { Component } from 'react';
import store from '../store'

const styles = {
  post: {
    width: '1220px',
    height: '220px',
    marginLeft: 10,
    marginRight: 10
  }  
};

class Agrega extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      posts: [
        { id:1, nombre: "", descripcion: "", accion:"" },
      ],

      nombre:"",
      descripcion:"",
      accion:""
    }
  }

  async componentDidMount(){

    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    };
    const response = await fetch('http://localhost:8000/posts', requestOptions);
    const data = await response.json();

    let array1 = data.posts
    array1.map((esto)=>{
      return this.addToPostMount(esto)
  })
  } 

  render() {
    const { nombre, descripcion} = this.state;
    return (
      <div>

         <div style={styles.post}>{this.state.posts.map(pp =>
            <div className="thumbnail" style={styles.post} key={pp.id}>
              <div className="caption">


                <form  onSubmit={this.handleSubmit}>
                  <div>
                    <label htmlFor="data">Nombre</label>
                    <input
                      type="text"
                      id="nombre"
                      value={nombre}
                      onChange={this.handleChange}
                    />
                    <label htmlFor="data">Descripcion</label>
                    <input
                      type="text"
                      id="descripcion"
                      value={descripcion}
                      onChange={this.handleChange}
                    />
                    <label htmlFor="data">Crear</label>
                    <button type="submit">POST</button>    
                  </div>
                </form>
                 
                 </div>
            </div>
          )}
        </div>

      </div>
    )}

  
  async addToPostMount(data) {    
    let dat = {id: data.id, nombre: data.nombre, descripcion: data.descripcion, accion: "Crea"}
    store.dispatch({
      type:"ADD_TO_POST_All",
      dat
    })  
  }

  async addToPostSubmit() {    
    const d = new Date();
    let time = d.getTime();

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
          "id":time,
          "nombre":this.state.nombre,
          "descripcion":this.state.descripcion
      })};
    await fetch('http://localhost:8000/post',requestOptions)
    .then(response => response.json())
    .then(data => console.log('recibido..',data));

    let dat = {id1: String(time), nombre: this.state.nombre, descripcion: this.state.descripcion, accion: "Crea"}

    store.dispatch({
      type:"ADD_TO_POST_DAT",
      dat
    })
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    this.addToPostSubmit()
    event.preventDefault()
  }  

  
}

export default Agrega;
