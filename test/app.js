import loadConfig from "./configLoader.js";

// import distinct from "../src/v18/processors/query/aggregate/distinct.js";
import { kschema } from "../src/v18/index.js";

import dataJson from './data.json' with { type: 'json' };

const startFunc = () => {
    loadConfig();
    const data = kschema.table("journals").query.findAll();
    const k1 = kschema.table("journals").query.aggregate.distinct("AccountName");

    // const k1 = distinct({ inData: dataJson, column: "AccountName" });
    console.log("k1 : ", k1);
};

startFunc();
