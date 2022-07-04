import gamesData from '../../../mock-data/games';

export default function handler(req, res) {
  res.status(200).json(gamesData.content);
}