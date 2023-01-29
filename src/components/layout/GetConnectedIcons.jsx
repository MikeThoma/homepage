import './GetConnectedIcons.css'
import LinkedInIcon from '../icons/LinkedinIcon';
import GithubIcon from '../icons/GithubIcon';
import MailToIcon from '../icons/MailToIcon';

const GetConnectedIcons = () => {
    return <div className='get-connected' style={{ margin: '32px 0px' }}>
        <LinkedInIcon className='icon' />
        <GithubIcon className='icon' />
        <MailToIcon className='icon' />
    </div>
}

export default GetConnectedIcons;