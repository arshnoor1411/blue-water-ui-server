import React from 'react';
import styles from '../styles/Home.module.css';

const fields: string[] = [
    "αβReturn", "αβScore", "αReturn", "βReturn", "βScore", "sReturn", "sScore",
    "Size exposure", "Size exposure (av.)", "Value exposure", "Value exposure (av.)",
    "Assets", "Market cap (w.av.)", "Max. sector exposure", "Max. av. sector exposure",
    "Consumer Discretionary αReturn", "Consumer Discretionary αScore",
    "Consumer Staples αReturn", "Consumer Staples αScore", "Energy αReturn", "Energy αScore",
    "Financials αReturn", "Financials αScore", "Health Care αReturn", "Health Care αScore",
    "Industrials αReturn", "Industrials αScore", "Materials αReturn", "Materials αScore",
    "Miscellaneous αReturn", "Miscellaneous αScore", "Real Estate αReturn", "Real Estate αScore",
    "Technology αReturn", "Technology αScore", "Utilities αReturn", "Utilities αScore"
];

const CheckboxGroup: React.FC = () => {
    return (
        <div className={styles.checkboxGroup}>
            <div className={styles.fieldsToUse}>Fields to use:</div>
            {fields.map(field => (
                <label key={field} className={styles.checkboxLabel}>
                    <input type="checkbox" className={styles.checkbox} /> {field}
                </label>
            ))}
        </div>
    );
};

export default CheckboxGroup;
