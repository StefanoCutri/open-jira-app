import mongoose from "mongoose";

const mongoConnection = {
  isConnected: 0,
};

export const connect = async () => {
  if (mongoConnection.isConnected) {
    console.log("Connected");
    return;
  }

  if (mongoose.connections.length > 0) {
    mongoConnection.isConnected = mongoose.connections[0].readyState;

    if (mongoConnection.isConnected === 1) {
      console.log("Using prev connection");
      return;
    }

    await mongoose.disconnect();
  }

  await mongoose.connect("...");
  mongoConnection.isConnected = 1;
  console.log("Conected to monogDb");
};

export const disconnect = async () => {
  if (mongoConnection.isConnected !== 0) return;
  await mongoose.disconnect();
  console.log("Disconnected");
};
