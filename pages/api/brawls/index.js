import valorantLadders from '../../../mock-data/ladders-valorant';

export default function handler(req, res) {
  res.status(200).json(valorantLadders.content);
}
