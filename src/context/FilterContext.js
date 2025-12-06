"use client";
import React, { createContext, useContext, useState, useCallback } from 'react';

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    city: '',
    startDate: null,
    endDate: null,
    adults: 1,
    children: 0,
    rooms: 1,
    petFriendly: false,
    priceRange: [100000, 500000],
    types: [],
    services: [],
    sortBy: 'Precio de Menor a Mayor',
  });

  const updateFilter = useCallback((key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  }, []);

  const updateMultipleFilters = useCallback((updates) => {
    setFilters(prev => ({
      ...prev,
      ...updates
    }));
  }, []);

  const resetFilters = useCallback(() => {
    setFilters({
      city: '',
      startDate: null,
      endDate: null,
      adults: 1,
      children: 0,
      rooms: 1,
      petFriendly: false,
      priceRange: [100000, 500000],
      types: [],
      services: [],
      sortBy: 'Precio de Menor a Mayor',
    });
  }, []);

  const value = {
    filters,
    updateFilter,
    updateMultipleFilters,
    resetFilters
  };

  return (
    <FilterContext.Provider value={value}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilters = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error('useFilters must be used within a FilterProvider');
  }
  return context;
};
