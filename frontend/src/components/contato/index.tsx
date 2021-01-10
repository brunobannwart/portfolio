import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './contato.css';

interface Props {
    telefone: string,
    email: string,
    localização: string,
}

const Contato: React.FC<Props> = ({
    telefone,
    email,
    localização,
}) => {
    return (
        <div className='contact'>
            <div className='container-fluid'>
                <h3 className='text-center'>Contato</h3>
                <div className='row'>
                    <div className='col-sm-5'>
                        <p>{localização}</p>
                        <p>{telefone}</p>
                        <p>{email}</p>
                    </div>
                    <div className='col-sm-7'>
                        <form autoComplete='false' onSubmit={() => { }}>
                            <div className='row'>
                                <div className='col-sm-6 form-group'>
                                    <input 
                                        type='text'
                                        className='form-control'
                                        id='nome'
                                        name='nome'
                                        value=''
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
                                        value=''
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
                                value=''
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