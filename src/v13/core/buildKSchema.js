// src/v13/core/buildKSchema.js

import schemaMeta from "../schema/schema.json" with { type: "json" };

import * as query from "../engine/query/index.js";
import * as mutate from "../engine/mutate/index.js";

import buildMutate from "../helpers/buildMutate.js";
import buildQuery from "../helpers/buildQuery.js";

export const buildKSchema = () => ({
    table: (tableName) => ({
        query: Object.assign(
            {},
            schemaMeta.query,
            buildQuery(query, tableName)
        ),
        mutate: Object.assign(
            {},
            schemaMeta.mutate,
            buildMutate(mutate, tableName)
        )
    })
});