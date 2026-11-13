import Button from "./components/Button";
import Card from "./components/Card";
import Layout from "./components/Layout";
import Tabs from "./components/Tabs";
import User from "./components/User";

const App = () =>{
  return (
    <>
    <div style={{border:"2px solid white"}}>

    <h1>1. Containment Pattern (Using Props.children)</h1>
    <Card>
      <h1>Card Title</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quasi explicabo suscipit non recusandae eius quo culpa! Nisi, qui inventore.</p>
    </Card>
    </div>

    <div style={{border:"2px solid white", margin:"10px 0"}}>
    <h1 style={{}}>2. Specialization Pattern (Using Props)</h1>
    <Button color="red"  text="Login"/>
    <Button color="blue"  text="Register"/>
    <Button color="purple"  text="add to cart"/>
    </div>

    <div style={{border:"2px solid white", margin:"10px 0"}}>
      <h1>3. Compound Components Pattern</h1>
       <Tabs>
      <Tabs.Tab>Home</Tabs.Tab>
      <Tabs.Tab>About</Tabs.Tab>

      <Tabs.Panel>
        Welcome to Home Page
      </Tabs.Panel>
    </Tabs>
    </div>

    <div style={{border:"2px solid white", margin:"10px 0"}}>
      <h1> 4. Render Props Pattern </h1>
      <User 
        render={(user)=>(
          <>
            <h2>{user.name}</h2>
            <p>{user.age}</p>
          </>
        )} />
    </div>

    <div style={{border:"2px solid white", margin:"10px 0"}}>
      <h1> 5. Layout Composition Pattern </h1>
      <Layout>
        <h1>Home Page</h1>
        <p>Welcome to my website</p>
      </Layout>

    </div>
    </>
  )
}

export default App;