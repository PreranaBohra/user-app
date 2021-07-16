import React from 'react';

const UserDetail = (props) => {
    const { avatar_url, login } = props;
  
    return( 
        <div className= "col-10 col-md-3 mt-5">
        <div class="card p-2 m-3">
        <div class="d-flex flex-column align-item-center justify-content-between">
        <div className="image"><img src={avatar_url} alt={login}class="rounded"/></div>
        <div class="d-flex flex-column">
        <span className="title">{login}</span>
        <div class="card p-2 d-flex flex-row mt-3 justify-content-between">
        <div class="d-flex flex-column"><span className="attributes">Articles</span><span class="p-1">30</span></div>
        <div class="d-flex flex-column"><span  className="attributes">Followers</span><span class="p-1">100</span></div>
        <div class="d-flex flex-column"><span  className="attributes">Rating</span><span class="p-1">4.5</span></div>
        </div>
        </div>
        </div>
        </div>
        </div>
    )
}

export default UserDetail