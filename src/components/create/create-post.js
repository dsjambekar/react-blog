import React, { useState, useCallback } from 'react';
import '../../styles/create.css';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import EditPostDetails from '../edit-post-details';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import { convertToRaw } from 'draft-js';
import Sidebar from 'react-sidebar';

import axios from 'axios';

const CreatePost = () => {
	const [sidebarOpen, setsidebarOpen] = useState(true);
	const [title, setTitle] = useState('');
	const [editorState, setEditorState] = useState(EditorState.createEmpty());
	const [editorHtmlbody, setEditorHtml] = useState('');

	const handleOnPublishClicked = useCallback((category, is_public) => {
		//e.preventDefault();
		console.log(`Form submitted:`);
		console.log(`title: ${title}`);
		console.log(`body: ${editorState.getCurrentContent()}`);
		console.log(`body: ${editorHtmlbody}`);
		console.log(`body: ${category}`);
		console.log(`body: ${is_public}`);

		const newPost = {
			title: title,
			body: editorHtmlbody,
			created_by: "Dhanashree",
			created_at: "03/02/2020 14:07 PM",
			category: category,
			is_public: is_public,
			is_published: true
		};

		axios.post('https://reactmyblogbackend.herokuapp.com/posts/create', newPost)
			.then(res => console.log(res.data));

		setTitle('');
		setEditorState(EditorState.createEmpty());
		setEditorHtml('');

	}, [editorHtmlbody, editorState, title]);

	return (
		<div style={{ marginTop: 10 }}>
			<Sidebar
				sidebar={<EditPostDetails createdBy='Dhanashree' createdAt='03/02/2020 14:07 PM' onPublishClicked={handleOnPublishClicked}></EditPostDetails>}
				open={sidebarOpen}
				onSetOpen={setsidebarOpen}
				styles={
					{
						root: {
							width: "244px",
							right: "0",
							left: "none"
						},
						sidebar: {
							right: "0px",
							width: "244px",
							left: "none ",
							transition: "none",
							WebkitTransition: "none",
						},
						content: {
							left: "none",
							width: "244px",
						},
						overlay: {
							display: "none",
						}
					}}
			>
			</Sidebar>
			<form>
				<div className="form-group">
					<input type="text"
						className="form-control titleInput"
						//value={title}
						placeholder="Add title"
						onChange={e => setTitle(e.target.value)}
					/>
				</div>

				<div className="form-group">
					<Editor
						toolbarClassName="toolbarClassName"
						wrapperClassName="wrapperClassName"
						editorClassName="editorClassName"
						editorState={editorState}
						onEditorStateChange={editorState => { setEditorState(editorState); setEditorHtml(draftToHtml(convertToRaw(editorState.getCurrentContent()))) }}
					/>
				</div>
			</form>
		</div>
	)
}

export default CreatePost;