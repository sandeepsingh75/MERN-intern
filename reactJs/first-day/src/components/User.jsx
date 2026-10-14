import Component1 from "./Component1";

function User(props){
    return(
        <>
        <h1> User Component  </h1>
        <div>
        <button onClick={props.add}> + </button> {props.count}  <button onClick={props.sub}> - </button>
        </div>
        <Component1 props={props} />
        </>
    )
}

export default User;