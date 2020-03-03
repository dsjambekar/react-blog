import React, { useState } from 'react';
import '../styles/create.css';


const EditPostDetails = (props) => {

	const [createdBy, setCreatedBy] = useState(props.createdBy);
	const [createdAt, setCreatedAt] = useState(props.createdAt);
	const [category, setCategory] = useState('personal');
	const [isPublic, setIsPublic] = useState(false);
	const [isPublished, setIsPublished] = useState(false);

	return (

		<div style={{ marginTop: 10 }}>
			<form>
				<div className="form-group">
					<label className="mainLabel">Created By: </label>
					<input className="form-control" value={createdBy} readonly />
				</div>
				<div className="form-group">
					<label className="mainLabel">Created At: </label>
					<input className="form-control" value={createdAt} readonly />
				</div>
				<div className="form-group">
					<label className="mainLabel">Category: </label>
					<div className="form-check">
						<input className="form-check-input"
							type="radio"
							name="categoryOptions"
							id="categoryPersonal"
							value="Personal"

						/>
						<label className="form-check-label">Personal</label>
					</div>
					<div className="form-check">
						<input className="form-check-input"
							type="radio"
							name="categoryOptions"
							id="categoryMovies"
							value="Movies"

						/>
						<label className="form-check-label">Movies</label>
					</div>
					<div className="form-check">
						<input className="form-check-input"
							type="radio"
							name="categoryOptions"
							id="categoryFood"
							value="Food"

						/>
						<label className="form-check-label">Food</label>
					</div>
					<div className="form-check">
						<input className="form-check-input"
							type="radio"
							name="categoryOptions"
							id="categoryTechnical"
							value="Technical"

						/>
						<label className="form-check-label">Technical</label>
					</div>
				</div>

				<div className="form-group">
					<div className="checkbox">
						<label className="form-check-label">
							<input
								type="checkbox"
								value={isPublic}
								onChange={() => { setIsPublic(!isPublic) }} />
							Is Public
								</label>
					</div>

				</div>

				<div className="form-group">
					<input type="button" value="Publish" className="btn btn-primary" onClick={() => props.onPublishClicked(category, isPublic)} />
				</div>
			</form>
		</div>

	);

}

export default EditPostDetails;