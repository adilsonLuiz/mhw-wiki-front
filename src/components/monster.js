// Control Monsters list actions in application



import { Link } from "react-router-dom"


export default function Monster({monster}) {


    return (
        <article className="monster-bestiary-img">
            <img 
                src={monster.image} 
                alt="monsters"
                style={{
                    borderRadius: '100px',
                    maxWidth: '200px',
                    marginTop: '100px'
                }}
            />
            <Link to={`/monster/${monster.id}`} state={{m: monster}}>
                <p>{monster.name}</p>
            </Link>
        </article>
    );
}


