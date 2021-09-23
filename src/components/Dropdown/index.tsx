import React, { useState } from 'react';
import { ListItem, SearchForm, SelectedList } from '..';
import { list } from '../../mock';
import styles from './style.module.css';

const Dropdown: React.FC = () => {
   const [listLanguages, setListLanguages] = useState<
      {
         name: string;
         image: string;
         isChecked: boolean;
      }[]
   >(list);
   const [isOpen, setOpen] = useState<boolean>(false);
   const [searchValue, setSearchValue] = useState<string>('');

   const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      const text = e.target.value;

      setSearchValue(text);
   };

   const handleClose = (itemName: string) => {
      const index = listLanguages.findIndex(({ name }) => name === itemName);
      const modify = [
         ...listLanguages.slice(0, index),
         { ...listLanguages[index], isChecked: false },
         ...listLanguages.slice(index + 1),
      ];
      setListLanguages(modify);
   };

   const changeVisibleItems = () => {
      const regex = new RegExp(searchValue, 'i');
      return listLanguages.filter(({ name }) => regex.test(name));
   };

   const noSelectedItems = listLanguages.every(
      ({ isChecked }) => isChecked === false
   );

   const visible = !searchValue ? listLanguages : changeVisibleItems();

   return (
      <div className={styles.app}>
         <div className={styles.container}>
            <p className={styles.title}>Язык</p>
            <div className={styles.search}>
               {noSelectedItems ? (
                  <span className={styles.searchPlaceholder}>
                     Выберите язык из списка
                  </span>
               ) : (
                  <SelectedList
                     items={listLanguages}
                     onCloseItems={handleClose}
                  />
               )}
               <img
                  className={`${styles.arrowImg} ${
                     isOpen ? styles.active : ''
                  }`}
                  src="/icons/arrow-select.svg"
                  alt="select-icon"
                  onClick={() => setOpen(!isOpen)}
               />
            </div>
            {isOpen && (
               <div className={styles.dropdown}>
                  <SearchForm setValue={handleSearch} />
                  <ul className={styles.list}>
                     {visible.map(({ name, image, isChecked }, id) => {
                        return (
                           <ListItem
                              key={id}
                              itemName={name}
                              itemImage={image}
                              itemCheck={isChecked}
                              onSelect={(isChecked) => {
                                 const indexOfItem = listLanguages.findIndex(
                                    (item) => item.name === name
                                 );
                                 const modify = [
                                    ...listLanguages.slice(0, indexOfItem),
                                    { name, image, isChecked },
                                    ...listLanguages.slice(indexOfItem + 1),
                                 ];
                                 setListLanguages(modify);
                              }}
                           />
                        );
                     })}
                  </ul>
               </div>
            )}
         </div>
      </div>
   );
};

export { Dropdown };
