import { useState, useEffect } from 'react';

function useKeyboardControls() {
  const [keys, setKeys] = useState({
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false,
    Shift: false,
  });

  useEffect(() => {
    const handleKeyDown = (event:any) => {
      if (event.key in keys) {
        setKeys((prevKeys) => ({ ...prevKeys, [event.key]: true }));
      }
    };

    const handleKeyUp = (event:any) => {
      if (event.key in keys) {
        setKeys((prevKeys) => ({ ...prevKeys, [event.key]: false }));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [keys]);

  return keys;
}

export default useKeyboardControls;
