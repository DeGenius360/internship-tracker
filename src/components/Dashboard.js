import React, { useEffect } from 'react'
import {Appbar, List, Card} from '@mui/material/core';

const Dashboard = () => {
    const [internshipApplications, setInternshipApplications] = React.useState([]);

    useEffect(() => {
        fetch('/api/internship-applications')
        .then(response => response.json())
        .then(data =>  setInternshipApplications(data));
    }, []);

    return(
        <div>
            <Appbar>
                <h1>Internship Dashboard</h1>
            </Appbar>
            <List>
                {internshipApplications.map((internshipApplication) => (
                    <Card key={internshipApplication.id}>
                        <h2>{internshipApplication.name}</h2>
                        <p>{internshipApplication.progress}</p>
                        <p>{internshipApplication.deadline}</p>
                    </Card>
                ))}
            </List>
        </div>
    );
};

export default Dashboard;



