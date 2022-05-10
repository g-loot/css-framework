import valorantBrawls from '../../../mock-data/brawls-valorant';

export default function handler(req, res) {
  res.status(200).json(valorantBrawls.content);
}
