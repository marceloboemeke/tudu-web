import React, { useMemo, useState } from 'react';
import { format } from 'date-fns';
import * as S from './styles';
import { Link } from 'react-router-dom';

import check_off from '../../assets/check_off.svg';
import check_on from '../../assets/check_on.svg';
import trash from '../../assets/trash.svg';
import edit from '../../assets/edit.svg';
import api from '../../services/api';

function TaskCard({ title, description, when, done, taskID, deleteFn, onDone }) {
    const date = useMemo(() => {
        return format(new Date(when), 'dd/MM/yyyy') + ", " + format(new Date(when), 'HH:mm') + "h";
    });

    const [status, setStatus] = useState(done);

    async function setDone() {
        let doneStatus = !status;
        await api.put(`/task/${taskID}/${doneStatus}`)
        .then((response) => {
            if (response.status === 200) {
                setStatus(doneStatus);
                onDone();
            }
        });
    }

    return (
        <S.Container className={`${(new Date(when) <= Date.now() && status === false) ? 'late_task' : ''} ${status === true ? 'done_task' : ''}`}>
            <div className="opts_card">
                <img className="check_card" src={status ? check_on : check_off} alt={status ? "Concluída" : "Não concluída"} onClick={() => setDone()} />
                <Link to={`/tasks/${taskID}`}><img src={edit} className="edit_card" alt="Edit" /></Link>
                <img src={trash} className="delete_card" alt="Delete" onClick={deleteFn} />
            </div>
            <div className="txt_content_card">
                <h1 className="title_card">{title}</h1>
                <p className="desc_card">{description}</p>
                <span className="date_card">{date}</span>
            </div>
        </S.Container>
    );
}
  
  export default TaskCard;