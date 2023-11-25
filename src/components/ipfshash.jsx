// ipfshash.jsx

import React from 'react';

const IPFSHash = ({ uploadedImageCID, uploadedTTDimage, uploadedsyarat }) => {
  return (
    <div>
      <h2>IPFS Hash</h2>

      {uploadedImageCID && (
        <div>
          <h3>Image CID: {uploadedImageCID}</h3>
        </div>
      )}

      {uploadedTTDimage && (
        <div>
          <h3>TTD Image CID: {uploadedTTDimage}</h3>
        </div>
      )}

      {uploadedsyarat && (
        <div>
          <h3>Syarat Zip CID: {uploadedsyarat}</h3>
        </div>
      )}
    </div>
  );
};

export default IPFSHash;
