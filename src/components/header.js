import React from 'react'
import { Link } from "react-router-dom";

//css
import 'materialize-css';
import "materialize-css/dist/css/materialize.min.css";
import '../css/header.scss'
import { Navbar, NavItem, Dropdown, Divider, Icon } from 'react-materialize';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import { connect } from 'react-redux';

//actions
import ADD_PELICULA from '../actions/index'

class Header extends React.Component{
    
    render(){
        return(
            <Navbar
            alignLinks="right"
            brand={
                <Link to='/'><div className="brand-logo">Movie<span>App</span></div></Link>
            }
            id="mobile-nav"
            menuIcon={<Icon>menu</Icon>}
            options={{
              draggable: true,
              edge: 'left',
              inDuration: 250,
              onCloseEnd: null,
              onCloseStart: null,
              onOpenEnd: null,
              onOpenStart: null,
              outDuration: 200,
              preventScrolling: true
            }}
          >
            <NavItem href="store.html">
                <Link to='/compra'>
                    <div className="cont_icon">
                        <i className='icon_store'><LocalGroceryStoreIcon/></i>
                        {console.log(this.props.state)}
                        {
                          this.props.state.cantidad_articulos !== 0 ? <span>{this.props.state.cantidad_articulos}</span> : ''
                        }
                    </div>
                </Link>
            </NavItem>
            <Dropdown
              id="Dropdown_6"
              options={{
                alignment: 'left',
                autoTrigger: true,
                closeOnClick: true,
                constrainWidth: true,
                container: null,
                coverTrigger: true,
                hover: false,
                inDuration: 150,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 250
              }}
              trigger={<a href="#!">Extras{' '}<Icon right></Icon></a>}
            >
              <a href="#">
                one
              </a>
              <a href="#">
                two
              </a>
              <Divider />
              <a href="#">
                three
              </a>
            </Dropdown>
          </Navbar>
        )
    }
}
const mapStateToProps = (state) => {
    return {
      state : state
    }
} 
export default connect(mapStateToProps)(Header);
