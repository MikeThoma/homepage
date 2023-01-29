import './Experience.css'
import ExperienceCard from '../layout/ExperienceCard.jsx';
import React from 'react';

const Experience = () => {
    const workExperienceList = [
        {
            title: <p><nobr>Software Engineer</nobr> @andrena objects</p>,
            subtitle: <p>Mai 2019 - heute (3 Jahre)</p>,
            text: [
                'Unterstützung der Kunden als Fullstackentwickler - nach Scrum und Methoden des Clean Code und Extreme Programming.',
                'Entwicklung mithilfe Test Driven Development, sowie Continous Integration und Continous Delivery.',
                'Vertreter der agilen Arbeitsweise nach Scrum, durch halten des ASE Student Edition Kurses, sowie die Zertifizierung als Professional Scrum Master.',
            ]
        },
        {
            title: <p>Werkstudent als <nobr>Softwareentwickler</nobr> @FVA GmbH</p>,
            subtitle: <p>Mai 2017 - April 2019 (2 Jahre)</p>,
            text: [
                'Integration von Berechnungsroutinen innerhalb der Simulationsplattform FVA-Workbench.',
                'Behebung von Fehlerverhalten, sowie Implementierung neuer Funktionalität in die für Systemtests erstellte Testbench.'
            ]
        }
    ];

    /*const schoolExperienceList = [
        {
            title: 'Student @Goethe University',
            subtitle: 'Okt 2014 - April 2019',
            text: 'Hier stehen sehr viele Dinge, die ich in der Uni getan und gelernt habe. Kann es sein, dass hier Text steht? Ich weiß es nicht'
        },
    ];*/
    return <div>
        <div style={{ display: "flex", flexDirection: "column" }}>
            <div>
                <h3>Arbeit</h3>
                {workExperienceList.map(workExperience =>
                    <ExperienceCard details={workExperience} />
                )}
            </div>
        </div>
    </div>
}

export default Experience;