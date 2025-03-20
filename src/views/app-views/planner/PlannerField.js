import React, { forwardRef } from 'react';
import { Card } from 'antd';
import { Image, Layer, Stage } from 'react-konva';
import useImage from 'use-image';

const URLImage = ({ image, onDragEnd }) => {
  const [img] = useImage(image.src);

  return (
    <Image
      image={img}
      x={image.x}
      y={image.y}
      offsetX={img ? img.width / 2 : 0}
      offsetY={img ? img.height / 2 : 0}
      onDragEnd={(e) => onDragEnd(e, image)}
      draggable
    />
  );
};

const PlannerField = forwardRef(({ images, onDrop, onDragEnd }, ref) => {
  return (
    <Card
      onDrop={onDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      <div style={{ overflow: 'hidden', maxHeight: '80vh' }}>
        <Stage
          width={window.innerWidth}
          height={window.innerHeight}
          ref={ref}
        >
          <Layer>
            {images.map((image, i) => {
              return <URLImage key={i} image={image} onDragEnd={onDragEnd} />;
            })}
          </Layer>
        </Stage>
      </div>
    </Card>
  );
});

export default PlannerField;