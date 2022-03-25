import React,{useState} from 'react'
import { Avatar } from "@material-ui/core";
import {
  ArrowDownwardOutlined,
  ArrowUpwardOutlined,
  ChatBubbleOutlined,
  MoreHorizOutlined,
  RepeatOneOutlined,
  ShareOutlined,
} from "@material-ui/icons";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import CloseIcon from "@material-ui/icons/Close";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import ReactTimeAgo from "react-time-ago";
import ReactHtmlParser from "html-react-parser";

const LastSeen = ({date}) => {
  return(
    <div>
      <ReactTimeAgo date={date} locale="en-US" timeStyle='round'/>
    </div>
  )
}

const post =  {
  user:{
    userName:"John Doe"
  },
  questionName: "Why is Dogecoin becoming more popular?",
  createdAt:"2021-12-03T12:39:52.380+00:00",
  questionUrl:"https://qph.cf2.quoracdn.net/main-qimg-4e9d8483a28a27ac5ccf08b8b946bdf0-lq",
  allAnswers:[
    {
      user:{
        userName:"Jane Doe",
      },
      answer:"Back in 2013, the Doge meme was growing in popularity. Around the same time, Bitcoin was gaining a lot of attention in its own right. It was only a matter of time before someone put two and two together",
      createdAt:"2021-12-03T12:39:52.380+00:00"
    }
  ]
}

const Post = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [answer, setAnswer] = useState("");
  const Close = <CloseIcon />;

  return (
    <div className='flex flex-col p-2 bg-white mt-2 border-2 border-solid border-gray-100 rounded-sm max-w-[700px] shadow-sm'>
       <div className="flex items-center">
         <Avatar/>
         <h4 className="ml-2 cursor-pointer text-xs hover:underline">{post?.user?.userName}</h4>
         <small className="ml-2">
           <LastSeen date={post?.createdAt}/>
         </small>
       </div>

       <div className="flex flex-col">
         <div className='m-2 font-bold cursor-pointer flex items-center flex-1'>
           <p className="hover:underline">{post?.questionName}</p>
           <button className="ml-auto cursor-pointer p-2 bg-orange-300 outline-none border-none font-light text-sm rounded-md hover:bg-orange-500 transition-all duration-300 ease-in-out" onClick={() => {
             setIsModalOpen(true)
           }}>Answer</button>
         </div>
         {post.questionUrl !== "" && <img className="w-full max-h-[400px] object-contain bg-transparent rounded-md cursor-pointer mt-2" src={post.questionUrl}/>}
       </div>

       <div className="flex flex-col items-center mt-1">
         <div className='bg-gray-100 w-full mt-1 py-1 px-2 flex items-center justify-between rounded-3xl'>
            <ArrowUpwardOutlined className="text-orange-300 cursor-pointer mr-[40px]" />
            <ArrowDownwardOutlined className="text-orange-300 cursor-pointer mr-[40px]" />
            <RepeatOneOutlined  className="text-orange-300 cursor-pointer ml-[30px]"/>
            <ChatBubbleOutlined  className="text-orange-300 cursor-pointer ml-[30px]"/> 
            <ShareOutlined  className="text-orange-300 cursor-pointer ml-[30px]"/>
            <MoreHorizOutlined className="text-orange-300 cursor-pointer ml-[30px]"/>
         </div> 
         <p className='text-black/50 text-sm font-bold mx-2'>{post?.allAnswers.length} Answer(s)</p>
         <div className="mt-1 pt-1 pl-4 border-t-2 border-t-solid border-t-gray-100">
           {post?.allAnswers?.map((_a) => (
             <>
              <div className="flex flex-col w-full px-10 py-5 border-t-2 border-t-solid border-t-gray-100">
                <div className='flex items-center mb-2 text-sm font-semibold text-gray-800'>
                  <Avatar/>
                  <div className="ml-1 my-2">
                    <p>{_a?.user?.userName}</p>
                    <span>
                     <LastSeen date={_a?.createdAt} />
                    </span>
                  </div>
                </div>
                <div>
                  {ReactHtmlParser(_a?.answer)}
                </div>
              </div>
             </>
           ))}
         </div>

       </div>
    </div>
  )
}

export default Post
