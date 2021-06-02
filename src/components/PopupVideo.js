import React, {useState} from 'react';
import FsLightbox from 'fslightbox-react';

function PopupVideo() {
    // if toggler is updated when lightbox is closed it will open it
    // if toggler is updated when lightbox is opened it will close it
    const [toggler, setToggler] = useState(false);
    
    return (
    <>
        <button onClick={() => setToggler(!toggler)}>
        <i className="fa fa-play" />
        </button>
        <FsLightbox
            toggler={toggler}
            sources={[
            'https://www.youtube.com/watch?v=qm70dYZgIew',
            
            ]}
        />
    </>
    );
    }
    
    export default PopupVideo;