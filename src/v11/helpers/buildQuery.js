import * as aggregate from "../engine/query/aggregate/index.js";

const get = (query, tableName) => () =>
    query.get({ table: tableName });

const findByPk = (query, tableName) => (id) =>
    query.findByPk({ table: tableName, id });

const buildQuery = (query, tableName) => ({
    findAll: get(query, tableName),
    findByPk: findByPk(query, tableName),

    aggregate: {
        count: (column) =>
            query.aggregate.count({ table: tableName })
    }
});

export default buildQuery;
