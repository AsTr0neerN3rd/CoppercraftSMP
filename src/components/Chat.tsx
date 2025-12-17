import { useState, useRef, useEffect } from 'react';
import { Send, MessageSquare } from 'lucide-react';

type Message = {
  id: string;
  username: string;
  text: string;
  timestamp: Date;
};

export default function Chat() {
  const [username, setUsername] = useState('');
  const [isUsernameSet, setIsUsernameSet] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      username: 'Server',
      text: 'Welcome to Coppercraft SMP chat!',
      timestamp: new Date(),
    },
  ]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSetUsername = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      setIsUsernameSet(true);
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        username: 'Server',
        text: `${username} joined the chat!`,
        timestamp: new Date(),
      }]);
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentMessage.trim()) {
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        username,
        text: currentMessage,
        timestamp: new Date(),
      }]);
      setCurrentMessage('');
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-40 minecraft-border bg-primary hover:bg-primary/90 p-4 transition-all hover-lift copper-glow"
        aria-label="Toggle chat"
      >
        <MessageSquare className="w-6 h-6 text-background" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-8 z-40 w-80 md:w-96 animate-slide-up">
          <div className="minecraft-border bg-card copper-glow">
            {/* Chat Header */}
            <div className="bg-primary p-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-background" />
                <h3 className="text-sm pixel-text text-background">REALM CHAT</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-background hover:text-background/70 text-xl leading-none"
              >
                ×
              </button>
            </div>

            {!isUsernameSet ? (
              /* Username Setup */
              <div className="p-6 space-y-4">
                <h4 className="text-sm pixel-text text-primary text-center">
                  ENTER YOUR NAME
                </h4>
                <form onSubmit={handleSetUsername} className="space-y-4">
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="YOUR NAME..."
                    maxLength={16}
                    className="w-full minecraft-border bg-background text-foreground px-3 py-2 text-sm focus:outline-none focus:copper-glow"
                  />
                  <button
                    type="submit"
                    className="w-full minecraft-button text-xs"
                    disabled={!username.trim()}
                  >
                    JOIN CHAT
                  </button>
                </form>
              </div>
            ) : (
              <>
                {/* Messages Area */}
                <div className="h-64 overflow-y-auto p-4 space-y-2 bg-background/50">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className="space-y-1 animate-fade-in-up"
                    >
                      <div className="flex items-baseline gap-2">
                        <span className="text-xs text-muted-foreground">
                          [{formatTime(message.timestamp)}]
                        </span>
                        <span
                          className={`text-xs pixel-text ${
                            message.username === 'Server'
                              ? 'text-secondary'
                              : message.username === username
                              ? 'text-primary'
                              : 'text-foreground'
                          }`}
                        >
                          {message.username}:
                        </span>
                      </div>
                      <p className="text-xs text-foreground pl-4">
                        {message.text}
                      </p>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>

                {/* Message Input */}
                <form onSubmit={handleSendMessage} className="p-3 bg-card border-t-2 border-primary/20">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={currentMessage}
                      onChange={(e) => setCurrentMessage(e.target.value)}
                      placeholder="TYPE YOUR MESSAGE..."
                      maxLength={200}
                      className="flex-1 minecraft-border bg-background text-foreground px-3 py-2 text-xs focus:outline-none focus:copper-glow"
                    />
                    <button
                      type="submit"
                      disabled={!currentMessage.trim()}
                      className="minecraft-border bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed px-3 transition-all"
                    >
                      <Send className="w-4 h-4 text-background" />
                    </button>
                  </div>
                </form>

                {/* Current User Info */}
                <div className="px-3 py-2 bg-card/50 border-t border-primary/20 flex justify-between items-center">
                  <span className="text-[10px] text-muted-foreground">
                    PLAYING AS: <span className="text-primary">{username}</span>
                  </span>
                  <button
                    onClick={() => {
                      setIsUsernameSet(false);
                      setUsername('');
                      setMessages([{
                        id: '1',
                        username: 'Server',
                        text: 'Welcome to Coppercraft SMP chat!',
                        timestamp: new Date(),
                      }]);
                    }}
                    className="text-[10px] text-muted-foreground hover:text-primary transition-colors"
                  >
                    CHANGE NAME
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
