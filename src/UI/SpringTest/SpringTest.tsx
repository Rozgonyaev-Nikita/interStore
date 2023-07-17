import { useSpring, animated } from "@react-spring/web";
import classes from "./SpringTest.module.scss";

function MyComponent() {
  const props = useSpring({
    from: { transform: "rotate(0deg)", marginLeft: "0%" },
    to: { transform: "rotate(360deg)", marginLeft: "90%" },
    loop: { reverse: true },
    delay: 500,
    config: {
      duration: 2000,
    },
  });

  return (
    <div
      style={{
        width: "90%",
        marginLeft: "20px",
        height: "50px",
        position: "relative",
      }}
    >
      <animated.div className={classes.springDiv} style={props}>
        <div className={classes.block}></div>
      </animated.div>
    </div>
  );
}

export default MyComponent;
