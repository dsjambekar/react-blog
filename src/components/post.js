import React, { useState, useEffect } from 'react';

import axios from 'axios';

const Posts = () => {
	//const [sidebarOpen, setsidebarOpen] = useState(true);
	const [postList, setPostList] = useState();

	useEffect(() => {
		axios.get(process.env.API_URL + '/posts')
			.then(res => {
				setPostList(res.data);
			});
	}, []);


	return (
		postList ? (
			<div>
				{/* <Sidebar
				sidebar={<b>Sidebar content</b>}
				open={sidebarOpen}
				onSetOpen={setsidebarOpen}
				styles={{ root: { width: "300px" }, sidebar: { background: "white" } }}
			>
				<button onClick={() => setsidebarOpen(true)}>
					Open sidebar
        			</button>
			</Sidebar> */}
				<p>Welcome to Posts List Component!!</p>
				<table class="table .table-bordered .table-hover">
					<caption>List of users</caption>
					<thead>
						<tr>
							<th scope="col"></th>
							<th scope="col">Title</th>
							<th scope="col">Author</th>
							<th scope="col">Category</th>
							<th scope="col">Date</th>

						</tr>
					</thead>
					<tbody>

						{postList.map(post =>
							(
								<tr>
									<th scope="row"> <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" /></th>
									<td>{post.title}</td>
									<td>{post.created_by}</td>
									<td>{post.category}</td>
									<td>{post.created_at}</td>
								</tr>
							))}
					</tbody>
				</table>

			</div>) : (
				<div>Loading...</div>


			)
	)
}

export default Posts;