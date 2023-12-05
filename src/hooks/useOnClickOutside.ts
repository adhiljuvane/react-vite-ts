import { RefObject, useEffect } from "react";

const useOnClickOutside = (
  ref: RefObject<HTMLElement> | RefObject<HTMLElement>[],
  handler: (event: EventType) => void
) => {
  useEffect(() => {
    const listener = (event: EventType) => {
      // Do nothing if clicking ref's element or descendent elements

      // Check if the provided ref is an array, allowing for flexibility
      // in useOnClickOutside hook usage. This enables the use of either a
      // single ref or an array of ref objects to detect clicks outside
      // specific elements.
      if (Array.isArray(ref)) {
        if (ref.some((r) => r.current && r.current.contains(event.target))) {
          return;
        }
      } else {
        if (ref.current && ref.current.contains(event.target)) {
          return;
        }
      }
      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};

export default useOnClickOutside;
