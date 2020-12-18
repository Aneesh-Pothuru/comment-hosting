import React from 'react';
import './IdInput.css';

const IdInput = ({ storeKey, onKeyChange, onInputChange, onButtonSubmit }) => {
    return (
        <div>
            <div className='center'>
                {
                    storeKey ?
                        <div>
                            <label>
                                API Key has been saved, refresh page to change key.
                            </label>
                        </div>
                        :
                        <div>
                            <label for="apiKey">API Key  </label>
                            {<input type='text' name='apiKey' onChange={onKeyChange} />}
                        </div>
                }
                <div>
                    <label for="videoId">Video ID  </label>
                    <input type='text' name='videoId' onChange={onInputChange} />
                </div>
                <button
                    type='submit'
                    onClick={onButtonSubmit}
                >Steal Data</button>
            </div>
        </div>
    );
}

export default IdInput;