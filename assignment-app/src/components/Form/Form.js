import * as React from 'react';
import PropTypes from "prop-types";
import "./styles.css";

class Form extends React.PureComponent{

    render() {
        return(
            <table className="tableLayout">
                <thead>
                <tr className="name">
                    <th> {this.props.data[0].first_name}  {this.props.data[0].last_name}</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className="tableTitle">Company</td>
                    <td className="tableValue">{this.props.data[0].company_name}</td>
                </tr>
                <tr>
                    <td className="tableTitle">City</td>
                    <td className="tableValue">{this.props.data[0].city}</td>
                </tr>
                <tr>
                    <td className="tableTitle">State</td>
                    <td className="tableValue">{this.props.data[0].state}</td>
                </tr>
                <tr>
                    <td className="tableTitle">Zip</td>
                    <td className="tableValue">{this.props.data[0].zip}</td>
                </tr>
                <tr>
                    <td className="tableTitle">Email</td>
                    <td className="tableValue">{this.props.data[0].email}</td>
                </tr>
                <tr>
                    <td className="tableTitle">Web</td>
                    <td className="tableValue">{this.props.data[0].web}</td>
                </tr>
                <tr>
                    <td className="tableTitle">Age</td>
                    <td className="tableValue">{this.props.data[0].age}</td>
                </tr>
                </tbody>
            </table>
        );
    }

}


Form.propTypes = {
    data: PropTypes.array,
};


export default Form;