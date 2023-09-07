import { browser } from '$app/environment';
import { writable } from 'svelte/store';

enum Theme {
	DARK = 'dark',
	LIGHT = 'light'
}
const defaultValue = Theme.LIGHT;
const initialValue = browser
	? window.localStorage.theme === Theme.DARK
		? Theme.DARK
		: Theme.LIGHT
	: defaultValue;

const createTheme = () => {
	const { subscribe, update } = writable<Theme>(initialValue);

	subscribe((value) => {
		if (browser) {
			window.localStorage.setItem('theme', value);
			document.documentElement.classList.toggle('dark', value === Theme.DARK);
		}
	});

	return {
		subscribe,
		toogle: () => update((theme) => (theme === Theme.DARK ? Theme.LIGHT : Theme.DARK))
	};
};

export const theme = createTheme();
