import { kschema } from "../src/v18/index.js";
import configJson from './config.json' with { type: 'json' };

export default function loadConfig() {
    kschema.loadConfig(configJson);
};