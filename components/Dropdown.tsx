import React from 'react';

const Dropdown = (props: { changed: (arg0: any) => void; label: React.ReactNode; selectedValue: string | number | readonly string[] | undefined; options: any[]; }) => {    

    const dropdownChanged = (e: { target: { value: any; }; }) => {
        props.changed(e.target.value);

    }    

    return (
        <div className="col-sm-6 form-group row px-0">     
            <label className="form-label col-sm-2">{props.label}</label>       
            <select value={props.selectedValue} onChange={dropdownChanged} className="form-control form-control-sm col-sm-10">
                <option key={0}>Select...</option>
                {props.options.map((item: { id: string | number | readonly string[] | undefined; name: React.ReactNode; }, idx: number) => <option key={idx + 1} value={item.id}>{item.name}</option>)}
            </select>            
        </div>
    );
}

export default Dropdown;