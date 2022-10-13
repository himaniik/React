import React,{useState} from 'react'

 function Login(){

    function add()
    {
      var errorF="";
      var errorL="";
      var errorP="";
      var errorA="";
      var errorD="";
      var errorE="";
      if (
        data.firstName==="")
        {
          errorF="First name cant be empty!!!"
          SetErrorF(errorF);
          
        }

      if (
        data.lastName==="")
        {
        errorL="Last name cant be empty!!!"
        SetErrorL(errorL);
       
      }

      if( data.address==="")
      {
        errorA="Address cant be empty!!!"
        SetErrorA(errorA);
       
      }
        
      if( data.email==="")
      {
        errorE="Email cant be empty!!!"
        SetErrorE(errorE);
        
      }
      
      if( data.phone==="")
      {
        errorP="Phone number cant be empty!!!"
        SetErrorP(errorP);
        
      }
      
      if( data.dob==="")
      {
        errorD="Dob cant be empty!!!"
        SetErrorD(errorD);
       
      }
       if(errorF==="" && errorA==="" && errorL==="" && errorD==="" && errorE==="" && errorP==="")
       {
        setSuccess(" Sucessfully Added!!")
        return ;
       }
      
      
     
      
    }

  const [data,setData]=useState({
    firstName:"",
    lastName:"",
    address:"",
    email:"",
    phone:"",
    dob:"",

  })

  const [errorF,SetErrorF]=useState("")
  const [errorL,SetErrorL]=useState("")
  const [errorP,SetErrorP]=useState("")
  const [errorE,SetErrorE]=useState("")
  const [errorA,SetErrorA]=useState("")
  const [errorD,SetErrorD]=useState("")
  const [sucess,setSuccess]=useState("")
  return(
    <form style={{ overflowX: "hidden", margin: "auto", width: 500, padding: 10 }}>
  <h2>Employee Form</h2>
  
  <div className="form-row">
    <div className="form-group col-md-6">
      <label htmlFor="firstName">First Name </label>
      <input
        type="text"
        className="form-control"
        id="firstname"
        placeholder="First Name"
        name="firstName"
        value={data.firstName}
        onChange={
          (e)=>{
            setData({...data,firstName:e.target.value});
          }
        }

      />
      <p style={
        {
          color:'red',
          
        }
      }>{errorF}</p>
      <p>{data.firstName}</p>
    </div>


    <div className="form-group col-md-6">
      <label htmlFor="lastName">Last Name </label>
      <input
        type="text"
        className="form-control"
        id="lastName"
        placeholder="Last Name"
        name="lastName"
        value={data.lastName}
        onChange={
          (e)=>{
            setData({...data,lastName:e.target.value});
          }
        }

      />
      <p style={
        {
          color:'red',
          
        }
      }>{errorL}</p>
      <p>{data.lastName}</p>
  
    </div>
  </div>


  <div className="form-row">
    <div className="form-group col-md-6">
      <label htmlFor="inputAddress">Address</label>
      <input
        type="text"
        className="form-control"
        id="inputAddress"
        placeholder="1234 Main St"
        name="address"
        value={data.address}
        onChange={
          (e)=>{
            setData({...data,address:e.target.value});
          }
        }

      />
      <p style={
        {
          color:'red',
          
        }
      }>{errorA}</p>
      <p>{data.address}</p>
    </div>


    <div className="form-group col-md-6">
      <label htmlFor="inputCountry">Country</label>
      <select id="inputCountry" className="form-control">
        <option selected="">Nepal</option>
        <option>India</option>
        <option>China</option>
        <option>USA</option>
        <option>Canada</option>
      </select>
    </div>
  </div>

  <div className="form-row">
    <div className="form-group col-md-6">
      <label htmlFor="inputJoindate">Join Date</label>
      <input type="date" className="form-control" id="inputCity" name="dob"

       value={data.dob}
        onChange={
          (e)=>{
            setData({...data,dob:e.target.value});
          }
        }
        />
        <p style={
        {
          color:'red',
          
        }
      }>{errorD}</p>
      <p>{data.dob}</p>
        
    </div>
    <div className="form-group col-md-6">
      <label htmlFor="inputEmail">Email</label>
      <input
        type="email"
        className="form-control"
        id="inputEmail"
        name="email"
        value={data.email}
        onChange={
          (e)=>{
            setData({...data,email:e.target.value});
          }
        }

      />
      <p style={
        {
          color:'red',
          
        }
      }>{errorE}</p>
      <p>{data.email}</p>
    </div>
  </div>


  <div className="form-row">
    <div className="form-group col-md-6">
      <label htmlFor="inputPhone">Phone</label>
      <input type="text" className="form-control" id="inputCity" name="phone" value={data.phone}
        onChange={
          (e)=>{
            setData({...data,phone:e.target.value});
          }
        }

      />
      <p style={
        {
          color:'red',
          
        }
      }>{errorP}</p>
      <p>{data.phone}</p>
    </div>


    <div className="form-group col-md-6">
      <label htmlFor="inputPosition">Designation</label>
      <select id="inputPosition" name="designation" className="form-control">
        <option selected="">Designation</option>
        <option value="HR">HR</option>
        <option value="Manger">Manger</option>
        <option value="Product Owner">Product Owner</option>
        <option value="Developer">Developer</option>
        <option value="QA">QA</option>
      </select>
    </div>
  </div>


  <div className="form-row">
    <div className="form-group col-md-6">
      <label>Gender</label>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="gender"
          id="gender"
          defaultValue="Female"
        />
        <label className="form-check-label" htmlFor="female">
          Female
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="gender"
          id="gender"
          defaultValue="Male"
          defaultChecked=""
        />
        <label className="form-check-label" htmlFor="male">
          Male
        </label>
      </div>
    </div>
  </div>


  <div className="form-row">
    <div className="form-group col-md-6">
      <label>Message</label>
      <textarea
        style={{ width: 300 }}
        placeholder="Type here..."
        defaultValue={""}
        name="txtarea"
      />
    </div>
  </div>


  <div className="form-group">
    <label>Skills</label>
    <br />
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck" />
      <label className="form-check-label" htmlFor="gridCheck">
        JAVA
      </label>
    </div>
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck" />
      <label className="form-check-label" htmlFor="gridCheck">
        Python
      </label>
    </div>
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck" />
      <label className="form-check-label" htmlFor="gridCheck">
        Mobile
      </label>
    </div>
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck" />
      <label className="form-check-label" htmlFor="gridCheck">
        Node JS
      </label>
    </div>
  </div>
  <br />
  <button type="button" className="btn btn-info" onClick={add}>
    Submit
  </button>
  <p>{sucess}</p>
</form>

  );
  
}
export default Login;
 