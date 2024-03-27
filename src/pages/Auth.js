import React from 'react'

class Auth extends React.Component {
    constructor(){ 
      super();
      this.state={"user_count":3, "phone":"000-000-000"};
      console.log("constructor")

      }

      shouldComponentUpdate(nextProps, newState){
        if(nextState.user){

        }
      }

      render(){
        console.log("render")
        let user_name = this.props.user_name;
        let {user_age,status, users}=this.props
        let email = "arun@gmail.com"


        const countupdate = ()=>{
          console.log("Onclick")
          this.state({
            user_count:this.state.user_count + 1,
            "phone" : "000-000-000"
          })
          email="arun@gamil.com"
        }

        const html = <div>User name :{user_name} User Age :{user_age}
        <p>Status :{status}</p>
        <p onClick={()=>{countupdate}}>count : {this.state.user_count}</p>
        

        <table>
          <thread>
            <tr><th>name</th><th>age</th><th>gender</th></tr>
          </thread>
          <tbody>
            {users.map((user,index) => (<tr key={index}><td>{user.name}</td><td>{user.age}</td><td>{user.gender}</td></tr>))}
          </tbody>
        </table>
        </div>
      }
}

export default Auth