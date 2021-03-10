import _ from "lodash";

//Extracting unique city, country properties from an array of objects
//Returns a new array of distinct objects.

export const extractDistinctAddress = (array) => {
	const extractedProps = [];
	for (const item of array) {
		extractedProps.push({
			city: item.city,
			country: item.country,
		});
	}
	return extractedProps
		? _.uniqWith(Array.from(extractedProps).sort(), _.isEqual)
		: null;
};

// Check the value if it is greater than zero
export const isGreaterThanZero = (value) => {
	return value > 0;
};
