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

import axios from 'axios'
import { useSelector } from "react-redux";
import {selectUser} from '../redux/features/userSlice'
import {useAlert} from 'react-alert'

const LastSeen = ({date}) => {
  return(
    <div>
      <ReactTimeAgo date={date} locale="en-US" timeStyle='round'/>
    </div>
  )
}


const Post = ({post}) => {
  const alert = useAlert();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [answer, setAnswer] = useState("");
  const [showAnswers,setShowAnswers] = useState(false);
  const Close = <CloseIcon />;

  const user = useSelector(selectUser);
  const handleQuill = (value) => {
    setAnswer(value);
  }

  const handleShowAnswers = () => {
    setShowAnswers( (curr) => !curr)
  }

  //Function to handle answer submission
  const handleAnswer = async() => {
    if (post?._id && answer !== "") {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const body = {
        answer: answer,
        questionId: post?._id,
        user: user,
      };
      await axios
        .post("/api/answers", body, config)
        .then((res) => {
          console.log(res.data);
          alert.success("Answer added succesfully");
          setIsModalOpen(false);
          window.location.href = "/";
        })
        .catch((e) => {
          alert.error("Error submitting answer.. Please try again");
        });
    }
  }

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
            <Modal
              open={isModalOpen}
              closeIcon={Close}
              onClose={() => setIsModalOpen(false)}
              closeOnEsc
              center
              closeOnOverlayClick={false}
              styles={{
                overlay: {
                  height: "auto",
                },
              }}
              >
                <div className="flex flex-col items-center mt-5">
                  <h1 className="text-gray-800 font-semibold mb-2">{post?.questionName}</h1>
                  <p className="text-gray-500 text-sm">asked by <span className="text-black font-bold">
                     {post?.user?.userName}
                    </span> on {" "} <span className="text-black font-bold">
                       {new Date(post?.createdAt).toLocaleString()}
                      </span></p>
                </div>

                <div className="flex pt-5 flex-1">
                    <ReactQuill
                    value={answer}
                    onChange={handleQuill}
                    placeholder="Enter your answer"
                    
                    />
                </div>

                <div className="flex items-center justify-between mt-12 w-full">
                    <button className="border-none mt-2 otuline-none text-gray-500 font-medium rounded-3xl cursor-pointer" onClick={() => setIsModalOpen(false)}>
                      Cancel
                    </button>
                    <button onClick={handleAnswer} type="submit" className="border-none outline-none mt-1 bg-orange-400 p-1 text-white font-bold cursor-pointer rounded-xl">
                      Add Answer
                    </button>
                </div>
              </Modal>
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
         <button onClick={handleShowAnswers} className='text-black/50 text-sm font-bold mx-2'>{post?.allAnswers.length} Answer(s)</button>
          
          {
             showAnswers && (
              <div className="mt-1 w-full pt-1 pl-1 border-t-2 border-t-solid border-t-gray-100">
              {post?.allAnswers?.slice(0,5).map((_a) => (
                <>
                  <div className="flex flex-col border-t-2 border-t-solid border-t-gray-100">
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
             )
          }             
       </div>
    </div>
  )
}

export default Post
