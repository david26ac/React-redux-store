let initial = {
    pelicula : [],
    search : '',
    cantidad_articulos: 0,
    total: 0
}

const counter_reducer = (state = initial, action) => {
    switch(action.type){
        case 'ADD_PELICULA' : 
            let new_pelicula = {
                pelicula : action.nombre,
                estrellas : 0,
                cantidad :  1,
                precio: action.precio,
                img: action.img,
                id : action.id
            }
            //Set new State so the props update
            let _state = {...state}
            if(_state.pelicula.length > 0){
                let another = true;
                for(let i = 0; i < _state.pelicula.length; i++){
                    if(new_pelicula.id === _state.pelicula[i].id){
                        _state.pelicula[i].cantidad++
                        another = false
                        _state.cantidad_articulos = _state.cantidad_articulos + 1
                    }

                }
                if(another == true){
                    _state.pelicula = [...state.pelicula, new_pelicula]
                    _state.cantidad_articulos = _state.cantidad_articulos + 1;
                    _state.total = (state.total + new_pelicula.precio)

                }
            } else{
                _state.pelicula = [...state.pelicula, new_pelicula]
                _state.cantidad_articulos = state.cantidad_articulos + 1;

                _state.total = (state.total + new_pelicula.precio)

            }

            return _state
            
        case 'ADD_CANTIDAD' : 
            let __state = {...state}
            for(let i = 0; i < __state.pelicula.length; i++){

                if(__state.pelicula[i].id == action.id){
                    __state.pelicula[i].cantidad = parseInt(__state.pelicula[i].cantidad)
                    action.cantidad = parseInt(action.cantidad)

                    __state.cantidad_articulos = (__state.cantidad_articulos - __state.pelicula[i].cantidad + action.cantidad)
                    __state.total = (__state.total - (__state.pelicula[i].cantidad * __state.pelicula[i].precio) + (__state.pelicula[i].precio * action.cantidad))
                    __state.pelicula[i].cantidad = action.cantidad
                    
                }

            }
            return __state;
        case 'REMOVE':
            let state_remove = {...state};

            console.log(state_remove)
            for(let i = 0; i < state_remove.pelicula.length; i++){

                if(state_remove.pelicula[i].id == action.id){

                    state_remove.pelicula[i].cantidad = parseInt(state_remove.pelicula[i].cantidad)

                    state_remove.cantidad_articulos = (state_remove.cantidad_articulos - state_remove.pelicula[i].cantidad)
                    state_remove.total = (state_remove.total - (state_remove.pelicula[i].cantidad * state_remove.pelicula[i].precio))
                    state_remove.pelicula.splice(i,1);

                } 

            }
            return state_remove;
        case 'SEARCH' : 
            state.search = action.text
            return state;

        default: 
            return state
    }

}

export default counter_reducer