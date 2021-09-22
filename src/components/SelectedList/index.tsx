import React from 'react';
import { SelectedItem } from '../';
import styles from './style.module.css';

interface SelectedListProps {
   items: {
      name: string;
      image: string;
      isChecked: boolean;
   }[];
   onCloseItems: (name: string) => void;
}

const SelectedList: React.FC<SelectedListProps> = ({ items, onCloseItems }) => {
   return (
      <div className={styles.selectedList}>
         {items.map(({ name, isChecked }, id) => {
            if (isChecked) {
               return (
                  <SelectedItem
                     selectedName={name}
                     key={id}
                     onClose={onCloseItems}
                  />
               );
            }

            return null;
         })}
      </div>
   );
};

export { SelectedList };
