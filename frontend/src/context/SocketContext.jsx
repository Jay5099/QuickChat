import {createContext, useContext, useEffect, useState} from 'react'
import { useAuthContext } from './AuthContext';
import io from 'socket.io-client';

export const SocketContext = createContext();

export const useSocketContext = () => {
    return useContext(SocketContext)
}

export const SocketContextProvider = ({children}) => {

    const [socket, setSocket] = useState(null)
    const [onlineUsers, setOnlineUsers] = useState([])
    const {authUser} = useAuthContext();

    useEffect(() => {
        if(authUser){
            const socket = io("https://chat-app-basic-5c4o.onrender.com",{
                query: {
                    userId: authUser._id
                }
            })
            setSocket(socket)

            // io.emit is used to listen to all the clients, can be used to send message to all clients and both client and server can listen to it 
            socket.on('getOnlineUsers', (users) => {
                setOnlineUsers(users);
            })

            return () => socket.close()
        }else {
            if(socket){
                socket.close()
                setSocket(null)
            }
        }
    }, [authUser])

    return (
        <SocketContext.Provider value={{socket,onlineUsers}}>
            {children}
        </SocketContext.Provider>
    )
}