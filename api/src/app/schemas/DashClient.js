import mongoose from 'mongoose';

const DashClientSchema = new mongoose.Schema(
  {
    file: {
      type: Object,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('DataClient', DashClientSchema);
