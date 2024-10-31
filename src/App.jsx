
import './App.css'
import GrandPa from './components/GrandPa/GrandPa'
// import ReusableForm from './components/ReusableForm/ReusableForm'
// import HookForm from './components/HookForm/HookForm'
// import RefForm from './components/RefForm/RefForm'
// import StatefulForm from './components/statefulFrom/StatefulForm'
// import SimpleFrom from './components/SimpleFrom/SimpleFrom'

function App() {

  // const handleSingnUpSubmit = data => {
  //   console.log('sing up data', data)
  // }
  // const handleUpdateProfile = data => {
  //   console.log('update profile', data)
  // }

  return (
    <>
      <h1>From master</h1>

      <GrandPa></GrandPa>
      
      {/* <SimpleFrom></SimpleFrom> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReusableForm formTitle={'Sign Up'} handleSubmit={handleSingnUpSubmit}>
        <div>
          <h2>Sign Up</h2>
          <p>Please sign up right now</p>
        </div>
      </ReusableForm>
      <ReusableForm formTitle={'Profile Update'} handleSubmit={handleUpdateProfile} submitBtnText='Update'>
        <div>
          <h2>Update profile</h2>
          <p>Always keep your profile update</p>
        </div>
      </ReusableForm> */}
    </>
  )
}

export default App
