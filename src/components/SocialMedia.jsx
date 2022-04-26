import React from "react";
import { BsGithub, BsInstagram } from "react-icons/bs";

const SocialMedia = () => (
	<div className='app__social'>
		<a href='https://github.com/vadimbelinovich' target='_blank' rel='noreferrer'>
			<BsGithub />
		</a>
		<a href='https://www.instagram.com/vadim.belinovich/' target='_blank' rel='noreferrer'>
			<BsInstagram />
		</a>
	</div>
);

export default SocialMedia;
