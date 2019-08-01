/*
 *
 * Detail Page
 *
 */

import React from 'react';
import Form from "../../components/Form/Form";


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
                const user = data.filter(user => {return params.userId.includes(user.id)});
                console.log(user);
                this.setState({
                    userData: user
                });
            }
            );

    }
    render() {
        return (
            <div>
                {(()=>{
                    if(this.state.userData.length !==0){
                        return <Form data={this.state.userData}/>;
                    }
                    else{
                        return  <div>Loading.......</div>;
                    }
                })()
                }
            </div>
        );
    }
}