import React from 'react';

const UserDetail = (props) => {
    const { avatar_url, login } = props;
  
    return( 
        <div className= "col-12 col-md-4 mt-5">
        <div class="card p-2 m-1">
        <div class="d-flex align-item-center justify-content-between">
        <div className="image"><img src={avatar_url} alt={login}class="rounded"/></div>
        <div class="d-flex flex-column">
        <span className="title">{login}</span>
        <div class="p-2 d-flex mt-30 justify-content-between">
        <div class="d-flex flex-column"><span className="attributes">Articles</span><span class="p-2">30</span></div>
        <div class="d-flex flex-column"><span  className="attributes">Followers</span><span class="p-2">100</span></div>
        <div class="d-flex flex-column"><span  className="attributes">Rating</span><span class="p-2">4.5</span></div>
        </div>
        </div>
        </div>
        </div>
        </div>
    )
}

export default UserDetail