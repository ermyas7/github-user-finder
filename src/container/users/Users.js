import React, {useContext} from 'react';

import UserItem from './UserItem';
import Spinner from '../../components/layouts/Spinner';

import GithubContext from './../../context/github/githubContext';

const Users = () => {
   const githubContext = useContext(GithubContext);
  const  {users, isLoading} = githubContext;
    
  if(isLoading){
        return <Spinner/>
    }
    return (
        <div style={style}>
            {
                users.map((user) => (
                    <UserItem key={user.id} user={user}/>
                ))
            }       
        </div>
    )
}

let style = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '2rem'
}


export default Users;
