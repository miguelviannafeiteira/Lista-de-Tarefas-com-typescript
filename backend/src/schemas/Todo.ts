import mongoose, { Document } from 'mongoose'

interface TodoInterface extends Document {
  _id: string,
  name:string,
  complete:boolean
}

const todoSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  complete: {
    type: Boolean,
    default: false
  }
})

export default mongoose.model<TodoInterface>('Todo', todoSchema)
