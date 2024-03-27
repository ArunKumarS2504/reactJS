
import './App.css';
import Auth from'./pages/Auth'

function App() {
  
  
  
  const user =[{"name" : "Arun" ,"age" : "22" , "gender" : "male"},{"name" : "Arunaa" ,"age" : "23" , "gender" : "female"},{"name" : "Arunkumar" ,"age" : "32" , "gender" : "male"}];
  return(
    <div className='App'>
      <Auth users={users} user_name="Example Name" user_age="Example Age" status="Example Status"/>
    </div>
  )

}

export default App;