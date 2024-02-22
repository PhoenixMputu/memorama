import React from 'react';
import { RouteComponentProps, WindowLocation } from '@reach/router';
import axios from 'axios';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface SendMailPageProps extends RouteComponentProps {
	location?: WindowLocation<unknown>;
}

const sendMail: React.FC<SendMailPageProps> = ({ location }) => {
	const params = new URLSearchParams(location?.search || '');
	const token = params.get('key');
	const id = parseInt(params.get('id')!);

	const handleClick = () => {

		toast.promise(
			axios
			.get(`${process.env.GATSBY_API_URL}/auth/resendEmail?id=${id}&token=${token}`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': 'Bearer ' + token,
				},
			}),
			{
				pending: 'Envoi d\'email en cours...',
      			success: 'L\'email a été envoyé avec success. Vérifiez votre adresse email pour valider votre adresse email',
      			error: 'Il y a eu un problème'
			}
		)
	}

	return (
		<main className='bg-blue-100 h-screen flex flex-col justify-center items-center'>
			<ToastContainer />
			<div className='bg-white p-8 rounded-lg shadow-md max-w-md'>
				<h1 className='font-dm text-3xl font-bold text-blue-500 mb-6'>
					Memorama
				</h1>
				<h2 className='text-2xl font-semibold mb-4'>
					Email de confirmation envoyé
				</h2>
				<p className='text-gray-700 font-robot'>
					Nous avons envoyé un email à votre adresse pour confirmer votre
					compte. Veuillez vérifier votre boîte de réception et suivez les
					instructions pour activer votre compte.
				</p>
				<div className='flex justify-end'>
					<button onClick={handleClick} className='text-blue-500 font-semibold hover:text-blue-700'>
						Réenvoyer l'e-mail de confirmation
					</button>
				</div>
			</div>
		</main>
	);
};

export default sendMail;
