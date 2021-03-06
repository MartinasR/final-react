import Logo from '../../images/ILTQq.png'
import './menu.css'

import AddLink from '../link/link'

const pirmiLinkai = ['Register','Login' ]
const antriLinkai = ['Home', 'Add','Logout']


const Menu = () => {
    const AuthToken = localStorage.getItem('token')
    return (
        <header>
            <div>
                <img src={Logo} alt="Logo" height="70px" />
            </div>
            <div className='MenuLinks'>
                {AuthToken ? <>
                    {pirmiLinkai.map((link, i) => <AddLink props={link} key={i} />)}
                    
                </> : <>
                {antriLinkai.map((link, i) => <AddLink props={link} key={i} />)}
                </>}
            </div>
        </header >
    );
}

export default Menu;