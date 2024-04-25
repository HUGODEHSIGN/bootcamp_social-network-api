import mongoose from 'mongoose';
import 'dotenv/config';

mongoose.connect(process.env.MONGOOSE_CONNECTION_STRING);

export default mongoose.connection;
