import { graphql, useLazyLoadQuery } from "react-relay";
import { AppMealDetailsQuery } from "./__generated__/AppMealDetailsQuery.graphql";

export function App() {
  const result = useLazyLoadQuery<AppMealDetailsQuery>(graphql`
    query AppMealDetailsQuery {
      firstMeal: mealById(id:"meal-1") {
        id
        name
        description
      }
      secondMeal: mealById(id: "meal-2") {
        id
        name
      }
      thirdMeal: mealById(id: "meal-123") {
        id
        name
        description
      }
    }
  `, {})
  return <h1>{result.firstMeal.name}</h1>;
}