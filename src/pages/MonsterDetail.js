// detail about monsters

import { useLocation, useNavigate } from "react-router-dom"


export default function MonsterDetail() {


    let { state } = useLocation();
    const navigate = useNavigate();


    return (
        <div className='content-monster'>
            <button
                onClick={() => navigate('/bestiary')}
                className='btn-bestiary'
                style={{
                    marginLeft: '560px'
                }}
            >
                BACK TO BESTIARY
            </button>
            <img
                src={state.m.image}
                alt="monster"
                style={{
                    borderRadius: '100px',
                    maxWidth: '500px',
                    gap: '50px',
                    marginLeft: '400px',
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