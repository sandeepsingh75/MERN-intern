const User = ({render}) =>{
    const user = {
        name:"Sandeep",
        age:28
    }
    return <div>{render(user)}</div>
}

export default User; 