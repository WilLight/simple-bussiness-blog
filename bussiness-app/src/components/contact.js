import React from 'react';
import './contact.css';
import TextField from '@material-ui/core/TextField';
import  { Button } from '@material-ui/core';

class Contact extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
                        email:'',
                        phoneNumber:'',
                        subject:'',
                        message:''
                    };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
      });
    }
  
    handleSubmit(event) {
      alert(JSON.stringify(this.state));
      event.preventDefault();
    }

    render() {
        return (
        
            <div id='contact-panel'>
                <div>
                    <h2 id='contact-panel-greeting'> Let's get in touch. You can:</h2>
                </div>
                <div id='contact-information'>
                    <div id='right-side'>
                        <div>
                            <h3> Call us now:</h3>
                        </div>
                        <div>
                            <h3> Contact us later using our email: </h3>
                        </div>
                    </div>
                    <div id='left-side'>
                        <div>
                            <h3>111 111 111</h3>
                        </div>
                        <div>
                            <h3> akcent-energy@gmail.com</h3>
                        </div>
                    </div>
                    
                </div>
                <div id='contact-form-div'>
                    <div id='contact-form-text'>
                        <h2> Or write to us right now using our contact form:</h2>
                    </div>
                    <form 
                    id='contact-form'
                    onSubmit={this.handleSubmit}
                    >
                        <div id='contact-form-grid'>
                            <div id="email-address">
                                <TextField
                                    id="email-address-input"
                                    label="Email"
                                    name='email'
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                    margin="normal"
                                />
                            </div>
                            <div id="phone-number-input">
                                <TextField
                                    id="phone-number-input"
                                    label="Phone Number"
                                    type="number"
                                    name='phoneNumber'
                                    value={this.state.phoneNumber}
                                    onChange={this.handleChange}
                                    margin="normal"
                                />
                            </div>
                            <div id="subject">
                                <TextField
                                    id="subject-input"
                                    label="Subject"
                                    name='subject'
                                    value={this.state.subject}
                                    onChange={this.handleChange}
                                    margin="normal"
                                />
                            </div>
                            <div id="message">
                                <TextField
                                    id="message-input"
                                    label="Message"
                                    multiline
                                    rowsMax="10"
                                    name='message'
                                    value={this.state.message}
                                    onChange={this.handleChange}
                                    margin="normal"
                                />
                            </div>
                        </div>
                        <Button
                        id="submitButton"
                        type="submit"
                        form="contact-form"
                        >
                            Submit
                        </Button>
                    </form>
                </div>
            </div>

            );
    }
}

export default Contact;