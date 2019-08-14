import { useState, useEffect } from "react";
import PropertyData from "../PropertyData";

// Welcome to creating custom react hooks! I would love to speak further about this with you guys! 

const useProperties = () => {
    // useState is from react hooks, it is in replacement of this.state but for functional components
    const [properties, setProperty] = useState({});
    // useEffect is also from react hooks, it is in replacement of lifecycle hooks but for functional components
    useEffect(() => {
        // Here, we would normally make those API calls when first initializing the custom hooks, there are other ways too
        // Why I decided to do it this way is because this is just a small pet coding assessment
        // Ideally I would use other types of hooks like useContext and useReducers
        setProperty(PropertyData);
    }, []);
    
    // So this was in the property.js file
    // function getResidentNames(people_list, unit_id) {
    //     for (let person of people_list) {
    //         let resident_names = [];
    //         if (person["unit"] === unit_id) {
    //             resident_names.push(person["first_name"] + person["last_name"])
    //         }
    //     }
    //     return resident_names
    // }
    // I have decided to break these into 3 different functions. One to handle searching by unit and one to handle searching by people's name

    // When searching by unit, it should return a list of people living in the unit
    const searchByUnit = (unitNum) => {        
        const { people } = PropertyData;        
        const peoples = people.filter(({ unit }) => unitNum === unit);
        peoples.length ? setProperty({ ...properties, people: peoples }) : setProperty(PropertyData)
    };
    // When searching by name, it should return the person's information
    const searchByName = (searchedName) => {
        const { people } = PropertyData;
        const peoples = people.filter(({ first_name, last_name }) => {
           const name = `${first_name} ${last_name}`;
           console.log(name.toLowerCase().includes(searchedName.toLowerCase()));           
           return name.toLowerCase().includes(searchedName.toLowerCase());
        });        
        peoples.length ? setProperty({ ...properties, people: peoples }) : setProperty(PropertyData);
    };
    const search = (value) => {        
        isNaN(value) ? searchByName(value): searchByUnit(value);
    }
    // When using this custom react hooks, you could return whatever you like publicly to functional components
    // In this case, I am exposing just the search function and property data
    return {
        properties,
        search
    }
};

export default useProperties;
