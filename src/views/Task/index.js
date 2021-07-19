import React, { useState, useEffect } from 'react';
import * as S from './styles';
import { format } from 'date-fns';
import { Link, Redirect } from 'react-router-dom';
import Swal from "sweetalert2";

import api from '../../services/api';
import clock from '../../assets/clock.svg';
import calendar from '../../assets/calendar.svg';
import check_on from '../../assets/check_on.svg';
import check_off from '../../assets/check_off.svg';

//Our components
import Header from '../../components/Header';

function Task({ match }) {
    const [id, setID] = useState();
    const [done, setDone] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDesc] = useState("");
    const [date, setDate] = useState(format(new Date(), 'yyyy-MM-dd'));
    const [time, setTime] = useState(format(new Date(), 'HH:mm'));
    const [macaddress, setMacaddress] = useState("11:11:11:11:11:11");
    const [redirect, setRedirect] = useState(false);

    const [isLoadedTask, setIsLoadedTask] = useState(false);
    const [loadedTaskExists, setLoadedTaskExists] = useState(false);

    function clearForm() {
        setDone(false);
        setTitle("");
        setDesc("");
        setDate(format(new Date(), 'yyyy-MM-dd'));
        setTime(format(new Date(), 'HH:mm'));
    }

    async function loadTaskDetails() {
        if (!match.params.id) {
            setIsLoadedTask(false);
            return false;
        }

        setIsLoadedTask(true);

        await api.get(`/task/${match.params.id}`)
        .then((response) => {
            setDone(response.data.done);
            setTitle(response.data.title);
            setDesc(response.data.description);
            setDate(format(new Date(response.data.when), 'yyyy-MM-dd'));
            setTime(format(new Date(response.data.when), 'HH:mm'));
            setLoadedTaskExists(true);
            return true;
        }).catch(error => {
            setLoadedTaskExists(false);
            return false;
        });
    }

    function validateTask() {
        return (title && title.length > 0) && (date && date.length > 0) && (time && time.length > 0);
    }

    async function save() {
        if (!validateTask()) {
            return Swal.fire({  
                title: 'Ops!',  
                type: 'warning',  
                text: 'Prencha os campos obrigatórios! (Título, Data e Hora)',
                confirmButtonColor: '#ed6a5a'
            });
        }

        if (isLoadedTask && loadedTaskExists) {
            await api.put(`/task/${match.params.id}`, {
                macaddress,
                title,
                description,
                when: `${date}T${time}:00.000`,
                done
            }).then(() => {
                Swal.fire({  
                    title: 'Sucesso!',  
                    type: 'success',  
                    text: 'Tarefa atualizada!',
                    confirmButtonColor: '#ed6a5a'
                }).then(() => {
                    setRedirect(true);
                });
            }).catch(error => {
                alert("Houve um erro durante a atualização.");
            });
        } else {
            await api.post('/task', {
                macaddress,
                title,
                description,
                when: `${date}T${time}:00.000`,
                done
            }).then(() => {
                // alert("Tarefa cadastrada!");
                Swal.fire({  
                    title: 'Sucesso!',  
                    type: 'success',  
                    text: 'Tarefa cadastrada!',
                    confirmButtonColor: '#ed6a5a'
                }).then(() => {
                    setRedirect(true);
                });
            }).catch(error => {
                alert("Houve um erro durante o cadastro.");
            });
        }
    }

    useEffect(() => {
		loadTaskDetails();
	}, []);

	return (
		<S.Container>
            {redirect && <Redirect to="/" /> }
			<Header />
			<S.Title>{`${(!isLoadedTask || (isLoadedTask && loadedTaskExists)) ? (isLoadedTask ? 'Editar tarefa' : 'Nova tarefa') : 'Tarefa não encontrada.'}`}</S.Title>
                <S.FormContainer className={`${!isLoadedTask || (isLoadedTask && loadedTaskExists) ? '' : 'hidden'}`}>
                    <S.Form>
                        {
                            (isLoadedTask && loadedTaskExists) ?
                            <S.DoneButtonForm onClick={() => setDone(!done)}>
                                <p className={done ? 'pink' : 'blue'}>{done ? 'Concluída' : 'Não concluída'}</p>
                                <img className="check_form_task" src={done ? check_on : check_off} alt={done ? 'Concluída' : 'Não concluída'} />
                            </S.DoneButtonForm>
                            :
                            null
                        }
                        <S.Input>
                            <label htmlFor="titulo_tarefa">Título</label>
                            <input type="text" name="titulo" id="titulo_tarefa" placeholder="Título da tarefa" onChange={e => setTitle(e.target.value)} value={title} />
                        </S.Input>
                        <S.Input>
                            <label htmlFor="desc_tarefa">Descrição</label>
                            <textarea name="descricao" id="desc_tarefa" placeholder="Descrição da tarefa" onChange={e => setDesc(e.target.value)} value={description}></textarea>
                        </S.Input>
                        <S.InputContainer>
                            <S.Input className="half_input" imgURL={calendar}>
                                <label htmlFor="data_tarefa">Data</label>
                                <input type="date" name="data" id="data_tarefa" placeholder="01/01/2022" onChange={e => setDate(e.target.value)} value={date} />
                            </S.Input>
                            <S.Input className="half_input" imgURL={clock}>
                                <label htmlFor="hora_tarefa">Hora</label>
                                <input type="time" name="hora" id="hora_tarefa" placeholder="00:00" onChange={e => setTime(e.target.value)} value={time} />
                            </S.Input>
                        </S.InputContainer>
                    </S.Form>
                    <S.ButtonsContainer>
                        <div className="form_button" id="save_button" onClick={save}>Salvar</div>
                        {
                            (isLoadedTask && loadedTaskExists) ?
                            <Link to="/" className="form_button">Cancelar</Link>
                            :
                            <div className="form_button" onClick={clearForm}>Limpar</div>
                        }
                    </S.ButtonsContainer>
                </S.FormContainer>
		</S.Container>
		);
	}
	
	export default Task;