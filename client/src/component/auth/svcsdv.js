<nav class="navbar navbar-light bg-light">
<div class="container-fluid">
  <a class="navbar-brand" href="#">
    <img
      src="https://scontent-bom1-2.xx.fbcdn.net/v/t1.6435-9/50933597_2260255480856103_8462898186757865472_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=goCM1oShOxUAX_Glntm&tn=q7oP6gqNiabZsvxe&_nc_ht=scontent-bom1-2.xx&oh=24631776f851e4c95b273bcc9c36986a&oe=616C63C6"
      alt=""
      width="30"
      height="24"
      class="d-inline-block align-text-top"
    />
    Urban Service
  </a>
</div> 
</nav> 
<h1 className="large text-danger">
<i class="fa-solid fa-right-to-bracket"></i>Sign Up
</h1>
<p className="lead">
<i className="fas fa-user"></i> Create Your Account
</p>
<form className="form" onSubmit={(e) => onSubmit(e)}>
<div className="form-group">
  <input
    type="text"
    placeholder="mobileno"
    name="name"
    value={MobileNo}
    onChange={(e) => onChange(e)}
    required
  />
</div>
<div className="form-group">
  <input
    type="text"
    placeholder="PinCode"
    name="name"
    value={PinCode}
    onChange={(e) => onChange(e)}
    required
  />
</div>
<div className="form-group">
  <input
    type="email"
    placeholder="Email Address"
    name="email"
    value={EmailId}
    onChange={(e) => onChange(e)}
    required
  />
</div>
<div className="form-group">
  <input
    type="password"
    placeholder="Password"
    name="password"
    minLength="6"
    value={Password}
    onChange={(e) => onChange(e)}
    required
  />
</div>
<div className="form-group">
  <input
    type="password"
    placeholder="Confirm Password"
    name="password2"
    minLength="6"
    value={Password2}
    onChange={(e) => onChange(e)}
    required
  />
</div>
<input type="submit" className="btn btn-primary" value="Register" />
</form>
<p className="my-1">
Already have an account? <a href="login.html">Sign In</a>
</p>