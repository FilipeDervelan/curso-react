const Photo = require('../models/Photo');
const User = require('../models/User');

const mongoose = require('mongoose');

// Insert a photo, with an user related to it
const insertPhoto = async (req, res) => {
	const { title } = req.body;
	const image = req.file.filename;

	const reqUser = req.user;

	const user = await User.findById(reqUser._id);

	// Create a photo
	const newPhoto = await Photo.create({
		image,
		title,
		userId: user._id,
		userName: user.name,
	});

	// If user was created succesfully, return data
	if (!newPhoto) {
		res
			.status(422)
			.json({ errors: ['Occuried an error, please try again later'] });
	}

	res.status(200).json(newPhoto);

	res.send('Photo inserted');
};

const deletePhoto = async (req, res) => {
	const { id } = req.params;
	const reqUser = req.user;

	try {
		const photo = await Photo.findById(mongoose.Types.ObjectId(id));

		// Check if photo exists
		if (!photo) {
			res.status(404).json({ errors: ['Photo not found'] });
			return;
		}

		// Check if photo belongs to user
		if (!photo.userId.equals(reqUser._id)) {
			res
				.status(422)
				.json({ errors: ['Ocurried an error, please try again later'] });
		}

		await Photo.findByIdAndDelete(photo._id);

		res.status(200).json({ id: photo._id, message: 'Photo deleted' });
	} catch (error) {
		res.status(404).json({ errors: ['Photo not found'] });
		return;
	}
};

const getAllPhotos = async (req, res) => {
	const photos = await Photo.find({})
		.sort([['createdAt', -1]])
		.exec();

	return res.status(200).json(photos);
};

const getUserPhotos = async (req, res) => {
	const { id } = req.params;
	const photos = await Photo.find({ userId: id })
		.sort([['createdAt', -1]])
		.exec();

	return res.status(200).json(photos);
};

const getPhotoById = async (req, res) => {
	const { id } = req.params;
	const photo = await Photo.findById(mongoose.Types.ObjectId(id));

	// Check if photo exists
	if (!photo) {
		res.status(404).json({ errors: ['Photo not found'] });
	}

	res.status(200).json(photo);
};

const updatePhoto = async (req, res) => {
	const { id } = req.params;
	const { title } = req.body;

	const reqUser = req.user;

	const photo = await Photo.findById(id);

	if (!photo) {
		res.status(404).json({ errors: ['Photo not found'] });
		return;
	}

	if (!photo.userId.equals(reqUser._id)) {
		res
			.status(422)
			.json({ errors: ['Ocurried an error, please try again later'] });
		return;
	}

	if (title) {
		photo.title = title;
	}

	await photo.save();

	res.status(200).json({ photo, message: 'Photo updated' });
};

const likePhoto = async (req, res) => {
	const { id } = req.params;
	const reqUser = req.user;

	const photo = await Photo.findById(id);

	if (!photo) {
		res.status(404).json({ errors: ['Photo not found'] });
		return;
	}

	// Check if user already liked
	if (photo.likes.includes(reqUser._id)) {
		res.status(422).json({ erros: ['You already liked this photo'] });
		return;
	}

	// Put user id in likes array
	photo.likes.push(reqUser._id);

	photo.save();

	res
		.status(200)
		.json({ photoId: id, userId: reqUser._id, message: 'Photo liked' });
};

const commentPhoto = async (req, res) => {
	const { id } = req.params;
	const { comment } = req.body;

	const reqUser = req.user;

	const user = await User.findById(reqUser._id);
	const photo = await Photo.findById(id);

	if (!photo) {
		res.status(404).json({ errors: ['Photo not found'] });
		return;
	}

	// Put comment in the array comments
	const userComment = {
		comment,
		userName: user.name,
		userImage: user.profileImage,
		userId: user._id,
	};

	photo.comments.push(userComment);

	await photo.save();

	res.status(200).json({ comment: userComment, message: 'Added comment' });
};

const searchPhotos = async (req, res) => {
	const { q } = req.query;
	const photos = await Photo.find({ title: new RegExp(q, 'i') }).exec();

	res.status(200).json(photos);
};

module.exports = {
	insertPhoto,
	deletePhoto,
	getAllPhotos,
	getUserPhotos,
	getPhotoById,
	updatePhoto,
	likePhoto,
	commentPhoto,
	searchPhotos,
};
