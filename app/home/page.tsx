import React from 'react';
import axios from '@/utils/axios';

const about : React.FC = async ()=>{
    const {data} = await axios.get();
    console.log(data?.users);
    return (<div>

        <main>
            <h1>All users</h1>
            <ul>
            {
                data &&data.users &&  data.users.map((user)=>{
                    return <li key={user.id}>{user.firstName}</li>;
                })
            }
            </ul>
        </main>
    </div>);
}


export default about;