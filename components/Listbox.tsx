import React from 'react';

const Listbox = (props: { clicked: (arg0: any) => void; items: any[]; }) => {

    const clicked = (e: { preventDefault: () => void; target: { id: any; }; }) => {
        e.preventDefault();
        props.clicked(e.target.id);
    }    

    return (
        <div className="col-sm-6 px-0">
            <div className="list-group">
                {
                    props.items.map((item: { track: { id: string | undefined; name: React.ReactNode; }; }, idx: string | number | null | undefined) => 
                    <button key={idx}
                        onClick={clicked}
                        className="list-group-item list-group-item-action list-group-item-light"
                        id={item.track.id}>
                            
                            {item.track.name}
                    </button>)
                }
            </div>
        </div>
        

    );
}

export default Listbox;