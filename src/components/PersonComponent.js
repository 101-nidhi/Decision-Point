import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';


class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            person: null
        }
    }

    onSelected(p) {
        this.setState({
            person: p
        })
    }

    render() {
        const display = this.props.users.map(person1 => {
            return (
                <div key={person1.id} className='col-12 col-md-5 m-1'>
                    <Card onClick={() => this.onSelected(person1)} >
                     
                            <CardTitle >Id: {person1.id}</CardTitle>
                             <CardTitle >Name: {person1.name}</CardTitle>
                            <CardTitle >Username: {person1.username}</CardTitle>
                            <CardTitle >title: {person1.title}</CardTitle>
                            <CardTitle >Email: {person1.email}</CardTitle>
                            <CardTitle >Street: {person1.address.street}</CardTitle>
                            <CardTitle >Suite: {person1.address.suite}</CardTitle>
                            <CardTitle >City: {person1.address.city}</CardTitle>
                            <CardTitle >zipcode: {person1.address.zipcode}</CardTitle> 
                            <CardTitle >lat: {person1.address.geo.lat}</CardTitle>     
                            <CardTitle >lng: {person1.address.geo.lng}</CardTitle>    
                            <CardTitle >phone: {person1.phone}</CardTitle>   
                            <CardTitle >website: {person1.website}</CardTitle> 
                            <CardTitle >company-name: {person1.company.name}</CardTitle>    
                            <CardTitle >company-catchPhrase: {person1.company.catchPhrase}</CardTitle>  
                            <CardTitle >company-bs: {person1.company.bs}</CardTitle>    
                        {/* </CardImgOverlay> */}
                    </Card>
                </div>
            );
        });
        return (
            <div className='container'>
                <div className='row'>
                    {display}
                </div>
             
            </div>
        );
    }
}

export default Menu; 

