const get = (query, tableName) => () =>
    query.get({ table: tableName });

const findByPk = (query, tableName) => (id) =>
    query.findByPk({ table: tableName, id });

const buildQuery = (query, tableName) => ({
    get: get(query, tableName),
    findByPk: findByPk(query, tableName)
});

export default buildQuery;