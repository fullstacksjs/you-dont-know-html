"use client";

import { createBrowserSupabaseClient } from "@/lib/supabase/createBrowserClient";
import { useState } from "react";

export default function TestPage() {
  const supabase = createBrowserSupabaseClient();
  const [data, setData] = useState<any[] | null>([]);

  const fetchData = async () => {
    const { data: games, error } = await supabase.from("game").select("*");
    setData(games);
  };

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
      <hr />
      {JSON.stringify(data)}
    </div>
  );
}
