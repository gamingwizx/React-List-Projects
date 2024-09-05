import { useState, useEffect, useReducer, createContext, useContext, useCallback } from "react";

const initialState = {
  cities: [],
  currentCity: {},
  isLoading: true,
};
const CitiesContext = createContext();
const BASE_URL = "http://localhost:8000";

const reducer = (state, action) => {
  switch (action.type) {
    case "cities/load":
      return { ...state, cities: action.payload };
    case "cities/create":
      return {...state, cities: [...state.cities, action.payload]}
    case "cities/delete":
      const citiesList = state.cities.filter(city => city.id !== action.payload)
      return {...state, cities: citiesList}
    case "cities/loaded":
    return {...state, currentCity: action.payload, isLoading: false}
    case "cities/loading":
      return {...state, isLoading: true}
    case "cities/update":
      const updatedCity = action.payload
      console.log(updatedCity)
      const updatedCitiesList = state.cities.map(city => city.id === updatedCity.id ? updatedCity : city)
      return {...state, cities: updatedCitiesList}
  }
};

function CitiesProvider({children}) {
  const [{ cities, currentCity, isLoading }, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    async function fetchCities() {
      fetch(`${BASE_URL}/cities`)
        .then((result) => {
          if (!result.ok)
            throw new Error("Something went wrong when fetching API");
          return result.json();
        })
        .then((result) => {
          dispatch({ type: "cities/load", payload: result });
        });
    }
    fetchCities();
  }, []);

  async function createCity(city) {
    const fetchOptions = {
      method: "POST",
      body: JSON.stringify(city),
      headers: {
        "Content-Type": "application/json",
      }
    }
    const URL = `${BASE_URL}/cities`;
      const res = await fetch(URL, fetchOptions);
      if (!res.ok) {
        throw new Error("Something went wrong when creating new city");
      }
  
      const data = await res.json()
    if (!data) throw new Error("There is no data??")
    dispatch({type: "cities/create", payload: data})
  }

  async function deleteCity(id) {
    const URL = `${BASE_URL}/cities/${id}`
    const FETCH_OPTION = {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    }
    const res = await fetch(URL, FETCH_OPTION)
    if (!res.ok) throw new Error("Something went wrong when deleting data");
    dispatch({ type: "cities/delete", payload: id})
  }

  const getCity = useCallback(async function getCity(id) {
    try {
      dispatch({type: "cities/loading"})
    const URL = `${BASE_URL}/cities/${id}`
    const res = await fetch(URL, {method: "GET"})
    if (!res.ok) throw new Error("Something went wrong when fetching data")
    const data = await res.json()
    dispatch({ type: "cities/loaded", payload: data})
    } catch (error) {
      console.error(error)
    }
  }, [currentCity.id])

  async function updateCity(city) {
    try {
      const URL = `${BASE_URL}/cities/${city.id}`
      const res = await fetch(URL, {method: "PATCH", body: JSON.stringify(city), headers: {"Content-Type": "application/json"}})
      if (!res.ok) throw new Error("Something went wrong when update data")
      const data = await res.json()
      dispatch({ type: "cities/update", payload: data})
      
    } catch(error) {
      console.error(error)
    }
  }

  return (<CitiesContext.Provider value={{cities, createCity, deleteCity, getCity, currentCity, updateCity, isLoading}}>{children}</CitiesContext.Provider>);
}


function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined) {
    throw new Error("CitiesContext is not defined");
  }
  return context;
};

export { CitiesProvider, useCities };
