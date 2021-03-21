import "./Card.scss";

const Card = ({ post }) => {
	return (
		<div className="card">
			<div className="card__header">
				<div className="card__header--profile-picture">
					<img
						src={
							post.user.profilePicture ||
							"images/profile_picture/male_img.png"
						}
						alt=""
					/>
				</div>
				<div className="card__header--username">
					<a href="#">{post.user.username}</a>
				</div>
				<div className="card__header--hamburger icon-comp">
					<img src="images/more.png" alt="" />
				</div>
			</div>
			<div className="card__image">
				<img src={post.image} alt="" />
			</div>

			<div className="card__footer">
				<div className="card__footer--icons icon-comp">
					<img src="images/heart.png" alt="" />
				</div>
				<div className="card__footer--comments comments">
					<p className="comments__option">view all comments</p>
					<ul>
						<li>
							<a href="" className="comments__username">
								ashrayapandey
							</a>
							<p className="comments__comment">
								wow what a nice photo
							</p>
						</li>
						<li>
							<a href="#" className="comments__username">
								ashrayapandey
							</a>
							<p className="comments__comment">
								wow what a nice photo
							</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Card;
