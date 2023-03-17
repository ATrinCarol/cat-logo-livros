import mongoose, {Schema} from 'mongoose';

const livrosSchema = new Schema ({
    titulo: {type: String, required: true},
    autor: {type: String, required: true},
    ano: {type: Number, required: true},
    editora: {type: String, required: true}
});

export const livrosModel = (mongoose.models.livro || mongoose.model('livro', livrosSchema));