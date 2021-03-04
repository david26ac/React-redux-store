import React from 'react'
import axios from 'axios'

//components
import Search from './search'

//css
import '../css/producto.scss'
import '../css/global.scss'

//actions
import ADD_PELICULA from '../actions/index'
import ADD_CANTIDAD from '../actions/cantidad'

//Materialize icons
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { connect } from 'react-redux';

class Products extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            movie_results : this.props.searched_movies
        }
    }
    componentDidMount(){

    }
    add(e){
        console.log(e.target)
        e.target.innerHTML = 'Añadida'
    }
    check_added(peliculas, id){

        let found = false
        peliculas.map(
            (pelicula_store) => {
                if(pelicula_store.id == id){
                    found = true
                } 
            }
        ) 
        if(found == true){
            return 'added'
        }
    }
    check_added_comprar(peliculas, id){

        let found = false
        peliculas.map(
            (pelicula_store) => {
                if(pelicula_store.id == id){
                    found = true
                } 
            }
        ) 
        if(found == true){
            return 'añadida'
        } else{
            return 'comprar'
        }
    }
    render(){
        return (
            <div className="productos">
                <div className="container">
                    <div className="">
                        <div className="row">
                        {   
                            this.props.searched_movies !== '' &&
                                JSON.parse(this.props.searched_movies).map(
                                    (pelicula, key) => {
                                        
                                        return (
                                            <div className="col s4">
                                                <div className='productos'>
                                                    <div className="cont_producto">
                                                        <div className="foto_producto">
                                                            <img src={pelicula.i.imageUrl ? pelicula.i.imageUrl : ''} alt=""/>
                                                            <div className='screen_black'></div>
                                                        </div>
                                                        <div className="cont_description">
                                                            <p className="titulo_movie">
                                                                {pelicula.l}
                                                            </p>
                                                            <p className='type'> {pelicula.q} <br/>
                                                                {pelicula.yr ? pelicula.yr : pelicula.y} 
                                                            </p>  
                                                            <p className='description'>
                                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, itaque?
                                                            </p>
                                                            <div className="precio">
                                                                <p>Precio</p>
                                                                <span className='cifra_precio'>
                                                                    {pelicula.price}
                                                                    <span className="moneda">
                                                                        $
                                                                    </span>
                                                                </span>
                                                            </div>
                                                            <button className={'boton_comprar ' + (this.check_added(this.props.pelicula, pelicula.id))} onClick={ (e) => {
                                                                    this.props.ADD_PELICULA(pelicula.l, pelicula.price, pelicula.i.imageUrl, pelicula.id)
                                                                    let boton = e.currentTarget.querySelector('.action_comprar')
                                                                        boton.innerHTML = 'Añadida'
                                                                        e.currentTarget.classList.add('added')
                                                                    }
                                                                } >
                                                                <span>
                                                                    <AddShoppingCartIcon/>
                                                                </span>
                                                                <span className='action_comprar'>
                                                                    {this.check_added_comprar(this.props.pelicula, pelicula.id)}
                                                                </span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                )
                            }        
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
const mapStateToProps = (state) => {
    return {
        pelicula : state.pelicula
    }
} 
const mapDispatchToProps = () => {
    return{
        ADD_PELICULA,
        ADD_CANTIDAD
    }
}
export default connect(mapStateToProps, mapDispatchToProps())(Products);