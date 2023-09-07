import { browser } from '$app/environment';
import { writable } from 'svelte/store';

import type { Country } from './api';

const defaultValue: Country[] = [];

const initialValue = () => {
	if (browser) {
		const initial = JSON.parse(window.localStorage.countries ?? '[]');
		return Array.isArray(initial) ? initial : defaultValue;
	} else {
		return defaultValue;
	}
};

const fetchCountries = async (): Promise<Country[]> => {
	const response = await fetch('https://restcountries.com/v3.1/all');
	const data = await response.json();
	return data;
};

const createCountry = () => {
	const { subscribe, set } = writable<Country[]>(initialValue());

	subscribe((value) => {
		if (browser) {
			if (value.length === 0) {
				fetchCountries().then((data) => set(data));
			}
			window.localStorage.setItem('countries', JSON.stringify(value));
		}
	});

	return {
		subscribe
	};
};

export const countries = createCountry();
