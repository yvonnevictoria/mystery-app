/**
 * @generated SignedSource<<b4507f67648415a43aa25d17a109fa93>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type MealsDetailsQuery$variables = {};
export type MealsDetailsQuery$data = {
  readonly randomMeals: ReadonlyArray<{
    readonly description: string | null;
    readonly id: string | null;
    readonly image: string | null;
    readonly name: string | null;
  } | null> | null;
};
export type MealsDetailsQuery = {
  response: MealsDetailsQuery$data;
  variables: MealsDetailsQuery$variables;
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
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "image",
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
    "name": "MealsDetailsQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "MealsDetailsQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "0e093c4ab6f51e3b2ab4b7ec1ed3755c",
    "id": null,
    "metadata": {},
    "name": "MealsDetailsQuery",
    "operationKind": "query",
    "text": "query MealsDetailsQuery {\n  randomMeals {\n    description\n    id\n    name\n    image\n  }\n}\n"
  }
};
})();

(node as any).hash = "a5996c8e9d70636ca372bbd59ba4cff6";

export default node;
