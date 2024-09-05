const heading = React.createElement("h1",
    { id: "heading" }, "Hello world from React!");//this is the props object.It has 2 properties, id:heading and children:"Hello world from React!" 
console.log("heading", heading);// it is a react object


const root2hHeading = React.createElement("h1",
    { id: "heading" }, "Hello world from React!");//this is the props object.It has 2 properties, id:heading and children:"Hello world from React!" 
console.log("heading", heading);
const root2 = ReactDOM.createRoot(document.getElementById("header"));
root2.render(root2hHeading);
const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(heading); // the render method converts the "heading" object into h1 tag and put the content inside it 




