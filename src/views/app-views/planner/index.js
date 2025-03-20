import React from 'react';
import { Col, message, Row } from 'antd';
import TableList from './TableList';
import PlannerTable from './PlannerTable';
import PlannerField from './PlannerField';

const Planner = () => {
  const [images, setImages] = React.useState([]);

  const stageRef = React.useRef();
  const dragUrl = React.useRef();

  const handleDelete = (id) => {
    setImages((images) => images.filter((i) => i.id !== id));
  }

  const handleDragStart = (e) => {
    dragUrl.current = e.target;
  }

  const handleDragEnd = (e, image) => {
    const target = e.target;

    setImages((images) => images.map((img) => {
      if (img.id === image.id) {
        return { ...image, x: target.x(), y: target.y() };
      }

      return img;
    }))
  }

  const handleDrop = (e) => {
    e.preventDefault();
    stageRef.current.setPointersPositions(e);
    setImages(
      images.concat([
        {
          id: images.length ? images.at(-1).id + 1 : 1,
          ...stageRef.current.getPointerPosition(),
          src: dragUrl.current.src,
          type: dragUrl.current.alt,
        },
      ])
    );
  }

  const handleExport = () => {
    const jsonString = JSON.stringify(images);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'planner.json';
    a.click();

    URL.revokeObjectURL(url);
  }

  const handleImport = () => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.json';

    fileInput.addEventListener('change', (event) => {
      const file = event.target.files[0];

      if (file && file.type === 'application/json') {
        const reader = new FileReader();
        const key = 'loading';

        reader.onload = (e) => {
          message.loading({ content: 'Loading...', key });
          const content = e.target.result;
          try {
            const jsonData = JSON.parse(content);
            setImages(jsonData);
            message.success({ content: 'Uploaded!', key, duration: 2 });
          } catch (error) {
            message.error({ content: error.message , key, duration: 2 });
          }
        };

        reader.onerror = () => {
          message.error({ content: 'Error reading the file' , key, duration: 2 });
        };

        reader.readAsText(file);
      }
    });

    fileInput.click();
  }

  return (
    <Row gutter={8}>
      <Col span={12}>
        <TableList onDragStart={handleDragStart} />
        <PlannerTable
          images={images}
          onDelete={handleDelete}
          onExport={handleExport}
          onImport={handleImport}
        />
      </Col>
      <Col span={12}>
        <PlannerField
          ref={stageRef}
          images={images}
          onDrop={handleDrop}
          onDragEnd={handleDragEnd}
        />
      </Col>
    </Row>
  )
}

export default Planner;