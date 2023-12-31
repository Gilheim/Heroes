import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HeroCard } from "../../components";

export default function HeroPage() {
  const { id } = useParams();
  const [show, setShow] = useState([]);

  useEffect(() => {
    async function displayShow() {
      const response = await fetch(`https://superheroapi.com/api/243602908490010/${id}`);
      const data = await response.json();
      setShow(data);
    }
    displayShow();
  }, []);

  return <ShowCard show={show}/>;
}
