export default function renderIf(condition, content) {
    if (condition) {
        return content;
    } else {
        return null;
    }
}

export function isValidEmail(email) {
	const regex=
/^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
	return regex.test(email);
}

export function isValidName(name) {
	const regex=/^(.*[a-z]){2}/i;
	return regex.test(name);
}

export function caps(name) {
  return name.charAt(0).toUpperCase() + name.slice(1)
}
