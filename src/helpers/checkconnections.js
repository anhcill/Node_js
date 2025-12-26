// const mongoose = require("mongoose");
const os = require("os");

const SECONDS = 5000;

// đếm số connection hiện tại
const countConnection = () => {
  const num = mongoose.connections.length;
  console.log(`Number connections: ${num}`);
  return num;
};

// check overload
const checkOverload = () => {
  setInterval(() => {
    const connections = countConnection();
    const numCores = os.cpus().length;
    const memoryUsage = process.memoryUsage().rss;

    const maxConnections = numCores * 5;

    if (connections > maxConnections) {
      console.log("⚠️ Hệ thống quá tải!");
    }

    console.log(`RAM used: ${(memoryUsage / 1024 / 1024).toFixed(2)} MB`);
  }, SECONDS);
};

module.exports = {
  countConnection,
  checkOverload,
};
