import Link from "next/link";
import styled from "styled-components";
import { StyledImage } from "./StyledImage";
import useSWR from "swr";

const Article = styled.article`
  border: 1px solid black;
  border-radius: 0.8rem;
  padding: 0.5rem;
`;

const ImageContainer = styled.div`
  position: relative;
  height: 10rem;
  margin-bottom: 20px;
`;

const Figure = styled.figure`
  color: black;
  position: relative;
  margin: 0;
  padding: 0;
  line-height: 0.2rem;
`;

export default function Card({ name, image, location, id }) {
  const { data, isLoading } = useSWR("/api/places");
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (!data) {
    return;
  }

  // {data.map((place) => () )}

  return (
    <Article>
      <Link href={`places/${id}`}>
        <Figure>
          <ImageContainer>
            <StyledImage
              src={image}
              fill
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              alt=""
            />
          </ImageContainer>
          <figcaption>
            <strong>{name}</strong>
          </figcaption>
          <p>{location}</p>
        </Figure>
      </Link>
    </Article>
  );
}
