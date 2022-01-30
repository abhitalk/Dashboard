import "./index.css";

export default function User(props) {
  const user = props.user;
  return (
    <div className="user-container">
      <div className="user-avatar">
        <img src={user.avatar} height="100" width="100" alt={user.first_name} />
      </div>
      <div className="user-name">
        {user.first_name} {user.last_name}
      </div>
      <div className="Emailcontainer"><div className="emailtitle"><h3>Email:</h3></div><div className="user-email">{user.email}</div></div>
      
    </div>
  );
}
