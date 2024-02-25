export function toCapitalize(str: string) {
	return str[0].toUpperCase() + str.slice(1);
}

export function transformWeight(weight: number) {
	return weight / 10;
}

export function transformHeight(height: number) {
	return height / 10;
}
