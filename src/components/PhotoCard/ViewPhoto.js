import { useState } from "react";
import "./ViewPhoto.scss";
import { privateFetch } from "../../utils/fetch";
import { toast } from "react-toastify";

function ViewPhoto({ modal, post }) {
	return (
		<div className="ViewPhoto">
			<div className="ViewPhoto__image">
				<img src={post.image} alt="You selected this" />
			</div>
			<div className="ViewPhoto__actions">
				<div className="ViewPhoto__actions--header">
					<div className="ViewPhoto__actions--profile-picture">
						<img
							src={
								post.user.profilePicture ||
								"images/profile_picture/male_img.png"
							}
							alt=""
						/>
					</div>
					<div className="ViewPhoto__actions--username">
						<a href={`/profile/${post.user._id}`}>
							{post.user.username}
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ViewPhoto;
