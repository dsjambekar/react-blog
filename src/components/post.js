import React, { useState } from 'react';
import Sidebar from 'react-sidebar';

const Posts = () => {
	const [sidebarOpen, setsidebarOpen] = useState(true);

	return (
		<div>
			<Sidebar
				sidebar={<b>Sidebar content</b>}
				open={sidebarOpen}
				onSetOpen={setsidebarOpen}
				styles={{ root: { width: "300px" }, sidebar: { background: "white" } }}
			>
				<button onClick={() => setsidebarOpen(true)}>
					Open sidebar
        			</button>
			</Sidebar>
			<p>Welcome to Posts List Component!!</p>
		</div>
	)
}

export default Posts;