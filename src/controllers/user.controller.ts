import { Request, Response } from "express";
import { User } from "../entities/User";

export const getUsers = async (req: Request, res: Response) => {
	try {
		const users = await User.find();

		return res.status(200).json(users);
	} catch (error) {
		if(error instanceof Error) {
			return res.status(500).json({ message: error.message });
		}
	}
};

export const newUser = async (req: Request, res: Response) => {
	try {
		const { firstname, lastname } = req.body;

		const user = new User();
		user.first_name = firstname;
		user.last_name = lastname;

		await user.save();

		return res.status(201).json(user);
	} catch (error) {
		if(error instanceof Error) {
			return res.status(500).json({ message: error.message });
		}
	}
};

export const getUser = async (req: Request, res: Response) => {
	try {
		const user = await User.findOneBy({ id: +req.params.id });

		if(!user) {
			return res.status(404).json({ message: "User not found" });
		}

		return res.status(200).json(user);
	} catch (error) {
		if(error instanceof Error) {
			return res.status(500).json({ message: error.message });
		}
	}
};

export const updateUser = async (req: Request, res: Response) => {
	try {
		const user = await User.findOneBy({ id: +req.params.id });

		if(!user) {
			return res.status(404).json({ message: "User not found" });
		}

		const body = { first_name: req.body.firstname, last_name: req.body.lastname, active: req.body.active && req.body.active};

		const updatedUser = await User.update({ id: +req.params.id }, body);

		return res.status(200).json({message: "User updated"});
	} catch (error) {
		if(error instanceof Error) {
			return res.status(500).json({ message: error.message });
		}
	}
};


export const deleteUser = async (req: Request, res: Response) => {
	try {
		const response = await User.delete({ id: +req.params.id });

		if(response.affected === 0) {
			return res.status(404).json({ message: "User not found" });
		}

		res.status(200).json({message: "User deleted"});
	} catch (error) {
		if(error instanceof Error) {
			res.status(500).json({ message: error.message });
		}
	}
};

