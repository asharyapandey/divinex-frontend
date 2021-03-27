import "./ShowPhoto.scss";

const ShowPhoto = ({ post }) => {
	console.log(post);
	return (
		<div className="ShowPhoto">
			<div className="ShowPhoto__image">
				<img src={post.image} alt={post.caption} />
			</div>
			<div className="ShowPhoto__creator">
				<img src={post.user.profilePicture} alt="profile" />
				<p className="ShowPhoto__creator--username">
					{post.user.username}
				</p>
				<p className="ShowPhoto__creator--caption">{post.caption}</p>
			</div>
		</div>
	);
};

export default ShowPhoto;
