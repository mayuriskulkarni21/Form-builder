import React from 'react';
import { Input, Form, FormGroup, Label, Button } from 'reactstrap';
import Axios from 'axios';

export default class ShowWholeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: { name: '', questionSet: [] }
        }
    }

    getMultiChoice(choices) {
        let keys = Object.keys(choices);
        return keys.map((k, i) => {
            return (<div>
                <input type="checkbox" /><span>{'  '}{choices[k]}</span>
            </div >)
        })
    }

    showForm(question, i) {
        let keyval = `answer${i}`;
        return (
            <FormGroup controlId="formBasicEmail">
                <span className="font-weight-bold">Q.</span><span>{'  '}{question.question}</span>
                {question.ansType === "Text" && <Input type="name" name={keyval} />}
                {question.ansType === "Multichoice Checkbox" && this.getMultiChoice(question.choices)}
                {question.ansType === "Single Select radio" && <><span>{'  '}</span><input type="radio" /></>}
            </FormGroup>
        )
    }

    handleClick(e) {
        this.props.history.push(`/`);
    }

    render() {
        const formData = (this.props.location.formData && this.props.location.formData.form) || this.state;
        return (
            formData !== {} ?
                <>
                    <Form className="create-form">
                        <div className="mb-5">
                            <Button className="float-right" onClick={(e) => this.handleClick(e)}>Back</Button>
                        </div>
                        <FormGroup controlId="formBasicEmail">
                            <div className="text-center"><Label className="font-weight-bold">{formData.name}</Label> <hr /></div>
                        </FormGroup>
                        {
                            (formData.questionSet && formData.questionSet.length !== 0) ?
                                formData.questionSet.map((question, i) => {
                                    return (
                                        this.showForm(question, i)
                                    )
                                }) :
                                <div className="text-center">No any question added!</div>
                        }
                    </Form>
                </>
                :
                <></>
        )
    }
}