import { useState, useEffect, useRef } from 'react';
import { FiSend, FiChevronDown } from 'react-icons/fi';
import Image from 'next/image';

// --- Jaccard Similarity Function ---
const jaccardSimilarity = (a: string, b: string): number => {
  const setA = new Set(a.toLowerCase().split(/\s+/));
  const setB = new Set(b.toLowerCase().split(/\s+/));
  const intersection = new Set([...setA].filter((x) => setB.has(x)));
  const union = new Set([...setA, ...setB]);
  return intersection.size / union.size;
};

// --- Responses with extended patterns ---
const responses = [
  // Greetings
  { patterns: ["hi", "hello", "hey"], response: "👋 Welcome to Sayvai! Type 'menu' to see all services." },
  { patterns: ["bye", "goodbye", "thanks", "thank you"], response: "👋 Goodbye! Have a great day!" },
  {
    patterns: ["service", "services", "offer", "provide", "help", "menu"],
    response: `Here are our main services:
1️⃣ Digital Marketing  
2️⃣ Custom AI Solutions  
3️⃣ AI Phone Call Service (ongoing)  
4️⃣ Sales & Support  

👉 Type the number or ask about a service directly.`,
  },

  // Digital Marketing
  { patterns: ["digital marketing", "marketing services"], response: "📢 Our Digital Marketing services include SEO, Social Media Marketing, Google Ads, Meta Ads, and Lead Generation." },
  { patterns: ["seo", "search engine optimization"], response: "🔍 SEO improves website ranking using keywords, backlinks, content, and technical optimization." },
  { patterns: ["social media marketing", "smm", "facebook ads", "instagram ads"], response: "📱 Social Media Marketing manages platforms like Facebook, Instagram, LinkedIn. Includes organic posts, paid ads, and engagement tracking." },
  { patterns: ["google ads", "google adwords"], response: "🖥️ Google Ads allows targeted advertising on search & display networks to drive leads and traffic." },
  { patterns: ["meta ads", "facebook ads", "instagram ads"], response: "📈 Meta Ads lets you run paid campaigns on Facebook & Instagram for brand reach & conversions." },
  { patterns: ["lead generation", "generate leads", "sales leads"], response: "🎯 Lead Generation finds potential customers via campaigns, landing pages, social media, and outreach." },

  // Custom AI Solutions
  { patterns: ["custom ai", "ai solutions", "chatbot"], response: "🤖 Our Custom AI Solutions include AI Chatbots and custom AI tools tailored for your business." },
  { patterns: ["chatbot"], response: "💬 AI Chatbots automate customer conversations for support, sales, and engagement." },

  // AI Phone Call Service
  { patterns: ["ai phone call", "phone call service", "voice ai", "call automation"], response: "📞 AI Phone Call Service automates customer calls for bookings, follow-ups, surveys, and support." },
  { patterns: ["ivr","Interactive Voice Response","Voice Response"], response: "☎️ IVR (Interactive Voice Response) handles customer queries through automated voice menus." },
  { patterns: ["call follow-up", "follow-up calls"], response: "🔔 Follow-up calls keep customers engaged and improve conversion rates." },

  // Sales & Support
  { patterns: ["sales", "customer support", "after-sales", "query handling", "lead management", "customer engagement"], response: "💼 Sales & Support services help with customer queries, lead management, follow-ups, ticketing, and satisfaction tracking." },
  { patterns: ["ticketing", "support tickets"], response: "🎫 Support Ticketing organizes and resolves customer issues efficiently." },
  { patterns: ["customer engagement"], response: "🤝 Customer Engagement improves relationships through personalized communication and follow-ups." },

  // Fallback
  { patterns: ["*"], response: "❓ Sorry, I didn’t quite understand that. Please try again or type 'menu' to see our services." },
];


const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const chatBodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  const handleToggle = () => setIsOpen(!isOpen);

  // --- Match user input with Jaccard Similarity ---
  const getBotResponse = (userInput: string): string => {
    let bestScore = 0;
    let bestResponse = "❓ Sorry, I didn’t quite understand that. Please try again or type 'menu' to see our services.";

    responses.forEach(({ patterns, response }) => {
      patterns.forEach((pattern) => {
        const score = jaccardSimilarity(userInput, pattern);
        if (score > bestScore) {
          bestScore = score;
          bestResponse = response;
        }
      });
    });

    // Apply threshold
    return bestScore >= 0.2 ? bestResponse : "❓ Sorry, I didn’t quite understand that. Please try again or type 'menu' to see our services.";
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const updatedMessages = [...messages, `User: ${newMessage}`];
      setMessages(updatedMessages);

      const botResponse = `Bot: ${getBotResponse(newMessage)}`;
      setMessages([...updatedMessages, botResponse]);

      setNewMessage('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 sm:right-8">
      {!isOpen && (
        <button
          className="flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-[#45988e] shadow-md transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
          onClick={handleToggle}
        >
          <Image src="/images/chatbot/chatbot-logo.png" alt="Chatbot Logo" width={52} height={52} />
        </button>
      )}
      {isOpen && (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mt-2 mx-auto sm:w-auto w-[300px] h-[380px] sm:h-[450px] flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between bg-[#45988e] text-white py-3 px-4 rounded-t-lg">
            <div className="flex items-center">
              <Image src="/images/chatbot/chatbot-logo.png" alt="Chatbot Logo" width={52} height={52} />
              <span className="ml-2 text-lg sm:text-base font-semibold text-white">Chatbot</span>
            </div>
            <button
              className="flex h-12 w-12 sm:h-10 sm:w-10 cursor-pointer items-center justify-center rounded-full border-2 border-transparent transition duration-300 ease-in-out hover:bg-[#c4cbcb] hover:bg-opacity-10"
              onClick={handleToggle}
            >
              <FiChevronDown className="text-2xl sm:text-xl text-white" />
            </button>
          </div>

          {/* Chat Body */}
          <div ref={chatBodyRef} className="flex-1 p-4 sm:p-2 overflow-y-auto">
            {messages.length === 0 ? (
              <div className="flex items-center justify-center h-full">
                <Image
                  src="/images/chatbot/Chatbot-image.png"
                  alt="Chatbot Logo"
                  width={300}
                  height={300}
                  className="opacity-50 sm:w-3/4 sm:h-3/4"
                />
              </div>
            ) : (
              messages.map((message, index) => {
                const isUser = message.startsWith('User:');
                return (
                  <div key={index} className={`flex ${isUser ? 'justify-start' : 'justify-end'} mb-3`}>
                    {isUser && (
                      <Image
                        src="/images/chatbot/user-image.jpg"
                        alt="User Profile"
                        width={32}
                        height={32}
                        className="rounded-full mr-2 w-8 h-8 flex-shrink-0"
                      />
                    )}
                    <div
                      className={`p-2 rounded-lg max-w-xs break-words ${
                        isUser ? 'bg-gray-200 text-blue-800' : 'bg-blue-500 text-white'
                      }`}
                    >
                      {message.replace('User: ', '').replace('Bot: ', '')}
                    </div>
                    {!isUser && (
                      <Image
                        src="/images/chatbot/bot-image.png"
                        alt="Bot Profile"
                        width={32}
                        height={32}
                        className="rounded-full mr-2 w-8 h-8 flex-shrink-0"
                      />
                    )}
                  </div>
                );
              })
            )}
          </div>

          {/* Input */}
          <div className="border-t px-2 sm:px-4 py-2 sm:py-3 flex items-center bg-gray-100">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type a message..."
              className="flex-1 px-4 py-2 sm:py-1 border rounded-lg mr-2"
            />
            <button onClick={handleSendMessage} className="bg-[#45988e] text-white p-2 sm:p-1 rounded-full">
              <FiSend />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
