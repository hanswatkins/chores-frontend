import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Chore = (chore) => {
	const { id } = useParams();
	const url = `http://localhost:3111/chores/list/${id}`;

	const navigate = useNavigate();
	const [modal, setModal] = useState(false);

	// useEffect(() => {
	// 	axios.get(url).then((response) => {
	// 		setChore(response.data);
	// 	});
	// }, [url]);

	return (
		<div class='columns'>
			<div class='column'></div>
			<div class='column'>
				<div class='card mt-5'>
					<div class='card-content'>
						<div class='content'>
							<h1>{chore.title}</h1>
							<p>{chore.description}</p>
							<p>
								<i>{chore.name}</i>
							</p>
						</div>
					</div>
				</div>
			</div>
			<div class='column'> </div>
		</div>
	);
};

export default Chore;
