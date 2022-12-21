
const FullName = ({name,func})=>{

    
    return(
        <div>
            <h1>My name is {name} </h1>
            <button style={{width:'2.4cm',height:'2.4cm',backgroundColor:'yellow',color:'black',borderRadius:'15px',fontWeight:'bold'}} onClick={func}>show my name</button>
        </div>
    )
}

export default FullName