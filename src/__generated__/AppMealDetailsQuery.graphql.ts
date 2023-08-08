/**
 * @generated SignedSource<<5319b9e4ba6b329223b61060c029a3cd>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type AppMealDetailsQuery$variables = {};
export type AppMealDetailsQuery$data = {
  readonly randomMeals: ReadonlyArray<{
    readonly description: string | null;
    readonly id: string | null;
    readonly name: string | null;
  } | null> | null;
};
export type AppMealDetailsQuery = {
  response: AppMealDetailsQuery$data;
  variables: AppMealDetailsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Meal",
    "kind": "LinkedField",
    "name": "randomMeals",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "description",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppMealDetailsQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppMealDetailsQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "fe82e5a518d37b6c654c9d21880679e6",
    "id": null,
    "metadata": {},
    "name": "AppMealDetailsQuery",
    "operationKind": "query",
    "text": "query AppMealDetailsQuery {\n  randomMeals {\n    description\n    id\n    name\n  }\n}\n"
  }
};
})();

(node as any).hash = "8574a1ff0fc26c08ba984149da7e290b";

export default node;
