import React from 'react';
import { useState, useEffect } from 'react'
import Monster from '../components/monster'
import monsterDB from '../database/monsters.json'
import { useNavigate } from 'react-router-dom';




function Bestiary() {

    const [monsters, setMonsters] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        setMonsters(monsterDB.monsters);
        console.log('Monster content: ' + monsters)
    }, []);


    return (
        <div className='content-monster'>
            <div className='column-04'>
                {monsters.map((m, index) => (
                    <Monster monster={m} />
                ))}
            </div>
            <div className='column-5'>
                <footer>
                    <button
                        onClick={() => navigate('/')}
                        className='btn-bestiary'
                        style={{
                            marginLeft: '790px'
                        }}
                    >
                        Check Bestiary
                    </button>
                </footer>
            </div>
        </div>
    );
}


export default Bestiary;
