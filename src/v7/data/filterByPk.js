import fs from "fs";

import { getConfig } from "../../core/configStore.js";
import { buildDataPath } from "../../utils/pathBuilder.js";
import { getPrimaryKey } from "../helpers/pkHelper.js";
import { getSchema } from "../config/getSchema.js";

export const filterByPkData = ({ table, id }) => {
  const cfg = getConfig();
  const schema = getSchema(table);
  const pk = getPrimaryKey(schema.columns);

  const path = buildDataPath(cfg, table);
  const data = JSON.parse(fs.readFileSync(path, "utf-8"));

  return data.filter(row => row[pk] === parseInt(id)) || [];
};