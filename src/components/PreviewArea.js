import React from 'react';
import { useSelector } from 'react-redux';
import CatSprite from './CatSprite';

const PreviewArea = () => {
  const catState = useSelector((state) => state.catDetails);

  return (
    <div className="h-full">
      <div className="p-4 bg-gray-200 text-center">
        <p className="font-bold">Preview Area: See the Cat here</p>
      </div>
      <div className="flex-none h-full overflow-y-auto p-2">
        <CatSprite {...catState} />
      </div>
    </div>
  );
};

export default PreviewArea;
