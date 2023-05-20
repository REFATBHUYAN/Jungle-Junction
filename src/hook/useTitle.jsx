import React, { useEffect } from 'react';

const useTitle = title => {
    useEffect(()=>{
        document.title = `${title} - JungleJanction`;
    },[title])
};

export default useTitle;