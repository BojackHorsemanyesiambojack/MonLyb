import * as z from 'zod';

export const formSchema = z.object({
    name:z.string().min(2, {message:'that is too short'}),
    username: z.string().min(2, {message:'Too short my little friend'}),
    email: z.string().email(),
    password: z.string().min(8, {message:'Maybe you have to think of something longer...'})
});