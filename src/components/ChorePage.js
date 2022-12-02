import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Chore from './Chore';

const ChorePage = () => {
	const [chore, setChores] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const handleLoadingTimeOut = setTimeout(() => {
			if (!chore.length) {
				setLoading(false);
			}
		}, 5000);

		// Write your GET fetch() or axios() request here

		axios.get('http://localhost:3111/chores/list').then((res) => {
			console.log(res);
			setChores(res.data);
			setLoading(false);
		});

		return () => clearTimeout(handleLoadingTimeOut);
	}, []);

	if (loading && !chore.length) {
		return <h2>Loading...</h2>;
	}

	if (!loading && !chore.length) {
		return <h2>Oops, something went wrong. Please try again later!</h2>;
	}

	return (
		<div class="container mt-5">
      <ul>
        {chore.map((chore) => (
          <Chore key={chore._id} title={chore.title} description={chore.description} name={chore.owner.name} />
        ))}
      </ul>
    </div>
	);
};

// const [chore, setChore] = useState(null);
// // const { id } = useParams()
// const url = `http://localhost:3111/chores/list/`;

// useEffect(() => {
//   axios.get(url)
//   .then(response => {
//     setChore(response.data)
//   })

// }, [url])

// if(chore){
//   return (
//     <Chore />
//   );
// }

export default ChorePage;
