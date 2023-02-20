import React from "react";
import { useSpring, animated } from "react-spring";

export default function AnimatedNumber(props) {
  const n = props.number || 100;
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { duration: 3700, mass: 1, tension: 30, friction: 10 },
  });

  return <animated.span>{number.to((n) => n.toFixed(0))}</animated.span>;
}
