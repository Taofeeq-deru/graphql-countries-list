import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { LOAD_COUNTRIES } from "../GraphQL/queries";

const Countries = ({ id }) => {
	const [countries, setCountries] = useState([]);
	const { error, loading, data } = useQuery(LOAD_COUNTRIES, {
		variables: { ID: id },
	});

	useEffect(() => {
		setCountries(data?.continent?.countries);
	}, [data]);

	useEffect(() => console.log("Error=", error), [error]);

	return (
		<div>
			{loading
				? "loading countries"
				: countries?.map((item) => <p>{item?.name}</p>)}
		</div>
	);
};

export default Countries;
