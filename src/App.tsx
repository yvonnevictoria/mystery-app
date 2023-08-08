import { graphql, loadQuery, useLazyLoadQuery, usePreloadedQuery } from "react-relay";
import Query, { AppMealDetailsQuery } from "./__generated__/AppMealDetailsQuery.graphql";
import RelayEnvironment from "./RelayEnvironment";

const queryRef = loadQuery(RelayEnvironment, Query, {})

export function App() {
  const result = usePreloadedQuery<AppMealDetailsQuery>(graphql`
    query AppMealDetailsQuery {
      randomMeals {
        description
        id
        name
      }
    }
  `, queryRef)

  return result.randomMeals.map( meal =>
    <p>{meal.name}</p>
  );
}