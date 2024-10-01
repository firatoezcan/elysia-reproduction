export const isNumber = (v: string | number | undefined | null): v is string | number => {
	const valid = (typeof v === "number" && v - v === 0) || (typeof v === "string" && Number.isFinite(+v) && v.trim() !== "");
	return valid;
};

export const parseNumber = (v: string | number) => {
	if (!isNumber(v)) {
		throw new Error("Check before parsing if the value is a number");
	}
	return typeof v === "string" ? Number.parseFloat(v) : v;
};
