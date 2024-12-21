import './chatList.css'
import { Link } from 'react-router-dom'
import { useQuery } from "@tanstack/react-query"

const ChatList = () => {

  const { isPending, error, data } = useQuery({
    queryKey: ["userChats"],
    queryFn: () =>
      fetch(`${import.meta.env.VITE_API_URL}/api/userchats`,{
        credentials:"include",
      }).then((res) =>
        res.json()),
  })

  return (
    <div className='chatList'>
        <span className='title'>DASHBOARD</span>
        <Link to="/dashboard">New Chat</Link>
        <Link to="/explore">Explore FiqGPT</Link>
        <Link to="/contact">Contact</Link>
        <hr/>
        <span className='title'>RECENT CHATS</span>
        <div className="list">
            {isPending 
            ? "Loading..." 
            : error 
            ? "Something went wrong...!" 
            :  data?.map((chat)=>(
              <Link to={`/dashboard/chats/${chat._id}`} key={chat._id}>
                {chat.title}
                </Link>
            ))}
        </div>
        <hr/>
        <div className="upgrade">
          <img src="/catlogo.png" alt="FiqGPT Logo" />
          <Link to="/upgrade" className="texts">
          <span>Upgrade to FiqGPT Pro</span>
          <span>Get unlimited access to all features</span>
          </Link>
          </div>

    </div>
  )
}

export default ChatList