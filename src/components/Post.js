import React,{useState,useEffect} from 'react';
import {database} from '../firebase'
import CircularProgress from '@mui/material/CircularProgress';
import Video from './Video';
import './Post.css'
import { Avatar } from '@mui/material';
import Like from './Like';

function Post({userData}) {
    const [posts,setPosts]=useState(null);

    useEffect(()=>{
        let parr = []
        const unsub=database.posts.onSnapshot((querySnapshot)=>{
            parr=[]
            querySnapshot.forEach((doc)=>{
                let data={...doc.data(),postId:doc.id}
                parr.push(data)
            })
            setPosts(parr)
        })
        return unsub;
    },[])

    return (
        <div>
            {
                posts==null || userData==null ? <CircularProgress color="secondary" /> : 
                <div className='video-container'>
                    {
                        posts.map((post,index)=>(
                            <React.Fragment key={index}>
                                <div className='videos'>
                                    <Video src={post.purl}/>
                                    <div className='fa' style={{display : 'flex'}}>
                                        <Avatar src={userData.profileUrl}/>
                                        <h4>{userData.fullName}</h4>
                                    </div>
                                    <Like userData={userData} postData={post}/>
                                </div>
                            </React.Fragment>
                        ))
                    }
                </div>

            }
        </div>
    )
}

export default Post;
