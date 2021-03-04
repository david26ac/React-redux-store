import React from 'react';
import Products from './products'
import axios from 'axios'
import { connect } from 'react-redux';

//components
import Banner from './banner'
//Css
import '../css/search.scss'

//actions
import ADD_PELICULA from '../actions/index'
import ADD_CANTIDAD from '../actions/cantidad'
import SEARCH from '../actions/search_text'

//Icons
import SearchIcon from '@material-ui/icons/Search';
import { Button } from 'react-materialize';

class Search extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            search : '',
            movie_results : ''
        }
    }
    componentDidMount(){


    }

    search(e){
        let value = document.querySelector('.searchInput').value
        this.props.SEARCH(value)

        const options = {
            method: 'GET',
            url: 'https://imdb8.p.rapidapi.com/title/auto-complete',
            params: {q: value},
            headers: {
              'x-rapidapi-key': 'c4cbf914d7msh97d02c7de706d0bp14bd9cjsn60be7efb5634',
              'x-rapidapi-host': 'imdb8.p.rapidapi.com'
            }
          };
          let new_this = this
          axios.request(options).then(function (response) {
            new_this.setState({
                    movie_results : JSON.stringify(response.data.d)
            })

          }).catch(function (error) {
              console.error(error);
          });
    }
    render(){

        let initial_search = 'Avengers'

        if(this.props.pelicula.search !== ''){
            console.log(this.props.pelicula.search)
            initial_search = this.props.pelicula.search
        }
        console.log(initial_search)
        let new_this = this
        if(this.state.movie_results == ''){
            const options = {
                method: 'GET',
                url: 'https://imdb8.p.rapidapi.com/title/auto-complete',
                params: {q : initial_search},
                headers: {
                  'x-rapidapi-key': 'c4cbf914d7msh97d02c7de706d0bp14bd9cjsn60be7efb5634',
                  'x-rapidapi-host': 'imdb8.p.rapidapi.com'
                }
              };
              axios.request(options).then(function (response) {
    
                    let num_datos = response.data.d
                    num_datos.forEach(dato => {
                        let precio_aleatorio = (Math.floor(Math.random() * 500) + 1) / 10
                        dato.price = precio_aleatorio
                    });
                    new_this.setState({
                        movie_results : JSON.stringify(num_datos)
                    })
    
    
              }).catch(function (error) {
                  console.error(error);
              });
        }

        return(
            <div>
                <Banner/>
                <div className="busqueda">
                    <div className="container">
                        <div className="borde">
                            <div className="row">
                                <div className="col s12">
                                    <div className="row">
                                        <div className="cont_search">
                                            <div className="input-field col s12">
                                                <i className="material-icons prefix"><SearchIcon/></i>
                                                <input type="text"  id="autocomplete-input" className="autocomplete searchInput"></input>
                                                <label for="autocomplete-input">Find your movie</label>
                                            </div>
                                            <Button onClick={this.search.bind(this)} node="button" waves="light" >
                                                Search
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <Products searched_movies = {this.state.movie_results}/>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        pelicula : state
    }
} 
const mapDispatchToProps = () => {
    return{
        ADD_PELICULA,
        ADD_CANTIDAD,
        SEARCH
    }
}
export default connect(mapStateToProps, mapDispatchToProps())(Search);