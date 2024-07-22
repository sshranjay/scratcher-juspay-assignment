import React from 'react';
import { useSelector } from 'react-redux';
import CatSprite from './CatSprite';

const PreviewArea = () => {
  const catState = useSelector((state) => state.catDetails);

  return (
    <div className="flex-none h-full overflow-y-auto p-2">
      <CatSprite {...catState} />
    </div>
  );
};

export default PreviewArea;
