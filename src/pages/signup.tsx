import React, { useState } from 'react';
import { navigate, Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import axios from 'axios';

import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { FcGoogle } from '@react-icons/all-files/fc/FcGoogle';
import { MdPortableWifiOff } from '@react-icons/all-files/md/MdPortableWifiOff';
import { ColorRing } from 'react-loader-spinner';

import { Person } from '../utils/types';
import {
	isEmailValid,
	isNameValid,
	isPasswordValid,
} from '../utils/validate';

const Signup = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const [data, setData] = useState<Person>({
		name: '',
		firstname: '',
		email: '',
		password: '',
		confirmPassword: '',
	});

	const [errorMessage, setErrorMessage] = useState<Person>({
		name: '',
		firstname: '',
		email: '',
		password: '',
		confirmPassword: '',
	});

	const handleChange = (e: any) => {
		const { name, value } = e.target;
		setData((prevState) => ({ ...prevState, [name]: value }));
		setErrorMessage((prevState) => ({ ...prevState, [name]: '' }));
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	  
		let hasErrors = false;
	  
		if (!isEmailValid(data.email!)) {
		  setErrorMessage((prevState) => ({
			...prevState,
			email: "Veuillez inclure '@' dans votre adresse email.",
		  }));
		  hasErrors = true;
		}
	  
		if (!isNameValid(data.name!)) {
		  setErrorMessage((prevState) => ({
			...prevState,
			name: 'Le nom doit avoir au moins 3 caractères et ne doit pas contenir de caractères spéciaux ni de chiffres.',
		  }));
		  hasErrors = true;
		}
	  
		if (!isPasswordValid(data.password!)) {
		  setErrorMessage((prevState) => ({
			...prevState,
			password: 'Le mot de passe doit avoir au moins 8 caractères, une majuscule, un caractère spécial et un chiffre.',
		  }));
		  hasErrors = true;
		}
	  
		if (data.password !== data.confirmPassword) {
		  setErrorMessage((prevState) => ({
			...prevState,
			confirmPassword: 'Les mots de passe ne sont pas identiques !',
		  }));
		  hasErrors = true;
		}
	  
		if (hasErrors) {
		  return;
		}
	  
		setIsLoading(true);
	  
		axios
		  .post(`${process.env.GATSBY_API_URL}/auth/signup`, {
			email: data.email,
			name: data.name,
			firstname: data.firstname,
			password: data.password,
		  })
		  .then(function (response) {
			setIsLoading(false);
			navigate(`/sendMail?id=${response.data.data.id}&key=${response.data.token}`);
		  })
		  .catch(function (error) {
			setIsLoading(false);
			toast.error(error.message, {
			  position: 'top-center',
			  autoClose: 10000,
			  hideProgressBar: false,
			  closeOnClick: true,
			  pauseOnHover: true,
			  draggable: true,
			  progress: undefined,
			  theme: 'colored',
			  transition: Bounce,
			});
		  });
	  };
	  

	const authWithGoogle = () => {
		window.open(`${process.env.GATSBY_API_URL}/auth/googleaccount`, '_self');
	};

	return (
		<main className='bg-white w-full h-screen md:h-max flex flex-col justify-center items-center'>
			<Helmet>
				<meta
					property='og:title'
					content='Memorama - Inscription'
				/>
				<meta
					property='og:description'
					content='Description de votre page.'
				/>
				<meta
					property='og:image'
					content="URL de l'image à afficher lors du partage"
				/>
				<meta
					name='twitter:card'
					content='summary_large_image'
				/>
				<meta
					name='twitter:creator'
					content='@votrecompte'
				/>
			</Helmet>
			<ToastContainer />
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
						className={
							errorMessage.email
								? 'p-1.5 outline outline-1 outline-red-500 rounded-md text-shark-950 focus:outline-shark-950'
								: 'p-1.5 outline outline-1 outline-shark-400 rounded-md text-shark-950 focus:outline-shark-950'
						}
						onChange={(e) => handleChange(e)}
					/>
					{errorMessage.email && (
						<p className='text-red-500 text-sm'>{errorMessage.email}</p>
					)}
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
						className={
							errorMessage.name
								? 'p-1.5 outline outline-1 outline-red-500 rounded-md text-shark-950 focus:outline-shark-950'
								: 'p-1.5 outline outline-1 outline-shark-400 rounded-md text-shark-950 focus:outline-shark-950'
						}
						onChange={(e) => handleChange(e)}
					/>
					{errorMessage.name && (
						<p className='text-red-500 text-sm'>{errorMessage.name}</p>
					)}
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
						className={
							errorMessage.firstname
								? 'p-1.5 outline outline-1 outline-red-500 rounded-md text-shark-950 focus:outline-shark-950'
								: 'p-1.5 outline outline-1 outline-shark-400 rounded-md text-shark-950 focus:outline-shark-950'
						}
						onChange={(e) => handleChange(e)}
					/>
					{errorMessage.firstname && (
						<p className='text-red-500 text-sm'>{errorMessage.firstname}</p>
					)}
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
						className={
							errorMessage.password
								? 'p-1.5 outline outline-1 outline-red-500 rounded-md text-shark-950 focus:outline-shark-950'
								: 'p-1.5 outline outline-1 outline-shark-400 rounded-md text-shark-950 focus:outline-shark-950'
						}
						onChange={(e) => handleChange(e)}
					/>
					{errorMessage.password && (
						<p className='text-red-500 text-sm'>{errorMessage.password}</p>
					)}
				</div>
				<div className='flex flex-col gap-2'>
					<label
						htmlFor='confirmPassword'
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
						className={
							errorMessage.confirmPassword
								? 'p-1.5 outline outline-1 outline-shark-400 rounded-md text-shark-950 focus:outline-shark-950'
								: 'p-1.5 outline outline-1 outline-shark-400 rounded-md text-shark-950 focus:outline-shark-950'
						}
						onChange={(e) => handleChange(e)}
					/>
					{errorMessage.confirmPassword ? (
						<p className='text-red-500 text-sm'>
							{errorMessage.confirmPassword}
						</p>
					) : null}
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
						onClick={authWithGoogle}
						className='w-full flex justify-center items-center gap-2 py-2 text-center text-shark-950 text-base font-medium rounded-lg border border-shark-500 hover:border-shark-600'>
						<FcGoogle size={24} />
						{'Continuer avec Google'}
					</button>
				</div>
				<p className='text-center text-base'>
					J'ai déjà un compte ?{' '}
					<Link
						to='/signin'
						className='text-blue-500 hover:text-blue-700'>
						Se connecter
					</Link>
				</p>
			</form>
		</main>
	);
};

export default Signup;
