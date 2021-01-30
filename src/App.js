import React, { useState, useEffect } from 'react';
import './App.css';
import Post from './Post';
import { db,auth } from './firebase';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button, Input } from '@material-ui/core';

function getModalStyle() {// modal style 
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function App() {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [user,setUser] = userState(null);
  //useEffect - run a piece of code based on a specific condition 
  useEffect(()=> {
    const unsubscribe = auth.onAuthStateChanged((authUser)=> {
      if(authUser){
        //user has logged in...
        console.log(authUser);
        setUser(authUser);

        if(authUser.displayName){
          //don't update username
        }else {
          //just created 
          return authUser.updateProfile({
            displayName: username,
          });
        }
      }else {
        //user has logged out ...
        setUser(null);
      }
    })
    return () => {
      //perform cleanup action 
      unsubscribe();
    }
  },[user,username]);

  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id,
        post: doc.data()
      })));
    })
  }, []);
  // runs once and runs everytime posts change 
  //posts 컬렉션 db 바뀔 때마다 스냅샷 찍어서 이 코드가 fire되는 것 
  // if it's [] runs once. that's it 

  const signUp = (e) => {
    e.preventDefault()//submit할때마다 refresh되지 않게 
    auth.createUserWithEmailAndPassword(email,password)
    .catch((error)=> alert(error.message))
  }

  return (
    <div className="app">
      {/*modal for inputing username and password*/}
      <Modal
        open={open}
        onClose={() => setOpen(false)}
      >
        <div style={modalStyle} className={classes.paper}>
          <form className="app-signup">
            <center>
              <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="instagram" className="app-header-image" />
              </center>
              <Input
                placeholder="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Input
                placeholder="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <Input
                placeholder="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button onClick={signUp}>Login</Button>
           
          </form>
        </div>
      </Modal>

      <div className="app-header">
        <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="instagram" className="app-header-image" />
      </div>
      <Button onClick={() => setOpen(true)}>Sign Up</Button>
      {
        posts.map(({ id, post }) => (//posts 받을 때마다 렌더링?
          <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl} key={id} />
        ))
      }

    </div>
  );
}

export default App;
