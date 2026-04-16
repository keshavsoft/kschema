import fs from "fs";
import { getConfig } from "../core/configStore.js";
import { buildDataPath } from "../utils/pathBuilder.js";

export const getData = ({ table }) => {
  const cfg = getConfig();

  const path = buildDataPath(cfg, table);

  const data = fs.readFileSync(path);

  return JSON.parse(data);
};