import React from "react";

export class Form extends React.Component{
    state = {
        firstName: '',
        lastName:'',
        bio:''
        
    };
    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });

    };
    onSubmit = e => {
        e.preventdefault();
        this.props.onSubmit(this.state)
        console.log(this.state);
        this.setState({
            firstName: '',
            lastName:'',
            bio:''
        });
    };
    render() {
        return (
            <form>
                <input 
                name="firstName"
                placeholder='First name' 
                value={this.state.firstName} 
                onChange={e=> this.change(e) }
                />
                <br />
                <input 
                name="lastName"
                placeholder='Last name' 
                value={this.state.lastName} 
                onChange={e=> this.change(e)}
                />
                <br />
                <input 
                placeholder='bio' 
                value={this.state.bio} 
                onChange={e=> this.change(e) }
                />
                <button onClick={e => this.onSubmit(e)}>Submit</button>
             </form>
        );
    }
}

export default Form