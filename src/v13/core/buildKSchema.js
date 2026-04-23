// src/v13/core/buildKSchema.js

import schemaMeta from "../schema/schema.json" with { type: "json" };

import * as query from "../engine/query/index.js";
import * as mutate from "../engine/mutate/index.js";

import buildMutate from "../helpers/buildMutate.js";
import buildQuery from "../helpers/buildQuery.js";

/**
 * @typedef {Object} QueryAPI
 * @property {Function} findAll
 * @property {Function} findByPk
 * @property {Function} filterByPk
 * @property {Function} filterByColumns
 * @property {{ count: Function }} aggregate
 */

/**
 * @typedef {Object} MutateAPI
 * @property {Function} insertAsIs
 * @property {Function} insertFlat
 * @property {Function} insertGenPk
 * @property {Function} insertWithChecks
 * @property {Function} deleteWithChecks
 * @property {Function} updateWithChecks
 */

/**
 * @typedef {Object} TableAPI
 * @property {QueryAPI} query
 * @property {MutateAPI} mutate
 */

/**
 * @returns {{ table: (tableName: string) => TableAPI }}
 */
export const buildKSchema = () => ({
    table: (tableName) => ({
        query: Object.assign({}, schemaMeta.query, buildQuery(query, tableName)),
        mutate: Object.assign({}, schemaMeta.mutate, buildMutate(mutate, tableName))
    })
});