import React, {Component} from 'react';


class Form extends Component {
    render() {
        return (
            <Row>
                <Input placeholder="Placeholder" s={6} label="First Name" />
                <Input s={6} label="Last Name" />
                <Input label="Birthday" s={12} />
                <Input type="email" label="Email" s={12} />
            </Row>
        )
    }
}

export default Form;