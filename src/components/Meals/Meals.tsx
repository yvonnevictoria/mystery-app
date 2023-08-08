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

  return result.randomMeals.map( meal =>
    <div>
      <p>{meal.name}</p>
      <img className="meal-image" src={meal.image} />
    </div>
    
  );
}

export { Meals };