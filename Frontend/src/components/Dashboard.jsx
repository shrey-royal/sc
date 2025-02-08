import React, { useState, useEffect } from "react";
import { Line, Pie } from "react-chartjs-2";
import "chart.js/auto";
import { Link } from "react-router-dom";


// Chatbot logic and UI
const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim()) {
      const newMessage = {
        text: input,
        sender: "user",
      };
      setMessages([...messages, newMessage]);
      setInput("");

      // Simulate chatbot response
      setTimeout(() => {
        const botResponse = {
          text: "Hello! How can I help you today?",
          sender: "bot",
        };
        setMessages((prevMessages) => [...prevMessages, botResponse]);
      }, 1000);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 p-4 rounded shadow-lg">
      <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Chatbot</h3>
      <div className="h-64 overflow-auto mb-4 p-2 border border-gray-300 rounded dark:border-gray-700">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-2 ${message.sender === "user" ? "text-right" : "text-left"}`}
          >
            <p className={message.sender === "user" ? "font-bold text-blue-600" : "text-gray-700 dark:text-white"}>
              {message.text}
            </p>
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          placeholder="Type a message..."
        />
        <button
          onClick={handleSendMessage}
          className="ml-2 p-2 bg-blue-600 text-white rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
};

const Dashboard = () => {
  // Load theme from localStorage or default to false (light mode)
  const storedTheme = localStorage.getItem("darkMode") === "true";
  const [darkMode, setDarkMode] = useState(storedTheme);

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode);
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    // Apply dark mode or light mode based on the initial value
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className={`h-screen ${darkMode ? "dark" : ""} bg-gray-100 dark:bg-gray-800`}>
      <div className="flex">
        {/* Sidebar */}
        <div className="w-full sm:w-1/5 bg-white dark:bg-gray-900 p-5 shadow-lg">
          <a href="/">
            <h2 className="text-xl font-bold mb-5 text-gray-900 dark:text-white">CODINGVERSE</h2>
          </a>
          <ul className="space-y-4 text-gray-800 dark:text-white">
            <li className="text-blue-600 font-semibold">Dashboard</li>
            <li>Overview</li>
            <li><Link to="/course">Courses</Link></li>
            <li>Students</li>
            <li>Exams</li>
            <li>Results</li>
            <li>IDE</li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-5 overflow-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card title="Total Students" count={1220} color="blue" />
            <Card title="Total Teachers" count={120} color="red" />
            <Card title="Total Courses" count={12} color="cyan" />
            <Card title="Faculty Room" count={100} color="orange" />
          </div>
          
          {/* Charts & Leaderboard */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <div className="bg-white dark:bg-gray-900 p-4 rounded shadow-lg">
              <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Statistics</h3>
              <Line data={chartData} />
            </div>
            <div className="bg-white dark:bg-gray-900 p-4 rounded shadow-lg">
              <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Course Activities</h3>
              <Pie data={pieData} />
            </div>
          </div>

          {/* Leaderboard */}
          <div className="mt-6 bg-white dark:bg-gray-900 p-4 rounded shadow-lg">
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Leaderboard</h3>
            <table className="w-full text-left text-gray-800 dark:text-white">
              <thead>
                <tr className="border-b">
                  <th>Name</th>
                  <th>Score</th>
                  <th>Grade</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b"><td>Gavin Maxwell</td><td>80</td><td>Excellent</td></tr>
                <tr className="border-b"><td>Carlie Henson</td><td>75</td><td>Average</td></tr>
                <tr className="border-b"><td>Yodder Gil</td><td>60</td><td>Poor</td></tr>
                <tr className="border-b"><td>Preeth Singh</td><td>90</td><td>Excellent</td></tr>
              </tbody>
            </table>
          </div>
          
          {/* Chatbot */}
          <div className="mt-6">
            <ChatBot />
          </div>
        </div>
      </div>

      {/* Dark Mode Toggle Button */}
      <button
        onClick={toggleDarkMode}
        className="fixed bottom-5 left-5 p-3 rounded-full bg-gray-800 text-white dark:bg-gray-200 dark:text-gray-800 shadow-lg">
        {darkMode ? "🌞" : "🌙"}
      </button>
    </div>
  );
};

const Card = ({ title, count, color }) => (
  <div className={`p-4 bg-${color}-100 text-${color}-800 dark:bg-${color}-800 dark:text-${color}-200 rounded shadow-lg`}>
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-2xl font-bold">{count}</p>
  </div>
);

const chartData = {
  labels: ["2017", "2018", "2019", "2020", "2021"],
  datasets: [
    {
      label: "Students",
      data: [500, 600, 700, 800, 900],
      borderColor: "#3498db",
      fill: false,
    },
  ],
};

const pieData = {
  labels: ["Process", "In Process"],
  datasets: [
    {
      data: [75, 25],
      backgroundColor: ["#2ecc71", "#e74c3c"],
    },
  ],
};

export default Dashboard;
