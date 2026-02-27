import React, { useState } from "react";
import styles from "./Section.module.css";
import Carousel from "../Carousel/Carousel";
import Card from "../Card/Card";
import Button from "../Button/Button";

const Section = ({ type, title, data }) => {
  const [showAll, setShowAll] = useState(false);

  // Show only first 10 items unless "Show All" clicked
  const visibleData = showAll ? data : data.slice(0, 10);

  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>
        <h3>{title}</h3>
        {data.length > 10 && (
          <Button onClick={() => setShowAll(!showAll)}>
            {showAll ? "Collapse" : "Show All"}
          </Button>
        )}
      </div>

      {showAll ? (
        <div className={styles.grid}>
          {visibleData.map((item, index) => (
            <Card key={index} data={item} type={type} />
          ))}
        </div>
      ) : (
        <Carousel
          data={visibleData}
          renderCardComponent={(item) => <Card data={item} type={type} data-testid="album-card"/>}
        />
      )}
    </div>
  );
};

export default Section;
