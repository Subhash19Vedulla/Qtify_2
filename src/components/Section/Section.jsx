import React, { useState } from "react";
import styles from "./Section.module.css";
import Carousel from "../Carousel/Carousel";
import Card from "../Card/Card";
import Button from "../Button/Button";

const Section = ({ type, title, data }) => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>
        <h3>{title}</h3>
        {data.length > 0 && (
          <Button onClick={() => setShowAll(!showAll)}>
            {showAll ? "Collapse" : "Show All"}
          </Button>
        )}
      </div>

      {showAll ? (
        <div className={styles.grid}>
          {data.map((item, index) => (
            <Card key={index} data={item} type={type} />
          ))}
        </div>
      ) : (
        <Carousel
          data={data}
          renderCardComponent={(item) => <Card data={item} type={type} />}
        />
      )}
    </div>
  );
};

export default Section;
