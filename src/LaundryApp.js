import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://tbgenigqavoycrlqigbw.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRiZ2VuaWdxYXZveWNybHFpZ2J3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA3MjMyOTAsImV4cCI6MjA1NjI5OTI5MH0.AEQzPo0xcWSOG_PzT42c0iGyHnKp9qZf_ADMCxMiPok"

console.log("Supabase URL:", process.env.REACT_APP_SUPABASE_URL);
console.log("Supabase Key:", process.env.REACT_APP_SUPABASE_ANON_KEY);

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Supabase environment variables are missing.");
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const LaundryApp = () => {
  const [services, setServices] = useState([]);
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    let { data, error } = await supabase.from("services").select("*");
    if (error) console.error(error);
    else setServices(data);
  };

  const signIn = async () => {
    const { user, error } = await supabase.auth.signInWithOAuth({ provider: "google" });
    if (!error) setUser(user);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="p-4 bg-blue-600 text-white text-center text-xl font-bold">
        Express Laundry Service
      </header>
      <div className="container mx-auto p-4">
        {!user ? (
          <button onClick={signIn} className="bg-blue-500 text-white px-4 py-2 rounded-lg">
            Sign in with Google
          </button>
        ) : (
          <p>Welcome, {user.email}</p>
        )}
        <h2 className="text-2xl font-semibold mt-4">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {services.map((service) => (
            <div key={service.id} className="bg-white p-4 shadow rounded-lg">
              <img src={service.image_url} alt={service.name} className="w-full h-40 object-cover rounded-lg" />
              <h3 className="text-lg font-semibold mt-2">{service.name}</h3>
              <p className="text-gray-600">{service.description}</p>
              <p className="font-bold text-blue-600 mt-2">₹{service.price}</p>
            </div>
          ))}
        </div>
        <footer className="mt-10 p-4 bg-gray-800 text-white text-center">
          Contact: +91 98765 43210 | Address: 123 Street, Your City
        </footer>
      </div>
    </div>
  );
};

export default LaundryApp;
