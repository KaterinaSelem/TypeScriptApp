import {
  AnimalCardWrapper,
  AnimalImage,
  CardContent,
  CardTitle,
} from './styles';
import { AnimalCardProps } from './types';

function AnimalCard({ animalData }: AnimalCardProps) {
  return (
    <AnimalCardWrapper>
      <CardTitle>{animalData.name}</CardTitle>
      <CardContent>{animalData.species}</CardContent>
      <AnimalImage src={animalData.image} />
    </AnimalCardWrapper>
  );
}

export default AnimalCard;
