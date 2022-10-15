import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate,Link } from 'react-router-dom';
import Masonry from '@mui/lab/Masonry';
// import "./Dashboard.css";
import { auth, db, logout } from '../firebase';
import { query, collection, getDocs, where } from 'firebase/firestore';
function Dashboard(props) {
  console.log(props)
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, 'users'), where('uid', '==', user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate('/login');
    fetchUserName();
  }, [user, loading]);

  return (
    <div>
      <div className=" min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
        <div>
          <a href="/">
          <div className="p-5"><h3 className="flex flex-col items-center  text-4xl font-bold text-purple-600 capitalize mr-32">Hello,{name}</h3>
          <button className="inline-block float-right justify-end text-end bg-blue-600 rounded-full py-3 px-5"  onClick={logout}> Logout</button></div>
            
            <h3 className="text-xl font-bold flex flex-col items-center text-grey-600">
              Here, is your album
            </h3>
  
          </a>
        </div>
        <div className="inline-block justify-end text-right m-5 semibold">Your Email:  {user?.email}</div>
        <div className="inline items-center bg-green-600 rounded-full py-3 px-5 mb-8 "><Link to="/upload">Upload</Link></div>
        <Masonry columns={3} spacing={2}>
          {props.data.map((data, id) => (
            <div key={id}>
              <img
                src={data.img}
                style={{
                  borderBottomLeftRadius: 4,
                  borderBottomRightRadius: 4,
                  display: 'block',
                  width: '100%',
                }}
                className="rounded-lg shadow-lg"
                alt=""
              />
            </div>
          ))}
        </Masonry>
      </div>
    </div>
  );
}
export default Dashboard;
