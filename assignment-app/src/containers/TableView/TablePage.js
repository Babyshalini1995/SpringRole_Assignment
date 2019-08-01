/*
 *
 * Table Page
 *
 */

import React from 'react';
import Table from '../../components/Table/Table';

export default class TablePage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            TableData:[]
        }
    }

    componentDidMount() {
        fetch(`http://demo9197058.mockable.io/users`, {
            mode: "cors",
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then( response => response.json() )
            .then( data => {
                    this.setState({TableData: data});
                },
                error => {
                    this.setState({
                        error
                    });
                }
            );
    }

    render() {
        return (
            <div>
                {(()=>{
                    if(this.state.TableData){
                        return <Table data={this.state.TableData}/>;
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