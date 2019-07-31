import * as React from 'react';
import {BootstrapTable, TableHeaderColumn, SearchField} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table.min.css';
import 'react-bootstrap-table/dist/react-bootstrap-table.min.js';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import 'react-bootstrap-table/css/react-bootstrap-table.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import PropTypes from "prop-types";
import "./styles.css";

class Table extends React.Component {

    render() {

        const data= [
            {
                "id": 1,
                "first_name": "James",
                "last_name": "Butt",
                "company_name": "Benton, John B Jr",
                "city": "New Orleans",
                "state": "LA",
                "zip": 70116,
                "email": "jbutt@gmail.com",
                "web": "http://www.bentonjohnbjr.com",
                "age": 70
            },
            {
                "id": 2,
                "first_name": "Josephine",
                "last_name": "Darakjy",
                "company_name": "Chanay, Jeffrey A Esq",
                "city": "Brighton",
                "state": "MI",
                "zip": 48116,
                "email": "josephine_darakjy@darakjy.org",
                "web": "http://www.chanayjeffreyaesq.com",
                "age": 48
            }];

        const onRowClick= (row) => {
            window.location ="/user/"+row.id;
        };

        const options = {
            page: 1,  // which page you want to show as default
            sizePerPage: 5,  //  which size per page you want to locate as default
            sizePerPageList: [{
                text: '5', value: 5
            }, {
                text: '10', value: 10
            }, {
                text: '15', value: 15
            }, {
                text: 'All', value: data.length
            }],
            pageStartIndex: 1, //  where to start counting the pages
            paginationSize: 3,  // the pagination bar size.
            prePage: 'Prev', // Previous page button text
            nextPage: 'Next', // Next page button text
            firstPage: 'First', // First page button text
            lastPage: 'Last', // Last page button text
            paginationPosition: 'bottom',  //  default is bottom, top and both is all available
            sortIndicator: true,
            searchField: (props) => { return (<SearchField placeholder="Search by first name"/>);},
            onRowClick: onRowClick

        };

        return (
            <div className="row" style={{margin:'auto'}}>
                <div className="col-md-12 col-xs-12 col-sm-12 col-lg-12 ">
                    <div className="mainBox">
                        <BootstrapTable data={data}
                                        striped
                                        hover
                                        condensed
                                        pagination
                                        search
                                        options={options}
                        >
                            <TableHeaderColumn dataField='id' isKey={true} hidden={true}>Id</TableHeaderColumn>
                            <TableHeaderColumn thStyle={{whiteSpace: 'normal'}}
                                               tdStyle={{whiteSpace: 'normal'}}
                                               dataField="first_name"
                                               dataSort
                                               width='90'>First Name</TableHeaderColumn>
                            <TableHeaderColumn thStyle={{whiteSpace: 'normal'}}
                                               tdStyle={{whiteSpace: 'normal'}}
                                               dataField="last_name"
                                               width='90'
                                               dataSort headerAlign='left'>Last Name</TableHeaderColumn>
                            <TableHeaderColumn thStyle={{whiteSpace: 'normal'}}
                                               tdStyle={{whiteSpace: 'normal'}}
                                               dataAlign={'left'}
                                               dataField='company_name' width='110'
                                               dataSort>Company Name</TableHeaderColumn>
                            <TableHeaderColumn thStyle={{whiteSpace: 'normal'}}
                                               tdStyle={{whiteSpace: 'normal'}}
                                               dataField='city' width='80'
                                               dataSort>City</TableHeaderColumn>
                            <TableHeaderColumn thStyle={{whiteSpace: 'normal'}}
                                               tdStyle={{whiteSpace: 'normal'}}
                                               dataField='state' width='60'
                                               dataSort>State</TableHeaderColumn>
                            <TableHeaderColumn thStyle={{whiteSpace: 'normal'}}
                                               tdStyle={{whiteSpace: 'normal'}}
                                               dataField='zip'
                                               width='60'
                                               dataSort
                                               headerAlign='center'>Zip</TableHeaderColumn>
                            <TableHeaderColumn thStyle={{whiteSpace: 'normal'}}
                                               tdStyle={{whiteSpace: 'normal'}}
                                               dataField='email' width='100'
                                               dataSort>Email</TableHeaderColumn>
                            <TableHeaderColumn thStyle={{whiteSpace: 'normal'}}
                                               tdStyle={{whiteSpace: 'normal'}}
                                               dataField='web' width='150'
                                               dataSort>Web</TableHeaderColumn>
                            <TableHeaderColumn thStyle={{whiteSpace: 'normal'}}
                                               tdStyle={{whiteSpace: 'normal'}}
                                               dataField='age'
                                               width='60'
                                               dataSort>Age</TableHeaderColumn>
                        </BootstrapTable>
                    </div>
                </div>
            </div>
        );
    }
}


Table.propTypes = {
    TableData: PropTypes.array,
};


export default Table;
