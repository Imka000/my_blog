import React, {useState} from 'react';
import WarningBanner from "./WarningBanner";

const WarningPage = () => {
    const [showWarning, setShowWarning] = useState(true)

    const handleToggleClick = () => {
        setShowWarning(prevState => !prevState);
    }

    return (
        <div>
            <WarningBanner warn={showWarning} />
            <button onClick={handleToggleClick}>
                {showWarning ? 'Hide' : 'Show'}
            </button>
        </div>
    );
};

export default WarningPage;