/**
 * @generated SignedSource<<9311006f88a3ab1b9c6e5aaa405b1476>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type AppMealDetailsQuery$variables = {};
export type AppMealDetailsQuery$data = {
  readonly firstMeal: {
    readonly description: string | null;
    readonly id: string | null;
    readonly name: string | null;
  } | null;
  readonly secondMeal: {
    readonly id: string | null;
    readonly name: string | null;
  } | null;
  readonly thirdMeal: {
    readonly description: string | null;
    readonly id: string | null;
    readonly name: string | null;
  } | null;
};
export type AppMealDetailsQuery = {
  response: AppMealDetailsQuery$data;
  variables: AppMealDetailsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v2 = [
  (v0/*: any*/),
  (v1/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "description",
    "storageKey": null
  }
],
v3 = [
  {
    "alias": "firstMeal",
    "args": [
      {
        "kind": "Literal",
        "name": "id",
        "value": "meal-1"
      }
    ],
    "concreteType": "Meal",
    "kind": "LinkedField",
    "name": "mealById",
    "plural": false,
    "selections": (v2/*: any*/),
    "storageKey": "mealById(id:\"meal-1\")"
  },
  {
    "alias": "secondMeal",
    "args": [
      {
        "kind": "Literal",
        "name": "id",
        "value": "meal-2"
      }
    ],
    "concreteType": "Meal",
    "kind": "LinkedField",
    "name": "mealById",
    "plural": false,
    "selections": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "storageKey": "mealById(id:\"meal-2\")"
  },
  {
    "alias": "thirdMeal",
    "args": [
      {
        "kind": "Literal",
        "name": "id",
        "value": "meal-123"
      }
    ],
    "concreteType": "Meal",
    "kind": "LinkedField",
    "name": "mealById",
    "plural": false,
    "selections": (v2/*: any*/),
    "storageKey": "mealById(id:\"meal-123\")"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppMealDetailsQuery",
    "selections": (v3/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppMealDetailsQuery",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "e3f1925f83abfeb739f668752e23c782",
    "id": null,
    "metadata": {},
    "name": "AppMealDetailsQuery",
    "operationKind": "query",
    "text": "query AppMealDetailsQuery {\n  firstMeal: mealById(id: \"meal-1\") {\n    id\n    name\n    description\n  }\n  secondMeal: mealById(id: \"meal-2\") {\n    id\n    name\n  }\n  thirdMeal: mealById(id: \"meal-123\") {\n    id\n    name\n    description\n  }\n}\n"
  }
};
})();

(node as any).hash = "b4267d36866f59c4578ff11b70bbd070";

export default node;
