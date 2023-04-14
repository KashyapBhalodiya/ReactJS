function Props(str) {
    console.log(str.name);
    return (
        <div style={{color: "blue"}}>
            <h1 style={{backgroundColor: "skyblue", margin: 50}}>This is Props :)</h1>
            <h1>Hello {str.name}</h1>
            <h1>Email: {str.email}</h1>
        </div>
    );
}

export default Props;