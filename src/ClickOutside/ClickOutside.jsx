import React, {useEffect} from 'react';

const ClickOutside = ({refTarget, callBack, ...props}) => {

  useEffect(() => {
    function handleClickOutside(event) {
      if (refTarget.current && !refTarget.current.contains(event.target)) {
        callBack()
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [refTarget, callBack]);

  return (<></>)
};

export default ClickOutside;