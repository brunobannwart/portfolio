import React, { useState } from 'react';
import { store } from 'react-notifications-component';
import 'bootstrap/dist/css/bootstrap.min.css';
import './contato.css';

interface Props {
    telefone: string,
    emailContato: string,
    localização: string,
}

const Contato: React.FC<Props> = ({
    telefone,
    emailContato,
    localização,
}) => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [comentarios, setComentarios] = useState('');

    async function tratarSubmit(evento: React.FormEvent) {
        evento.preventDefault();

        store.addNotification({
            title: 'Contato efetuado',
            message: 'Você enviou um e-mail nos contatando. Aguarde nossa resposta dentro de 24 horas',
            type: 'success',
            insert: 'top',
            container: 'top-right',
            dismiss: {
                duration: 3000,
                onScreen: true,
                pauseOnHover: true,
            }
        });

        setNome('');
        setEmail('');
        setComentarios('');
    }

    return (
        <div id='contato' className='contact'>
            <div className='container-fluid'>
                <h3 className='text-center'>Contato</h3>
                <div className='row'>
                    <div className='col-sm-5'>
                        <p><i className='fa fa-map-marker' />{localização}</p>
                        <p><i className='fa fa-phone' />{telefone}</p>
                        <p><i className='fa fa-envelope' />{emailContato}</p>
                    </div>
                    <div className='col-sm-7'>
                        <form autoComplete='false' onSubmit={(evento: React.FormEvent) => tratarSubmit(evento)}>
                            <div className='row'>
                                <div className='col-sm-6 form-group'>
                                    <input
                                        type='text'
                                        className='form-control'
                                        id='nome'
                                        name='nome'
                                        maxLength={255}
                                        value={nome}
                                        onChange={(evento: React.ChangeEvent<HTMLInputElement>) => {
                                            setNome(evento.target.value);
                                        }}
                                        placeholder='Nome'
                                        required
                                    />
                                </div>
                                <div className='col-sm-6 form-group'>
                                    <input
                                        type='email'
                                        className='form-control'
                                        id='email'
                                        name='email'
                                        maxLength={255}
                                        value={email}
                                        onChange={(evento: React.ChangeEvent<HTMLInputElement>) => {
                                            setEmail(evento.target.value);
                                        }}
                                        placeholder='Email'
                                        required
                                    />
                                </div>
                            </div>
                            <textarea
                                className='form-control'
                                id='comentarios'
                                name='comentarios'
                                placeholder='Comentários'
                                maxLength={255}
                                value={comentarios}
                                onChange={(evento: React.ChangeEvent<HTMLTextAreaElement>) => {
                                    setComentarios(evento.target.value);
                                }}
                                required
                            ></textarea>
                            <div className='row'>
                                <div className='col-sm-12 form-group'>
                                    <button
                                        className='btn btn-default pull-right'
                                        type='submit'
                                    >
                                        Enviar
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contato;