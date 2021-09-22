import React from 'react';
import styles from './style.module.css';

interface SearchFormProps {
   setValue: (data: any) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ setValue }) => {
   return (
      <div className={styles.dropdownSearchWrapper}>
         <form className={styles.dropdownSearch}>
            <img src="/icons/search.svg" alt="search-icon" />
            <input
               placeholder="Поиск"
               type="text"
               className={styles.dropdownInput}
               onChange={setValue}
            />
         </form>
      </div>
   );
};

export { SearchForm };
