import React, { useEffect } from "react";

const FocusableContainer = props => {
  let elRef = React.createRef();
  const { isVisible, doFocus } = props;
  useEffect(() => {
    if (isVisible && doFocus) {
      setTimeout(() => {
        if (elRef.current) {
          elRef.current.focus();
        }
      }, 500);
    }
  }, [isVisible, elRef, doFocus]);
  return (
    <div className="container" tabIndex="0" ref={elRef}>
      {React.Children.map(props.children, child => {
        return React.cloneElement(child, { isVisible });
      })}
    </div>
  );
};

export default FocusableContainer;
