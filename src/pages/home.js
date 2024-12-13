
import monsterData from '../database/monsters.json'
import monstersImage from '../assets/Monsters-img/fatalis.webp'
import { useNavigate } from 'react-router-dom';
import TitleComponent from '../components/titleComponent';
import HorizonComponent from '../components/horizonComponent';
import LogoGameComponent from '../components/mhwMainLogoComponent'


function Home() {
    const navigate = useNavigate()
    return (
        
        <div className='content-monster'>
            
            <div className='column-01'>
                <div className='column-1-item-1'>
                    <h1 className='monster-head-title'><TitleComponent/></h1>
                </div>
            </div>
            <HorizonComponent />
            <div className='column-02'>
                <div className='column-2-item-1'>
                    <h2 className='monster-name'>{monsterData['monsters'][0].name}</h2>
                    <p className='monster-lore'>{monsterData['monsters'][0].lore}</p>
                    <LogoGameComponent/>
                </div>
                <div className='column-2-item-2'>
                    <img
                        className='monster-image'
                        alt='Fatalis'
                        src={monstersImage}
                    />
                </div>
            </div>
            <HorizonComponent />
            <div className='column-03'>
                <footer>
                    <button
                        onClick={() => navigate('/bestiary')}
                        className='btn-bestiary'>
                        Check Bestiary
                    </button>
                    
                </footer>
            </div>
        </div>

    );
}

export default Home;