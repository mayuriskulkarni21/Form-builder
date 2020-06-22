import React from 'react';
import { connect } from 'react-redux';
import {
    ModalHeader,
    ModalBody,
    Table,
} from 'reactstrap';

export class ShowFormList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: this.props.formModal
        }
        this.renderTableData = this.renderTableData.bind(this)
    }

    showForm(e, form) {
        e.preventDefault();
        this.props.history.push({
            pathname: '/form/${form.name}',
            formData: { form }
        });
    }

    renderTableData() {
        return this.props.formData && this.props.formData.map((form, index) => {
            const { _id, name, created_at } = form;

            return (
                <tr key={index}>
                    <td>{name}</td>
                    <td><a href={``} onClick={(e) => { this.showForm(e, form) }} >Check Form</a></td>
                </tr>
            )
        })
    }

    render() {
        return (
            < >
                < ModalHeader toggle={() => this.props.toggle()}>Form List</ModalHeader >
                <ModalBody>
                    <Table id='form-list'>
                        <thead>
                            <tr>
                                <th>Form Name</th>
                                <th>Form URL</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderTableData()}
                        </tbody>
                    </Table>
                </ModalBody>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        formData: state.formReducer.formData
    }
}

export default connect(mapStateToProps)(ShowFormList);
