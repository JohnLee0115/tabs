import React, { useState } from 'react'
import './tabs.css'




const Tabs = (props) => {
    const [tabShown, setTabShown] = useState()
    const [tabs, setTabs] = useState([
        {
            title : "Tab 1",
            content : "Tab 1 content is showing here.",
        },
        {
            title : "Tab 2",
            content : "Tab 2 content is showing here.",
        },
        {
            title : "Tab 3",
            content : "Tab 3 content is showing here.",
        }
    ]);
    

    return (
        <div>
            { tabs.map( (tab, i) => 
                <>
                    <button onClick= { (e) => setTabShown(i) } key={ i } className='tablinks'>{ tab.title }</button>
                    {tabShown == i? <p>{tab.content}</p> : <p></p>}
                </>
            ) }
        </div>
        
    )
}

export default Tabs