import React from 'react';
import './styles/Dasb1.css';
import star from '../assets/star.png';
import Pagination from './Pagination';
import { positionTable, meetingRoomsData } from '../helpers/Data';

const Dasb1 = () => {
    return (
        <div className='sections'>
            <div className="section1">
                <div className="hading">
                    <h3>Event Name Dash 1 </h3>
                    <h6> (venue Details)</h6>
                </div>
            </div>

            <div className="section2">
                <div className="sectionh1"><p>Event Details</p></div>
                <div className="sectionh2"><p>Assign Coordinator/Coordinator</p></div>
                <div className="sectionh3"><p>Session Managment </p></div>
                <div className="sectionh4"><p>Generate SOW </p></div>
            </div>

            <div className="section3">
                <div className="coordinators">
                    <h4>Assign Coordinates</h4>
                    <input type="text" placeholder='Search Coordinates' />
                    <p>Add new coordinates</p>
                </div>

                <div className="EventName">
                    <div className="name">
                        <h4>Event Name </h4>
                        <span> <p>Venue Here </p></span>
                    </div>
                    <div className="eventInfor">
                        <p>Start: 12-12-2023</p>
                        <p>Ends: 15-12-2023</p>
                    </div>
                    <div className="venue">
                        <p>Venue Address: Some Location 12,  Name Here, City, State.</p>
                    </div>
                </div>
            </div>

            <div className="section4">
                <div className="section4a">
                    <h4>Assign Contractors</h4>
                    {meetingRoomsData.map((meetingRoom) => (
                        <div className="meetingRooms" key={meetingRoom.meetingRooms}>
                            <div className="meetingroomDetails">
                                <h6>{meetingRoom.meetingRooms} </h6>
                                <img src={star} alt="star" />
                                <p>{meetingRoom.positions}</p>
                            </div>
                            <div className="dates">
                                <p>{meetingRoom.date}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="section4b">
                    <h5>Positions</h5>
                    <div className="positionTable">
                        <table>
                            <thead>
                                <tr>
                                    <th>Position</th>
                                    <th>Time</th>
                                    <th>Info</th>
                                    <th>Quantity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {positionTable.map((table) => (
                                    <tr key={table.position}>
                                        <td>{table.position}</td>
                                        <td>{table.time}</td>
                                        <td>{table.info}</td>
                                        <td>{table.quantity}</td>
                                        <td>
                                            <select>
                                                <option className='option' disabled selected value="">{table.selectContractor}</option>
                                                <option>contractors 1</option>
                                                <option>contractors 2</option>
                                                <option>contractors 3</option>
                                            </select>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <Pagination className="pagination1" />
                    </div>
                    <div className="section4bBtn">
                        <button>Save Edits</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dasb1;
