function saveToLocal(key, param) {
	try {
		localStorage.setItem(key, JSON.stringify(param));
		console.log(`Saved '${param}' to local storage with key '${key}'`);
	} catch (error) {
		console.error(`Error saving to local storage: ${error}`);
	}
}

function getFromLocal(key, defaultValueIfNotFound = null) {
	try {
		const storedValue = localStorage.getItem(key);
		if (storedValue === null) {
			return defaultValueIfNotFound;
		}
		return JSON.parse(storedValue);
	} catch (error) {
		console.error(`Error retrieving from local storage: ${error}`);
		return defaultValueIfNotFound;
	}
}
