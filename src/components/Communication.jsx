const [message, setMessage] = useState("");
const [messages, setMessages] = useState([]);

const sendMessage = () => {
  if (!message.trim()) return;

  setMessages((current) => [
    ...current,
    {
      sender: "Suruthi",
      text: message,
    },
  ]);

  setMessage("");
};
