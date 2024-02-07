import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';

const App = () => {
    return (
         <ChatEngine
         height = "100vh"
         projectID="6a0bd5f8-5120-4a6e-8445-8b2a9f251b63"
         userName="wasifism"
         userSecret="Astaapi123"
         renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />} 
         />
    );
}

export default App;
