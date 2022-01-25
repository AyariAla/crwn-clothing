import React from 'react';

import './collection-preview.styles.scss';

const CollectionPreview = ({ title,items }) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='collection-preview'>
                <div className='preview'>
                    {items
                        .filter((item, idx ) => idx < 4) //filtering items by 4
                        .map((item) => (
                                <div key={item.id}>{item.name}</div>
                            ))                        
                                /* a bunch of annonymous fcts gets re-rendered after every call for the component
                                items.map((item) => (
                                <div key={item.id}>{item.name}</div>
                            ))
                                */                       
                    }
                </div>
            </div>
    </div>
);
export default CollectionPreview;