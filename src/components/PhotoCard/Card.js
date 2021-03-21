import "./Card.scss";

const Card = () => {
	return (
		<div className="card">
			<div className="card__header">
				<div className="card__header--profile-picture">
					<img src="images/user.jpg" alt="" />
				</div>
				<div className="card__header--username">
					<a href="#">asharyapandey</a>
				</div>
				<div className="card__header--hamburger icon-comp">
					<img src="images/more.png" alt="" />
				</div>
			</div>
			<div className="card__image">
				<img src="images/mock_img.jpg" alt="" />
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
