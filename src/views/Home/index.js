import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import * as S from './styles';
import Swal from 'sweetalert2';

import api from '../../services/api';

//Our components
import Header from '../../components/Header';
import Filter from '../../components/Filter';
import TaskCard from '../../components/TaskCard';

function Home() {
	const [activeFilter, setActiveFilter] = useState('all');
	const [tasks, setTasks] = useState([]);
	const [lateCount, setLateCount] = useState();

	async function loadTasks() {
		await api.get(`/task/filter/${activeFilter}`)
		.then(response => {
			setTasks(response.data);
			getLateTasks();
		});
	}

	async function getLateTasks() {
		await api.get(`/task/filter/late`)
		.then(response => {
			setLateCount(response.data.length);
		});
	}

	function Notification() {
		setActiveFilter('late');
	}
	
	async function deleteTask(id) {
		Swal.fire({  
            title: 'Excluir tarefa',  
            type: 'question',  
            text: 'Deseja realmente excluir essa tarefa?',
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonColor: '#ed6a5a',
            cancelButtonColor: '#0B3954'
        }).then(async (result) => {
			if (result.isConfirmed) {
				await api.delete(`/task/${id}`)
				.then((response) => {
					if (response.status === 200) {
						Swal.fire({  
							title: 'Sucesso!',  
							type: 'success',  
							text: 'Tarefa excluída!',
							confirmButtonColor: '#ed6a5a'
						}).then(() => {
							loadTasks();
						});
					}
				});
			}
		});
	}

	useEffect(() => {
		loadTasks();
	}, [activeFilter]);
	
	return (
		<S.Container>
			<Header />
			
			<S.FiltersArea>
				<ul>
					<Filter title="Todos" active={activeFilter === "all" ? 'active' : ''} onClick={() => setActiveFilter("all")} />
					<Filter title="Hoje" active={activeFilter === "today" ? 'active' : ''} onClick={() => setActiveFilter("today")} />
					<Filter title="Semana" active={activeFilter === "week" ? 'active' : ''} onClick={() => setActiveFilter("week")} />
					<Filter title="Mês" active={activeFilter === "month" ? 'active' : ''} onClick={() => setActiveFilter("month")} />
					<Filter title="Ano" active={activeFilter === "year" ? 'active' : ''} onClick={() => setActiveFilter("year")} />
				</ul>
			</S.FiltersArea>
			<S.Title>{activeFilter === 'late' ? "Tarefas Atrasadas" : "Tarefas"}</S.Title>
			<S.Content>
				{	
					tasks.map(t => (
						<TaskCard onDone={loadTasks} title={t.title} description={t.description} when={t.when} done={t.done} key={t._id} taskID={t._id} deleteFn={() => deleteTask(t._id)} />
					))
				}
			</S.Content>
		
		</S.Container>
		);
	}
	
	export default Home;