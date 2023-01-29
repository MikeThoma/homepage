import './GetConnectedIcons.css'
import LinkedInIcon from '../icons/LinkedinIcon.jsx';
import GithubIcon from '../icons/GithubIcon.jsx';
import MailToIcon from '../icons/MailToIcon.jsx';
import React from 'react';

const GetConnectedIcons = () => {
    return <div className='get-connected' style={{ margin: '32px 0px' }}>
        <LinkedInIcon className='icon' />
        <GithubIcon className='icon' />
        <MailToIcon className='icon' />
    </div>
}

export default GetConnectedIcons;