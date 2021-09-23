import React from 'react';
import styles from './style.module.css';

interface ListItemProps {
   itemName: string;
   itemImage: string;
   itemCheck: boolean;
   onSelect: (data: boolean) => void;
}

const ListItem: React.FC<ListItemProps> = ({
   itemName,
   itemImage,
   itemCheck,
   onSelect,
}) => {
   return (
      <li className={styles.item}>
         <div className={styles.itemName}>
            <img src={`/flags/${itemImage}.svg`} alt={`${itemImage}-icon`} />
            <span>{itemName}</span>
         </div>
         <div
            className={`${styles.checkbox} ${itemCheck && styles.selected}`}
            onClick={() => onSelect(!itemCheck)}
         >
            {itemCheck && (
               <img src="/icons/arrow-check.svg" alt="arrow-check-icon" />
            )}
         </div>
      </li>
   );
};

export { ListItem };
