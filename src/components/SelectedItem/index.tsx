import React from 'react';
import styles from './style.module.css';

interface SelectedItemProps {
   selectedName: string;
   onClose: (selectedName: string) => void;
}

const SelectedItem: React.FC<SelectedItemProps> = ({
   selectedName,
   onClose,
}) => {
   return (
      <div className={styles.selectedItem}>
         <span>{selectedName}</span>
         <img
            src="/icons/close.svg"
            alt="close-icon"
            onClick={() => onClose(selectedName)}
         />
      </div>
   );
};

export { SelectedItem };
