import classes from "./SpringTest.module.scss";

function MyComponent() {
  return (
    <div
      style={{
        width: "90%",
        marginLeft: "20px",
        height: "50px",
        paddingTop: "50px",
        position: "relative",
      }}
    >
      <div className={classes.springDiv}>
        <div className={classes.block}></div>
      </div>
    </div>
  );
}

export default MyComponent;
