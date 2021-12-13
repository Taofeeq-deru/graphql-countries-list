import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { LOAD_CONTINENTS } from "../GraphQL/queries";
import Countries from "./Countries";

const GetContinents = () => {
	const [continents, setContinents] = useState([]);
	const [id, setId] = useState("");
	const { error, loading, data } = useQuery(LOAD_CONTINENTS);

	useEffect(() => {
		setContinents(data?.continents);
	}, [data]);

	useEffect(() => console.log("id=", id), [id]);

	return (
		<div>
			<select onChange={(e) => setId(e.target.value)}>
				<option>Select Continent</option>
				{continents?.map((continent) => (
					<option key={continent?.code} value={continent?.code}>
						{continent?.name}
					</option>
				))}
			</select>
			{id ? <Countries id={id} /> : null}
		</div>
	);
};

export default GetContinents;
