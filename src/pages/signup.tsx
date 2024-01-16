import React, { useState } from 'react';
import { FcGoogle } from '@react-icons/all-files/fc/FcGoogle';
import { ColorRing } from 'react-loader-spinner';

import { Person } from '../utils/types';

const Signup = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const [data, setData] = useState<Person>({
		name: '',
		firstname: '',
		email: '',
		password: '',
	});

	const handleChange = (e: any) => {
		const { name, value } = e.target;
		setData((prevState) => ({ ...prevState, [name]: value }));
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
		setIsLoading(true);
	};

	return (
		<main className='bg-white w-full h-screen md:h-max flex flex-col justify-center items-center'>
			<form
				onSubmit={handleSubmit}
				className='p-4 w-11/12 md:w-[400px] flex flex-col justify-center gap-y-4'>
				<div className='flex flex-col gap-2'>
					<h3 className='text-sm text-shark-950 text-normal font-normal'>
						Bienvenu(e)
					</h3>
					<h1 className='text-shark-950 font-dm text-xl font-medium'>
						Inscrivez-vous
					</h1>
				</div>
				<div className='flex flex-col gap-2'>
					<label
						htmlFor='email'
						className='text-base'>
						Email
					</label>
					<input
						type='email'
						name='email'
						id='email'
						autoComplete='on'
						placeholder='johndoe@gmail.com'
						required
						className='p-1.5 outline outline-1 outline-shark-400 rounded-md text-shark-950 focus:outline-shark-950'
						onChange={(e) => handleChange(e)}
					/>
					<p className='text-red-500 text-sm'>Field Required</p>
				</div>
				<div className='flex flex-col gap-2'>
					<label
						htmlFor='name'
						className='text-base'>
						Nom
					</label>
					<input
						type='text'
						name='name'
						id='name'
						autoComplete='on'
						placeholder='Doe'
						required
						className='p-1.5 outline outline-1 outline-shark-400 rounded-md text-shark-950 focus:outline-shark-950'
						onChange={(e) => handleChange(e)}
					/>
					<p className='text-red-500 text-sm'>Field Required</p>
				</div>
				<div className='flex flex-col gap-2'>
					<label
						htmlFor='firstname'
						className='text-base'>
						Prénom
					</label>
					<input
						type='text'
						name='firstname'
						id='firstname'
						autoComplete='on'
						placeholder='John'
						required
						className='p-1.5 outline outline-1 outline-shark-400 rounded-md text-shark-950 focus:outline-shark-950'
						onChange={(e) => handleChange(e)}
					/>
					<p className='text-red-500 text-sm'>Field Required</p>
				</div>
				<div className='flex flex-col gap-2'>
					<label
						htmlFor='password'
						className='text-base'>
						Mot de passe
					</label>
					<input
						type='password'
						name='password'
						id='password'
						autoComplete='on'
						placeholder='********'
						required
						className='p-1.5 outline outline-1 outline-shark-400 rounded-md text-shark-950 focus:outline-shark-950'
						onChange={(e) => handleChange(e)}
					/>
					<p className='text-red-500 text-sm'>Field Required</p>
				</div>
				<div className='flex flex-col gap-2'>
					<label
						htmlFor='password'
						className='text-base'>
						Confimation du mot de passe
					</label>
					<input
						type='password'
						name='confirmPassword'
						id='confirmPassword'
						autoComplete='on'
						placeholder='********'
						required
						className='p-1.5 outline outline-1 outline-shark-400 rounded-md text-shark-950 focus:outline-shark-950'
					/>
					<p className='text-red-500 text-sm'>Field Required</p>
				</div>
				<div className='flex flex-col justify-center items-center gap-2.5'>
					<button
						type='submit'
						disabled={isLoading ? true : false}
						className={
							isLoading
								? 'flex justify-center items-center w-full py-2 text-center text-white text-base font-medium bg-blue-100 rounded-lg'
								: 'w-full py-2 text-center text-white text-base font-medium bg-blue-500 rounded-lg hover:bg-blue-700'
						}>
						{isLoading ? (
							<ColorRing
								visible={true}
								height='24'
								width='24'
								ariaLabel='color-ring-loading'
								wrapperStyle={{}}
								wrapperClass='color-ring-wrapper'
								colors={['#1d4ed8', '#1d4ed8', '#1d4ed8', '#1d4ed8', '#1d4ed8']}
							/>
						) : (
							"S'inscrire"
						)}
					</button>
					<button
						type='button'
						className='w-full flex justify-center items-center gap-2 py-2 text-center text-shark-950 text-base font-medium rounded-lg border border-shark-500 hover:border-shark-600'>
						<FcGoogle size={24} />
						{'Continuer avec Google'}
					</button>
				</div>
			</form>
		</main>
	);
};

export default Signup;
