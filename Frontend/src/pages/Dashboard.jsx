import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const rows = [
    { id: 1, name: "Michael Holz", date: "04/10/2013", role: "Admin", status: "Active", img: "https://i.pravatar.cc/150?img=11" },
    { id: 2, name: "Paula Wilson", date: "05/08/2014", role: "Publisher", status: "Active", img: "https://i.pravatar.cc/150?img=5" },
    { id: 3, name: "Antonio Moreno", date: "11/05/2015", role: "Publisher", status: "Suspended", img: "https://i.pravatar.cc/150?img=13" },
    { id: 4, name: "Mary Saveley", date: "06/09/2016", role: "Reviewer", status: "Active", img: "https://i.pravatar.cc/150?img=9" },
    { id: 5, name: "Martin Sommer", date: "12/08/2017", role: "Moderator", status: "Inactive", img: "https://i.pravatar.cc/150?img=3" },
  ];

  const getStatusStyles = (status) => {
    if (status === "Active") return "bg-green-100 text-green-700 ring-green-500/30";
    if (status === "Suspended") return "bg-red-100 text-red-700 ring-red-500/30";
    return "bg-yellow-100 text-yellow-700 ring-yellow-500/30";
  };

  const getStatusDotColor = (status) => {
    if (status === "Active") return "bg-green-500";
    if (status === "Suspended") return "bg-red-500";
    return "bg-yellow-500";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 p-6 md:p-12 font-sans text-slate-800">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-10 gap-6">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight text-purple-800 drop-shadow-md bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-700">
            Dashboard
          </h1>
          <p className="mt-1 text-purple-600/70 text-sm">Overview of your team members</p>
        </div>

        {user && (
          <div className="flex items-center gap-4 bg-white/30 backdrop-blur-md p-2 pr-6 rounded-3xl shadow-lg border border-purple-100 hover:shadow-2xl transition-all">
            <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-md">
              {user.name.charAt(0).toUpperCase()}
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-purple-400 font-medium">Welcome back,</span>
              <span className="text-sm font-bold text-purple-800">{user.name}</span>
            </div>
            <div className="h-8 w-px bg-purple-200/60 mx-2"></div>
            <button 
              onClick={handleLogout}
              className="text-sm font-semibold text-white bg-pink-500 hover:bg-pink-600 px-4 py-1 rounded-xl transition-all shadow-md"
            >
              Logout
            </button>
          </div>
        )}
      </div>

      {/* Table Card */}
      <div className="bg-white/40 backdrop-blur-lg shadow-2xl rounded-3xl overflow-hidden border border-purple-100">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/30 backdrop-blur-md border-b border-purple-200">
                {["#", "Name", "Date Created", "Role", "Status", "Action"].map((col, i) => (
                  <th key={i} className="p-5 text-xs font-bold text-purple-500 uppercase tracking-wider">{col}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-purple-100">
              {rows.map((row) => (
                <tr key={row.id} className="hover:bg-white/30 hover:backdrop-blur-sm transition duration-200 group rounded-lg">
                  <td className="p-5 text-purple-500 font-medium text-sm">{row.id}</td>

                  <td className="p-5">
                    <div className="flex items-center gap-4">
                      <img 
                        src={row.img} 
                        alt={row.name} 
                        className="h-12 w-12 rounded-full object-cover border-2 border-white shadow-md group-hover:scale-110 transition-transform duration-300" 
                      />
                      <span className="text-purple-800 font-semibold text-sm">{row.name}</span>
                    </div>
                  </td>

                  <td className="p-5 text-purple-500 text-sm font-medium">{row.date}</td>
                  <td className="p-5 text-purple-500 text-sm font-medium">{row.role}</td>

                  <td className="p-5">
                    <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold ring-1 ring-inset ${getStatusStyles(row.status)}`}>
                        <span className={`h-2 w-2 rounded-full ${getStatusDotColor(row.status)}`}></span>
                        {row.status}
                    </span>
                  </td>

                  <td className="p-5 text-right">
                    <div className="flex items-center justify-end gap-3">
                      <button className="p-2 text-blue-400 hover:text-white hover:bg-blue-500 rounded-full transition-all duration-300 shadow-sm hover:shadow-lg">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                          </svg>
                      </button>
                      <button className="p-2 text-rose-400 hover:text-white hover:bg-rose-500 rounded-full transition-all duration-300 shadow-sm hover:shadow-lg">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                          </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-end mt-8">
        <nav className="flex items-center gap-1 bg-white/40 backdrop-blur-md p-1 rounded-xl shadow-lg border border-purple-200">
          <button className="p-2 text-purple-400 hover:text-pink-500 hover:bg-pink-50 rounded-lg transition-all">
             <span className="text-xs font-bold">Prev</span>
          </button>
          
          {[1,2,3,4].map((num) => (
            <button
              key={num}
              className={`h-8 w-8 flex items-center justify-center text-sm font-medium rounded-lg ${
                num === 3 
                  ? "bg-pink-500 text-white font-bold shadow-md shadow-pink-200"
                  : "text-purple-500 hover:bg-purple-50 transition-colors"
              }`}
            >
              {num}
            </button>
          ))}

          <button className="p-2 text-purple-400 hover:text-pink-500 hover:bg-pink-50 rounded-lg transition-all">
             <span className="text-xs font-bold">Next</span>
          </button>
        </nav>
      </div>
    </div>
  );
}
