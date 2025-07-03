import React, { useState } from "react";
import axios from "axios";
import { db } from "../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";

function StrainSearch({ user }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const searchStrains = async () => {
    try {
      const response = await axios.get(
        `https://api.otreeba.com/v1/strains/search?q=${query}`
      );
      setResults(response.data.data);
    } catch (err) {
      console.error("API error", err);
    }
  };

  const saveStrain = async (strain) => {
    if (!user) return alert("Login to save strains!");
    try {
      await addDoc(collection(db, "users", user.uid, "favorites"), {
        name: strain.name,
        race: strain.race,
        description: strain.desc || "No description",
      });
      alert("Strain saved!");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a strain..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={searchStrains}>Search</button>
      <div className="card-list">
        {results.map((strain) => (
          <div key={strain.id} className="card">
            <h2>{strain.name}</h2>
            <p>Type: {strain.race}</p>
            <p>{strain.desc || "No description available."}</p>
            <button onClick={() => saveStrain(strain)}>❤️ Save</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StrainSearch;
