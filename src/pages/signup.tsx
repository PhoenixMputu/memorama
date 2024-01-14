import React from 'react';
import { FcGoogle } from "@react-icons/all-files/fc/FcGoogle";

const Signup = () => {
	return (
		<main className='bg-white w-full h-screen md:h-max flex flex-col justify-center items-center'>
			<form className='p-4 w-11/12 md:w-[400px] flex flex-col justify-center gap-y-4'>
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
						className='p-1.5 outline outline-1 outline-shark-400 rounded-md text-shark-950 focus:outline-shark-950'
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
						className='p-1.5 outline outline-1 outline-shark-400 rounded-md text-shark-950 focus:outline-shark-950'
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
						className='p-1.5 outline outline-1 outline-shark-400 rounded-md text-shark-950 focus:outline-shark-950'
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
						className='p-1.5 outline outline-1 outline-shark-400 rounded-md text-shark-950 focus:outline-shark-950'
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
						name='password'
						id='confirmPassword'
						autoComplete='on'
						placeholder='********'
						className='p-1.5 outline outline-1 outline-shark-400 rounded-md text-shark-950 focus:outline-shark-950'
					/>
                    <p className='text-red-500 text-sm'>Field Required</p>
				</div>
				<div className='flex flex-col justify-center items-center gap-2.5'>
					<button
						type='submit'
						className='w-full py-2 text-center text-white text-base font-medium bg-blue-500 rounded-lg hover:bg-blue-700'>
						{"S'inscrire"}
					</button>
                    <button
						type='button'
						className='w-full flex justify-center items-center gap-2 py-2 text-center text-shark-950 text-base font-medium rounded-lg border border-shark-500 hover:border-shark-600'>
						<FcGoogle size={24}/>{'Continuer avec Google'}
					</button>
				</div>
			</form>
		</main>
	);
};

export default Signup;
