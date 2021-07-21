import React from 'react';

const Profile = () => {
    return (
        <div style={{maxWidth:"550px",margin:"0px auto"}}>
        <div>

            <div style={{ display:"flex",

            justifyContent:"space-around",
            margin:"18px 0px",
            borderBottom:"1px solid grey"} }>

                <div >

                    <img style={{width:"160px",height:"160px",borderRadius:"80px"}} 
                    src="https://images.unsplash.com/photo-1612041720569-7e67f4061729?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"></img>
                </div>
                <div>
                    <h4>Aditi Kulkarni</h4>
                    <div style={{display:"flex",
                justifyContent:"space-between",
                width:"108%"}}>
                        <h6>40 Posts</h6>
                        <h6>40 Followers</h6>
                        <h6>40 Following</h6>
                    </div>
                </div>
            </div>
      
      <div className="gallery">
         
          <img className="item" src="https://images.unsplash.com/photo-1612041720569-7e67f4061729?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"></img>
          <img className="item" src="https://images.unsplash.com/photo-1612041720569-7e67f4061729?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"></img>
          <img className="item" src="https://images.unsplash.com/photo-1612041720569-7e67f4061729?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"></img>
          <img className="item" src="https://images.unsplash.com/photo-1612041720569-7e67f4061729?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"></img>
          <img className="item" src="https://images.unsplash.com/photo-1612041720569-7e67f4061729?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"></img>
          <img className="item" src="https://images.unsplash.com/photo-1612041720569-7e67f4061729?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"></img>
          <img className="item" src="https://images.unsplash.com/photo-1612041720569-7e67f4061729?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"></img>
          <img className="item" src="https://images.unsplash.com/photo-1612041720569-7e67f4061729?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"></img>
          <img className="item" src="https://images.unsplash.com/photo-1612041720569-7e67f4061729?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"></img>
         
      </div>
        </div>
        </div>
    )
}

export default Profile;