import React from 'react';
  
class DemoForm extends React.Component {
    constructor() {
    super();
    this.state = {
      input: {},
      errors: {}
    };
     
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  
  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
  
    this.setState({
      input
    });
  }
     
  handleSubmit(event) {
    event.preventDefault();
  
    if(this.validate()){
        console.log(this.state);
  
        let input = {};
        input["name"] = "";
        input["email"] = "";
        input["password"] = "";
        input["phone"] = "";
        this.setState({input:input});
       
        alert('Demo Form is submited');
    }
  }
  validate(){
      let input = this.state.input;
      let errors = {};
      let isValid = true;
  
      if (!input["name"]) {
        isValid = false;
        errors["name"] = "Please enter your name.";
      }
  
      if (!input["email"]) {
        isValid = false;
        errors["email"] = "Please enter your email Address.";
      }
  
      if (typeof input["email"] !== "undefined") {
          
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(input["email"])) {
          isValid = false;
          errors["email"] = "Please enter valid email address.";
        }
      }
      if(!input["password"]){
        isValid=false;
        errors["password"]="Please enter valid password.";
      }
      if(typeof input["password"]!=="undefined")
      {
       
        var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        
       
            
            if (!strongRegex.test(input["password"]))
             {
                isValid = false;
                errors["password"] = "Please enter strong 8 digit password.";
              }
              else if(input["password"].length != 8)
              {
                isValid = false;
                errors["password"] = "Please enter valid 8 digit password.";
              }
           
         }
    
      if (!input["phone"]) {
        isValid = false;
        errors["phone"] = "Please enter your phone number.";
      }
  
      if (typeof input["phone"] !== "undefined") {
          
        var pattern = new RegExp(/^[0-9\b]+$/);
        if (!pattern.test(input["phone"])) {
          isValid = false;
          errors["phone"] = "Please enter only number.";
        }else if(input["phone"].length != 10){
          isValid = false;
          errors["phone"] = "Please enter valid phone number.";
        }
      }
  
      this.setState({
        errors: errors
      });
  
      return isValid;
  }
     
  render() {
    return (
      <div>
        <h1>React Validation For Phone Number Example</h1>
        <form onSubmit={this.handleSubmit}>
  
          <div class="form-group">
            <label for="name">Name:</label>
            <input 
              type="text" 
              name="name" 
              value={this.state.input.name}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="Enter name" 
              id="name" />
  
            <div className="text-danger">{this.state.errors.name}</div>
          </div>
  
          <div class="form-group">
            <label for="email">Email Address:</label>
            <input 
              type="text" 
              name="email" 
              value={this.state.input.email}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="Enter email" 
              id="email" />
  
              <div className="text-danger">{this.state.errors.email}</div>
          </div>
          <div class="form-group">
            <label for="Password">Password:</label>
            <input 
              type="text" 
              name="password" 
              value={this.state.input.password}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="Enter password" 
              id="email" />
  
              <div className="text-danger">{this.state.errors.password}</div>
          </div>
          <div class="form-group">
            <label for="Phone">Phone:</label>
            <input 
              type="text" 
              name="phone" 
              value={this.state.input.phone}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="Enter phone" 
              id="email" />
  
              <div className="text-danger">{this.state.errors.phone}</div>
          </div>

          <input type="submit" value="Submit" class="btn btn-success" />
        </form>
      </div>
    );
  }
}
  
export default DemoForm;