import React from 'react';
import { Row, Col, Collection, CollectionItem } from 'react-materialize';
import { connect } from 'react-redux';
import '../css/shop_car.scss'

//hooks
import { useState } from 'react';
//actions
import ADD_PELICULA from '../actions/index'
import ADD_CANTIDAD from '../actions/cantidad'
import REMOVE from '../actions/remove'



function Shop_car(props){
    let cantidad_items = 10
    let array_options = []
    for(let i = 0;  i < cantidad_items; i++){
        array_options.push(i)
    }
    function select(e){
        return e.target.value
    }
    return(
        <div className='carrito'>
            <div className="container">
                <Row>
                    <Col m={12} s={12}>
                        {
                            props.state.pelicula.map(item => {
                                return(
                                    <div className="cont_producto_shop">
                                        <div className="img_shop">
                                            <img src={item.img} alt=""/>
                                        </div>
                                        <Collection>
                                            <CollectionItem>
                                                <span className="datos">
                                                    Nombre: {item.nombre}
                                                </span>
                                                    {item.pelicula}
                                                </CollectionItem>
                                                <CollectionItem>
                                                <div className="datos">
                                                    Cantidad: 
                                                    <select name="cantidad" id="cantidad" onChange={(e) => props.ADD_CANTIDAD(select(e),item.id)}>
                                                        {array_options.map(
                                                            option => <option selected = {option == item.cantidad ? 'selected' : ''} value={option} >{option}</option>
                                                        )}
                                                    </select>
                                                </div>
                                                </CollectionItem>
                                                <CollectionItem>
                                                <span className="datos">
                                                    Precio: 
                                                </span>
                                                {item.precio}$
                                                <div className="cont_button">
                                                    {/* <button>Comprar</button> */}
                                                    <button className='cancelar' onClick={() => props.REMOVE(item.id)}>Cancelar</button>
                                                </div>
                                            </CollectionItem>
                                        </Collection>
                                    </div>
                                )
                            })
                        }
                    </Col>
                </Row>
            </div>
            {console.log(props)}
            <span>Total: {(props.state.total).toFixed(2)}€</span>
        </div>
        

    )

}
const mapStateToProps = (state) => {
    return {
        state : state
    }
} 
const mapDispatchToProps = () => {
    return{
        ADD_PELICULA,
        ADD_CANTIDAD,
        REMOVE
    }
}
export default connect(mapStateToProps, mapDispatchToProps())(Shop_car);
