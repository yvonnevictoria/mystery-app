import { graphql, loadQuery, usePreloadedQuery } from "react-relay";
import Query, { MealsDetailsQuery } from "./__generated__/MealsDetailsQuery.graphql";
import RelayEnvironment from "../../RelayEnvironment";
import "./Meals.css";

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

  // Update this to retrieve next meal instead of mapping
  // store index of currently chosen and how far we've gotten through list of meals
  return result.randomMeals.map( meal =>
    <div>
      <p>{meal.name}</p>
      <img className="meal-image" src={meal.image} />
    </div>
    
  );
}

export { Meals };