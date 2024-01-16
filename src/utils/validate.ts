import { Person } from './types';

export function isEmailValid(email: string): boolean {
	const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
}

export function isPasswordValid(password: string): boolean {
	if (password.length < 8) {
		return false;
	}

	if (!/[A-Z]/.test(password)) {
		return false;
	}

	if (!/[@#$%^&*!]/.test(password)) {
		return false;
	}

	if (!/\d/.test(password)) {
		return false;
	}

	return true;
}

export function isNameValid(name: string): boolean {
	if (name.length < 3) return false;

	const spaceCount = name.split(' ').length - 1;
	if (spaceCount > 1) return false;

	// eslint-disable-next-line no-useless-escape
	const specialCharactersRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/]/;
	if (specialCharactersRegex.test(name)) return false;

	const digitRegex = /\d/;
	if (digitRegex.test(name)) return false;

	const allowHyphens = true;
	if (allowHyphens) {
		const hyphenRegex = /-+/;
		if (hyphenRegex.test(name)) {
			return false;
		}
	}

	return true;
}

export const areAllErrorsEmpty = (stateError: Person): boolean => {
	const errorValues = Object.values(stateError);
	return errorValues.every(
		(value) => typeof value === 'string' && value === ''
	);
};
