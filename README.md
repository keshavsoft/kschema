# @keshavsoft/kschema

A lightweight schema-driven JSON database for Node.js.

---

## 🚀 Installation

npm install @keshavsoft/kschema

---

## 📦 Usage

import { kschema } from "@keshavsoft/kschema";

kschema.loadConfig({ dataPath: "./data" });

kschema.table("users").insert({ name: "keshav" });

const data = kschema.table("users").get();

console.log(data);

---

## 🔍 Find by Primary Key

kschema.table("users").findByPk(1);

---

## ✏️ Update

kschema.table("users").update(1, { name: "updated" });

---

## ❌ Delete

kschema.table("users").delete(1);

---

## ⚠️ Notes

* Data stored in JSON files
* Primary key is auto-generated
* Call `loadConfig` before usage

---

## 👨‍💻 Author

KeshavSoft
