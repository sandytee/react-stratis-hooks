import React from "react";
import useProperty from "../hooks/useProperties"
import { SearchBar } from "../components/Common";
import { ItemList } from "../components/List";

// Containers are unique and different in a way where it's job is to hold data and contain the logic
const StratisContainer = () => {
    const { properties, search } = useProperty();   // This is the custom hook I wrote has all the mock data along with some functions
    if (Object.keys(properties).length) {        
        const { people, name, address: { address_1_line, city, state, zip } } = properties;
        return (
            <>
                <SearchBar handleSubmit={ search }/>
                <div>{name}</div>
                <div>{address_1_line} {city} {state} {zip}</div>
                { people.map(({ first_name, last_name, roles, unit}, index) => {                    
                    return <ItemList key={`people-item-${index}`}>
                        <div>{first_name} {last_name}</div>
                        <div>{roles.map(role => <>{role}</>)}</div>
                        <div>{unit}</div>
                    </ItemList>
                }) }
            </>
        )
    } return <></>
}

export default StratisContainer; 
