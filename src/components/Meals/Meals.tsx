import { graphql, loadQuery, usePreloadedQuery } from "react-relay";
import Query, { MealsDetailsQuery } from "./__generated__/MealsDetailsQuery.graphql";
import RelayEnvironment from "../../RelayEnvironment";

const queryRef = loadQuery(RelayEnvironment, Query, {})

const Meals = () => {
  const result = usePreloadedQuery<MealsDetailsQuery>(graphql`
    query MealsDetailsQuery {
      randomMeals {
        description
        id
        name
        image
      }
    }
  `, queryRef)

  return result.randomMeals.map( meal =>
    <div>
      <p>{meal.name}</p>
      <img src={meal.image} />
    </div>
    
  );
  // return <p>test</p>
}

export { Meals };