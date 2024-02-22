import React from 'react';
import { Link } from "gatsby";
import { RouteComponentProps, WindowLocation } from "@reach/router";

// eslint-disable-next-line
interface SendMailPageProps extends RouteComponentProps {
  location?: WindowLocation<unknown>;
}

const sendMail: React.FC<SendMailPageProps> = ({ location }) => {
  const params = new URLSearchParams(location?.search || '');
  const key = params.get("key");
  const id = parseInt(params.get("id")!);

  const handleClick = () => {

  }

	return (
		<main className='bg-blue-100 h-screen flex flex-col justify-center items-center'>
			<div className='bg-white p-8 rounded-lg shadow-md max-w-md'>
				<h1 className='font-dm text-3xl font-bold text-blue-500 mb-6'>
					Memorama
				</h1>
				<h2 className='text-2xl font-semibold mb-4'>Email de confirmation envoyé</h2>
				<p className='text-gray-700 font-robot'>
					Nous avons envoyé un email à votre adresse pour confirmer votre
					compte. Veuillez vérifier votre boîte de réception et suivez les
					instructions pour activer votre compte.
				</p>
        <div className="flex justify-end">
            <button className="text-blue-500 font-semibold hover:text-blue-700">Réenvoyer l'e-mail de confirmation</button>
        </div>
			</div>
		</main>
	);
}

export default sendMail;
