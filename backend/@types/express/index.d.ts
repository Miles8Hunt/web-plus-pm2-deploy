import { ObjectId } from 'mongoose';

declare global{
    namespace Express {
        interface Request {
            user: { _id: string }
        }
    }
}

export function Router() {
  throw new Error('Function not implemented.');
}
