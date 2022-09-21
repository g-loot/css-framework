import { Match, SVGViewer, SingleEliminationBracket } from '@g-loot/react-tournament-brackets';

import matches from "./brackets.json";

export default function ValorantClashBrackets(props) {
  return (
    <>
    qsdqsd
    <SingleEliminationBracket
    matches={matches}
    matchComponent={Match}
    svgWrapper={({ children, ...props }) => (
      <SVGViewer width={500} height={500} {...props}>
        {children}
      </SVGViewer>
    )}
  />
    </>
  );
}
