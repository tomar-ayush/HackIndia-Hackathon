import React from 'react'
import { useForm } from 'react-hook-form';


export default function NewDoc() {
  const { register, handleSubmit, errors } = useForm();

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="mb-4">
				<label className="block text-gray-700 font-medium mb-2" htmlFor="name">
					Name
				</label>
				<input
					className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500"
					id="name"
					type="text"
					name="name"
					placeholder="John Doe"
					ref={register({ required: true })}
				/>
				{errors.name && <p className="text-red-500 text-xs italic">Name is required</p>}
			</div>
			<div className="mb-4">
				<label className="block text-gray-700 font-medium mb-2" htmlFor="email">
					Email
				</label>
				<input
					className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500"
					id="email"
					type="email"
					name="email"
					placeholder="johndoe@example.com"
					ref={register({ required: true })}
				/>
				{errors.email && <p className="text-red-500 text-xs italic">Email is required</p>}
			</div>
			<button
				className="bg-indigo-500 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
				type="submit"
			>
				Submit
			</button>
		</form>
	);
}
