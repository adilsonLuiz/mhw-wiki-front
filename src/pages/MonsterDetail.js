// detail about monsters

import { useLocation, useNavigate, useParams } from "react-router-dom"


export default function MonsterDetail() {


    let { state } = useLocation();
    let { id } = useParams();
    const navigate = useNavigate();


    return (
        <div className='content-monster'>
            <button
                onClick={() => navigate('/bestiary')}
                className='btn-bestiary'
                style={{
                    marginLeft: '790px'
                }}
            >
                BACK TO BESTIARY
            </button>
            <img
                src={state.m.image}
                style={{
                    borderRadius: '100px',
                    maxWidth: '700px',
                    gap: '50px',
                    marginLeft: '500px',
                }}
            />
            <h1 style={{
                fontSize: '80px',
                textAlign: 'center'
            }}>{state.m.name}</h1>
            <p className="monster-lore ">{state.m.lore}</p>
        </div>
    )
}