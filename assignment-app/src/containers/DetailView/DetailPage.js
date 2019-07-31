/*
 *
 * Detail Page
 *
 */

import React from 'react';

export default class DetailPage extends React.Component{

    constructor(props){
        super(props);
        this.state= {
            userData: []
        }

    }

    componentDidMount() {
        const { match: { params } } = this.props;

        fetch(`http://demo9197058.mockable.io/users`, {
            mode: "cors",
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then( response => response.json() )
            .then( data => {
                console.log(data.filter(user => {return params.userId.includes(user.id)}))
            }
            );

    }
    render() {
        return (
            <div>
                DetailPage
            </div>
        );
    }
}