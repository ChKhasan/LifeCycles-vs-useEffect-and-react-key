import React, { useEffect, useLayoutEffect, useState } from "react";

const UserFunc = (props) => {
  const [state, setState] = useState(props.name);
  useEffect(() => {
    console.log("DID MOUNT", props.name);
    return () => {
      console.log("WILL UN MOUNT", props.name);
    };
  }, []);

  useLayoutEffect(() => {
    if (state != props.name) {
      console.log("DID UPDATE", state, "->", props.name);
    }
  }, [props.name]);

  return <h1>{props.name}</h1>;
};

export default UserFunc;
