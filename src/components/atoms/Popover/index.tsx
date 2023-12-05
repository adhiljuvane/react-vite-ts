import React, { useState, useRef } from "react";
import styles from "./Popover.module.scss";
import useOnClickOutside from "../../../hooks/useOnClickOutside";

const Popover: React.FC<PopoverProps> = ({ trigger, content }) => {
  const [isVisible, setIsVisible] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  const handleTogglePopover = () => {
    setIsVisible((prev) => !prev);
  };

  useOnClickOutside(popoverRef, (event) => {
    if (
      popoverRef.current &&
      !popoverRef.current.contains(event.target as Node)
    ) {
      setIsVisible(false);
    }
  });

  return (
    <div className={styles.popoverContent}>
      <div className={styles.popoverTrigger} onClick={handleTogglePopover}>
        {trigger}
      </div>
      {isVisible && (
        <div ref={popoverRef} className={styles.popoverContent}>
          {content}
        </div>
      )}
    </div>
  );
};

interface PopoverProps {
  trigger: React.ReactNode;
  content: React.ReactNode;
}

export default Popover;
