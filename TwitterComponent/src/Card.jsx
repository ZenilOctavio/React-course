import { useState } from 'react'
import './Card.css'

function Card({name,username,initialIsFollowing}) {
  const [isFollowing,setIsFollowing] = useState(initialIsFollowing);
  
  let buttonContent = (isFollowing)?'Siguiendo':'Seguir';
  const handleClick = () => {
    setIsFollowing(!isFollowing);
  }
  let buttonClass = isFollowing?'following':'notFollowing';
  
  
  return (
    <article className='tw-followCard'>
      
      <header className='tw-followCard-header'>
        <img className='avatar' src={`https://unavatar.io/telegram/${username}`} alt=''></img>
        <div>
          <strong className='name'>{name}</strong>
          <span className='username'>@{username}</span>
        </div>
      </header>
      
      <aside>
        <button className={buttonClass} onClick={handleClick}>
          {buttonContent}
        </button>
      </aside>

    </article>
  )
}

export default Card
