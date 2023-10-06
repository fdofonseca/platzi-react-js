import React from 'react';

function useLocalStorage(itemName, initialValue) {

    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);


    React.useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName);
                let parsedItem;
                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = initialValue;
                } else {
                    parsedItem = JSON.parse(localStorageItem);
                    setItem(parsedItem);
                }

                setLoading(false);
            } catch (error) {
                setLoading(false);
                setError(true);
            }
        }, 2000);
    }, []);

    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
    };

    console.log(item);

    return {
        item,
        saveItem,
        loading,
        error
    };
}

export { useLocalStorage }


//  const defaultTodos = [
//    { text: 'Cortar Manzanas', completed: true },
//    { text: 'Cortar Platanos', completed: false },
//    { text: 'Cortar Naranjas', completed: true },
//    { text: 'Cortar Naranjas 2', completed: false },
//  ]
//  localStorage.setItem('todos_list', JSON.stringify(defaultTodos));

// localStorage.removeItem('todos_list');