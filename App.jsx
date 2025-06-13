import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "<SUPABASE-PROJECT-URL>";
const SUPABASE_KEY = "<SUPABASE-API-KEY>";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

function AntriansApp() {
  const [number, setNumber] = useState(null);

  async function ambilAntrian() {
    let { data: last, error: lastError } = await supabase
      .from("queue")
      .select("*")
      .order("number", { ascending: false })
      .limit(1)
      .single();

    if (lastError && lastError.code !== "PGRST204") {
      console.error(lastError);
      return;
    }

    const newNumber = last ? last.number + 1 : 1;

    const { data, error } = await supabase.from("queue").insert([
      { number: newNumber },
    ]);
    if (error) console.error(error);
    else setNumber(newNumber);
  }

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Anpat App</h1>
      <p>Tekan tombol di bawah untuk mengambil nomor antrian</p>
      <button onClick={ambilAntrian}>
        Ambil Antrian
      </button>

      {number && <h2>Nomor Antrian Anda: {number}</h2>}
    </div>
  );
}

export default AntriansApp;

