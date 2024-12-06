"use client";
import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map(
          ({
            id,
            title,
            description,
            className,
            titleClassName,
            imgClassName,
            img,
            spareImg,
          }) => (
            <BentoGridItem
              key={id}
              title={title}
              description={description}
              id={id}
              className={`${className}`}
              img={img}
              titleClassName={titleClassName}
              imgClassName={imgClassName}
              spareImg={spareImg}
            />
          )
        )}
      </BentoGrid>
    </section>
  );
};

export default Grid;
