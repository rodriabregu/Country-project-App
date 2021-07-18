import React from 'react';
import { Link } from 'react-router-dom';

const Activity = ({ activities, countryName}) => {
    if(activities && activities.length > 0) {
        console.log(activities);

        return (
        <div>
            <h3>Activited planed in {countryName}</h3>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Duration</th>
                    <th>Difficulty</th>
                    <th>Season</th>
                </tr>
                </thead>
                <tbody>
                    {activities &&
                    activities.map((a) => (
                        <tr key={a.id}>
                            <td>{a.name}</td>
                            <td>{a.duration}</td>
                            <td>{a.season}</td>
                            <td>{a.difficulty}</td>
                            <td>{a.id}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        );
    } else {
        return <Link to='/activity'><h3>Planned here!</h3></Link>
    };
};

export default Activity;