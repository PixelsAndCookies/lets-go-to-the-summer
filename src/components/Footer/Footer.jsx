import avatargroup from '/pictures/avatars_group_cut.png'

export const Footer = () => {
    return (
        
        <footer>
            <img src={avatargroup} alt="" />
            <div className='content'>
                <ul>
                    <li>A Propos</li>
                    <li>FAQ</li>
                    <li>Qui sommes-nous ?</li>
                </ul>
                <ul>
                    <li>Contact</li>
                    <li>CGU</li>
                    <li>Mentions légales</li>
                </ul>
            </div>
        </footer>
    )
}
