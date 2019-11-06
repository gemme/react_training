import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import styled from 'styled-components';

const Container = styled.div`
    font-size: 40px;
    display: flex;
    flex-direction: column;
    color: ${props => props.color};
`;


/* function UserInfo(props) {
    return (
        <div>
            <span>name: {props.name}</span>
            <span>last name: {props.lastname}</span>
            <span>phone: {props.phone}</span>
        </div>
    )
} */

const UserInfo = ({
    name,
    lastname,
    phone,
    color
}) => (
    <Container color={color}>
        <span>name: {name}</span>
        <span>last name: {lastname}</span>
        <span>phone: {phone}</span>
    </Container>
)

const element = React.createElement('h1', null, 'User Info')

const users = [
    {
        id: '123',
        name: 'Ernesto',
        lastname: 'Escobar',
        phone:'55-42-32-44',
        color:'gray'
    },
    {
        id: '12334',
        name: 'Gerardo',
        lastname: 'Sanchez',
        phone:'55-42-32-44',
        color:'lightblue'
    },
    {
        id: '12334SDS',
        name: 'Lupita',
        lastname: 'Ulloa',
        phone:'55-42-32-44',
        color:'red'
    }
]

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: 'Gabriel'
        }
        this.onClickEvent = this.onClickEvent.bind(this);
    }

    onClickEvent(event) {
        //this.state.name = 'Ernesto';
        console.log(event);
        console.log(this);
        this.setState(function(prevState){
            return {
                name: 'Ernesto'
            }
        })
    }

    /* <UserInfo
                name={'Ernesto'}
                lastname={'Escobar'}
                phone={'55-42-32-44'}
            />
            <div onClick={this.onClickEvent}>Hola Mundo { this.state.name }</div> */
    //JSX

    
    render() {
        return <>
            {element}
            {
                users.map((user) => {
                    return (
                        <UserInfo
                            key={user.id}
                            name={user.name}
                            lastname={user.lastname}
                            phone={user.phone}
                            color={user.color}
                        />)
                })
            }
            <div onClick={this.onClickEvent}>Hola Mundo { this.state.name }</div>
            </>
    }

}

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


{/* <UserInfo
                name={'Ernesto'}
                lastname={'Escobar'}
                phone={'55-42-32-44'}
                color={'gray'}
            />
            <UserInfo
                name={'Gerardo'}
                lastname={'Escobar'}
                phone={'55-42-32-44'}
                color={'lightblue'}
            />
            <UserInfo
                name={'Lupita'}
                lastname={'Escobar'}
                phone={'55-42-32-44'}
                color={'purple'}
            /> */}
