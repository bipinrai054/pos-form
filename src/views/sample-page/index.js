/*eslint-disable */
import { useState } from 'react';

const App = () => {
    const [selectedImage, setSelectedImage] = useState();

    // This function will be triggered when the file field change
    const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedImage(e.target.files[0]);
        }
    };

    // This function will be triggered when the "Remove This Image" button is clicked
    const removeSelectedImage = () => {
        setSelectedImage();
    };

    return (
        <>
            <div>
                <input accept="image/*" type="file" onChange={imageChange} />

                {selectedImage && (
                    <div>
                        <img src={URL.createObjectURL(selectedImage)} alt="Thumb" />
                        <button onClick={removeSelectedImage}>Remove This Image</button>
                    </div>
                )}
            </div>
        </>
    );
};

export default App;
