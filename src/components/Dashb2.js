  import React from 'react' ;
  import Pagination from './Pagination';
  import './styles/Dashb2.css';
  import {eventReqeuest} from '../helpers/Data';
  import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
  import ExpandCircleDownRoundedIcon from '@mui/icons-material/ExpandCircleDownRounded';
  import SearchIcon from '@mui/icons-material/Search';
  import AddBoxIcon from '@mui/icons-material/AddBox';


  const Dashb2 = () => {
    return (

      <> 
      <div className='dash2'>
      
        <div className="sectionDb1">
            <h3>Event Request Dash2 </h3>
            <div className='seachbarDb1'>
              <span className='searchBar'><SearchIcon/><input placeholder='search here'type="search"/></span> 
            <button><AddBoxIcon/></button>
            </div>
        </div>


        <div className="sectionDb2">
        <div className="eventTable">
        <table className='table'>
              <thead className='thead'>
              
                  <tr>
                    <th>Event Name  <span>symbol</span></th>
                    <th> Event start </th>
                    <th>Event End <span><ExpandCircleDownRoundedIcon/></span></th>
                    <th> Client Name <span><ExpandCircleDownRoundedIcon/></span></th>
                    <th>Contact Info</th>
                    <th> venue </th>
          
                  
                  </tr>
                
            </thead>

                  <tbody className='tbody'>


                { eventReqeuest.map((event)=>(
                    <tr>  
                    <td>  
                    <RemoveRedEyeOutlinedIcon/>
                    {event.filledName }
                    </td>
                    <td>{event.dateStart}</td>
                    <td>{event.dateEnd} </td>
                    <td>{event.clientName}</td>
                    <td>{event.contactInfo}</td>
                    <td>{event.Venue}</td>
                  
                  </tr>

                  )) }
                  </tbody>
        </table>
        </div>
        </div>
        <div className="paginationDash2">
        <Pagination/>
        </div>
      </div>

      </>

    )
  }

  export default  Dashb2 ; 