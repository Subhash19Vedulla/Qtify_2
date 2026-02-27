import React from 'react';
import styles from "./FilterSection.module.css";
import BasicTabs from '../BasicTabs/BasicTabs';
import Carousel from '../Carousel/Carousel';
import Card from '../Card/Card';
import { CircularProgress } from '@mui/material';

const FilterSection = ({ type, title, value, filteredData, handleChangeIndex }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>
        <h3>{title}</h3>
      </div>

      {/* Tabs for filtering songs */}
      <BasicTabs handleChangeIndex={handleChangeIndex} />

      {/* Cards or loading spinner */}
      {filteredData.length > 0 ? (
        <div className={styles.cardsWrapper} data-testid="songs-section">
          <Carousel
            data={filteredData}
            renderCardComponent={(song) => (
              <Card
                data={song}
                type={type}
                data-testid="song-card"
              />
            )}
          />
        </div>
      ) : (
        <div className={styles.progressBar}>
          <CircularProgress data-testid="loading-spinner" />
        </div>
      )}
    </div>
  );
};

export default FilterSection;
