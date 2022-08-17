import Table from 'react-bootstrap/Table';
import userProfile from '../assets/images/userProfile.jpg'


function DataTable() {
    return (
        <Table hover variant="secondary" >
            <thead className='appointmentTableHeader'>
                <tr className='hhhh'>
                    <th  class="table-">Photo</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Date</th>
                    <th>Visit time</th>
                    <th>Number</th>
                    <th>Doctor</th>
                    <th>Injury/Condition</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><div className='appointmentProfileImg'>
                        <img alt='user profile' src={userProfile} />
                    </div></td>
                    <td>Liam</td>
                    <td>@ liam@gmail.com</td>
                    <td>10 Feb 2018</td>
                    <td>9:15-9:45</td>
                    <td>0126595743</td>
                    <td>Dr.Benjium</td>
                    <td>mumps</td>
                    <td>actions</td>
                </tr>
            </tbody>
        </Table>
    );
}

export default DataTable;