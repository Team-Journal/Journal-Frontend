import { useState, useEffect } from 'react';

const useTitle = (initialTitle: string) => {
    const [title, setTitle] = useState(initialTitle);

    const updateTitle = () => {
        const htmlTitle = document.querySelector('title');

        if (htmlTitle !== null) {
            htmlTitle.innerText = title;
        }
    }

    useEffect(updateTitle, [title]);

    return setTitle;
}

export default useTitle;