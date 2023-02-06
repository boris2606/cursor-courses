import React ,{ useState }from 'react';
import './Posts.scss'

const Posts = ({author,content,image,date,auth}) => {
    let [countComment, setCountCOmment] = useState(0)
    let [countRepost, setCountRepost] = useState(0)
    let [countLike, setCountLike] = useState(0)

    return (
        <div className='wrapper_post'>
            <div className='wrapper_post_autor'>
                <img className='post_autor_photo' src={author.photo} alt='Autor_photo'/>
                <p className='post_autor_name'>{author.name}</p>
                <img className='post_autor_auth' src={auth} alt='auth'/>
                <p className='post_autor_nickname'>{author.nickname}</p>
                <p className='post_autor_data'>{date}</p>
            </div>
            <div className='wrapper_post_content'>{content}</div>
            <img className='wrapper_post_img' alt='PostImage' src={image}/>
            <div className='wrapper_post_buttons'>
                <div className='post_btn'>
                    <img src='./commet.png' alt='button_post' onClick={() => setCountCOmment(countComment + 1)}></img>
                    <p className='count_comments'>{countComment}</p>
                </div>
                <div className='post_btn'>
                    <img src='./repost.png' alt='button_post' onClick={() => setCountRepost(countRepost + 1)}></img>
                    <p className='count_repost' >{countRepost}</p>
                </div>
                <div className='post_btn'>
                    <img src='./like.png' alt='button_post' onClick={() => setCountLike(countLike + 1)}></img>
                    <p className='count_likes' >{countLike}</p>
                </div>
                <div className='post_btn'>
                    <img src='./download.png' alt='button_post'></img>
                </div>
            </div>
        </div>
    );
};

export default Posts;