import React, { useEffect } from 'react';

const useTitle = title => {
    useEffect(()=>{
        document.title = `${title} - Jungle Jamboree`;
    },[title])
};

export default useTitle;