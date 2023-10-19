import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

//const API = 'https://restcountries.com/v3.1/independent?status=true&fields=name,flags'

export const getCountries = createAsyncThunk(
  'countries/getCountries',
  async () => {
    const { data } = await axios.get(`https://restcountries.com/v3.1/independent?status=true&fields=name,flags`)
    return data;
  }
)

export const getLanguages = createAsyncThunk(
  'countries/getLanguages',
  async () => {
    try {
      const response = await axios.get('https://restcountries.com/v3.1/independent?status=true&fields=languages,flags');
      const countries = response.data;

      const uniqueLanguages = Array.from(
        new Set(
          countries.reduce((languages, country) => {
            const countryLanguages = Object.values(country.languages);
            return [...languages, ...countryLanguages];
          }, [])
        )
      );

      return uniqueLanguages;
    } catch (error) {
      throw error;
    }
  }
);

const countriesSlice = createSlice({
  name: 'countries',
  initialState: {
    countries: [],
    languages: [],
    countryStatus: ''
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getCountries.fulfilled, (state, action) => {
      state.countries = action.payload;
    })
    .addCase(getCountries.rejected, (state) => {
      state.countryStatus = 'error'
    })
    .addCase(getLanguages.fulfilled, (state, action) => {
      state.languages = action.payload;
    })
    .addCase(getLanguages.rejected, (state) => {
      state.countryStatus = 'error'
    })
  }
})

export default countriesSlice.reducer