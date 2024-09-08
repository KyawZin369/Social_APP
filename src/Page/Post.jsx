import { Box } from "@mui/material";
import Item from "../components/Item";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

const api = "http://localhost:8000/posts";

async function fetchPost(id) {
  const res = await fetch(`${api}/${id}`);
  return res.json();
}

export default function App() {
  const { id } = useParams();

  const { data, isLoading } = useQuery(['post', id], ()=>fetchPost(id))

  const remove = (id) => {
    fetch(`${api}/${id}`, { method: "DELETE" });
    setPost(data.filter((item) => item.id !== id));
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Box>
        <Item key={data.id} item={data} remove={remove} />
    </Box>
  );
}
