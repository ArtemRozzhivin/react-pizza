import React from 'react';
import ContentLoader from 'react-content-loader';

function LoadingBlock() {
  return (
    <ContentLoader
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#e0e0e0"
      foregroundColor="#cfcfcf"
    >
      <circle cx="130" cy="130" r="130" />
      <rect x="0" y="279" rx="5" ry="5" width="280" height="25" />
      <rect x="0" y="314" rx="10" ry="10" width="280" height="82" />
      <rect x="0" y="414" rx="5" ry="5" width="90" height="26" />
      <rect x="132" y="404" rx="18" ry="18" width="150" height="45" />
    </ContentLoader>
  );
}

export default LoadingBlock;
