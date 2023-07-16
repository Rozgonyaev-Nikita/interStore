import { useSpring, animated } from "@react-spring/web";
import classes from "./SpringTest.module.scss";

function MyComponent() {
  const props = useSpring({
    from: { transform: "translateX(3vw) rotate(0deg)" },
    to: { transform: "translateX(82vw) rotate(360deg)" },
    loop: { reverse: true },
    delay: 500,
    config: {
      duration: 3000,
    },
  });

  return (
    <div style={{ width: "100%" }}>
      <animated.div className={classes.springDiv} style={props}>
        <div className={classes.block}></div>
      </animated.div>
    </div>
  );
}

export default MyComponent;
