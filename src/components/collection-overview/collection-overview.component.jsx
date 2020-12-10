import React, { useContext } from "react";

import CollectionsContext from "../../contexts/collections/collections.context.js";

import CollectionPreview from "../collection-preview/collection-preview.component";

const CollectionOverview = () => {
  const collectionsMap = useContext(CollectionsContext);
  const collections = Object.keys(collectionsMap).map(
    (key) => collectionsMap[key]
  );

  return (
    <div className="collection-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default CollectionOverview;
