import { useState, useEffect } from "react";
import "./styles/todoApp.css"

export default function TodoApp() {

    const [newItem, setNewItem] = useState("");
    const [newArrayItems, setNewArrayItems] = useState(() => {
        const localData = localStorage.getItem('newArrayItems');
        return localData ? JSON.parse(localData) : []
    });
    useEffect(() => {
        localStorage.setItem('newArrayItems', JSON.stringify(newArrayItems))
    }, [newArrayItems])
    
    function addingItem(e) {
        e.preventDefault();
        if(!newItem) {
            alert("Keine Aufgabe eingegeben!");
            return;
        }

        const singularItem = {
            id: Math.floor(Math.random() * 1000),
            value: newItem
        }

        setNewArrayItems((oldArrayItems) => [singularItem, ...oldArrayItems]);
        setNewItem("");
    };

    const deletingItem = (id) => { 
        setNewArrayItems(newArrayItems.filter((todo) => todo.id !== id));
    };

    return(
        <div className="all-wrapper">
            <div className="todoapp-border"> 
                <h1 className="todo-header">To Do</h1>
                <div className="motivational-text"><span style={{fontWeight: 'bold'}}>{newArrayItems.length}</span> Aufgaben übrig.
                {newArrayItems.length === 0 ? "" : " Viel Erfolg!"}
                </div>
                <div> 
                    <form onSubmit={e => addingItem(e)}>
                        <div className="input-casing"> 
                             <input
                                className="input-field"
                                type="text"
                                placeholder="Einfügen..."
                                value={newItem}
                                onChange={e => setNewItem(e.target.value)}
                             />
                            <button className="add-button" type="submit">Einfügen</button>
                        </div>
                    </form>
                    <ul className="ul-list">
                    {newArrayItems.map((todo) =>  ( 
                    <li className="list-item" key={todo.id}>{todo.value}
                            <button className="delete-button" onClick={() => {deletingItem(todo.id)}}>X</button>
                    </li>))}
                    </ul>
                </div>
            </div>           

        </div>
    );
}