import React from 'react'

import Loading from '../components/Loading';

//A função recebe um componente (WrappedComponent)

function LoadingHOC(WrappedComponent) {
    //retornar um componente de classe acessando suas props que a propiedade que quero tratar seria (users)
    return class extends React.Component {
        render() {
           return this.props.users.length === 0
            ? <Loading />
            : <WrappedComponent {...this.props}/>
        }
    }
}

export default LoadingHOC;