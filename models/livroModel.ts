import mongoose, {Schema} from 'mongoose';

const livroSchema = new Schema ({
    titulo: {type: String, required: true},
    autor: {type: String, required: true},
    ano: {type: Number, required: true},
    editora: {type: String, required: true}
});

export const livroModel = (mongoose.models.livro || mongoose.model('livro', livroSchema));