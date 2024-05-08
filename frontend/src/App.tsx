import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LeafletMap from "./components/LeafletMap";
import { useState } from "react";
import FormInput from "./components/FormInput";

const queryClient = new QueryClient();

function App() {
  const [nip, setNip] = useState("");
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div>Telkom movements nip: </div>
        <FormInput nip={nip} setNip={setNip} />
        <LeafletMap nip={nip} />
      </QueryClientProvider>
    </>
  );
}

export default App;
